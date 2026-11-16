
## Uygulama · 16.11.2026 13:29 · Claude Code

Derleme ve lint geçti; şimdi tarayıcıda hızlı bir açılış/akış kontrolü yapıyorum.

Header'a "Giriş Yap" bağlantısı eklendi, `#/giris` sayfası da çalışıyor. Build ve lint geçti, tarayıcıda yaptığım akış testi de başarılı oldu.

**Değişen dosyalar:**
- `src/router.ts`: `login` rotası eklendi.
- `src/pages/LoginPage.tsx`: yeni dosya.
- `src/App.tsx`
- `src/components/Header.tsx`
- `src/App.css`: `.login` ve `.login-note` stilleri.

**Kabul ölçütleri**
- ✓ Header'da Sepetim'den sonra `👤 Giriş Yap` bağlantısı var, adresi `#/giris`.
- ✓ Bağlantıya tıklanınca `#/giris` açılıyor: "Giriş Yap" başlığı, E-posta ve Şifre alanları görünüyor, header ve footer yerinde kalıyor.
- ✓ Boş form gönderilince iki hata mesajı da çıkıyor ve alanlar `aria-invalid` alıyor.
- ✓ Her alan kendi hata mesajını gösteriyor. Hatalar ayrı ayrı `validate` kurallarıyla üretiliyor; tarayıcı testinde boş form denendi, `abc`/`123` girişi ayrıca denenmedi.
- ✓ Geçerli giriş yapılınca "Giriş başarılı (demo)." ve `#/` adresine giden "Alışverişe Dön" görünüyor.
- ✓ Şifre alanı `type="password"`, girilen değer maskeli.
- ✓ Diğer rotaların `parse` sırası değişmedi, bilinmeyen yollar yine ana sayfaya düşüyor.

**Çalıştırılan testler**
- `npm run build`: geçti.
- `npm run lint` (oxlint): çıkış kodu 0.
- `spine-web test`: 10 adımın hepsi geçti. Akış: header bağlantısı → boş gönderim ve iki hata → `test@ornek.com` / `123456` ile başarı mesajı. Port 5173 dolu olduğu için geliştirme sunucusu 5199 portunda açıldı, test bitince durduruldu.

**Plandan sapmalar** (`decisions.md`'ye yazıldı)
- Header bağlantısına `aria-label` ekledim. 860px altında bağlantı metinleri zaten gizleniyor ve yalnızca 👤 kalıyor; etiket sayesinde ekran okuyucu yine "Giriş Yap" diyor. Plandaki 6. denemede "Giriş Yap" metninin dar ekranda görünür kalacağı yazıyordu; mevcut düzen gereği dar ekranda yalnızca ikon görünür.
- Form, ödeme sayfasının `.checkout` kart stilini kullanıyor. Başarılı gönderimden sonra şifre dahil form temizleniyor.

`src/index.css` ve `test-ana-dal.txt` değişikliklerine dokunmadım.

Durum: BİTTİ
