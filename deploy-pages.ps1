param(
    [string]$Remote = "origin",
    [string]$Branch = "gh-pages",
    [string]$BasePath = "",
    [string]$Message = ""
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

function Invoke-Git {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
    $prev = $ErrorActionPreference
    $ErrorActionPreference = "Continue"
    try {
        $out = & git @GitArgs 2>&1
    } finally {
        $ErrorActionPreference = $prev
    }
    if ($LASTEXITCODE -ne 0) {
        throw ("git " + ($GitArgs -join " ") + " failed (exit $LASTEXITCODE)")
    }
    return ,@($out | ForEach-Object { "$_" })
}

if (-not $Message) {
    $Message = "deploy: {0}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
}

if ($BasePath) {
    $env:NEXT_PUBLIC_BASE_PATH = $BasePath
    Write-Host "==> build with basePath '$BasePath'" -ForegroundColor Cyan
} else {
    Remove-Item Env:\NEXT_PUBLIC_BASE_PATH -ErrorAction SilentlyContinue
    Write-Host "==> build (root path)" -ForegroundColor Cyan
}

npm run build
if ($LASTEXITCODE -ne 0) { throw "npm run build failed" }
if (-not (Test-Path "out\index.html")) { throw "out\index.html not found" }

Write-Host "==> check remote '$Remote'" -ForegroundColor Cyan
try {
    $head = Invoke-Git ls-remote $Remote "refs/heads/$Branch"
} catch {
    throw "cannot reach remote '$Remote': $($_.Exception.Message)"
}

if ($head) {
    Write-Host "==> sync local branch '$Branch' from remote" -ForegroundColor Cyan
    Invoke-Git fetch $Remote $Branch | Out-Null
    Invoke-Git branch -f $Branch "$Remote/$Branch" | Out-Null
} else {
    Write-Host "==> bootstrap orphan branch '$Branch'" -ForegroundColor Cyan
    $emptyTree = "4b825dc642cb6eb9a060e54bf8d69288fbee4904"
    $commit = (Invoke-Git commit-tree $emptyTree -m "pages bootstrap")[0]
    Invoke-Git branch -f $Branch $commit | Out-Null
}

$work = Join-Path ([System.IO.Path]::GetTempPath()) ("syvia-pages-" + [guid]::NewGuid().ToString("N").Substring(0, 8))
Invoke-Git worktree add $work $Branch | Out-Null

try {
    Get-ChildItem $work -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
    Copy-Item "out\*" $work -Recurse -Force

    Push-Location $work
    try {
        Invoke-Git add -A | Out-Null
        $staged = Invoke-Git diff --cached --name-only
        if (-not $staged) {
            Write-Host "==> no changes to deploy" -ForegroundColor Yellow
        } else {
            Invoke-Git commit -m $Message | Out-Null
            Invoke-Git push $Remote $Branch | Out-Null
            Write-Host "==> deployed '$Branch' -> $Remote" -ForegroundColor Green
        }
    } finally {
        Pop-Location
    }
} finally {
    $prev = $ErrorActionPreference
    $ErrorActionPreference = "Continue"
    try { & git worktree remove $work --force 2>$null } catch {}
    & git worktree prune 2>$null
    $ErrorActionPreference = $prev
}

