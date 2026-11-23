
## Uygulama · 23.11.2026 16:57 · Claude Code

Notu ekledim ve kontrol ettim. Bu turda değişen tek dosya `README.md`, ona da tek satır eklendi.

**Kabul ölçütleri**
- ✓ `git diff --stat` çıktısı `README.md | 1 +` ve `1 insertion(+)`; silinen satır yok.
- ✓ `tail -n 1 README.md` çıktısı tam olarak `Not: OSDEV-34 yeniden test kartı (23.11.2026).`
- ✓ 1–32. satırlar değişmedi ve diff'te `-` satırı yok. Dosyada 33 satır var, hepsi CRLF ile bitiyor (33 satır sonu, 33 `\r`). Bunu dosyanın kendi baytlarından kontrol ettim, çünkü `core.autocrlf=true` olduğu için `git diff` satır sonlarını gizliyor.
- ✓ "ı" harfi UTF-8 olarak doğru yazıldı (`304 261`, yani `C4 B1`).

**Çalıştırdığım komutlar**
- `git diff --stat` ve `git diff README.md`: yalnızca bir `+` satırı var.
- `tail -n 1 README.md` ve `od -c`: metin doğru, satır `\r\n` ile bitiyor.
- `git status --short`: tek değişiklik ` M README.md`. Takipsiz dosyalar (`.claude/`, `.mcp.json`, `qa-mock-mcp.cjs`, `tc-otomasyon.txt`, kart klasörü) önceki hâlinde duruyor.

**Plandan sapma**
- 2. adımda planlanan `git add README.md` komutunu çalıştırmadım. Commit'i Spine OS'un push hattı yapıyor, bu yüzden değişikliği çalışma ağacında bıraktım. Takipsiz dosyaların commit'e girmemesi hedefini `git status` ile yalnızca `README.md` dosyasının değiştiğini görerek kontrol ettim. Bu kararı ve CRLF kontrolünü `.spine/board/S1-sprint-1/SPIN-109/decisions.md` dosyasına yazdım.

Durum: BİTTİ
