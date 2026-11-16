# SPIN-21 · Header'a Sepetim butonunun yanına  "Hızlı Al" buto… · Özet

Tarih: 16.11.2026 11:39

## Ne değişti
- Header.tsx: isteğe bağlı onQuickBuy prop'u ve "⚡ Hızlı Al" düğmesi eklendi.
- App.tsx: adet state'i { id, quantity } olarak Routes'a taşındı.
- App.tsx: Hızlı Al yalnızca var olan ürün sayfasında sepete ekleyip /odeme'ye gider.
- ProductPage.tsx: adet artık quantity ve onQuantityChange prop'larıyla geliyor.
- App.css: marka renginde .header-quick düğme stili ve hover durumu eklendi.

## Kontrol et
- App.tsx:24: ürüne geri dönülünce önceki adet korunuyor (minor bulgu).
- App.tsx: onQuickBuy, render sırasındaki quantity değerini kullanıyor.

## Test et
- Ana sayfada, sepette ve #/urun/9999'da Hızlı Al düğmesi görünmüyor.
- Ürün sayfasında adet 3 → Hızlı Al → #/odeme'de ürün 3 adet görünüyor.
- Benzer ürüne geçince adet 1'e dönüyor.
- Sepete Ekle hâlâ #/sepet'e gidiyor.
- Mobil genişlikte yalnızca ⚡ görünüyor ve düğme taşmıyor.

## Ne kaldı
- Ürün rotasından çıkınca selection sıfırlanmıyor; aynı ürüne dönünce eski adet görünüyor.

## Önerilen sonraki işler
- Projeye vitest kurup Hızlı Al akışı için test yazılmalı.
- Ürün kartlarına da Hızlı Al düğmesi eklenebilir.
- Hızlı Al düğmesine klavye odak (focus-visible) stili eklenmeli.
