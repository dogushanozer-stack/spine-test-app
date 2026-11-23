# SPIN-109 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

## 23.11.2026 — Adım 2: `git add` yapılmadı
- **Ne:** Plan 2. adımda "yalnızca `README.md` dosyasını commit'e ekle" diyordu; `git add` çalıştırılmadı, değişiklik çalışma ağacında bırakıldı.
- **Neden:** Bu ortamda commit/push Spine OS'un kontrollü hattına ait; dizini (index) elle hazırlamak o hattın seçimine karışabilir. Takipsiz dosyaların commit'e girmeme amacı, `git status --short` ile yalnızca `README.md` dosyasının değiştiği doğrulanarak karşılandı.
- **Reddedilen:** `git add README.md` ile hazırlamak.

## 23.11.2026 — CRLF doğrulaması
- `core.autocrlf=true` olduğu için `git diff` satır sonlarını normalize gösteriyor; CRLF dosya baytlarından doğrulandı (33 satır, 33 `\r`).
