# SPIN-18 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

## 2026-11-13
- **Varyant adlandırma:** Çiçek banner'ı için `hero--orange` sınıfı verildi ama CSS kuralı yazılmadı; turuncu-pembe gradyan temel `.hero` kuralında kaldı. Böylece mevcut banner'ın görünümü değişmiyor. Reddedilen seçenek: gradyanı `.hero--orange`'a taşımak (gereksiz değişiklik olurdu).
- **Kompakt stil seçicisi:** Yeni banner'ların küçük ölçüleri `.hero-stack .hero:not(:first-child)` ile verildi, ayrı bir `hero--compact` sınıfı eklenmedi. Yerleşim kuralı dizideki sıraya bağlı; ilk öğe her zaman tam genişlikte.
- **Kampanya alt metinleri ve buton yazıları:** Plan yalnızca başlıkları veriyordu. Bunlar seçildi: Elektronik → "Teknoloji haftası" / "Seçili markalarda hızlı teslimat." / "Elektroniği Keşfet →"; Ev → "Yeni sezon" / "Ev & Yaşam ürünlerinde fırsatlar." / "Ev & Yaşam →".
- **Buton yazı renkleri:** Mavi-mor varyantta `#4338ca`, yeşil varyantta `#047857`. Bu tonlar beyaz zemin üzerinde okunaklı ve kendi gradyanlarıyla uyumlu.
- **Doğrulama portu:** 5173 başka bir süreç tarafından kullanıldığı için tarayıcı kontrolü `vite --port 5180` ile yapıldı. Proje yapılandırması değiştirilmedi.
