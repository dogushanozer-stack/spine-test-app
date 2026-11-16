# SPIN-22 · Search altına e ticaret sitelerinde en çok aranan… · Özet

Tarih: 16.11.2026 12:13

## Ne değişti
- `src/data/products.ts` içine `POPULAR_SEARCHES` sabitiyle 5 kelime eklendi.
- `Header.tsx` arama formunu `.search-area` sarmalayıcısına aldı.
- `Header.tsx` içine "Popüler:" etiketi ve 5 chip butonu eklendi.
- Chip tıklanınca `onSearch(term)` çalışıyor, ana sayfa dışındaysa `navigate('/')` çağrılıyor.
- `App.css` içine `.search-area`, `.popular-chip` stilleri geldi, mobil kural sarmalayıcıya taşındı.

## Kontrol et
- `.popular-searches` div'inde role yok, `aria-label` okunmayabilir (minor bulgu).
- Mobilde `order`/`flex-basis` kuralı artık `.search-area`'da, header düzenine bakılmalı.

## Test et
- Ana sayfada "Popüler:" ve 5 chip görünüyor mu?
- "kulaklık" chip'i input'u dolduruyor ve doğru ürünü listeliyor mu?
- Her chip en az bir ürün döndürüyor mu?
- `#/sepet`te "parfüm" chip'i `#/`e dönüp sonuçları gösteriyor mu?
- 375px genişlikte yatay taşma oluşuyor mu?

## Ne kaldı
- `.popular-searches` div'ine `role="group"` eklenmeli.
- Chip tıklama davranışı için otomatik test yok.

## Önerilen sonraki işler
- Input ve chip'teki ortak arama/yönlendirme mantığını tek fonksiyona çıkar.
- Projeye test çalıştırıcısı (Vitest) ekleyip Header chip testleri yaz.
- Aktif arama terimiyle eşleşen chip'i görsel olarak vurgula.
