# SPIN-101 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

## 19.11.2026 — Lint kontrolünün düşmesi (düzeltme turu)
- **Ne:** Kart kopyasında `npm ci` ile bağımlılıklar `package-lock.json`'a göre kuruldu; kod ya da yapılandırma değiştirilmedi.
- **Neden:** `npm run lint` hatası (`'oxlint' is not recognized`) README değişikliğinden değil, kopyada `node_modules` bulunmamasından kaynaklanıyordu. Kurulumdan sonra lint 0 ile çıkıyor.
- **Reddedilen:** `package.json`'daki lint betiğini `npx oxlint` olarak değiştirmek. Plan README dışındaki dosyalara dokunmayı yasaklıyor, sorun da ortamdan kaynaklanıyordu.
- **Not:** `src/components/Header.tsx:12` içindeki `onQuickBuy` için çıkan uyarı mevcut koddan geliyor, hata değil. Kart kapsamı dışında olduğu için dokunulmadı.
