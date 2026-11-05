// Put It on the Calendar: lets browsers install the page as a laptop app.
// It passes page loads straight to the network and stores nothing.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { if (e.request.mode === 'navigate') e.respondWith(fetch(e.request)); });
