<!-- Spine OS pano kartı · SPIN-109 · onay: 23.11.2026 16:56 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-109 · OSDEV-34 yeniden test: README sonuna tek satır not…

Sprint: Sprint 1

## Kart açıklaması
OSDEV-34 yeniden test: README sonuna tek satır not ekle
README.md dosyasının en sonuna şu satırı ekle: Not: OSDEV-34 yeniden test kartı (23.11.2026). Başka hiçbir dosyayı değiştirme.

# Plan: README sonuna OSDEV-34 yeniden test notu ekle

## Amaç
`README.md` dosyasının sonuna OSDEV-34 yeniden test kartını gösteren tek satırlık bir not eklenecek. Başka hiçbir dosya değişmeyecek.

## Bağlam
- `README.md` 32 satır. Son satırı `README.md:32`: "See the [Oxlint rules documentation](…) for the full list of rules and categories."
- Dosya CRLF (`\r\n`) satır sonu kullanıyor ve sonunda satır sonu var (`od -c` çıktısında `\r\n` ile bitiyor).
- Kart, `README.md` dışında hiçbir dosyanın değişmemesini istiyor.

## Kapsam
**Yapılacak**
- `README.md` dosyasının sonuna şu satır eklenecek: `Not: OSDEV-34 yeniden test kartı (23.11.2026).` Satır CRLF ile bitecek.

**Kapsam dışı**
- `README.md` dosyasındaki öteki satırlar.
- Diğer tüm dosyalar, takipsiz olanlar da dahil: `.claude/`, `.mcp.json`, `qa-mock-mcp.cjs`, `tc-otomasyon.txt`. Bunlar commit'e girmeyecek. Kartın `.spine/board/…` belge klasörünü Spine OS yönetir.

## Kabul ölçütleri
- `git diff --stat` çıktısında koddan yalnızca `README.md` görünür ve `1 insertion(+)`, `0 deletion` yazar.
- `tail -n 1 README.md` çıktısı tam olarak `Not: OSDEV-34 yeniden test kartı (23.11.2026).` olur.
- 1–32. satırlar değişmez. Diff'te `-` satırı yoktur ve satır sonları CRLF olarak kalır.
- Türkçe karakterler ("ı") UTF-8 olarak doğru yazılır.

## Elle doğrulama
Yok

## Arayüz denemesi
Yok

## Test ortamı
Yok

## Adımlar
1. Notu dosyanın sonuna, mevcut son satırdan sonra yeni satır olarak CRLF ile ekle — `README.md` — test: `git diff README.md` ve `tail -n 1 README.md`.
2. Başka dosyanın değişmediğini kontrol et ve yalnızca `README.md` dosyasını commit'e ekle — test: `git status --short`, `git diff --cached --stat`.

## Riskler
Belirgin risk yok. Tek dikkat noktası, takipsiz dosyaların yanlışlıkla commit'e girmemesi. Bunun için `git add` komutunda yalnızca `README.md` verilecek.

## Varsayımlar
- Not, son paragraftan sonra ayrı bir paragraf olsun diye önüne boş satır konmayacak. Kart "tek satır" istediği için diff tek eklemeden oluşacak.
- Tarih kartta yazıldığı biçimde kalacak: `23.11.2026`.
