<!-- Spine OS pano kartı · SPIN-21 · kayıt taslağı · 16.11.2026 11:39 · kasaya taşı: ADR → vault/02-Decisions, değişmez → vault/01-Architecture/invariants -->

# SPIN-21 · Header'a Sepetim butonunun yanına  "Hızlı Al" buto… · Kayıt taslağı

## Bağlam
Header'daki Hızlı Al düğmesi, ürün sayfasında seçilen adede erişmeli.

## Karar
Adet state'i ürün kimliğiyle birlikte ({ id, quantity }) ProductPage'den Routes'a taşındı. Header'a onQuickBuy yalnızca var olan ürün sayfasında veriliyor.

## Sonuçlar
ProductPage artık kontrollü bir bileşen. Ürün değişince adet 1'e dönüyor. Ancak ürün rotasından çıkılıp aynı ürüne dönülünce eski adet korunuyor.
