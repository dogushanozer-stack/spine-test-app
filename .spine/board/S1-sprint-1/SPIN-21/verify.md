# SPIN-21 · Doğrulama

Son güncelleme: 16.11.2026 11:39

## Kontroller
- ✓ Lint: Geçti

## Arayüz testi · geçti
Test eden: Claude Code
Ölçüm: 4 dk · 23 model isteği · 36 araç çağrısı · 97k token

### Adımlar
- ✓ 1. Ana sayfayı aç → header'da Favoriler ve Sepetim var, "Hızlı Al" yok. — geçti — Ana sayfada Favoriler ve Sepetim var, Hizli Al dugmesi ve metni yok — `.spine/board/S1-sprint-1/SPIN-21/shots/01-ana-sayfa.png`
- ✓ 2. Bir ürün kartına tıkla → `#/urun/<id>` açılır ve Sepetim'in sağında "⚡ Hızlı Al" görünür. — geçti — Ilk karttaki ad baglantisi #/urun/1 acti, Sepetim sagında turuncu ⚡ Hizli Al gorunuyor — `.spine/board/S1-sprint-1/SPIN-21/shots/02-urun-hizli-al.png`
- ✓ 3. Adeti "+" ile 3 yap ve "Hızlı Al"a bas → adres `#/odeme` olur, özette ürün 3 adet görünür, Sepetim rozeti 3 artar. — geçti — Adet 3 yapilip Hizli Al basilinca #/odeme acildi, rozet 0dan 3e cikti, Urunler 1.947 TL = 3 x 649. Ozet urun satiri listelemiyor (mevcut tasarim) — `.spine/board/S1-sprint-1/SPIN-21/shots/04-odeme.png`
- ✓ 4. Header'dan Sepetim'e git → "Hızlı Al" görünmez. — geçti — Odemeden header Sepetim ile #/sepet acildi, Hizli Al dugmesi ve metni yok — `.spine/board/S1-sprint-1/SPIN-21/shots/05-sepet-hizli-al-yok.png`
- ✓ 5. Bir ürün sayfasına dön, adeti 2 yap, "Benzer Ürünler"den başka bir ürüne geç → adet 1 görünür. — geçti — #C:/Program Files/Git/urun/1de adet 2 yapildi, Benzer Urunlerden Beyaz Orkideye gecildi (#/urun/2), adet 1 ve Hizli Al gorunuyor — `.spine/board/S1-sprint-1/SPIN-21/shots/07-benzer-urun-adet-1.png`
- ✓ 6. `#/urun/9999` adresine git → "Ürün bulunamadı" görünür ve "Hızlı Al" yoktur. — geçti — #/urun/9999 Urun bulunamadi gosteriyor, header'da Hizli Al yok — `.spine/board/S1-sprint-1/SPIN-21/shots/08-urun-bulunamadi.png`
- ✓ 7. Ürün sayfasında "Sepete Ekle"ye bas → adres `#/sepet` olur. — geçti — Adet 2 ile Sepete Ekle #/sepete gitti, sepette 2 adet ve rozet 2, Hizli Al yok — `.spine/board/S1-sprint-1/SPIN-21/shots/09-sepete-ekle.png`
- ✓ 8. Pencereyi mobil genişliğe (≤ kırılma noktası) daralt ve bir ürün sayfası aç → düğmede yalnızca ⚡ görünür ve düğme taşmaz. Sonra pencereyi eski genişliğine getir. — geçti — 390 ve 320 pxde yalniz ⚡ gorunuyor (metin display none), dugme 49x43, scrollWidth=clientWidth, tasma yok. 1280e donunce metin geri geldi — `.spine/board/S1-sprint-1/SPIN-21/shots/10-mobil-390.png`

### Tasarım
- İyileştirme — Ürün sayfası header'ı — "Hızlı Al" eklenince 1280 px'te arama kutusu 641 px'ten 530 px'e daralıyor. Ana sayfa ile ürün sayfası arasında geçerken arama kutusu boyut değiştiriyor. — beklenen: sayfalar arasında header düzeni sabit kalsın — `.spine/board/S1-sprint-1/SPIN-21/shots/01-ana-sayfa.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/02-urun-hizli-al.png`
- İyileştirme — Ödeme sayfası — Sipariş özetinde ürün ve adet satırları yok, yalnızca tutarlar var. Hızlı Al'la sepeti atlayan kullanıcı ne aldığını göremiyor. Ödeme kartın kapsamı dışında. — `.spine/board/S1-sprint-1/SPIN-21/shots/04-odeme.png`
- Kapsam dışı — Ürün sayfası 880 px — "Güvenli ödeme" satırı ürün kartının alt kenarından taşıyor. Kart bu sayfanın yerleşimini değiştirmedi. — beklenen: liste kartın içinde kalsın — `.spine/board/S1-sprint-1/SPIN-21/shots/12-880.png`

### Sorular
1. Ürün sayfasından çıkıp aynı ürüne dönünce seçili adet korunmalı mı, yoksa her açılışta 1'den mi başlamalı? — öneri: değişiklikten önceki gibi her açılışta 1'den başlasın.
   Yanıt bekliyor

Kartı kullanıcı gözüyle test ettim; kod değiştirmedim. Planın 8 adımının hepsi geçti. Bir davranış değişikliği buldum, adımları düşürmüyor ama uygulayıcının bakması gerekiyor (aşağıda).

Ortam: ✓ web — http://localhost:5174 HTTP 200 döndü; `/src/components/Header.tsx` dosyasının `_jsxFileName` değeri bu kopyanın yolunu gösteriyor.

✓ 1. Ana sayfa — Favoriler ve Sepetim var; "Hızlı Al" düğmesi de metni de yok. — `.spine/board/S1-sprint-1/SPIN-21/shots/01-ana-sayfa.png`
✓ 2. Ürün kartı — İlk karttaki ad bağlantısı `#/urun/1` sayfasını açtı. Sepetim'in sağında turuncu "⚡ Hızlı Al" görünüyor. — `.spine/board/S1-sprint-1/SPIN-21/shots/02-urun-hizli-al.png`
✓ 3. Adet 3 + Hızlı Al — Adres `#/odeme` oldu, Sepetim rozeti 0'dan 3'e çıktı. Özette Ürünler ₺1.947,00 yazıyor, bu da 3 × ₺649. Sipariş özeti ürün satırlarını hiç listelemiyor; adedi tutardan ve rozetten doğruladım. — `.spine/board/S1-sprint-1/SPIN-21/shots/03-adet-3.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/04-odeme.png`
✓ 4. Sepetim — Header'dan `#/sepet` açıldı, "Hızlı Al" yok. Favoriler'de de yok. — `.spine/board/S1-sprint-1/SPIN-21/shots/05-sepet-hizli-al-yok.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/14-favoriler.png`
✓ 5. Benzer Ürünler — `#/urun/1`'de adet 2 yapıldı, "Beyaz Orkide"ye geçildi (`#/urun/2`). Adet 1 gösteriyor, "Hızlı Al" görünüyor. — `.spine/board/S1-sprint-1/SPIN-21/shots/06-adet-2-benzer.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/07-benzer-urun-adet-1.png`
✓ 6. `#/urun/9999` — "Ürün bulunamadı." görünüyor, header'da "Hızlı Al" yok. — `.spine/board/S1-sprint-1/SPIN-21/shots/08-urun-bulunamadi.png`
✓ 7. Sepete Ekle — Adet 2 ile basınca adres `#/sepet` oldu; sepette 2 adet var, rozet 2. — `.spine/board/S1-sprint-1/SPIN-21/shots/09-sepete-ekle.png`
✓ 8. Mobil — 390 ve 320 px'te düğmede yalnızca ⚡ görünüyor; "Hızlı Al" yazısı gizli, `aria-label="Hızlı Al"` duruyor. Düğme 49×43 px ve en sağda: 390 px'te sağ kenarı 359'da, görünen genişlik 375. Yatay taşma yok (`scrollWidth = clientWidth`: 375 ve 305). 880 ve 1280 px'te metin geri geliyor. Konsolda hata ya da uyarı yok. — `.spine/board/S1-sprint-1/SPIN-21/shots/10-mobil-390.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/11-mobil-320.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/12-880.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/13-geri-1280.png`

**Regresyon gözlemi (adımları düşürmüyor, uygulayıcı bakmalı):** Ürün sayfasından başka bir sayfaya gidip aynı ürüne dönünce eski adet kalıyor. `#/urun/1`'de adet 3 yaptım, `#/favoriler`'e gittim, `#/urun/1`'e döndüm: adet 3 görünüyor. Değişiklikten önce adet `ProductPage` içinde tutuluyordu ve her açılışta 1'den başlıyordu. Şimdi `Routes`'taki seçim, kimlik aynı kaldıkça korunuyor. Kullanıcı bunu fark etmeden "Hızlı Al"a basarsa beklediğinden fazla adet ekler. Beklenen: ürün sayfası her açılışta adet 1 göstermeli; seçim rota değişince sıfırlanmalı. — `.spine/board/S1-sprint-1/SPIN-21/shots/15-ayni-urune-donus-adet-3.png`

## Tasarım
- İyileştirme — Ürün sayfası header'ı — "Hızlı Al" eklenince 1280 px'te arama kutusu 641 px'ten 530 px'e daralıyor. Ana sayfa ile ürün sayfası arasında geçerken arama kutusu boyut değiştiriyor. — beklenen: sayfalar arasında header düzeni sabit kalsın — `.spine/board/S1-sprint-1/SPIN-21/shots/01-ana-sayfa.png`, `.spine/board/S1-sprint-1/SPIN-21/shots/02-urun-hizli-al.png`
- İyileştirme — Ödeme sayfası — Sipariş özetinde ürün ve adet satırları yok, yalnızca tutarlar var. Hızlı Al'la sepeti atlayan kullanıcı ne aldığını göremiyor. Ödeme kartın kapsamı dışında. — `.spine/board/S1-sprint-1/SPIN-21/shots/04-odeme.png`
- Kapsam dışı — Ürün sayfası 880 px — "Güvenli ödeme" satırı ürün kartının alt kenarından taşıyor. Kart bu sayfanın yerleşimini değiştirmedi. — beklenen: liste kartın içinde kalsın — `.spine/board/S1-sprint-1/SPIN-21/shots/12-880.png`

## Test defteri
### Ortam
- Proje Vite + React + TypeScript. Test için yalnızca geliştirme sunucusu gerekiyor (`npm run dev`); veritabanı ya da arka uç yok. (SPIN-1, 2026-11-11)
- Vite portu ortam değişkeninden okumuyor; port komut satırıyla veriliyor. Çalışan tarif: `npm run dev -- --host 127.0.0.1 --port $env:PORT --strictPort`, port değişkeni `PORT`, hazır olma yolu `/`. (SPIN-1, 2026-11-11)
- Sunucunun bu kopyanın kodunu sunduğu, değişen dosya doğrudan çekilerek doğrulanabiliyor (ör. `curl -s http://localhost:<port>/src/App.tsx`; çıktıdaki `_jsxFileName` kopyanın yolunu gösteriyor). (SPIN-2, 2026-11-12; SPIN-21, 2026-11-16)
- SPIN-7'nin yönetici girişi (`#/yonetici`, `AdminLoginPage`, `.env.local` içindeki `VITE_ADMIN_*`) ana dalda yok. Kart kopyasında olup olmadığını `ls src/pages` ile kontrol edin; SPIN-17, 18, 19 ve 21 kopyalarında yoktu. Varsa değerleri yazdırmadan `sed 's/=.*/=…/' .env.local` ile kontrol edin. (SPIN-7, 2026-11-12; SPIN-21, 2026-11-16)
- Kartın test şifresi her zaman o kartın planında yazıyor; deftere yazılmıyor. (SPIN-17, 2026-11-13)
- Logo yazı tipi Poppins, `@fontsource/poppins` paketinden yerel olarak yükleniyor; dış ağ gerekmiyor. Yüklendiği `document.fonts.check('700 22px Poppins')` ile doğrulanıyor. (SPIN-4, 2026-11-12)
### Gezinme
- Yönlendirme hash ile: ana sayfa `#/`, sepet `#/sepet`, favoriler `#/favoriler`, ödeme `#/odeme`, başarı `#/siparis-tamam`. Ürün sayfası ürün kartındaki ad bağlantısıyla (`.product-grid > article:nth-of-type(1) .product-title`) ya da doğrudan `#/urun/<id>` adresiyle açılıyor; `#/urun/1` "Kırmızı Gül Buketi (11 Adet)", ₺649. Bilinmeyen yol ana sayfayı gösteriyor; `#/urun/9999` "Ürün bulunamadı." gösteriyor. Hash içindeki `?…` sorgusu yol eşleştirmesinden önce ayrılıyor. (SPIN-1, 2026-11-11; SPIN-17, 2026-11-13; SPIN-21, 2026-11-16)
- Duyuru sayfası `#/admin`, sorgu `#/admin?duyuru=<URL kodlu>`. Alan "Yönetici Şifresi" (textbox), düğme "Giriş Yap"; Enter da gönderiyor. Oturum bileşen state'inde tutuluyor: yeniden yüklemede ya da sayfadan çıkınca sıfırlanıyor, yalnızca hash sorgusu değişince sürüyor. Öğeler `.admin-warning`, `.admin-announcement`. (SPIN-17, 2026-11-13)
- Başlıktaki logo bağlant

## İnceleme
İnceleyiciler: Claude Code

### Kabul ölçütleri (7/7)
- ✓ `#/urun/<id>` sayfasında header'da Sepetim'in sağında "Hızlı Al" düğmesi görünür. — Header.tsx: `onQuickBuy` verildiğinde Sepetim bağlantısından hemen sonra ⚡ Hızlı Al düğmesi çiziliyor. App.tsx bu prop'u ürün rotasında veriyor.
- ✓ Ana sayfa, sepet, favoriler, ödeme ve sipariş tamam sayfalarında, ayrıca var olmayan ürün sayfasında (`#/urun/9999`) düğme görünmez. — App.tsx: `onQuickBuy` yalnızca `case 'product'` içinde ve `getProduct(id)` doluysa atanıyor. Diğer sayfalarda ve var olmayan üründe undefined kalıyor, düğme çizilmiyor.
- ✓ Ürün sayfasında adet 3'e çıkarılıp "Hızlı Al"a basılınca o ürün sepete 3 adet eklenir, adres `#/odeme` olur ve sipariş özetinde bu ürün görünür. — `onQuickBuy`, Routes'taki güncel `quantity` ile `addToCart(id, quantity)` çağırıp `navigate('/odeme')` yapıyor. Adet ProductPage'deki düğmelerle `onQuantityChange` üzerinden Routes'ta güncelleniyor.
- ✓ Ürün sepette zaten 1 adetse ve sayfada adet 2 seçiliyse, "Hızlı Al" sonrasında sepette 3 adet olur. Bu, var olan `addToCart` davranışıdır. — Mevcut `addToCart` kullanılıyor ve ShopProvider değişmedi. Var olan adede ekleme davranışı korunuyor.
- ✓ Başka bir ürüne geçince (ör. benzer ürünler) seçili adet 1'e döner. — Adet `selection.id === id` ise kullanılıyor, değilse 1 sayılıyor. Başka ürüne geçince 1 görünüyor.
- ✓ "Sepete Ekle" eskisi gibi seçili adetle ekleyip `#/sepet`'e gider. — ProductPage'deki Sepete Ekle kodu değişmedi. Prop'tan gelen `quantity` ile ekleyip `/sepet`'e gidiyor.
- ✓ Mobil genişlikte düğmede yalnızca ⚡ ikonu görünür ve düğmenin `aria-label="Hızlı Al"` etiketi vardır. — Düğmede `aria-label="Hızlı Al"` var. Metin ayrı bir `<span>` içinde ve `header-link` sınıfı taşıyor; planda anılan mevcut mobil kural bu metni gizliyor.

### Bulgular
- [minor] `src/App.tsx:24` — Ürün A'da adet 3 yapılıp Sepetim'e gidilir, sonra yeniden A'ya dönülür. `selection` Routes'ta kaldığı için adet 1 yerine 3 görünür. Eskiden sayfa her açıldığında adet 1'den başlıyordu. Ürün rotasından çıkınca `selection`'ı sıfırlamak düşünülebilir.
