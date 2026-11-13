# SPIN-5 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

## 2026-11-12 · Logo adımı sayısı 13 değil 14
- **Ne:** Kabul ölçütü "13 logo adımı" diyor; planın Bağlam bölümündeki satır listesi ise 14 adım veriyor (SPIN-1: 2+1+3+3=9, SPIN-2: 2+1+1+1=5). Dosyalarda da 14 `"label": "D DoğuşMarket"` vardı, 14'ü de güncellendi.
- **Neden:** Ölçütün amacı eski adın hiç kalmaması; sayı yazım hatası.
- **Reddedilen:** Yalnızca 13 adımı değiştirmek, bir akışın logo adımında düşmeye devam etmesine yol açardı.

## 2026-11-12 · Arayüz testi düzeltme turu: akışlardaki portlar değiştirilmedi
- **Ne:** Doğrulamada SPIN-1/SPIN-2'nin 9 akışı, `url` içindeki sabit portlar (5173/5174) yüzünden başka sunuculara gidip düştü. Akış dosyalarına dokunulmadı.
- **Neden:** Spine OS'un `replay` yolu (`web-flow-records.cjs` → `replayWebFlows`) `"service": "web"` olan akışın kökenini çalışan servisin portuna zaten çeviriyor; çevirmeyen yalnızca tek dosya çalıştıran `spine-web test`. Yani akışların içeriği doğru (port çevrilince 9/9 geçti), sorun test aracında. Portu 5175 yapmak bir sonraki turda yine kırılır; kök `url`'yi göreli (`/#/`) yapmak ise `replay`'deki `new URL(flow.url)` çağrısını bozar.
- **Reddedilen:** Portları 5175'e sabitlemek (kırılgan, planda kapsam dışı); göreli kök adres (`replay`'i bozar); SPIN-1/SPIN-2 akışlarını SPIN-5/flows kopyalarıyla değiştirmek (aynı sabit port sorunu).
