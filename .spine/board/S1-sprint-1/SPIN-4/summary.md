# SPIN-4 · Sitenin adını "Doruk&Yiğit Market" yap, yazının st… · Özet

Tarih: 12.11.2026 12:27

## Ne değişti
- Header.tsx logo adı "Doruk&Yiğit Market" oldu, "Market" strong içinde kaldı.
- index.html sekme başlığı "Doruk&Yiğit Market" olarak değişti.
- App.tsx altbilgisi "© Doruk&Yiğit Market · SpineOS test projesi" oldu.
- @fontsource/poppins bağımlılığı eklendi; main.tsx 600 ve 700 ağırlıklarını içe aktarıyor.
- App.css .logo kuralına Poppins, 700 ağırlık ve -0.01em harf aralığı eklendi.

## Kontrol et
- Yeni npm bağımlılığı @fontsource/poppins ^5.3.0 (OFL-1.1) eklendi.
- Kullanılmayan Poppins 600 içe aktarımı gereksiz yük getiriyor (kabul edilmiş minor bulgu).
- SPIN-1/SPIN-2 kayıtlı akışları logoyu "D DoğuşMarket" adıyla arıyor.

## Test et
- Ana sayfada rozet, kalın Poppins ad ve turkuaz "Market" görünüyor mu?
- Logonun hesaplanan stili Poppins ve 700 mü; ürün başlıkları sistem yazı tipinde mi?
- Sekme başlığında ve altbilgide yeni ad doğru görünüyor mu?
- #/sepet sayfasında logo aynı stilde mi?
- 400px genişlikte ad tek satırda, çakışma ve yatay kaydırma yok mu?

## Ne kaldı
- SPIN-1 ve SPIN-2 kayıtlı akışları yeni logo adına göre güncellenmeli.
- grep ile src ve index.html içinde "Doğuş" kalmadığı doğrulanmalı.

## Önerilen sonraki işler
- main.tsx içinden kullanılmayan Poppins 600 içe aktarımını kaldır.
- Header logo metni için yeni adı doğrulayan bileşen testi ekle.
- Site adını tek bir sabitte topla; başlık ve altbilgi oradan okusun.
