# SPIN-22 · Doğrulama

Son güncelleme: 16.11.2026 12:13

## Kontroller
- ✓ Lint: Geçti

## Arayüz testi · geçti
Test eden: Claude Code
Ölçüm: 3 dk · 23 model isteği · 31 araç çağrısı · 78k token

### Adımlar
- ✓ 1. `http://localhost:5173/#/` açılır. Arama kutusunun altında "Popüler:" ve 5 chip görünür. — geçti — Arama kutusunun altinda Populer: etiketi ve plandaki sirayla 5 chip gorunuyor — `.spine/board/S1-sprint-1/SPIN-22/shots/01-populer-chipler.png`
- ✓ 2. "kulaklık" chip'ine tıklanır. Input'ta `kulaklık` yazar, başlık `"kulaklık" için sonuçlar` olur, Kablosuz Kulak İçi Kulaklık kartı listede görünür. — geçti — Input kulaklik, baslik kulaklik icin sonuclar, Volta Kablosuz Kulak Ici Kulaklik listede — `.spine/board/S1-sprint-1/SPIN-22/shots/02-kulaklik.png`
- ✓ 3. Sırayla "akıllı saat", "spor ayakkabı", "parfüm" ve "powerbank" chip'lerine tıklanır. Her birinde en az bir ürün kartı görünür, boş durum mesajı çıkmaz. — geçti — akilli saat, spor ayakkabi, parfum, powerbank: her birinde en az bir urun karti, bos durum mesaji yok — `.spine/board/S1-sprint-1/SPIN-22/shots/06-powerbank.png`
- ✓ 4. `#/sepet` açılır ve "parfüm" chip'ine tıklanır. URL `#/` olur, Kadın Parfüm 50 ml listelenir. — geçti — Sepetten parfum chipi: adres #/ oldu, Esans Kadin Parfum 50 ml listelendi, input parfum — `.spine/board/S1-sprint-1/SPIN-22/shots/07-sepetten-parfum.png`
- ✓ 5. Logoya tıklanır. Arama temizlenir, chip'ler görünmeye devam eder. — geçti — Logo tiklaninca input bos, Tum Urunler 21 urun, Populer ve 5 chip gorunuyor — `.spine/board/S1-sprint-1/SPIN-22/shots/08-logo-temizle.png`
- ✓ 6. Pencere 375px genişliğe daraltılır. Chip'ler arama kutusunun altında durur, yatay taşma (sayfa kaydırma çubuğu) oluşmaz. Ardından pencere eski genişliğe getirilir. — geçti — 375 px: chipler arama kutusunun altinda 2 satira sariyor, scrollWidth = clientWidth (ana sayfa 360/360, sepet 375/375), 1280e donunce duzen normal — `.spine/board/S1-sprint-1/SPIN-22/shots/09-375-anasayfa.png`

### Tasarım
- İyileştirme — Başlık, 375 px — Chip'ler yaklaşık 24 px yüksekliğinde (`.popular-chip`, `padding: 2px 10px`). WCAG'in 24 px alt sınırında ama dokunmatik ekranda küçük. Beklenen: mobil kuralında `padding: 6px 12px` gibi bir değerle ~32 px veya üstü — `.spine/board/S1-sprint-1/SPIN-22/shots/09-375-anasayfa.png`
- İyileştirme — Başlık, 375 px — Yapışkan başlık 229 px'e çıktı, 812 px'lik ekranın yaklaşık %28'i. İçeriği örtmüyor ama yer kaplıyor. Beklenen: mobilde chip'leri tek satırda yatay kaydırmak (`flex-wrap: nowrap; overflow-x: auto`), planda bu seçenek de vardı — `.spine/board/S1-sprint-1/SPIN-22/shots/10-375-sonuc.png`
- İyileştirme — Başlık — Tıklanan chip'in turuncu çerçevesi yalnızca odakta kalıyor; aktif aramayı kalıcı olarak göstermiyor. Elle başka bir şey yazılınca ya da odak kayınca kayboluyor. Beklenen: arama metni chip'le aynıysa kalıcı bir aktif stil (ör. `aria-pressed`) — `.spine/board/S1-sprint-1/SPIN-22/shots/04-spor-ayakkabi.png`
- Kapsam dışı — Başlık, 375 px — Favoriler ve Sepet simgeleri logonun yanına sığmayıp ayrı satıra iniyor ve sağda boş bir satır oluşuyor. Bu karttan değil: logo 260 + boşluk 12 + menü 93 = 365 px, oysa 375 px'te kullanılabilir genişlik 343 px. Bu öğeleri kart değiştirmedi; 390 px'te sığıyor — `.spine/board/S1-sprint-1/SPIN-22/shots/11-375-sepet.png`

Altı adımın hepsi geçti. Konsolda hata ya da uyarı yok, değişen ekranlarda bozuk bir görünüm bulmadım. Kodu değiştirmedim.

Ortam: ✓ web (http://localhost:5174) — `curl /src/components/Header.tsx` hem `popular-*` sınıflarını hem kopyanın `_jsxFileName` yolunu gösterdi, yani sunucu bu kopyanın kodunu sunuyor. Açılış HTTP 200.

✓ 1. Ana sayfa — Arama kutusunun altında "Popüler:" etiketi ve sırasıyla kulaklık, akıllı saat, spor ayakkabı, parfüm, powerbank chip'leri görünüyor — `.spine/board/S1-sprint-1/SPIN-22/shots/01-populer-chipler.png`
✓ 2. "kulaklık" chip'i — Arama kutusunda `kulaklık` yazıyor, başlık `"kulaklık" için sonuçlar`, 1 ürün: "Volta Kablosuz Kulak İçi Kulaklık" — `.spine/board/S1-sprint-1/SPIN-22/shots/02-kulaklik.png`
✓ 3. Diğer 4 chip — Akıllı saat, spor ayakkabı, parfüm ve powerbank'in her biri en az bir ürün kartı gösteriyor. "Aradığın kriterlere uygun ürün bulunamadı." mesajı hiçbirinde çıkmıyor — `.spine/board/S1-sprint-1/SPIN-22/shots/03-akilli-saat.png`, `04-spor-ayakkabi.png`, `05-parfum.png`, `06-powerbank.png`
✓ 4. Sepetten "parfüm" chip'i — "Sepetin boş" ekranından tıklandı. Akış `http://localhost:5174/#/` adresinde bitti, "Esans Kadın Parfüm 50 ml" listelendi, arama kutusunda `parfüm` yazıyor — `.spine/board/S1-sprint-1/SPIN-22/shots/07-sepetten-parfum.png`
✓ 5. Logoya tıklama — Arama kutusu boşaldı, "Tüm Ürünler" ve "21 ürün" geri geldi, "Popüler:" ve 5 chip görünmeye devam ediyor — `.spine/board/S1-sprint-1/SPIN-22/shots/08-logo-temizle.png`
✓ 6. 375 px — Chip'ler arama kutusunun altında iki satıra sarıyor (3 + 2). Yatay taşma yok: ana sayfada scrollWidth 360 ve clientWidth 360 (kaydırma çubuğu 15 px), boş sepette 375 ve 375. 1280 px'e dönünce düzen normal — `.spine/board/S1-sprint-1/SPIN-22/shots/09-375-anasayfa.png`, `10-375-sonuc.png`, `11-375-sepet.png`, `12-1280-geri.png`
✓ Regresyon — Ürün sayfasından (`#/urun/1`) "akıllı saat" chip'i ana sayfaya dönüp "Volta Akıllı Saat Pro"yu gösterdi. Klavyeyle arama kutusundan iki Tab "kulaklık" chip'ine geldi, Enter aramayı başlattı; bir Tab daha ve Space "akıllı saat"i aradı, odak çerçevesi görünüyor. Elle "gül" yazınca arama çalışıyor; kutu temizlenince 21 ürün dönüyor — `.spine/board/S1-sprint-1/SPIN-22/shots/13-klavye-urun-sayfasi.png`

Assert'li ve geçen 7 akış kartın `flows/` klasörüne kaydedildi.

## Tasarım
- İyileştirme — Başlık, 375 px — Chip'ler yaklaşık 24 px yüksekliğinde (`.popular-chip`, `padding: 2px 10px`). WCAG'in 24 px alt sınırında ama dokunmatik ekranda küçük. Beklenen: mobil kuralında `padding: 6px 12px` gibi bir değerle ~32 px veya üstü — `.spine/board/S1-sprint-1/SPIN-22/shots/09-375-anasayfa.png`
- İyileştirme — Başlık, 375 px — Yapışkan başlık 229 px'e çıktı, 812 px'lik ekranın yaklaşık %28'i. İçeriği örtmüyor ama yer kaplıyor. Beklenen: mobilde chip'leri tek satırda yatay kaydırmak (`flex-wrap: nowrap; overflow-x: auto`), planda bu seçenek de vardı — `.spine/board/S1-sprint-1/SPIN-22/shots/10-375-sonuc.png`
- İyileştirme — Başlık — Tıklanan chip'in turuncu çerçevesi yalnızca odakta kalıyor; aktif aramayı kalıcı olarak göstermiyor. Elle başka bir şey yazılınca ya da odak kayınca kayboluyor. Beklenen: arama metni chip'le aynıysa kalıcı bir aktif stil (ör. `aria-pressed`) — `.spine/board/S1-sprint-1/SPIN-22/shots/04-spor-ayakkabi.png`
- Kapsam dışı — Başlık, 375 px — Favoriler ve Sepet simgeleri logonun yanına sığmayıp ayrı satıra iniyor ve sağda boş bir satır oluşuyor. Bu karttan değil: logo 260 + boşluk 12 + menü 93 = 365 px, oysa 375 px'te kullanılabilir genişlik 343 px. Bu öğeleri kart değiştirmedi; 390 px'te sığıyor — `.spine/board/S1-sprint-1/SPIN-22/shots/11-375-sepet.png`

## Test defteri
### Ortam
- Proje Vite + React + TypeScript. Test için yalnızca geliştirme sunucusu gerekiyor (`npm run dev`); veritabanı ya da arka uç yok. (SPIN-1, 2026-11-11)
- Vite portu ortam değişkeninden okumuyor; port komut satırıyla veriliyor. Çalışan tarif: `npm run dev -- --host 127.0.0.1 --port $env:PORT --strictPort`, port değişkeni `PORT`, hazır olma yolu `/`. (SPIN-1, 2026-11-11)
- Sunucunun bu kopyanın kodunu sunduğu, değişen dosya doğrudan çekilerek doğrulanabiliyor (ör. `curl -s http://localhost:<port>/src/App.tsx`; çıktıdaki `_jsxFileName` kopyanın yolunu gösteriyor). (SPIN-2, 2026-11-12; SPIN-22, 2026-11-16)
- SPIN-7'nin yönetici girişi (`#/yonetici`, `AdminLoginPage`, `.env.local` içindeki `VITE_ADMIN_*`) ana dalda yok. Kart kopyasında olup olmadığını `ls src/pages` ile kontrol edin; SPIN-17, 18, 19 ve 21 kopyalarında yoktu. Varsa değerleri yazdırmadan `sed 's/=.*/=…/' .env.local` ile kontrol edin. (SPIN-7, 2026-11-12; SPIN-21, 2026-11-16)
- Kartın test şifresi her zaman o kartın planında yazıyor; deftere yazılmıyor. (SPIN-17, 2026-11-13)
- Logo yazı tipi Poppins, `@fontsource/poppins` paketinden yerel olarak yükleniyor; dış ağ gerekmiyor. Yüklendiği `document.fonts.check('700 22px Poppins')` ile doğrulanıyor. (SPIN-4, 2026-11-12)
### Gezinme
- Yönlendirme hash ile: ana sayfa `#/`, sepet `#/sepet`, favoriler `#/favoriler`, ödeme `#/odeme`, başarı `#/siparis-tamam`. Ürün sayfası ürün kartındaki ad bağlantısıyla (`.product-grid > article:nth-of-type(1) .product-title`) ya da doğrudan `#/urun/<id>` adresiyle açılıyor; `#/urun/1` "Kırmızı Gül Buketi (11 Adet)", ₺649. Bilinmeyen yol ana sayfayı gösteriyor; `#/urun/9999` "Ürün bulunamadı." gösteriyor. Hash içindeki `?…` sorgusu yol eşleştirmesinden önce ayrılıyor. (SPIN-1, 2026-11-11; SPIN-17, 2026-11-13; SPIN-21, 2026-11-16)
- Duyuru sayfası `#/admin`, sorgu `#/admin?duyuru=<URL kodlu>`. Alan "Yönetici Şifresi" (textbox), düğme "Giriş Yap"; Enter da gönderiyor. Oturum bileşen state'inde tutuluyor: yeniden yüklemede ya da sayfadan çıkınca sıfırlanıyor, yalnızca hash sorgusu değişince sürüyor. Öğeler `.admin-warning`, `.admin-announcement`. (SPIN-17, 2026-11-13)
- Başlıktaki logo bağlantısının erişilebilir adı "D Doruk&Yiğit Market" (role link), sayfa başlığı "Doruk&Yiğit Market". Logoya tıklamak aramayı temizliyor. (SPIN-21, 2026-11-16; SPIN-22, 2026-

## İnceleme
İnceleyiciler: Claude Code

### Kabul ölçütleri (6/6)
- ✓ Header'da arama kutusunun hemen altında "Popüler:" etiketi ve sırasıyla kulaklık, akıllı saat, spor ayakkabı, parfüm, powerbank chip'leri görünür. — Header.tsx'te form .search-area içine alınmış. Altında 'Popüler:' etiketi var ve POPULAR_SEARCHES plandaki sırayla button olarak listeleniyor.
- ✓ Ana sayfada "kulaklık" chip'ine tıklayınca input değeri `kulaklık` olur, başlık `"kulaklık" için sonuçlar` olur ve "Kablosuz Kulak İçi Kulaklık" listelenir. — Chip tıklanınca onSearch('kulaklık') çağrılıyor. Input kontrollü (value={search}) olduğu için değeri güncellenir. Başlık ve filtreleme HomePage'deki mevcut mantıkla çalışıyor. Plana göre 'kulaklık' id 5 ile eşleşiyor.
- ✓ Sepet ya da ürün sayfasındayken bir chip'e tıklayınca ana sayfaya dönülür ve o kelimenin sonuçları gösterilir. — onClick içinde hash '#/' değilse navigate('/') çağrılıyor. Bu, input'taki davranışın aynısı.
- ✓ 5 chip'in her biri en az bir ürün döndürür, hiçbiri "ürün bulunamadı" göstermez. — Kelimeler plandaki listeyle aynı. Plana göre hepsi katalogda bir ürünle eşleşiyor (5, 6, 9, 18, 8) ve arama algoritması değişmedi. Bu yalnızca farkın okunmasıyla doğrulandı, çalıştırılarak denenmedi.
- ✓ Chip'ler klavyeyle odaklanabilir (`button`) ve Enter/Space ile aynı aramayı tetikler. — Chip'ler <button type="button"> olarak eklenmiş. Bu yüzden klavyeyle odaklanabilir ve Enter/Space onClick'i tetikler. :focus-visible stili de var.
- ✓ 860px altında chip'ler arama kutusunun altında tam genişlikte kalır ve header'ı taşırmaz. — Mobil kuralı .search-area'ya taşınmış (order: 3; flex-basis: 100%). min-width: 0 ve flex-wrap: wrap taşmayı önlüyor. Gerçek taşma olmadığı yalnızca arayüz denemesiyle kesinleşir.

### Bulgular
- [minor] `src/components/Header.tsx:43` — aria-label yalnızca role'ü olmayan bir div'de duruyor, ekran okuyucular bu etiketi okumayabilir. role="group" eklenmeli.
