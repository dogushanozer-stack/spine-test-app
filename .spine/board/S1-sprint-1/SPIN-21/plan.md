<!-- Spine OS pano kartı · SPIN-21 · onay: 16.11.2026 11:33 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-21 · Header'a Sepetim butonunun yanına  "Hızlı Al" buto…

Sprint: Sprint 1

## Kart açıklaması
Header'a Sepetim butonunun yanına  "Hızlı Al" butonu ekle, ürünü sepete ekleyince direk ödeme adımına gitsin

# Plan: Header'a "Hızlı Al" düğmesi (ürün sayfasında)

## Amaç
Kullanıcı bir ürün sayfasındayken header'da, Sepetim'in yanında "Hızlı Al" düğmesini görür. Düğmeye basınca ürün sayfada seçili adetle sepete eklenir ve kullanıcı sepet sayfasına uğramadan doğrudan ödeme adımına (`/odeme`) gider. Diğer sayfalarda düğme görünmez.

## Bağlam
- `src/components/Header.tsx:44-55`: `header-actions` içinde Favoriler ve Sepetim bağlantıları var (`header-link`, `header-icon`, `badge`). Header'ın rota ve ürün bilgisi yok; yalnızca `search` ve `onSearch` prop'larını alıyor.
- `src/App.tsx:16-44`: `Routes` rotayı `useRoute()` ile okuyor ve hem Header'ı hem sayfayı çiziyor. Header ile sayfanın ortak üst bileşeni bu.
- `src/pages/ProductPage.tsx:12`: adet `useState(1)` ile yerel tutuluyor. 1 ile 10 arasında sınırlı (`:62-67`). "Sepete Ekle" `addToCart(product.id, quantity)` çağırıp `navigate('/sepet')` yapıyor (`:70-78`). Bileşen `key={route.id}` ile çiziliyor, bu yüzden ürün değişince adet sıfırlanıyor.
- `src/store/ShopProvider.tsx:41-50`: `addToCart` ürün sepette varsa adedini artırıyor, yoksa ürünü ekliyor.
- `src/router.ts:17`: `/odeme` → `checkout`. `CheckoutPage` sepet boşsa boş durum gösteriyor (`src/pages/CheckoutPage.tsx:49-59`).
- `src/App.css:89-111, 828-834`: mobilde `.header-link` içindeki yazı gizleniyor, yalnızca ikon kalıyor.
- Projede test altyapısı yok (test dosyası ve test script'i bulunmuyor).

## Kapsam
**Yapılacak**
- Ürün sayfasındaki adet state'i `Routes`'a taşınacak. Değer, ürün kimliğiyle birlikte `{ id, quantity }` olarak tutulacak; böylece ürün değişince adet yine 1'e döner. `ProductPage` adedi `quantity` ve `onQuantityChange` prop'larıyla alacak.
- `Header`'a isteğe bağlı bir `onQuickBuy?: () => void` prop'u eklenecek. Prop verilmişse Sepetim'in sağında "⚡ Hızlı Al" düğmesi görünecek.
- `Routes` yalnızca `route.name === 'product'` olduğunda ve ürün var olduğunda (`getProduct`) `onQuickBuy` verecek. Bu işlev `addToCart(id, quantity)` çağırıp `navigate('/odeme')` yapacak.
- `App.css`'e `.header-quick` stili eklenecek: `header-link` görünümünde bir `<button>` (kenarlık ve arka plan sıfır, `font: inherit`, `cursor: pointer`), marka rengiyle vurgulu. Mobilde var olan kural sayesinde yalnızca ⚡ ikonu kalacak.

**Kapsam dışı**
- Ürün kartlarına (`ProductCard`) veya ürün sayfasının gövdesine ayrı bir "Hızlı Al" düğmesi.
- Ödeme sayfası, sepet mantığı (`ShopProvider`) ve router değişiklikleri.
- Çalışma ağacındaki commit edilmemiş değişiklikler (`src/index.css`, `test-ana-dal.txt` silinmesi). Bunlara dokunulmayacak.
- Test altyapısı (vitest vb.) kurmak.

## Kabul ölçütleri
- `#/urun/<id>` sayfasında header'da Sepetim'in sağında "Hızlı Al" düğmesi görünür.
- Ana sayfa, sepet, favoriler, ödeme ve sipariş tamam sayfalarında, ayrıca var olmayan ürün sayfasında (`#/urun/9999`) düğme görünmez.
- Ürün sayfasında adet 3'e çıkarılıp "Hızlı Al"a basılınca o ürün sepete 3 adet eklenir, adres `#/odeme` olur ve sipariş özetinde bu ürün görünür.
- Ürün sepette zaten 1 adetse ve sayfada adet 2 seçiliyse, "Hızlı Al" sonrasında sepette 3 adet olur. Bu, var olan `addToCart` davranışıdır.
- Başka bir ürüne geçince (ör. benzer ürünler) seçili adet 1'e döner.
- "Sepete Ekle" eskisi gibi seçili adetle ekleyip `#/sepet`'e gider.
- Mobil genişlikte düğmede yalnızca ⚡ ikonu görünür ve düğmenin `aria-label="Hızlı Al"` etiketi vardır.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform: web (masaüstü tarayıcı). Açma komutu: `npm run dev`, adres `http://localhost:5173/`.
1. Ana sayfayı aç → header'da Favoriler ve Sepetim var, "Hızlı Al" yok.
2. Bir ürün kartına tıkla → `#/urun/<id>` açılır ve Sepetim'in sağında "⚡ Hızlı Al" görünür.
3. Adeti "+" ile 3 yap ve "Hızlı Al"a bas → adres `#/odeme` olur, özette ürün 3 adet görünür, Sepetim rozeti 3 artar.
4. Header'dan Sepetim'e git → "Hızlı Al" görünmez.
5. Bir ürün sayfasına dön, adeti 2 yap, "Benzer Ürünler"den başka bir ürüne geç → adet 1 görünür.
6. `#/urun/9999` adresine git → "Ürün bulunamadı" görünür ve "Hızlı Al" yoktur.
7. Ürün sayfasında "Sepete Ekle"ye bas → adres `#/sepet` olur.
8. Pencereyi mobil genişliğe (≤ kırılma noktası) daralt ve bir ürün sayfası aç → düğmede yalnızca ⚡ görünür ve düğme taşmaz. Sonra pencereyi eski genişliğine getir.

## Test ortamı
Vite geliştirme sunucusu — `npm run dev` (bitmeyen komut) — `http://localhost:5173/` açılıp ana sayfa ürün kartları görünüyor olmalı. Sepet `localStorage`'da (`spine-market:cart`) tutulduğu için denemeye boş sepetle başlamak adına bu anahtar temizlenir.

## Adımlar
1. Adet state'ini `Routes`'a taşı ve `ProductPage`'e `quantity`/`onQuantityChange` prop'larını ekle — `src/App.tsx`, `src/pages/ProductPage.tsx` — test: `npm run build` (tip kontrolü) ve Arayüz denemesi 5 ile 7.
2. `Header`'a `onQuickBuy?` prop'unu ve koşullu "⚡ Hızlı Al" `<button>`'unu ekle (`aria-label`, metin `<span>` içinde) — `src/components/Header.tsx` — test: Arayüz denemesi 1, 2 ve 4.
3. `Routes`'ta yalnızca var olan ürün sayfasında `onQuickBuy` ver; işlev `addToCart` ve ardından `navigate('/odeme')` çağırsın — `src/App.tsx` — test: Arayüz denemesi 3 ve 6.
4. `.header-quick` stilini ekle — `src/App.css` — test: Arayüz denemesi 2 ve 8, `npm run lint`.

## Riskler
Belirgin risk yok. Adet state'i taşınırken ürün değişince sıfırlanma davranışı bozulabilir; bunu `{ id, quantity }` eşleşmesi ve Arayüz denemesi 5 koruyor.

## Varsayımlar
- Düğme metni "Hızlı Al", ikonu ⚡; Sepetim'den ayırt edilsin diye marka rengiyle vurgulanır.
- Seçilebilecek adet ürün sayfasındaki 1–10 sınırını izler.
- Proje test altyapısı içermediği için yeni davranış otomatik testle değil, tip kontrolü, lint ve Arayüz denemesiyle doğrulanır.
