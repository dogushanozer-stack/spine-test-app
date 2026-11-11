<!-- Spine OS pano kartı · SPIN-1 · onay: 11.11.2026 16:14 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-1 · SpineMarket ismi ve logosu DoğuşMarket ismi olarak…

Sprint: Sprint 1

## Kart açıklaması
SpineMarket ismi ve logosu DoğuşMarket ismi olarak değişecek logo D olacak

# Plan: Marka adını DoğuşMarket, logoyu "D" yap

## Amaç
Kullanıcı başlıkta, sekme başlığında ve altbilgide "SpineMarket" yerine "DoğuşMarket" görecek. Başlıktaki logo kutusunda "S" yerine "D" yazacak.

## Bağlam
- `src/components/Header.tsx:16`: logo kutusu `<span className="logo-mark">S</span>`.
- `src/components/Header.tsx:18`: ad iki parça yazılıyor, `Spine<strong>Market</strong>`. "Market" kısmı `.logo strong` kuralıyla (`src/App.css:42`) marka renginde görünüyor.
- `index.html:7`: `<title>SpineMarket</title>`.
- `src/App.tsx:46`: altbilgide `© SpineMarket · SpineOS test projesi` yazıyor.
- `.logo-mark` stili (`src/App.css:46`) tek harf için tasarlanmış, değişmesi gerekmiyor.
- Projede test altyapısı yok (package.json'da test betiği ya da test kütüphanesi bulunmuyor). Doğrulama, eski adın kodda kalmadığını gösteren arama ve arayüz denemesiyle yapılacak.

## Kapsam
**Yapılacak**
- Header'da logo harfi `S` → `D`, ad `Doğuş<strong>Market</strong>` olacak.
- `index.html` başlığı `DoğuşMarket` olacak.
- Altbilgi `© DoğuşMarket · SpineOS test projesi` olacak.

**Kapsam dışı**
- `src/store/ShopProvider.tsx:5-6` içindeki `spine-market:*` localStorage anahtarları. Bunlar değişirse kullanıcıların sepeti ve favorileri kaybolur.
- `package.json` / `package-lock.json` paket adı (`spine-test-app`).
- "SpineOS test projesi" ifadesi. Bu, ürün markasını değil test aracını anlatıyor.
- `public/favicon.svg`. Bu dosya Vite'ın varsayılan simgesi, bugün de "S" logosu değil.

## Kabul ölçütleri
- Uygulama açıldığında başlıkta logo kutusunda "D", yanında "Doğuş**Market**" görünür. "Market" marka renginde kalır.
- Tarayıcı sekmesinin başlığı "DoğuşMarket" olur.
- Altbilgide "© DoğuşMarket · SpineOS test projesi" yazar.
- `src/` ve `index.html` içinde `SpineMarket` ve `Spine<strong>` aranınca sonuç çıkmaz. `spine-market:` anahtarları yerinde kalır.
- "ğ" ve "ş" harfleri bozulmadan görünür. Dosyalar UTF-8 kaydedilir; `index.html` zaten `charset="UTF-8"` tanımlıyor.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform: web (masaüstü tarayıcı). Açma komutu: `npm run dev`.
1. Ana sayfayı (`#/`) aç → başlıkta mor/marka renkli kutuda beyaz "D" var, yanında "DoğuşMarket" yazıyor ve "Market" marka renginde.
2. Sekme başlığına bak → "DoğuşMarket".
3. Sayfanın en altına in → altbilgide "© DoğuşMarket · SpineOS test projesi" var.
4. `#/sepet` sayfasına git, sonra logoya tıkla → ana sayfaya dönülüyor ve logo aynı görünüyor.
5. Pencereyi dar genişliğe (~400px) küçült → "DoğuşMarket" tek satırda kalıyor (`white-space: nowrap`) ve logo kutusu bozulmuyor.

## Test ortamı
Vite geliştirme sunucusu — `npm run dev` — terminalde `Local: http://localhost:5173/` satırı çıkınca hazırdır. Komut kendiliğinden bitmez, `q` ya da Ctrl+C ile kapatılır.

## Adımlar
1. Logo harfini ve adı değiştir — `src/components/Header.tsx` — test: arayüz denemesi 1, 4 ve 5.
2. Sayfa başlığını değiştir — `index.html` — test: arayüz denemesi 2.
3. Altbilgiyi değiştir — `src/App.tsx` — test: arayüz denemesi 3.
4. Eski adın kalmadığını doğrula — test: `grep -rn "SpineMarket\|Spine<strong>" src index.html` sonuç vermemeli.

## Riskler
Uygulama dosyalarının çoğu (Header, App, store, pages vb.) henüz commit edilmemiş. Kartın değişikliği bu commit'lenmemiş işin üzerine yapılacak. Bu dosyaların karta karışmaması için uygulamadan önce mevcut işin ayrıca commit'lenmesi önerilir.

## Varsayımlar
- Ad "Doğuş" + vurgulu "Market" olarak, bugünkü iki renkli yapı korunarak yazılacak.
- Logo kutusunun rengi ve şekli değişmeyecek, yalnızca harf değişecek.
