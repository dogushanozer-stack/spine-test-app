# SPIN-2 · Logo rengini turkuaz mavisi yap · Özet

Tarih: 12.11.2026 11:07

## Ne değişti
- `src/index.css` içindeki `:root` bloğuna `--logo: #0891b2` eklendi.
- `.logo strong` rengi `var(--brand)` yerine `var(--logo)` oldu.
- `.logo-mark` arka planı `var(--brand)` yerine `var(--logo)` oldu.

## Kontrol et
- Build sonucu raporda yok, `npm run build` çalıştırılmalı.
- Beyaz "D" ile `#0891b2` kontrastı yaklaşık 3,7:1, yalnızca büyük metin için yeterli.

## Test et
- Ana sayfada "D" rozeti turkuaz, harfi beyaz görünmeli.
- "Market" turkuaz, "Doğuş" koyu gri görünmeli.
- Arama kutusunun odak çerçevesi turuncu kalmalı.
- Ürün ekleyince sepet rozeti turuncu kalmalı.
- `#/sepet` sayfasında logo aynı turkuaz renkte görünmeli.

## Ne kaldı
- `npm run build` kontrolünün sonucu raporlanmadı.

## Önerilen sonraki işler
- Favicon ve `public/` görsellerini turkuaz logoyla uyumlu yap.
- Logo ve marka renkleri için görsel regresyon testi ekle.
