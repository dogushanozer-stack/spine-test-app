<!-- Spine OS pano kartı · SPIN-18 · onay: 13.11.2026 11:38 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-18 · İki tane daha banner ekle farklı renklerde olsun

Sprint: Sprint 1

# Plan: Ana sayfaya iki farklı renkte kampanya banner'ı ekleme

## Amaç
Ana sayfada mevcut turuncu-pembe çiçek banner'ının yanına farklı renklerde iki kampanya banner'ı daha gelecek. Kullanıcı daha fazla kategori kampanyası görecek ve banner'dan doğrudan o kategoriye geçebilecek.

## Bağlam
- Mevcut banner `src/pages/HomePage.tsx:54-68`'de duruyor. Yalnızca arama ve kategori boşken `<section className="hero">` olarak çiziliyor. Butonu `onCategory('cicek')` çağırıyor.
- Stiller `src/App.css:126-163` aralığında: `.hero` için `linear-gradient(120deg, #f2711c, #f43f5e)`, ayrıca `.hero-kicker`, `.hero-sub` ve `.hero-art` sınıfları var. Mobil kuralı `src/App.css:790-796`'da; orada `.hero-art` gizleniyor ve padding 24px'e iniyor.
- `.btn-light` (`src/App.css:197`) yazı rengi olarak `var(--brand-dark)` (turuncu) kullanıyor. Bu renk farklı renkteki banner'larda uyumsuz kalır.
- Kategoriler `src/data/products.ts:4-9`'da tanımlı: `cicek`, `elektronik`, `moda`, `ev`, `kozmetik`, `hediye`.
- Projede test altyapısı yok. Doğrulama derleme, lint ve arayüz denemesiyle yapılacak.

## Kapsam
**Yapılacak**
- Banner verisini `HomePage.tsx` içinde küçük bir dizi olarak tanımlamak: kicker, başlık, alt metin, buton metni, kategori, emoji ve renk varyantı. Mevcut çiçek banner'ı metni ve rengi değişmeden bu dizinin ilk öğesi olacak.
- İki yeni banner eklemek:
  - **Elektronik**, mavi-mor (`#2563eb → #7c3aed`), 🎧, butonu `onCategory('elektronik')` çağırır.
  - **Ev & Yaşam**, yeşil-turkuaz (`#059669 → #0d9488`), 🛋️, butonu `onCategory('ev')` çağırır.
- CSS'te `.hero--blue` ve `.hero--green` varyant sınıfları ile banner'ları saran `.hero-stack` yerleşimini eklemek. Ana banner tam genişlikte kalacak; iki yeni banner altında 2 sütunlu ızgarada daha kompakt duracak.
- Her varyantta buton yazı rengini banner rengiyle uyumlu hâle getirmek.
- Mobilde (`@media`) iki yeni banner'ı tek sütuna indirmek.

**Kapsam dışı**
- Kaydırmalı karusel veya otomatik geçiş.
- Banner'ları yönetmek için veri veya API katmanı.
- Görsel ya da illüstrasyon dosyası eklemek (emoji kalmaya devam edecek).
- Test altyapısı kurmak.

## Kabul ölçütleri
- Arama ve kategori boşken ana sayfada 3 banner görünür: turuncu-pembe (çiçek), mavi-mor (elektronik) ve yeşil (ev).
- Çiçek banner'ının metni ve rengi şimdikiyle aynı kalır.
- "Elektronik" banner'ının butonuna tıklanınca liste Elektronik kategorisine süzülür ve başlık "Elektronik" olur.
- "Ev & Yaşam" banner'ının butonuna tıklanınca liste Ev & Yaşam kategorisine süzülür.
- Arama yapıldığında ya da kategori seçildiğinde üç banner birlikte gizlenir (mevcut koşul korunur).
- Dar ekranda (≤ mevcut breakpoint) yeni banner'lar alt alta durur ve emojiler gizlenir.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform web (masaüstü tarayıcı), açma komutu `npm run dev`.
1. `http://localhost:5173` adresini aç. Üstte tam genişlikte turuncu-pembe çiçek banner'ı, altında yan yana mavi-mor Elektronik ve yeşil Ev & Yaşam banner'ları görünür. Yazılar beyaz ve okunaklı, butonlar beyaz zeminli ve yazı renkleri banner'la uyumlu.
2. Elektronik banner'ının butonuna tıkla. Banner'lar kaybolur, liste başlığı "Elektronik" olur ve yalnızca elektronik ürünler listelenir.
3. Kategori seçimini kaldırıp ana sayfaya dön, ardından Ev & Yaşam butonuna tıkla. Başlık "Ev & Yaşam" olur.
4. Ana sayfaya dön ve arama kutusuna "kulaklık" yaz. Üç banner birlikte gizlenir.
5. Pencereyi mobil genişliğe daralt. Yeni banner'lar alt alta durur, emojiler gizlenir ve uzun başlık taşmadan satıra kırılır.
6. Pencereyi eski genişliğine getir. Yerleşim 1. adımdaki hâline döner.

## Test ortamı
Vite geliştirme sunucusu: `npm run dev`. Bu komut kendiliğinden bitmez. Terminalde `Local: http://localhost:5173/` satırı görününce sunucu hazırdır.

## Adımlar
1. `banners` dizisini ve `Banner` tipini tanımla, mevcut statik `<section className="hero">` bloğunu bu dizi üzerinden `map` ile çiz. Dosya: `src/pages/HomePage.tsx`. Kontrol: `npm run build`.
2. İki yeni banner girdisini (elektronik ve ev) ekle, banner'ları `.hero-stack` sarmalayıcısına al. Dosya: `src/pages/HomePage.tsx`. Kontrol: `npm run lint`.
3. `.hero-stack` ızgarasını, `.hero--blue` ve `.hero--green` gradyanlarını, varyanta göre `.btn-light` yazı rengini ve yeni banner'ların kompakt ölçülerini (daha küçük `h1` ve emoji) ekle. Dosya: `src/App.css`, Hero bölümü. Kontrol: arayüz denemesinin 1. adımı.
4. Mobil kuralına `.hero-stack`'i tek sütuna indiren satırı ekle. Dosya: `src/App.css:790` civarı. Kontrol: arayüz denemesinin 5. adımı.

## Riskler
Belirgin risk yok. Yalnızca sunum katmanı değişiyor.

## Varsayımlar
- Yerleşim: çiçek banner'ı tam genişlikte kalır, iki yeni banner altında yan yana durur. Üç tam genişlik banner'ı üst üste dizmek ürün listesini fazla aşağı iterdi.
- Yeni banner'ların kategorileri, metinleri ve renkleri (mavi-mor Elektronik, yeşil Ev & Yaşam) benim seçimim. Metinler örnek kampanya metinleri olacak: Elektronik için "Kulaklıklarda %30'a varan indirim", Ev & Yaşam için "Evini yenile, kargo bedava".
