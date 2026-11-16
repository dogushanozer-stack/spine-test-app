# SPIN-21 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

- **2026-11-16 · Adet state'i biçimi:** `Routes`'ta `{ id, quantity } | null` tutuluyor; `selection.id !== route.id` ise adet 1 sayılıyor. `onQuantityChange` güncelleyici fonksiyon yerine düz sayı alıyor (`ProductPage` değeri prop'tan hesaplıyor). Reddedilen: rota değişiminde `useEffect` ile sıfırlamak (fazladan render, kısa süre eski adet görünür).
- **2026-11-16 · Düğme sınıfı:** "Hızlı Al" `<button>`'u hem `header-link` hem `header-quick` sınıfını taşıyor; böylece var olan mobil kural (`.header-link span:not(.header-icon)` gizleme) yeniden yazılmadan ⚡ dışındaki metni gizliyor.
- **2026-11-16 · Duman testi portu:** 5173 başka bir süreçte dolu olduğu için yerel duman testi 5191 portunda yapıldı; plan/kod etkilenmiyor.
