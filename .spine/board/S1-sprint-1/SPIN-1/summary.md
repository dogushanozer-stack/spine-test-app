# SPIN-1 · SpineMarket ismi ve logosu DoğuşMarket ismi olarak… · Özet

Tarih: 11.11.2026 16:22

## Ne değişti
- Header.tsx'te logo harfi "S" yerine "D" oldu.
- Header.tsx'te ad Doğuş<strong>Market</strong> olarak değişti.
- index.html sekme başlığı "DoğuşMarket" oldu.
- App.tsx altbilgisinde "© DoğuşMarket · SpineOS test projesi" yazıyor.

## Kontrol et
- Dosyaların UTF-8 kaydedildiğini, "ğ" ve "ş" harflerinin bozulmadığını doğrula.
- spine-market:* localStorage anahtarları bilerek değiştirilmedi.

## Test et
- Ana sayfada mor kutuda "D" ve vurgulu "Market" görünüyor mu bak.
- Sekme başlığının "DoğuşMarket" olduğunu kontrol et.
- Altbilgide "© DoğuşMarket · SpineOS test projesi" yazıyor mu bak.
- #/sepet sayfasından logoya tıklayınca ana sayfaya dön.
- ~400px genişlikte ad tek satırda, logo kutusu düzgün kalmalı.

## Ne kaldı
- src ve index.html'de SpineMarket araması yapılmadı, yapılmalı.

## Önerilen sonraki işler
- favicon.svg'yi "D" logolu marka simgesiyle değiştir.
- Proje için test altyapısı kur ve Header testi ekle.
- Marka adını tek bir sabitte topla.
