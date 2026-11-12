<!-- Spine OS pano kartı · SPIN-2 · onay: 12.11.2026 11:04 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-2 · Logo rengini turkuaz mavisi yap

Sprint: Sprint 1

# Plan: Logo rengini turkuaz mavisi yap

## Amaç
Başlıktaki DoğuşMarket logosu (yani "D" rozeti ve "Market" yazısı) turuncu yerine turkuaz mavisi görünecek. Sitenin geri kalanındaki turuncu marka rengi aynen kalacak.

## Bağlam
- Logo `src/components/Header.tsx:15-20` içinde. Yapısı `.logo`, içinde `.logo-mark` ("D") ve `<strong>Market</strong>`.
- Renk `src/App.css:42-44` (`.logo strong { color: var(--brand) }`) ve `src/App.css:46-55` (`.logo-mark { background: var(--brand) }`) içinde tanımlı.
- `--brand: #f2711c` turuncusu `src/index.css:2` içinde tanımlı. `App.css` içinde 22 yerde kullanılıyor (arama çerçevesi, rozetler, butonlar vb.). Bu yüzden `--brand` değiştirilmeyecek, logoya ayrı bir değişken verilecek.
- Projede test altyapısı yok, kontroller lint ve build ile yapılıyor.

## Kapsam
**Yapılacak**
- `src/index.css` içindeki `:root` bloğuna `--logo: #0891b2;` eklenecek.
- `.logo strong` ve `.logo-mark` kuralları `var(--brand)` yerine `var(--logo)` kullanacak.

**Kapsam dışı**
- `--brand` / `--brand-dark` / `--brand-soft` ve diğer turuncu öğeler (butonlar, rozetler, arama odağı).
- Favicon ve `public/` altındaki görseller.
- "Doğuş" yazısının rengi (`#111827`).

## Kabul ölçütleri
- Farkta `:root` içinde `--logo` tanımı görünür. `.logo strong` ve `.logo-mark` kuralları `var(--logo)` kullanır.
- Farkta `--brand` değeri ve başka bir `var(--brand)` kullanımı değişmez.
- Sayfa açılınca "D" rozetinin arka planı ve "Market" yazısı turkuaz, rozetteki "D" beyaz görünür.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform: masaüstü tarayıcı. Açma komutu: `npm run dev`.
1. Ana sayfayı (`#/`) aç. Başlıkta "D" rozetinin arka planı turkuaz (`#0891b2`) ve harf beyaz görünür.
2. "Market" yazısı turkuaz, "Doğuş" yazısı koyu gri görünür.
3. Arama kutusuna tıkla. Odak çerçevesi hâlâ turuncu kalır, yani marka rengi etkilenmemiştir.
4. Sepete bir ürün ekle. Sepet rozeti hâlâ turuncu görünür.
5. `#/sepet` sayfasına geç. Logo aynı turkuaz renkte görünür.

## Test ortamı
Vite geliştirme sunucusu, `npm run dev` ile başlatılır. Komut kendiliğinden bitmez. Konsolda `Local: http://localhost:5173/` satırı görününce sunucu hazırdır.

## Adımlar
1. `--logo: #0891b2;` değişkenini ekle — `src/index.css` — test: `npm run build`
2. `.logo strong` ve `.logo-mark` içinde `var(--brand)` yerine `var(--logo)` yaz — `src/App.css` — test: `npm run lint`, `npm run build` ve Arayüz denemesi

## Riskler
Belirgin risk yok. Renk, beyaz harfle okunaklı kalsın diye daha açık bir turkuaz yerine `#0891b2` olarak seçildi. Bu tonda beyazla kontrast yaklaşık 3,7:1 ve büyük, kalın metin için yeterli.

## Varsayımlar
- "Logo" ile başlıktaki "D" rozeti ve "Market" yazısı kastediliyor, sitenin genel marka rengi değil.
- Turkuaz tonu `#0891b2` olarak seçildi. Başka bir ton istenirse yalnızca `--logo` değeri değişir.
