<!-- Spine OS pano kartı · SPIN-2 · kayıt taslağı · 12.11.2026 11:07 · kasaya taşı: ADR → vault/02-Decisions, değişmez → vault/01-Architecture/invariants -->

# SPIN-2 · Logo rengini turkuaz mavisi yap · Kayıt taslağı

## Bağlam
Logo `--brand` turuncusunu kullanıyordu. Bu değişken `App.css` içinde 22 yerde geçtiği için değiştirilmesi bütün siteyi etkilerdi.

## Karar
Logo için ayrı bir `--logo: #0891b2` değişkeni tanımlandı. `.logo strong` ve `.logo-mark` bu değişkeni kullanıyor.

## Sonuçlar
Logo rengi marka renginden bağımsız değişebilir. Sitenin geri kalanı turuncu kalır.
