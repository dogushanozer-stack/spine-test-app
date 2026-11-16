# SPIN-22 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

- 2026-11-16 · `.popular-label` rengi için projede olmayan `--muted` yerine mevcut `--text-soft` değişkeni kullanıldı. Reddedilen: yeni değişken tanımlamak (index.css'te kullanıcının commit edilmemiş değişikliği var, dokunulmadı).
- 2026-11-16 · `.search-area`'ya `min-width: 0` eklendi; flex içinde chip satırının header'ı genişletmesini önlemek için. Chip'ler `flex-wrap: wrap` ile sarar (yatay kaydırma seçeneği reddedildi: kaydırma çubuğu dar ekranda chip'leri gizler).
- 2026-11-16 · Chip tıklama mantığı input'taki `onChange` ile aynı tutuldu (ortak yardımcıya çıkarılmadı; iki satırlık tekrar, ayrı soyutlama gerektirmiyor).
