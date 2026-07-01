/* Service Worker – cho phép mở app khi không có mạng (offline).
   - Trang HTML: ưu tiên lấy bản mới trên mạng (để cập nhật danh sách khi có
     mạng), không có mạng thì dùng bản đã lưu.
   - Thư viện/icon: dùng bản đã lưu trước cho nhanh, chưa có thì tải về rồi lưu.
*/
const CACHE = "diemdanh-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./vendor/xlsx.full.min.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  const isHTML = req.mode === "navigate" ||
                 url.pathname.endsWith("/") ||
                 url.pathname.endsWith("index.html");

  if (isHTML) {
    // network-first
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return r;
      }).catch(() => caches.match(req).then(m => m || caches.match("./index.html")))
    );
  } else {
    // cache-first
    e.respondWith(
      caches.match(req).then(m => m || fetch(req).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return r;
      }))
    );
  }
});
