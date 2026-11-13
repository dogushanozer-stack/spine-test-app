<!-- Spine OS pano kartı · SPIN-19 · onay: 13.11.2026 15:03 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-19 · "Footer'a telif yılı ekle"

Sprint: Sprint 1

# Plan: Footer'a güncel telif yılı ekle

## Amaç
Footer'daki telif satırı yılı da göstersin (`© 2026 DoğuşMarket · SpineOS test projesi`). Yıl elle yazılmaz, çalışma anında hesaplanır; böylece her yıl değiştirmek gerekmez.

## Bağlam
- Footer `src/App.tsx:44-49` içinde, `Routes` bileşeninde. Telif metni `src/App.tsx:46`: `<span>© DoğuşMarket · SpineOS test projesi</span>`.
- Stil `src/App.css:797-812` (`.footer`, `.footer-inner`). Stil değişikliği gerekmiyor.
- Projede test altyapısı yok. `package.json` içinde test script'i ya da test kütüphanesi bulunmuyor; yalnızca `lint` ve `build` var.

## Kapsam
- **Yapılacak:**
  - `src/App.tsx` içinde, bileşen dışında modül düzeyinde `const currentYear = new Date().getFullYear()` tanımlanacak.
  - Telif metni `© {currentYear} DoğuşMarket · SpineOS test projesi` olacak.
- **Kapsam dışı:**
  - Footer'ın düzeni ve CSS'i.
  - Sağdaki "Güvenli Alışveriş…" metni.
  - Test altyapısı (Vitest vb.) kurmak.
  - Footer'ı ayrı bir bileşene taşımak.

## Kabul ölçütleri
- Footer'ın sol metni `© <bu yıl> DoğuşMarket · SpineOS test projesi` biçiminde olur. Bugün bu `© 2026 DoğuşMarket · SpineOS test projesi` demektir.
- Yıl kodda sabit yazılmaz; farkta `new Date().getFullYear()` görünür.
- Footer'daki diğer metin ve sınıflar değişmez; fark yalnızca `src/App.tsx` içinde olur.

## Elle doğrulama
Yok

## Arayüz denemesi
- **Platform:** Web (masaüstü tarayıcı). Açma komutu: `npm run dev`.
1. Ana sayfayı (`/`) aç ve sayfanın en altına kaydır. Beklenen: footer'ın solunda `© 2026 DoğuşMarket · SpineOS test projesi`, sağında `Güvenli Alışveriş · Kolay İade · 7/24 Destek` yazar. İki metin aynı satırdadır ve eskisi gibi iki uca yaslanır.
2. Pencereyi 860px'in altına daralt. Beklenen: metinler `flex-wrap` ile alt alta kayar, yıl kesilmez ve taşma olmaz.
3. Sepet sayfasına geç. Beklenen: aynı footer aynı yılla görünür. Footer tüm sayfalarda ortak olduğu için tek kontrol yeter.

## Test ortamı
Vite geliştirme sunucusu — `npm run dev` (bitmeyen komut) — terminalde `Local: http://localhost:5173/` satırı görünür ve adres tarayıcıda açılır.

## Adımlar
1. Modül düzeyine `const currentYear = new Date().getFullYear()` ekle ve telif metnini `© {currentYear} DoğuşMarket · SpineOS test projesi` yap — `src/App.tsx` — test: test altyapısı olmadığı için Spine OS kontrolleri (`npm run lint`, `npm run build`) ve arayüz denemesi.

## Riskler
Belirgin risk yok. Yıl modül yüklenirken bir kez hesaplanır. Yılbaşını açık sekmede geçiren kullanıcı, sayfayı yenileyene kadar eski yılı görür; bu durum kabul edilebilir.

## Varsayımlar
- Biçim `© 2026 DoğuşMarket …`, yani yıl `©` işaretinden hemen sonra geliyor. Başlangıç yılı aralığı (ör. `2025–2026`) istenmiyor.
- Yıl istemcinin saatinden alınır. Proje SSR kullanmadığı için sunucu ve istemci arasında yıl uyuşmazlığı olmaz.
- Test altyapısı olmadığı için davranış, fark ve arayüz denemesiyle doğrulanır.
