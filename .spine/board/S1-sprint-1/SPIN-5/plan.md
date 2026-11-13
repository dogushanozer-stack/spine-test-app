<!-- Spine OS pano kartı · SPIN-5 · onay: 12.11.2026 12:36 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-5 · Kaydedilmiş akışları "Doruk&Yiğit Market" logosuna…

Sprint: Sprint 1

## Kart açıklaması
Kaydedilmiş akışları "Doruk&Yiğit Market" logosuna göre güncelle

SPIN-1 ve SPIN-2'de kaydedilen akışlar logo bağlantısını "D DoğuşMarket" adıyla buluyor ve yeni adla eşleşmeyecek.
Akışlarda logo seçicisi "D Doruk&Yiğit Market" olarak güncellenmeli.
Doğrulama: akışlar yeniden çalıştırıldığında logo adımı geçmeli.

SPIN-4 · Sitenin adını "Doruk&Yiğit Market" yap, yazının st… kartında kapsam dışı bulunup alt iş olarak açıldı. Kaynak kartın planı: `.spine/board/S1-sprint-1/SPIN-4/plan.md`.

# Plan: SPIN-1 ve SPIN-2 akışlarını "Doruk&Yiğit Market" adına göre güncelle

## Amaç
SPIN-1 ve SPIN-2'de kaydedilen akışlar logoyu ve site adını eski "DoğuşMarket" adıyla arıyor, bu yüzden SPIN-4'teki ad değişikliğinden sonra başarısız oluyor. Bu kart, akışlar yeniden çalıştırıldığında logo ve ad kontrollerinin geçmesi için seçicileri yeni ada göre güncelliyor.

## Bağlam
- `spine/SPIN-4` dalında logo şöyle: `src/components/Header.tsx:15-20` → `<span class="logo-mark">D</span><span>Doruk&amp;Yiğit <strong>Market</strong></span>`. Bağlantının erişilebilir adı "D Doruk&Yiğit Market".
- SPIN-4'ün kendi akışı yeni seçiciyi zaten kullanıyor ve doğrulanmış: `.spine/board/S1-sprint-1/SPIN-4/flows/web-1b64e87bbb9d5006.json` → `"label": "D Doruk&Yiğit Market", "role": "link"`. Aynı biçim kullanılacak.
- Altbilgi `spine/SPIN-4:src/App.tsx:46` → `© Doruk&Yiğit Market · SpineOS test projesi`.
- SPIN-4 dalında SPIN-1 ve SPIN-2 akışları değişmemiş, `main` ile aynı (`git diff --stat main...spine/SPIN-4` bu klasörlerde fark göstermiyor).
- Eski adı içeren adımlar:
  - SPIN-1 logo `label`: `web-20f4e0779d37630a.json:15,27`, `web-3b3f8ce5ce3609ba.json:10`, `web-bce7eeed5c7a4316.json:14,27,32`, `web-fa9bcd530177897b.json:10,18,28`
  - SPIN-1 metin: `web-3b3f8ce5ce3609ba.json:15` (`"text": "DoğuşMarket"`), `web-e3fdc9916a6f4313.json:14` (`"text": "© DoğuşMarket · SpineOS test projesi"`)
  - SPIN-2 logo `label`: `web-03fd61f15db2dad9.json:9,14`, `web-221cb96a0f6911db.json:15`, `web-8d3ea6cebbf6f0fb.json:33`, `web-ad8df2dcdd355d26.json:10`

## Kapsam
**Yapılacak**
- SPIN-1 ve SPIN-2 akışlarında `"label": "D DoğuşMarket"` değerlerinin tümünü `"label": "D Doruk&Yiğit Market"` yapmak.
- Eski adı arayan iki metin kontrolünü yeni ada çevirmek: `"DoğuşMarket"` → `"Doruk&Yiğit Market"`, altbilgi → `"© Doruk&Yiğit Market · SpineOS test projesi"`.

**Kapsam dışı**
- Uygulama kodu (`src/`, `index.html`). Bunlar SPIN-4'te yapıldı.
- Akışlardaki `url` portları (5173/5174), adım sırası, ekran görüntüsü adımları ve `"SpineMarket"` için yazılmış `not: true` kontrolü.
- SPIN-4 akışları ile SPIN-1/SPIN-2'nin `plan.md`, `report.md` ve `verify.md` gibi geçmiş belgeleri.
- Takip edilmeyen `report.md.yedek` dosyası.

## Kabul ölçütleri
- Bu kartın dalında `.spine/board/S1-sprint-1/SPIN-1/flows/` ve `SPIN-2/flows/` altında "DoğuşMarket" geçmez. Bunu `grep -r "DoğuşMarket"` ile hiçbir sonuç dönmemesi gösterir.
- Bu dosyalardaki 13 logo adımının hepsi `"label": "D Doruk&Yiğit Market"` ve `"role": "link"` olur.
- `web-3b3f8ce5ce3609ba.json` ad metnini `"Doruk&Yiğit Market"` olarak, `web-e3fdc9916a6f4313.json` altbilgiyi `"© Doruk&Yiğit Market · SpineOS test projesi"` olarak kontrol eder.
- Fark yalnızca bu değerleri değiştirir. Başka alan, adım ya da dosya değişmez ve JSON dosyaları geçerli kalır.
- SPIN-1 ve SPIN-2'nin 9 akışı SPIN-4 kodu üzerinde yeniden çalıştırıldığında logo, ad ve altbilgi kontrolleri geçer.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform web. Açma komutu `npm run dev`.
1. SPIN-1 ve SPIN-2'nin 9 akışını kayıtlı hâlleriyle sırayla çalıştır. Her akışta "D Doruk&Yiğit Market" bağlantı kontrolü geçer.
2. `web-3b3f8ce5ce3609ba` çalışınca başlıkta "Doruk&Yiğit Market" bulunur ve "SpineMarket" bulunmaz.
3. `web-e3fdc9916a6f4313` çalışınca altbilgiye kaydırılır ve "© Doruk&Yiğit Market · SpineOS test projesi" metni bulunur.
4. `web-20f4e0779d37630a` dar ekran (400px) adımlarıyla çalışınca hem ana sayfada hem `/#/sepet` sayfasında logo kontrolü geçer.

## Test ortamı
Vite geliştirme sunucusu, `npm run dev` ile başlar. Komut kendiliğinden bitmez. Terminalde `Local: http://localhost:<port>/` satırı görününce sayfa açılmaya hazırdır.

## Adımlar
1. SPIN-1'in 5 akışında logo `label` değerlerini ve iki metin kontrolünü yeni ada çevir — `.spine/board/S1-sprint-1/SPIN-1/flows/*.json` — test: `grep -r "DoğuşMarket"` hiçbir sonuç döndürmez.
2. SPIN-2'nin 4 akışında logo `label` değerlerini yeni ada çevir — `.spine/board/S1-sprint-1/SPIN-2/flows/*.json` — test: aynı grep, ardından JSON dosyalarının geçerli olduğunu kontrol et (`node -e "JSON.parse(...)"`).
3. Akışları SPIN-4 kodu üzerinde yeniden çalıştır (Arayüz denemesi).

## Riskler
Belirgin risk yok. Değişiklik yalnızca test akışı dosyalarına dokunuyor. JSON'da `&` ve `ğ` karakterleri kaçış dizisi gerektirmez, ama dosyalar UTF-8 olarak kaydedilmeli.

## Varsayımlar
- Kart yalnızca logo seçicisini anıyor. Eski adı arayan iki metin kontrolü (ad metni ve altbilgi) de aynı nedenle başarısız olacağı için kapsama alındı.
- Akış çalıştırıcısı `url` içindeki portu çalışan sunucuya göre ayarlıyor. Portlar bu yüzden değiştirilmiyor.
