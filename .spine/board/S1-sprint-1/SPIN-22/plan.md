<!-- Spine OS pano kartı · SPIN-22 · onay: 16.11.2026 12:07 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-22 · Search altına e ticaret sitelerinde en çok aranan…

Sprint: Sprint 1

## Kart açıklaması
Search altına e ticaret sitelerinde en çok aranan kelimelerden 5 tanesini koy

# Plan: Arama kutusunun altına "popüler aramalar" etiketleri

## Amaç
Header'daki arama kutusunun hemen altında e-ticarette sık aranan 5 kelime tıklanabilir etiket olarak durur. Kullanıcı bir etikete tıklayınca o kelimeyle arama yapılır, yazmasına gerek kalmaz.

## Bağlam
- Arama formu `src/components/Header.tsx:22-42` içinde. `search` ve `onSearch` prop'ları `src/App.tsx:18,44`'ten geliyor. Input değişince `onSearch(value)` çağrılıyor, ana sayfada değilse `navigate('/')` ile ana sayfaya dönülüyor (`Header.tsx:34-37`).
- Filtreleme `src/pages/HomePage.tsx:68-77`'de yapılıyor: ürün adı, marka ve kategori adı, `normalize` sonrası `includes` ile aranıyor.
- Stiller `src/App.css:60-87` (`.search`) ve mobil kuralı `src/App.css:823-826` (`.search { order: 3; flex-basis: 100% }`). `.header-inner` flex düzeninde.
- Projede test çalıştırıcısı yok (`package.json`'da yalnızca `lint` ve `build` var). Doğrulama arayüz denemesiyle yapılacak.

## Kapsam
**Yapılacak**
- Sabit 5 kelimelik bir liste: `kulaklık`, `akıllı saat`, `spor ayakkabı`, `parfüm`, `powerbank`. Hepsi katalogda en az bir ürünle eşleşiyor (id 5, 6, 9, 18, 8).
- Header'da `.search` formunu bir sarmalayıcıya (`.search-area`) almak ve altına "Popüler:" etiketiyle birlikte 5 `<button type="button">` chip eklemek.
- Chip'e tıklanınca `onSearch(kelime)` çağrılır, ana sayfada değilse `navigate('/')` çalışır (input'taki davranışın aynısı).
- Masaüstü ve mobil (≤860px) için stil. Mobilde sarmalayıcı `order: 3; flex-basis: 100%` alır, chip'ler yatayda kaydırılabilir ya da sarar.

**Kapsam dışı**
- Gerçek arama verisi ya da analitik entegrasyonu, dinamik veya kişiselleştirilmiş liste.
- Arama algoritmasında değişiklik.
- Çalışma ağacındaki commit edilmemiş `src/index.css` ve `test-ana-dal.txt` değişiklikleri. Bunlara dokunulmaz.

## Kabul ölçütleri
- Header'da arama kutusunun hemen altında "Popüler:" etiketi ve sırasıyla kulaklık, akıllı saat, spor ayakkabı, parfüm, powerbank chip'leri görünür.
- Ana sayfada "kulaklık" chip'ine tıklayınca input değeri `kulaklık` olur, başlık `"kulaklık" için sonuçlar` olur ve "Kablosuz Kulak İçi Kulaklık" listelenir.
- Sepet ya da ürün sayfasındayken bir chip'e tıklayınca ana sayfaya dönülür ve o kelimenin sonuçları gösterilir.
- 5 chip'in her biri en az bir ürün döndürür, hiçbiri "ürün bulunamadı" göstermez.
- Chip'ler klavyeyle odaklanabilir (`button`) ve Enter/Space ile aynı aramayı tetikler.
- 860px altında chip'ler arama kutusunun altında tam genişlikte kalır ve header'ı taşırmaz.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform web, açma komutu `npm run dev`.
1. `http://localhost:5173/#/` açılır. Arama kutusunun altında "Popüler:" ve 5 chip görünür.
2. "kulaklık" chip'ine tıklanır. Input'ta `kulaklık` yazar, başlık `"kulaklık" için sonuçlar` olur, Kablosuz Kulak İçi Kulaklık kartı listede görünür.
3. Sırayla "akıllı saat", "spor ayakkabı", "parfüm" ve "powerbank" chip'lerine tıklanır. Her birinde en az bir ürün kartı görünür, boş durum mesajı çıkmaz.
4. `#/sepet` açılır ve "parfüm" chip'ine tıklanır. URL `#/` olur, Kadın Parfüm 50 ml listelenir.
5. Logoya tıklanır. Arama temizlenir, chip'ler görünmeye devam eder.
6. Pencere 375px genişliğe daraltılır. Chip'ler arama kutusunun altında durur, yatay taşma (sayfa kaydırma çubuğu) oluşmaz. Ardından pencere eski genişliğe getirilir.

## Test ortamı
Vite geliştirme sunucusu: `npm run dev` (bitmeyen komut). Hazırlık kontrolü: terminalde `Local: http://localhost:5173/` yazısı görünür.

## Adımlar
1. Popüler kelime listesini sabit olarak ekle: `export const POPULAR_SEARCHES = ['kulaklık', 'akıllı saat', 'spor ayakkabı', 'parfüm', 'powerbank']`. Dosya `src/data/products.ts`. Test: arayüz denemesinin 3. adımı (her kelime sonuç döndürür).
2. Formu `<div className="search-area">` ile sar, altına `<div className="popular-searches" aria-label="Popüler aramalar">` içinde "Popüler:" ve chip butonlarını ekle. Tıklamada `onSearch(term)` çağrılsın, `#/` dışındaysa `navigate('/')` çalışsın. Dosya `src/components/Header.tsx`. Test: arayüz denemesinin 2. ve 4. adımı.
3. Stilleri yaz. `.search-area { flex: 1; display: flex; flex-direction: column; gap: 6px }`. `.search` içindeki `flex: 1` sarmalayıcıya taşınır. `.popular-searches` ve `.popular-chip` küçük, yuvarlak, `--brand-soft` hover'lı olur. Mobil kuralı `.search` yerine `.search-area`'ya uygulanır. Dosya `src/App.css`. Test: arayüz denemesinin 1. ve 6. adımı.

## Riskler
Mobil düzende `.search`'e bağlı `order` ve `flex-basis` kuralı sarmalayıcıya taşınmazsa header bozulur. Önlem olarak 6. adımda dar ekran kontrolü var. Sticky header biraz yükselir, içeriğin üstünü örtmediği aynı denemede gözlenir.

## Varsayımlar
- "En çok aranan" verisi için gerçek kaynak yok. Liste, Türkiye e-ticaretinde yaygın aranan ve katalogda karşılığı olan kelimelerden statik olarak seçildi.
- Chip'ler her sayfada header'da görünür, yalnızca ana sayfaya özel değildir.
