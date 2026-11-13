# SPIN-19 · Doğrulama

Son güncelleme: 13.11.2026 15:07

## Kontroller
- ✓ Lint: Geçti

## Arayüz testi · geçti
Test eden: Claude Code
Ölçüm: 3 dk · 18 model isteği · 27 araç çağrısı · 69k token

### Adımlar
- ○ 1. **Platform:** Web (masaüstü tarayıcı). Açma komutu: `npm run dev`. — denenmedi
- ✓ 2. Ana sayfayı (`/`) aç ve sayfanın en altına kaydır. Beklenen: footer'ın solunda `© 2026 DoğuşMarket · SpineOS test projesi`, sağında `Güvenli Alışveriş · Kolay İade · 7/24 Destek` yazar. İki metin aynı satırdadır ve eskisi gibi iki uca yaslanır. — geçti — 1280 px: footer solda (c) 2026 DogusMarket - SpineOS test projesi, sagda Guvenli Alisveris metni, ayni satirda iki uca yasli — `.spine/board/S1-sprint-1/SPIN-19/shots/01-footer-masaustu.png`
- ✓ 3. Pencereyi 860px'in altına daralt. Beklenen: metinler `flex-wrap` ile alt alta kayar, yıl kesilmez ve taşma olmaz. — geçti — 390 px ve 320 px: iki metin alt alta, yil tam gorunuyor, scrollWidth esit clientWidth, sayfa tasmasi 0. 800 px te yer yettigi icin tek satirda kaliyor — `.spine/board/S1-sprint-1/SPIN-19/shots/02-footer-390.png`
- ✓ 4. Sepet sayfasına geç. Beklenen: aynı footer aynı yılla görünür. Footer tüm sayfalarda ortak olduğu için tek kontrol yeter. — geçti — Bos ve dolu sepette ayni footer, (c) 2026 metniyle iki uca yasli; sepete ekleme ve rozet calisiyor — `.spine/board/S1-sprint-1/SPIN-19/shots/04-sepet-bos.png`

### Tasarım
- Kapsam dışı — Sepet sayfası (boş ve dolu) — İçerik kısa olunca footer ekranın altına oturmuyor; altında boş gri alan kalıyor (1280×800'de footer 552 px'te bitiyor). Bu kartın değişikliği değil, düzen eskiden de böyle. — beklenen: footer görünür alanın altına yapışsın (ör. `#root` için `min-height: 100vh`, flex sütun düzeni ve `main` için `flex: 1`) — `.spine/board/S1-sprint-1/SPIN-19/shots/04-sepet-bos.png`

SPIN-19'u test ettim: footer'da `© 2026` her adımda doğru görünüyor, metin hiçbir genişlikte kesilmiyor ya da taşmıyor. Kodu değiştirmedim.

Ortam: ✓ web — http://localhost:5174 açık. `curl /src/App.tsx` çıktısında kopyanın yolu ve `currentYear = new Date().getFullYear()` satırı görünüyor, yani sunucu bu kopyanın kodunu sunuyor.

✓ 1 — Platform: Web (masaüstü Chromium). Sunucuyu Spine OS açtı, tüm adımları bunun üzerinde yaptım (bu satır yalnızca bilgi, adım olarak işaretlemedim).
✓ 2 — 1280 px'te footer'ın solunda `© 2026 DoğuşMarket · SpineOS test projesi`, sağında `Güvenli Alışveriş · Kolay İade · 7/24 Destek` yazıyor. İki metin aynı satırda (ikisinin de üst kenarı 3330 px), `justify-content: space-between` ile iki uca yaslı. Assert'li akış geçti. — `.spine/board/S1-sprint-1/SPIN-19/shots/01-footer-masaustu.png`
✓ 3 — 390 px'te iki metin alt alta diziliyor (üst kenarlar 11957 ve 11985 px). Yıl tam görünüyor: metnin kaydırma genişliği görünen genişliğine eşit (249 = 249) ve sayfa taşması 0. 320 px'te, kaydırma çubuğu olmayan sepet sayfasında da sonuç aynı. 800 px'te iki metin yan yana sığdığı için tek satırda kalıyor; `flex-wrap` yalnızca yer yetmeyince alta indiriyor, bu bir hata değil. — `.spine/board/S1-sprint-1/SPIN-19/shots/02-footer-390.png`, `.spine/board/S1-sprint-1/SPIN-19/shots/03-footer-800.png`
✓ 4 — Sepet sayfasında, boşken de bir ürün ekledikten sonra da aynı footer `© 2026` ile görünüyor. Regresyon kontrolü: sepete ekleme, rozet ve sepet listesi çalışıyor. Konsolda hata ya da uyarı yok (0 hata, 0 uyarı). — `.spine/board/S1-sprint-1/SPIN-19/shots/04-sepet-bos.png`, `.spine/board/S1-sprint-1/SPIN-19/shots/05-sepet-dolu.png`

Üç akış assert'li geçti ve kartın `flows/` klasörüne kaydedildi. Oluşan dosyalar: `shots/01…05-*.png` ve `shots/a2`, `shots/a3`, `shots/a4` klasörleri (akış görüntüleri ve trace.zip). Playwright'ın oluşturduğu `.playwright-mcp/` klasörünü `spine-trash` ile kaldırdım.

## Tasarım
- Kapsam dışı — Sepet sayfası (boş ve dolu) — İçerik kısa olunca footer ekranın altına oturmuyor; altında boş gri alan kalıyor (1280×800'de footer 552 px'te bitiyor). Bu kartın değişikliği değil, düzen eskiden de böyle. — beklenen: footer görünür alanın altına yapışsın (ör. `#root` için `min-height: 100vh`, flex sütun düzeni ve `main` için `flex: 1`) — `.spine/board/S1-sprint-1/SPIN-19/shots/04-sepet-bos.png`

## Test defteri
### Ortam
- Proje Vite + React + TypeScript. Test için yalnızca geliştirme sunucusu gerekiyor (`npm run dev`); veritabanı ya da arka uç yok. (SPIN-1, 2026-11-11)
- Vite portu ortam değişkeninden okumuyor; port komut satırıyla veriliyor. Çalışan tarif: `npm run dev -- --host 127.0.0.1 --port $env:PORT --strictPort`, port değişkeni `PORT`, hazır olma yolu `/`. (SPIN-1, 2026-11-11)
- Sunucunun bu kopyanın kodunu sunduğu, değişen dosya doğrudan çekilerek doğrulanabiliyor (ör. `curl -s http://localhost:<port>/src/App.tsx`; çıktıdaki `_jsxFileName` kopyanın yolunu gösteriyor). (SPIN-2, 2026-11-12; SPIN-19, 2026-11-13)
- SPIN-7'nin yönetici girişi (`#/yonetici`, `AdminLoginPage`, `.env.local` içindeki `VITE_ADMIN_*`) ana dalda yok. Kart kopyasında olup olmadığını `ls src/pages` ile kontrol edin; SPIN-17, SPIN-18 ve SPIN-19 kopyalarında yoktu. Varsa değerleri yazdırmadan `sed 's/=.*/=…/' .env.local` ile kontrol edin. (SPIN-7, 2026-11-12; SPIN-19, 2026-11-13)
- Kartın test şifresi her zaman o kartın planında yazıyor; deftere yazılmıyor. (SPIN-17, 2026-11-13)
- Logo yazı tipi Poppins, `@fontsource/poppins` paketinden yerel olarak yükleniyor; dış ağ gerekmiyor. Yüklendiği `document.fonts.check('700 22px Poppins')` ile doğrulanıyor. (SPIN-4, 2026-11-12)
### Gezinme
- Yönlendirme hash ile: ana sayfa `#/`, sepet `#/sepet`, favoriler `#/favoriler`, ödeme `#/odeme`, başarı `#/siparis-tamam`. Ürün sayfası ürün kartındaki ad bağlantısıyla ya da doğrudan `#/urun/<id>` adresiyle açılıyor. Bilinmeyen yol (`#/admin/` gibi sonda eğik çizgi olan yollar dahil) ana sayfayı gösteriyor. Hash içindeki `?…` sorgusu yol eşleştirmesinden önce ayrılıyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12; SPIN-17, 2026-11-13)
- Duyuru sayfası `#/admin`, sorgu `#/admin?duyuru=<URL kodlu>`. Alan "Yönetici Şifresi" (textbox), düğme "Giriş Yap"; Enter da gönderiyor. Oturum bileşen state'inde tutuluyor: yeniden yüklemede ya da sayfadan çıkınca sıfırlanıyor, yalnızca hash sorgusu değişince sürüyor. Öğeler `.admin-warning`, `.admin-announcement`. (SPIN-17, 2026-11-13)
- Başlıktaki logo bağlantısının erişilebilir adı "D DoğuşMarket" (role link). (SPIN-7, 2026-11-12; SPIN-18, 2026-11-13)
- Ana sayfanın banner'ları `.hero-stack` içinde: `.hero--orange`, `.hero--blue` ve `.hero--green`. Düğmeleri (role button) "Çiçekleri Keşfet →", "Elektroniği Keşfet →" ve "Ev & Yaşam →". Banner'lar yalnızca arama ve kategori boşken görünüyor; kategori seçimini "Tümü" düğmesi kaldırıyor. Ürün listesi "Tüm Ürünler" ve "21 ürün" metinleriyle doğrulanıyor, kategori başlığı role heading. (SPIN-1, 2026-11-11; SPIN-18, 2026-11-13)
- Altbilgi `footer` seçicisiyle bulunuyor; oraya inmek için `{"action":"scroll","selector":"footer"}` yetiyor. Footer `src/App.tsx` içinde tek yerde tanımlı, tüm sayfalarda ortak. İç kap `.footer-inner` (`flex-wrap: wrap`, `space-between`), iki `span` içeriyor; ölçü için `[...document.querySelector('.footer-inner').children]` kullanın. (SPIN-3, 2026-11-12; SPIN-19, 2026-11-13)
- Üst menü bağlantıları "♡ Favoriler" ve "🛒 Sepetim". Sepet doluyken adın sonuna sayı ekleniyor, bu yüzden sepete `#root > header > div > nav > a:nth-of-type(2)` seçicisiyle tıklayın. (SPIN-3, 2026-11-12; SPIN-19, 2026-11-13)
- Arama kutusu role searchbox, adı "Ürün, marka veya kategori ara". Ana sayfada `main` altındaki div'ler sırayla `.hero-stack`, `.category-bar`, `.listing-head`, `.product-grid`. İlk ürün kartındaki "Sepete Ekle" düğmesine `.product-grid > article:nth-of-type(1) button.btn-primary` seçicisiyle ulaşın. Ürün sayfasındaki ana düğme `main button.btn-primary:not(.btn-block)`. Sepet sayısı `header .badge`, boş sepet

## İnceleme
İnceleyiciler: Claude Code

### Kabul ölçütleri (3/3)
- ✓ Footer'ın sol metni `© <bu yıl> DoğuşMarket · SpineOS test projesi` biçiminde olur. Bugün bu `© 2026 DoğuşMarket · SpineOS test projesi` demektir. — src/App.tsx:48 metni `© {currentYear} DoğuşMarket · SpineOS test projesi` olarak değiştiriyor. currentYear bugün 2026 değerini verir.
- ✓ Yıl kodda sabit yazılmaz; farkta `new Date().getFullYear()` görünür. — Farkta modül düzeyinde `const currentYear = new Date().getFullYear()` var. Yıl kodda sabit yazılmamış.
- ✓ Footer'daki diğer metin ve sınıflar değişmez; fark yalnızca `src/App.tsx` içinde olur. — Fark yalnızca src/App.tsx dosyasında. Sağdaki metin ve footer/footer-inner/container sınıfları değişmemiş.

### Bulgular
- Bulgu yok
