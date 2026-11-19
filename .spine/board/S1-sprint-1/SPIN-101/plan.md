<!-- Spine OS pano kartı · SPIN-101 · onay: 19.11.2026 12:28 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-101 · OSDEV-34 QA: README'ye test notu bölümü

Sprint: Sprint 1

## Kart açıklaması
README.md dosyasının en sonuna '## QA notu' başlıklı ve altında tek cümlelik ('Bu bölüm Spine OS pano testi için eklendi.') bir bölüm ekle. Başka dosyaya dokunma. Elle doğrulama olarak GitHub'da README önizlemesine bakılmasını iste.

# Plan: README'ye "QA notu" bölümü ekleme

## Amaç
README.md'nin sonuna Spine OS pano testi için tek cümlelik bir "QA notu" bölümü eklenecek. Bu ekleme OSDEV-34 QA akışında kanıt olarak kullanılacak.

## Bağlam
- `README.md` 32 satır. Son bölüm `## Expanding the Oxlint configuration` (`README.md:14`). Dosya `README.md:32`'deki Oxlint belge bağlantısı cümlesiyle ve satır sonuyla bitiyor.
- Başlıklar `## ` düzeyinde ve bölümler arasında birer boş satır var. Yeni bölüm de bu yapıya uyacak.
- Dosya CRLF (`\r\n`) satır sonu kullanıyor. Eklenen satırlar da CRLF olmalı, yoksa dosyada karışık satır sonu oluşur.
- README'de `QA notu` başlıklı bir bölüm henüz yok.

## Kapsam
**Yapılacak**
- `README.md`'nin en sonuna bir boş satır, ardından `## QA notu`, bir boş satır ve `Bu bölüm Spine OS pano testi için eklendi.` satırı eklenecek.

**Kapsam dışı**
- README'nin mevcut içeriği değişmeyecek: yeniden biçimlendirme ve satır sonu dönüştürme yapılmayacak.
- README dışındaki hiçbir dosyaya dokunulmayacak. Çalışma ağacındaki takipsiz dosyalar (`.claude/`, `.mcp.json`, `qa-mock-mcp.cjs`, `tc-otomasyon.txt`) de buna dahil; bunlar commit'e girmeyecek. Kartın `.spine/board/...` belge klasörü Spine OS akışının parçasıdır.

## Kabul ölçütleri
- `git diff --stat` yalnızca `README.md` dosyasını gösterir. Satır kaldırılmaz; 3–4 satır eklenir.
- `git diff README.md` mevcut 32 satırda değişiklik göstermez. Yalnızca dosyanın sonuna ekleme vardır.
- README'nin son bölümü `## QA notu` olur ve altında tam olarak `Bu bölüm Spine OS pano testi için eklendi.` cümlesi yer alır. Türkçe karakterler (ü, ö, ı) UTF-8 olarak doğru kaydedilir.
- `## QA notu` README'de yalnızca bir kez geçer.
- Eklenen satırlar CRLF ile biter, yani `git diff` çıktısında karışık satır sonu uyarısı çıkmaz.

## Elle doğrulama
- Dal GitHub'a push edildikten sonra repo sayfasında ya da PR'daki "Files changed → Display the rich diff" görünümünde README önizlemesine bakılır. "QA notu" başlık olarak, cümle de altında düz metin olarak görünmeli. Türkçe karakterler bozulmamalı ve bölüm Oxlint bölümünden sonra en sonda yer almalı.

## Arayüz denemesi
Yok

## Test ortamı
Yok

## Adımlar
1. Bölümü ekle — `README.md` — Dosyanın sonuna CRLF ile `\r\n## QA notu\r\n\r\nBu bölüm Spine OS pano testi için eklendi.\r\n` eklenir. Test: `git diff --stat` (yalnızca README) ve `tail -n 4 README.md | cat -A` (içerik ve `^M$` satır sonları).

## Riskler
Belirgin bir risk yok. Tek dikkat edilecek nokta editörün satır sonlarını LF'ye çevirerek tüm dosyayı değişmiş göstermesi; bunu `git diff --stat` ile kontrol ediyoruz.

## Varsayımlar
- Cümle sonundaki nokta korunacak ve metin karttaki gibi aynen yazılacak.
- Kartın istediği kanıt yalnızca README'deki bu ekleme. Commit ve push kartın normal onay akışıyla yapılacak.
