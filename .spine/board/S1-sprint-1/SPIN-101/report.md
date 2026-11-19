
## Uygulama · 19.11.2026 12:29 · Claude Code

`README.md` dosyasının sonuna `## QA notu` bölümü eklendi. Başka dosyaya dokunulmadı; plandan sapma olmadı ve plan dışında karar gerekmediği için `decisions.md` dosyasına bir şey eklemedim.

## Kabul ölçütleri
- ✓ `git diff --stat` yalnızca `README.md` dosyasını gösteriyor: 4 satır eklendi, hiç satır kaldırılmadı.
- ✓ Mevcut 32 satır değişmedi. Diff yalnızca dosyanın sonundaki eklemeyi içeriyor (`@@ -30,3 +30,7 @@`).
- ✓ Son bölüm `## QA notu` ve altında tam olarak `Bu bölüm Spine OS pano testi için eklendi.` cümlesi var. Türkçe karakterler UTF-8 olarak doğru kaydedildi (ö=`C3 B6`, ü=`C3 BC`, ç=`C3 A7`).
- ✓ `## QA notu` README'de yalnızca bir kez geçiyor (`grep -c` → 1).
- ✓ Eklenen satırların hepsi CRLF ile bitiyor (`cat -A` çıktısında `^M$`) ve `git diff --check` hata vermedi.

## Çalıştırılan komutlar
- `git diff --stat`: `README.md | 4 ++++`, 1 dosya değişti
- `git diff README.md`: yalnızca sona 4 satır eklenmiş
- `tail -n 4 README.md | cat -A`: içerik doğru, satır sonları CRLF
- `grep -c '^## QA notu' README.md`: 1
- `git diff --check README.md`: çıkış kodu 0

## Kullanıcıya kalan
- Dal push edildikten sonra README önizlemesine GitHub'da bakın: repo sayfasından ya da PR'da "Files changed → Display the rich diff" görünümünden. "QA notu" başlık olarak, cümle de altında düz metin olarak görünmeli. Türkçe karakterler bozulmamalı ve bölüm Oxlint bölümünden sonra, en sonda yer almalı.

Durum: BİTTİ

## Düzeltme 1 · 19.11.2026 12:30 · Claude Code

Lint hatası koddan değil, kart kopyasında `node_modules` olmamasından geliyor (`oxlint` bulunamadı). Bağımlılıkları kurup lint'i yeniden çalıştırıyorum.

Düşen lint kontrolü artık geçiyor; hiçbir dosyayı değiştirmem gerekmedi. Hatanın nedeni README değişikliği değildi: bu kart kopyasında bağımlılıklar kurulu değildi, bu yüzden `oxlint` bulunamıyordu. Bağımlılıkları `package-lock.json`'a göre `npm ci` ile kurdum.

**Çalıştırılan komutlar**
- `npm ci`: 29 paket kuruldu.
- `npm run lint`: çıkış kodu 0. Tek bir uyarı var: `src/components/Header.tsx:12` içinde `onQuickBuy` parametresi kullanılmıyor. Bu uyarı karttan önce de vardı ve kart kapsamı dışında olduğu için dokunmadım.
- `git diff --stat`: yalnızca `README.md` değişmiş (4 satır eklendi, hiç satır silinmedi).
- `tail -n 4 README.md | cat -A`: eklenen satırlar CRLF ile bitiyor, Türkçe karakterler UTF-8 olarak doğru kaydedilmiş.
- `grep -c "## QA notu" README.md`: 1.

**Kabul ölçütleri**
- ✓ `git diff --stat` yalnızca README'yi gösteriyor; 4 satır eklendi, satır kaldırılmadı.
- ✓ Mevcut 32 satırda değişiklik yok; yalnızca dosyanın sonuna ekleme var.
- ✓ README'nin son bölümü `## QA notu`, altında tam olarak istenen cümle var.
- ✓ `## QA notu` README'de yalnızca bir kez geçiyor.
- ✓ Eklenen satırlar CRLF ile bitiyor ve diff'te karışık satır sonu uyarısı yok.

**Plandan sapma:** Yok. Lint betiğini `npx oxlint` olarak değiştirmeyi düşündüm ama yapmadım, çünkü plan README dışındaki dosyalara dokunmayı yasaklıyor ve sorun koddan değil ortamdan geliyordu. Bu kararı `decisions.md` dosyasına yazdım.

**Kullanıcıya kalan:** Dal GitHub'a push edildikten sonra README önizlemesine bakılmalı. "QA notu" başlık olarak, cümle de altında düz metin olarak görünmeli; Türkçe karakterler bozulmamalı ve bölüm Oxlint bölümünden sonra en sonda yer almalı.

Durum: BİTTİ
