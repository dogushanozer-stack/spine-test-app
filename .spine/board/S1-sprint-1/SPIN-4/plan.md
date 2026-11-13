<!-- Spine OS pano kartı · SPIN-4 · onay: 12.11.2026 12:22 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-4 · Sitenin adını "Doruk&Yiğit Market" yap, yazının st…

Sprint: Sprint 1

## Kart açıklaması
Sitenin adını "Doruk&Yiğit Market" yap, yazının stilini değiştir

# Plan: Site adını "Doruk&Yiğit Market" yap, logo yazısını Poppins kalın yap

## Amaç
Kullanıcı başlıkta, sekme başlığında ve altbilgide "DoğuşMarket" yerine "Doruk&Yiğit Market" görecek. Başlıktaki site adı kalın, yuvarlak hatlı Poppins yazı tipiyle görünecek. Sitenin geri kalan yazıları değişmeyecek.

## Bağlam
- `src/components/Header.tsx:16-19`: logo `.logo-mark` rozetinden ("D") ve `Doğuş<strong>Market</strong>` adından oluşuyor. "Market" kısmı `.logo strong` kuralıyla turkuaz (`var(--logo)`) görünüyor. Bu SPIN-2'de yapıldı.
- `index.html:7`: `<title>DoğuşMarket</title>`.
- `src/App.tsx:46`: `© DoğuşMarket · SpineOS test projesi`.
- `src/App.css` içindeki `.logo` kuralı: `font-size: 22px`, `white-space: nowrap`. Yazı tipi tanımı yok, `:root` içindeki `system-ui` yazı tipini kullanıyor.
- Projede şu an dışarıdan yüklenen bir yazı tipi yok.
- SPIN-1 ile aynı kalıp izlenecek: ad iki parça yazılacak, vurgulu "Market" `<strong>` içinde kalacak.

## Kapsam
**Yapılacak**
- Başlıktaki ad `Doruk&Yiğit <strong>Market</strong>` olacak. Rozet harfi "D" kalacak.
- `index.html` sekme başlığı `Doruk&amp;Yiğit Market` olacak.
- Altbilgi `© Doruk&Yiğit Market · SpineOS test projesi` olacak.
- Poppins yazı tipi `@fontsource/poppins` paketiyle projeye eklenecek. Paketin 600 ve 700 ağırlıkları `src/main.tsx` içinde içe aktarılacak.
- `.logo` kuralına `font-family: 'Poppins', system-ui, sans-serif; font-weight: 700; letter-spacing: -0.01em;` eklenecek.

**Kapsam dışı**
- Sitenin genel yazı tipi (`src/index.css` içindeki `:root`).
- Logo renkleri ve rozetin rengi.
- `spine-market:*` localStorage anahtarları ve paket adı.

## Kabul ölçütleri
- Sayfa açılınca başlıkta "D" rozeti ve yanında "Doruk&Yiğit Market" görünür. "Market" turkuaz kalır, "&" doğru karakter olarak görünür (`&amp;` yazısı görünmez).
- Başlıktaki site adının hesaplanan `font-family` değeri Poppins ile başlar ve `font-weight` değeri 700 olur.
- Ürün başlıkları, menü ve altbilgi gibi diğer yazılar `system-ui` yazı tipinde kalır.
- Sekme başlığı "Doruk&Yiğit Market" olur.
- Altbilgide "© Doruk&Yiğit Market · SpineOS test projesi" yazar.
- `src/` ve `index.html` içinde `Doğuş` araması sonuç vermez.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform web, açma komutu `npm run dev`.
1. Ana sayfayı (`#/`) aç. Başlıkta turkuaz "D" rozeti ve yanında "Doruk&Yiğit Market" görünür. Ad kalın Poppins yazı tipindedir ve "Market" turkuazdır.
2. Site adı öğesinin hesaplanan stiline bak. `font-family` Poppins ile başlar, `font-weight` 700'dür.
3. Bir ürün kartının başlığına bak. Yazı tipi Poppins değildir, sistem yazı tipidir.
4. Sekme başlığına bak. "Doruk&Yiğit Market" yazar.
5. Sayfanın en altına in. Altbilgide "© Doruk&Yiğit Market · SpineOS test projesi" yazar.
6. `#/sepet` sayfasını aç. Logo aynı stilde görünür.
7. Pencereyi yaklaşık 400px genişliğe küçült. Ad tek satırda kalır, Favoriler ve Sepet simgeleriyle çakışmaz, yatay kaydırma çubuğu çıkmaz. Sonra pencereyi eski genişliğine getir.

## Test ortamı
Vite geliştirme sunucusu — `npm run dev` (bitmeyen komut) — `http://localhost:5173` açılınca hazırdır.

## Adımlar
1. Poppins paketini ekle — `package.json`, `package-lock.json` (`npm install @fontsource/poppins`) — test: `npm run build`.
2. Yazı tipi dosyalarını içe aktar: `import '@fontsource/poppins/600.css'` ve `import '@fontsource/poppins/700.css'` — `src/main.tsx` — test: derleme.
3. `.logo` kuralına Poppins yazı tipi, 700 ağırlık ve harf aralığını ekle — `src/App.css` — test: arayüz denemesinin 2. ve 3. adımı.
4. Adı değiştir: `Doruk&amp;Yiğit <strong>Market</strong>` — `src/components/Header.tsx:18` — test: arayüz denemesinin 1. adımı.
5. Sekme başlığını `Doruk&amp;Yiğit Market` yap — `index.html:7` — test: arayüz denemesinin 4. adımı.
6. Altbilgiyi `© Doruk&amp;Yiğit Market · SpineOS test projesi` yap — `src/App.tsx:46` — test: arayüz denemesinin 5. adımı.
7. Eski adın kalmadığını doğrula — test: `grep -rn "Doğuş" src index.html` sonuç vermemeli.

## Riskler
- Yeni ad daha uzun ve `white-space: nowrap` kuralıyla tek satırda kalıyor. Dar ekranda başlık taşabilir. Önlem: arayüz denemesinin 7. adımı. Taşarsa yalnızca 860px altındaki kuralda `.logo` yazı boyutu küçültülür.
- SPIN-1 ve SPIN-2'de kaydedilen akışlar logo bağlantısını "D DoğuşMarket" adıyla buluyor. Bu akışlar yeni adla eşleşmeyecek. Akışlar yeni ada göre güncellenmeli.
- Yeni bir npm bağımlılığı ekleniyor. Yazı tipi pakette geldiği için dış ağa istek atılmıyor.

## Varsayımlar
- Rozet harfi "D" kalıyor. "Doruk" adıyla uyumlu olduğu için değiştirilmiyor.
- Ad, istekte yazıldığı gibi "Doruk&Yiğit" ile "Market" arasında boşlukla yazılıyor.
- Poppins Google Fonts bağlantısıyla değil `@fontsource/poppins` paketiyle ekleniyor. Böylece çevrimdışı da çalışır ve üçüncü tarafa istek gitmez.
- Yazı tipi tüm `.logo` öğesine uygulanıyor. Rozetteki "D" de Poppins olacak ve logo kendi içinde tutarlı görünecek.
