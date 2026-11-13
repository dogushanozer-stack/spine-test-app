# SPIN-4 · Doğrulama

Son güncelleme: 12.11.2026 12:26

## Kontroller
- ✓ Lint: Geçti

## Arayüz testi · geçti
Test eden: Claude Code
Ölçüm: 2 dk · 19 model isteği · 24 araç çağrısı · 58k token

### Adımlar
- ✓ 1. Ana sayfayı (`#/`) aç. Başlıkta turkuaz "D" rozeti ve yanında "Doruk&Yiğit Market" görünür. Ad kalın Poppins yazı tipindedir ve "Market" turkuazdır. — geçti — Turkuaz D rozeti + Doruk&Yiğit Market, kalın geometrik yazı, Market turkuaz, &amp; görünmüyor — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
- ✓ 2. Site adı öğesinin hesaplanan stiline bak. `font-family` Poppins ile başlar, `font-weight` 700'dür. — geçti — Hesaplanan font-family Poppins, system-ui, sans-serif; font-weight 700; Poppins 700 yüklendi (document.fonts.check true) — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
- ✓ 3. Bir ürün kartının başlığına bak. Yazı tipi Poppins değildir, sistem yazı tipidir. — geçti — Ürün başlığı .product-title ve marka strong: system-ui, Segoe UI, Roboto, sans-serif; menü ve altbilgi de system-ui — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
- ✓ 4. Sekme başlığına bak. "Doruk&Yiğit Market" yazar. — geçti — Sekme başlığı: Doruk&Yiğit Market — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
- ✓ 5. Sayfanın en altına in. Altbilgide "© Doruk&Yiğit Market · SpineOS test projesi" yazar. — geçti — Altbilgi: © Doruk&Yiğit Market · SpineOS test projesi — `.spine/board/S1-sprint-1/SPIN-4/shots/02-altbilgi.png`
- ✓ 6. `#/sepet` sayfasını aç. Logo aynı stilde görünür. — geçti — Sepet sayfasında logo aynı: D rozeti, kalın Poppins ad, Market turkuaz; logo tıklanınca ana sayfaya dönüyor — `.spine/board/S1-sprint-1/SPIN-4/shots/03-sepet-logo.png`
- ✓ 7. Pencereyi yaklaşık 400px genişliğe küçült. Ad tek satırda kalır, Favoriler ve Sepet simgeleriyle çakışmaz, yatay kaydırma çubuğu çıkmaz. Sonra pencereyi eski genişliğine getir. — geçti — 400px: ad tek satırda, simgelerle çakışmıyor, scrollWidth=clientWidth 385; ana sayfada menü simgeleri ayrı satıra iniyor; 1280px geri düzgün — `.spine/board/S1-sprint-1/SPIN-4/shots/05-ana-sayfa-400px.png`

### Tasarım
- İyileştirme — ana sayfa, 400px — Yeni ad daha uzun olduğu için logo yaklaşık 260px yer kaplıyor. Ana sayfada dikey kaydırma çubuğu varken içerik 385px'e düşüyor ve Favoriler/Sepet simgeleri logonun yanına sığmayıp kendi satırına iniyor. Başlık logo, simgeler ve arama olarak üç satır oluyor (yaklaşık 170px), logonun sağı boş kalıyor. Kaydırma çubuğu olmayan boş sepet sayfasında simgeler logonun yanında duruyor. 
- İyileştirme — tüm sayfalar, logo — `.logo strong` ("Market") hesaplanan ağırlığı 900, ama yalnızca Poppins 600 ve 700 yükleniyor. Tarayıcı 700'ü kullanıyor ve görünüm sorunsuz. 600 ağırlığını içe aktaran satır (`src/main.tsx`) hiçbir yerde kullanılmıyor. Beklenen: `.logo strong` için ağırlık açıkça 700 verilsin ya da kullanılmayan 600 içe aktarması kaldırılsın.

SPIN-4'ün 7 test adımının hepsi geçti. Değişen ekranlarda üst üste binen, kesilen ya da taşan öğe görmedim. Kodu değiştirmedim.

Ortam: ✓ web — Spine OS'un açtığı http://localhost:5175 yanıt verdi (HTTP 200) ve sunucu bu kopyanın kodunu sunuyor: sekme başlığı ve sayfadaki ad yeni adla geliyor.

✓ 1. Ana sayfa logosu — turkuaz "D" rozeti ve yanında "Doruk&Yiğit Market" görünüyor. Ad kalın, geometrik Poppins yazıyla, "Market" turkuaz (`rgb(8,145,178)`). Ekranda "&amp;" yazısı yok, logo bağlantısının erişilebilir adı "D Doruk&Yiğit Market" — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
✓ 2. Hesaplanan stil — `.logo` öğesinde `font-family: Poppins, system-ui, sans-serif`, `font-weight: 700`, `letter-spacing: -0.22px`. `document.fonts.check('700 22px Poppins')` true döndü; Poppins 700 yazı tipi dosyası yüklenmiş — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
✓ 3. Ürün kartı başlığı — `.product-title` ve içindeki marka `strong` öğesi `system-ui, "Segoe UI", Roboto, sans-serif` kullanıyor. Menü bağlantıları ve altbilgi de system-ui'de kalıyor — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
✓ 4. Sekme başlığı — "Doruk&Yiğit Market" (spine-web çıktısı ve Playwright'ın verdiği sayfa başlığı) — `.spine/board/S1-sprint-1/SPIN-4/shots/01-ana-sayfa-logo.png`
✓ 5. Altbilgi — "© Doruk&Yiğit Market · SpineOS test projesi" yazıyor — `.spine/board/S1-sprint-1/SPIN-4/shots/02-altbilgi.png`
✓ 6. `#/sepet` — logo ana sayfadakiyle aynı stilde. Ürünü sepete ekleme, sepet sayısı ve sepete geçiş çalışıyor. Logoya tıklayınca ana sayfaya dönüyor (regresyon denemesi) — `.spine/board/S1-sprint-1/SPIN-4/shots/03-sepet-logo.png`, `.spine/board/S1-sprint-1/SPIN-4/shots/04-logo-ana-sayfaya-donus.png`
✓ 7. 400px genişlik — ad tek satırda kalıyor ve Favoriler/Sepet simgeleriyle çakışmıyor. Yatay kaydırma çubuğu yok: ana sayfada `scrollWidth` ile `clientWidth` ikisi de 385. Pencere 1280px'e geri getirilince düzen düzgün — `.spine/board/S1-sprint-1/SPIN-4/shots/05-ana-sayfa-400px.png`, `.spine/board/S1-sprint-1/SPIN-4/shots/06-sepet-400px.png`, `.spine/board/S1-sprint-1/SPIN-4/shots/07-sepet-1280px-geri.png`

Konsolda hata ya da uyarı çıkmadı (Playwright: 0 hata, 0 uyarı). `grep -rn "Doğuş" src index.html` sonuç vermedi.

## Tasarım
- İyileştirme — ana sayfa, 400px — Yeni ad daha uzun olduğu için logo yaklaşık 260px yer kaplıyor. Ana sayfada dikey kaydırma çubuğu varken içerik 385px'e düşüyor ve Favoriler/Sepet simgeleri logonun yanına sığmayıp kendi satırına iniyor. Başlık logo, simgeler ve arama olarak üç satır oluyor (yaklaşık 170px), logonun sağı boş kalıyor. Kaydırma çubuğu olmayan boş sepet sayfasında simgeler logonun yanında duruyor. Beklenen: dar ekranda simgeler logoyla aynı satırda kalsın. Örneğin 860px altındaki kuralda `.logo` yazı boyutu yaklaşık 18–19px'e indirilebilir; bu, planın Riskler bölümündeki önlemle aynı — `.spine/board/S1-sprint-1/SPIN-4/shots/05-ana-sayfa-400px.png` ile `.spine/board/S1-sprint-1/SPIN-4/shots/06-sepet-400px.png` karşılaştırması
- İyileştirme — tüm sayfalar, logo — `.logo strong` ("Market") hesaplanan ağırlığı 900, ama yalnızca Poppins 600 ve 700 yükleniyor. Tarayıcı 700'ü kullanıyor ve görünüm sorunsuz. 600 ağırlığını içe aktaran satır (`src/main.tsx`) hiçbir yerde kullanılmıyor. Beklenen: `.logo strong` için ağırlık açıkça 700 verilsin ya da kullanılmayan 600 içe aktarması kaldırılsın.

## Test defteri
### Ortam
- Proje Vite + React + TypeScript. Test için yalnızca geliştirme sunucusu gerekiyor (`npm run dev`); veritabanı ya da arka uç yok. (SPIN-1, 2026-11-11)
- Vite portu ortam değişkeninden okumuyor; port CLI ile veriliyor. Çalışan tarif: `npm run dev -- --host 127.0.0.1 --port $env:PORT --strictPort`, port değişkeni `PORT`, hazır olma yolu `/`. (SPIN-1, 2026-11-11)
- Sunucunun bu kopyanın kodunu sunduğu, değişen CSS dosyası doğrudan çekilerek doğrulanabiliyor (ör. `curl -s http://localhost:<port>/src/index.css`). (SPIN-2, 2026-11-12; SPIN-3, 2026-11-12)
- Logo yazı tipi Poppins, `@fontsource/poppins` paketinden yerel olarak yükleniyor; dış ağ gerekmiyor. Yüklendiği `document.fonts.check('700 22px Poppins')` ile doğrulanıyor. (SPIN-4, 2026-11-12)
### Gezinme
- Yönlendirme hash ile: ana sayfa `#/`, sepet `#/sepet`, favoriler `#/favoriler`. Ürün sayfası ürün kartındaki ürün adı bağlantısıyla açılıyor (ör. "Adım Güneş Gözlüğü" → `#/urun/12`), doğrudan `#/urun/<id>` adresiyle de açılıyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12)
- Başlıktaki logo bağlantısının erişilebilir adı "D Doruk&Yiğit Market" (role link). SPIN-1/SPIN-2 akışlarındaki "D DoğuşMarket" adı artık eşleşmiyor. (SPIN-4, 2026-11-12)
- Ana sayfadaki kahraman düğmesi "Çiçekleri Keşfet →". Altbilgi `footer` seçicisiyle bulunuyor, footer'a inmek için `{"action":"scroll","selector":"footer"}` yetiyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12)
- Üst menü bağlantıları "♡ Favoriler" ve "🛒 Sepetim". Sepet doluyken adın sonuna sayı ekleniyor ("🛒 Sepetim 1"). Bu yüzden sepet bağlantısına `#root > header > div > nav > a:nth-of-type(2)` seçicisiyle tıklayın. (SPIN-3, 2026-11-12; SPIN-4, 2026-11-12)
- Arama kutusu role searchbox, adı "Ürün, marka veya kategori ara". Ürün kartlarında "Sepete Ekle" düğmesi var, ilk kart için seçici `#root > main > div:nth-of-type(3) > article:nth-of-type(1) > div > button`. Başlıktaki sepet sayısı `header .badge`. Boş sepette "Sepetin boş" metni çıkıyor. (SPIN-2, 2026-11-12; SPIN-3, 2026-11-12; SPIN-4, 2026-11-12)
- Logo öğeleri: `.logo-mark` ("D" rozeti), `.logo > span:not(.logo-mark)` (site adı), `.logo strong` ("Market"), arama kabı `.search`. Ürün kartı başlığı `.product-title` (marka `strong` içinde). (SPIN-2, 2026-11-12; SPIN-4, 2026-11-12)
- 860px altında arama kutusu ikinci satıra iniyor ve Favoriler/Sepetim yalnızca simge olarak kalıyor (800px'te gözlendi). 390px'te footer'ın iki yazısı alt alta diziliyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12)
- 400px'te ana sayfada dikey kaydırma çubuğu içerik genişliğini 385px'e düşürüyor; kaydırma çubuğu

## İnceleme
İnceleyiciler: Claude Code

### Kabul ölçütleri (6/6)
- ✓ Sayfa açılınca başlıkta "D" rozeti ve yanında "Doruk&Yiğit Market" görünür. "Market" turkuaz kalır, "&" doğru karakter olarak görünür (`&amp;` yazısı görünmez). — Header.tsx:18'de `Doruk&amp;Yiğit <strong>Market</strong>` var. JSX içinde `&amp;` tek bir "&" olarak gösterilir. "D" rozeti ve turkuaz `.logo strong` kuralına dokunulmamış.
- ✓ Başlıktaki site adının hesaplanan `font-family` değeri Poppins ile başlar ve `font-weight` değeri 700 olur. — App.css'te `.logo` kuralına `font-family: 'Poppins', system-ui, sans-serif` ve `font-weight: 700` eklenmiş. main.tsx 700 ağırlığını içe aktarıyor.
- ✓ Ürün başlıkları, menü ve altbilgi gibi diğer yazılar `system-ui` yazı tipinde kalır. — Poppins yalnızca `.logo` kuralında geçiyor (grep ile doğrulandı). `:root` yazı tipine dokunulmamış.
- ✓ Sekme başlığı "Doruk&Yiğit Market" olur. — index.html'deki başlık `Doruk&amp;Yiğit Market`. HTML bunu "Doruk&Yiğit Market" olarak gösterir.
- ✓ Altbilgide "© Doruk&Yiğit Market · SpineOS test projesi" yazar. — App.tsx'teki altbilgi `© Doruk&amp;Yiğit Market · SpineOS test projesi`. JSX bunu "&" ile doğru gösterir.
- ✓ `src/` ve `index.html` içinde `Doğuş` araması sonuç vermez. — src/ ve index.html içinde grep "Doğuş" için sonuç vermedi.

### Bulgular
- [minor] `src/main.tsx:3` — Poppins 600 ağırlığı içe aktarılıyor ama `.logo` ve `.logo strong` yalnızca 700 kullanıyor. Kullanılmayan yazı tipi dosyası pakete giriyor. Plan bunu istediği için hata değil, yalnızca gereksiz yük.
