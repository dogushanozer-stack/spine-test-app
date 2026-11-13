# SPIN-18 · Doğrulama

Son güncelleme: 13.11.2026 11:44

## Kontroller
- ✓ Lint: Geçti

## Arayüz testi · geçti
Test eden: Claude Code
Ölçüm: 3 dk · 22 model isteği · 29 araç çağrısı · 67k token

### Adımlar
- ✓ 1. `http://localhost:5173` adresini aç. Üstte tam genişlikte turuncu-pembe çiçek banner'ı, altında yan yana mavi-mor Elektronik ve yeşil Ev & Yaşam banner'ları görünür. Yazılar beyaz ve okunaklı, butonlar beyaz zeminli ve yazı renkleri banner'la uyumlu. — geçti — Ustte tam genislikte turuncu-pembe cicek banneri, altinda yan yana mavi-mor Elektronik ve yesil Ev Yasam bannerlari; yazilar beyaz, butonlar beyaz zeminli ve banner rengiyle uyumlu — `.spine/board/S1-sprint-1/SPIN-18/shots/01-ana-sayfa-bannerlar.png`
- ✓ 2. Elektronik banner'ının butonuna tıkla. Banner'lar kaybolur, liste başlığı "Elektronik" olur ve yalnızca elektronik ürünler listelenir. — geçti — Elektronigi Kesfet tiklaninca uc banner kayboldu, baslik Elektronik, 4 urun yalnizca elektronik (kulaklik, saat, hoparlor, powerbank) — `.spine/board/S1-sprint-1/SPIN-18/shots/02-elektronik-kategori.png`
- ✓ 3. Kategori seçimini kaldırıp ana sayfaya dön, ardından Ev & Yaşam butonuna tıkla. Başlık "Ev & Yaşam" olur. — geçti — Tumu ile secim kaldirilinca uc banner geri geldi (21 urun); Ev Yasam butonu basligi Ev Yasam yapti, 4 ev urunu listelendi — `.spine/board/S1-sprint-1/SPIN-18/shots/04-ev-yasam-kategori.png`
- ✓ 4. Ana sayfaya dön ve arama kutusuna "kulaklık" yaz. Üç banner birlikte gizlenir. — geçti — kulaklik aramasinda uc banner birlikte gizlendi, 1 urun listelendi; arama temizlenince bannerlar geri geldi — `.spine/board/S1-sprint-1/SPIN-18/shots/05-arama-kulaklik.png`
- ✓ 5. Pencereyi mobil genişliğe daralt. Yeni banner'lar alt alta durur, emojiler gizlenir ve uzun başlık taşmadan satıra kırılır. — geçti — 390 pxde uc banner tek sutunda alt alta, emojiler gizli, basliklar satira kiriliyor; yatay tasma yok (scrollWidth = clientWidth), butonlar 44 px — `.spine/board/S1-sprint-1/SPIN-18/shots/06-mobil-390.png`
- ✓ 6. Pencereyi eski genişliğine getir. Yerleşim 1. adımdaki hâline döner. — geçti — 1280 pxe donunce cicek tam genislikte, Elektronik ve Ev Yasam yan yana iki sutunda, emojiler gorunur; 1. adimla ayni — `.spine/board/S1-sprint-1/SPIN-18/shots/07-masaustu-geri.png`

### Tasarım
- İyileştirme — Ana sayfa, yeşil Ev & Yaşam banner'ı — Beyaz alt metin ("Ev & Yaşam ürünlerinde fırsatlar.", 14–15 px) yeşil zeminde (`#059669 → #0d9488`) yaklaşık 3,7:1 karşıtlıkta kalıyor; küçük yazı için önerilen 4,5:1'in altında. Başlık büyük ve kalın olduğu için okunaklı. — beklenen: gradyanı biraz koyulaştırmak (ör. `#047857 → #0f766e`) — `.spine/board/S1-sprint-1/SPIN-18/shots/01-ana-sayfa-bannerlar.png`
- İyileştirme — Ana sayfa, Ev & Yaşam butonu — "Ev & Yaşam →" diğer butonlardaki fiil kalıbına uymuyor ("Çiçekleri Keşfet →", "Elektroniği Keşfet →"). — beklenen: ör. "Ev & Yaşamı Keşfet →" — `.spine/board/S1-sprint-1/SPIN-18/shots/01-ana-sayfa-bannerlar.png`
- Kapsam dışı — Kategori ve arama sonuç sayfaları — Az ürün listelenince altbilgi pencerenin altına yapışmıyor, altında boş gri alan kalıyor. Kart bu ekranı değiştirmedi. — beklenen: altbilgi sayfanın dibinde — `.spine/board/S1-sprint-1/SPIN-18/shots/02-elektronik-kategori.png`

SPIN-18'i kullanıcı gözüyle test ettim: altı adımın hepsi geçti, kartın değiştirdiği ekranda bozuk bir tasarım bulgusu yok. Kodu değiştirmedim.

Ortam: ✓ web — http://localhost:5174 açıldı (HTTP 200). Sunucunun bu kopyanın kodunu sunduğunu doğruladım: `curl …/src/pages/HomePage.tsx` çıktısındaki `_jsxFileName` kart kopyasının yolunu gösteriyor. Planda geçen 5173 yerine Spine OS'un verdiği 5174 portunu kullandım.

✓ 1. Ana sayfa — Üstte tam genişlikte turuncu-pembe çiçek banner'ı, altında yan yana mavi-mor Elektronik ve yeşil Ev & Yaşam banner'ları var. Başlıklar beyaz, butonların zemini beyaz. Buton yazıları banner'ın rengini taşıyor: çiçekte `rgb(217,95,14)`, Elektronik'te `#4338ca`, Ev & Yaşam'da `#047857`. Çiçek banner'ının metni ve rengi önceki hâliyle aynı. — `.spine/board/S1-sprint-1/SPIN-18/shots/01-ana-sayfa-bannerlar.png`
✓ 2. Elektronik butonu — "Elektroniği Keşfet →" butonuna basınca üç banner kayboldu, başlık "Elektronik" oldu ve yalnızca 4 elektronik ürün listelendi (kulaklık, saat, hoparlör, powerbank). — `.spine/board/S1-sprint-1/SPIN-18/shots/02-elektronik-kategori.png`
✓ 3. Ev & Yaşam butonu — "Tümü" ile seçimi kaldırınca banner'lar geri geldi ve "21 ürün" görüldü (`03-tumu-geri-donus.png`). Ardından "Ev & Yaşam →" butonu başlığı "Ev & Yaşam" yaptı ve 4 ürün listelendi. — `.spine/board/S1-sprint-1/SPIN-18/shots/04-ev-yasam-kategori.png`
✓ 4. Arama — "kulaklık" yazınca üç banner birlikte gizlendi ve 1 ürün kaldı. Aramayı temizleyince banner'lar geri geldi. — `.spine/board/S1-sprint-1/SPIN-18/shots/05-arama-kulaklik.png`
✓ 5. Mobil (390 px) — Üç banner tek sütunda alt alta duruyor ve emojiler gizli. Başlıklar satıra kırılıyor; yatay taşma yok, sayfanın, banner'ların ve başlıkların `scrollWidth` değeri `clientWidth` ile eşit. Butonların yüksekliği 44 px. — `.spine/board/S1-sprint-1/SPIN-18/shots/06-mobil-390.png`
✓ 6. Masaüstüne dönüş (1280 px) — Yerleşim 1. adımdaki hâline döndü. — `.spine/board/S1-sprint-1/SPIN-18/shots/07-masaustu-geri.png`

Ek kontroller:
- **880 px:** Banner'lar iki sütunda kalıyor, emojiler metinle çakışmıyor (yazının sağ kenarı 274, emojinin sol kenarı 298 px). — `08-ara-genislik-880.png`
- **Regresyon:** İlk ürünü sepete ekleyince sepet sayısı göründü, sepet sayfası doluydu, logoyla ana sayfaya dönünce banner'lar yeniden göründü. — `09-regresyon-sepet-sonrasi.png`
- **Konsol:** Hata ya da uyarı yok (0 hata, 0 uyarı).

## Tasarım
- İyileştirme — Ana sayfa, yeşil Ev & Yaşam banner'ı — Beyaz alt metin ("Ev & Yaşam ürünlerinde fırsatlar.", 14–15 px) yeşil zeminde (`#059669 → #0d9488`) yaklaşık 3,7:1 karşıtlıkta kalıyor; küçük yazı için önerilen 4,5:1'in altında. Başlık büyük ve kalın olduğu için okunaklı. — beklenen: gradyanı biraz koyulaştırmak (ör. `#047857 → #0f766e`) — `.spine/board/S1-sprint-1/SPIN-18/shots/01-ana-sayfa-bannerlar.png`
- İyileştirme — Ana sayfa, Ev & Yaşam butonu — "Ev & Yaşam →" diğer butonlardaki fiil kalıbına uymuyor ("Çiçekleri Keşfet →", "Elektroniği Keşfet →"). — beklenen: ör. "Ev & Yaşamı Keşfet →" — `.spine/board/S1-sprint-1/SPIN-18/shots/01-ana-sayfa-bannerlar.png`
- Kapsam dışı — Kategori ve arama sonuç sayfaları — Az ürün listelenince altbilgi pencerenin altına yapışmıyor, altında boş gri alan kalıyor. Kart bu ekranı değiştirmedi. — beklenen: altbilgi sayfanın dibinde — `.spine/board/S1-sprint-1/SPIN-18/shots/02-elektronik-kategori.png`

## Test defteri
### Ortam
- Proje Vite + React + TypeScript. Test için yalnızca geliştirme sunucusu gerekiyor (`npm run dev`); veritabanı ya da arka uç yok. (SPIN-1, 2026-11-11)
- Vite portu ortam değişkeninden okumuyor; port komut satırıyla veriliyor. Çalışan tarif: `npm run dev -- --host 127.0.0.1 --port $env:PORT --strictPort`, port değişkeni `PORT`, hazır olma yolu `/`. (SPIN-1, 2026-11-11)
- Sunucunun bu kopyanın kodunu sunduğu, değişen dosya doğrudan çekilerek doğrulanabiliyor (ör. `curl -s http://localhost:<port>/src/pages/HomePage.tsx`; çıktıdaki `_jsxFileName` kopyanın yolunu gösteriyor). (SPIN-2, 2026-11-12; SPIN-18, 2026-11-13)
- SPIN-7'nin yönetici girişi (`#/yonetici`, `AdminLoginPage`, `.env.local` içindeki `VITE_ADMIN_*`) ana dalda yok. Kart kopyasında olup olmadığını `ls src/pages` ile kontrol edin; SPIN-17 ve SPIN-18 kopyalarında yoktu. Varsa değerleri yazdırmadan `sed 's/=.*/=…/' .env.local` ile kontrol edin. (SPIN-7, 2026-11-12; SPIN-18, 2026-11-13)
- Kartın test şifresi her zaman o kartın planında yazıyor; deftere yazılmıyor. (SPIN-17, 2026-11-13)
- Logo yazı tipi Poppins, `@fontsource/poppins` paketinden yerel olarak yükleniyor; dış ağ gerekmiyor. Yüklendiği `document.fonts.check('700 22px Poppins')` ile doğrulanıyor. (SPIN-4, 2026-11-12)
### Gezinme
- Yönlendirme hash ile: ana sayfa `#/`, sepet `#/sepet`, favoriler `#/favoriler`, ödeme `#/odeme`, başarı `#/siparis-tamam`. Ürün sayfası ürün kartındaki ad bağlantısıyla ya da doğrudan `#/urun/<id>` adresiyle açılıyor. Bilinmeyen yol (`#/admin/` gibi sonda eğik çizgi olan yollar dahil) ana sayfayı gösteriyor. Hash içindeki `?…` sorgusu yol eşleştirmesinden önce ayrılıyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12; SPIN-17, 2026-11-13)
- Duyuru sayfası `#/admin`, sorgu `#/admin?duyuru=<URL kodlu>`. Alan "Yönetici Şifresi" (textbox), düğme "Giriş Yap"; Enter da gönderiyor. Oturum bileşen state'inde tutuluyor: yeniden yüklemede ya da sayfadan çıkınca sıfırlanıyor, yalnızca hash sorgusu değişince sürüyor. Öğeler `.admin-warning`, `.admin-announcement`. (SPIN-17, 2026-11-13)
- Başlıktaki logo bağlantısının erişilebilir adı "D DoğuşMarket" (role link). (SPIN-7, 2026-11-12; SPIN-18, 2026-11-13)
- Ana sayfanın banner'ları `.hero-stack` içinde: `.hero--orange`, `.hero--blue` ve `.hero--green`. Düğmeleri (role button) "Çiçekleri Keşfet →", "Elektroniği Keşfet →" ve "Ev & Yaşam →". Banner'lar yalnızca arama ve kategori boşken görünüyor; kategori seçimini "Tümü" düğmesi kaldırıyor. Ürün listesi "Tüm Ürünler" ve "21 ürün" metinleriyle doğrulanıyor, kategori başlığı role heading. (SPIN-1, 2026-11-11; SPIN-18, 2026-11-13)
- Altbilgi `foo

## İnceleme
İnceleyiciler: Claude Code

### Kabul ölçütleri (6/6)
- ✓ Arama ve kategori boşken ana sayfada 3 banner görünür: turuncu-pembe (çiçek), mavi-mor (elektronik) ve yeşil (ev). — Arama ve kategori boşken banners dizisindeki 3 öğe map ile çiziliyor. Varyantlar: turuncu (varsayılan .hero), .hero--blue ve .hero--green gradyanları.
- ✓ Çiçek banner'ının metni ve rengi şimdikiyle aynı kalır. — Çiçek banner'ının metinleri eskisiyle birebir aynı. hero--orange sınıfı için CSS kuralı yok, bu yüzden .hero'nun özgün gradyanı kullanılıyor.
- ✓ "Elektronik" banner'ının butonuna tıklanınca liste Elektronik kategorisine süzülür ve başlık "Elektronik" olur. — Buton onCategory('elektronik') çağırıyor. Bu, mevcut kategori akışıyla aynı yol ve başlık da bu akıştan geliyor.
- ✓ "Ev & Yaşam" banner'ının butonuna tıklanınca liste Ev & Yaşam kategorisine süzülür. — Buton onCategory('ev') çağırıyor.
- ✓ Arama yapıldığında ya da kategori seçildiğinde üç banner birlikte gizlenir (mevcut koşul korunur). — Mevcut !search.trim() && !category koşulu, üç banner'ı saran .hero-stack'in tamamını sarıyor.
- ✓ Dar ekranda (≤ mevcut breakpoint) yeni banner'lar alt alta durur ve emojiler gizlenir. — Mobil kuralında .hero-stack tek sütuna iniyor ve var olan .hero-art { display: none } kuralı korunuyor. .hero-art'ın font-size kuralı display'i etkilemiyor.

### Bulgular
- [minor] `src/App.css:180` — '.hero-stack .hero:not(:first-child)' seçicisi mobil kuraldaki '.hero { padding: 24px }' seçicisinden daha özgül. Bu yüzden dar ekranda yeni banner'lar 24px yerine 24px 28px dolgu alıyor ve plandaki mobil padding davranışından biraz sapıyor.
- [minor] `src/pages/HomePage.tsx:103` — Çiçek banner'ına 'hero--orange' sınıfı veriliyor ama CSS'te bu sınıfın karşılığı yok. Renk varsayılan .hero kuralından geliyor; bu tanımsız sınıf okuyanı yanıltabilir.
