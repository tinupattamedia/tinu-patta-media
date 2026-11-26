// Service worker sederhana agar website OSC bisa dipasang sebagai aplikasi
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => new Response('<h1>OSC</h1><p>Tidak ada koneksi internet / No internet connection.</p>', {headers: {'Content-Type': 'text/html; charset=utf-8'}})));
  }
});
