/* 存钱本 · Service Worker */
const CACHE = 'savings-book-v1';
const CORE = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function put(req, res) {
  if (res && res.status === 200 && res.type === 'basic') {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
  }
  return res;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  /* 页面导航：联网优先，离线回落缓存 */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => put(req, res))
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  /* 静态资源：先用缓存，同时后台更新 */
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(res => put(req, res)).catch(() => null);
      return hit || net;
    })
  );
});
