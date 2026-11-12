<!-- Spine OS pano kartı · SPIN-4 · kayıt taslağı · 12.11.2026 12:27 · kasaya taşı: ADR → vault/02-Decisions, değişmez → vault/01-Architecture/invariants -->

# SPIN-4 · Sitenin adını "Doruk&Yiğit Market" yap, yazının st… · Kayıt taslağı

## Bağlam
Site adı "Doruk&Yiğit Market" oldu ve logo için ayrı bir yazı tipi istendi. Projede dışarıdan yüklenen yazı tipi yoktu.

## Karar
Poppins, Google Fonts yerine `@fontsource/poppins` paketiyle eklendi ve yalnızca `.logo` kuralında kullanıldı. Sitenin genel yazı tipi `system-ui` olarak kaldı.

## Sonuçlar
Yazı tipi uygulamayla birlikte paketlenir, çevrimdışı çalışır ve üçüncü tarafa istek gitmez. Projeye yeni bir npm bağımlılığı eklendi.
