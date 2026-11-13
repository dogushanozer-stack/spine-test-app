# SPIN-18 · İki tane daha banner ekle farklı renklerde olsun · Özet

Tarih: 13.11.2026 11:44

## Ne değişti
- HomePage.tsx banner'ları `banners` dizisi ve `Banner` tipiyle map'leniyor.
- Mavi-mor Elektronik banner'ı eklendi, butonu `elektronik` kategorisini açıyor.
- Yeşil Ev & Yaşam banner'ı eklendi, butonu `ev` kategorisini açıyor.
- App.css'e `.hero-stack` ızgarası, `.hero--blue` ve `.hero--green` varyantları eklendi.
- Mobil kuralda `.hero-stack` tek sütuna iniyor.

## Kontrol et
- `:not(:first-child)` dolgusu mobilde 24px kuralını eziyor.
- `hero--orange` sınıfının CSS'te bir karşılığı yok.

## Test et
- Ana sayfada üç banner'ın renklerini ve yerleşimini kontrol et.
- Elektronik butonu listeyi Elektronik kategorisine süzmeli.
- Ev & Yaşam butonu başlığı "Ev & Yaşam" yapmalı.
- "kulaklık" araması üç banner'ı birlikte gizlemeli.
- Mobil genişlikte banner'lar alt alta durmalı, emojiler gizlenmeli.

## Ne kaldı
- Derleme (`npm run build`) sonucu kontrollerde görünmüyor.

## Önerilen sonraki işler
- Mobil kurala `.hero-stack .hero:not(:first-child)` için 24px dolgu ekle.
- `.hero--orange` sınıfını CSS'te tanımla ya da varyanttan kaldır.
- Banner butonları için yalnızca sayfadaki ilk `h1`'i başlık olarak bırak.
