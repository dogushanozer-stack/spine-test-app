# SPIN-23 · Kararlar ve varsayımlar

Uygulayıcı, plan dışında verdiği her kararı ve seçtiği varsayımı buraya tarihiyle ekler: ne, neden, hangi seçenek reddedildi.

## 2026-11-16 · Uygulama kararları
- **Header bağlantısına `aria-label="Giriş Yap"`, ikona `aria-hidden` eklendi.** Neden: 860px altında `.header-link` metinleri gizleniyor (`App.css` responsive kuralı), bu durumda yalnızca 👤 kalır; ekran okuyucu yine "Giriş Yap" okur. Reddedilen: dar ekranda metni görünür bırakmak (diğer bağlantılarla tutarsız olurdu).
- **Giriş sayfası `.checkout` kart stilini yeniden kullanır, ek olarak `.login` (max-width 420px, ortalı) ve `.login-note` eklendi.** Reddedilen: sıfırdan yeni form stili yazmak.
- **Başarı durumu `.empty` bloğu kalıbıyla gösterilir; başarılı gönderimde form state'i (şifre dahil) temizlenir.** Neden: şifrenin bellekte gereksiz kalmaması.
- **E-posta deseni `^[^\s@]+@[^\s@]+\.[^\s@]+$`, şifre uzunluk kontrolü trim'siz yapılır.**
