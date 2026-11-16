<!-- Spine OS pano kartı · SPIN-23 · onay: 16.11.2026 13:27 · bu dosya onaylanan plandır; uygulayıcı bunu izler -->

# SPIN-23 · Login ekranı için headerın sağ tarafına Giriş Yap…

Sprint: Sprint 1

## Kart açıklaması
Login ekranı için headerın sağ tarafına Giriş Yap ikonu koy

# Plan: Header'a Giriş Yap ikonu ve #/giris sayfası

## Amaç
Header'ın sağına, Favoriler ve Sepetim'in yanına bir "Giriş Yap" ikonu eklenir. Tıklanınca yeni `#/giris` sayfası açılır ve kullanıcı e-posta ile şifre girebileceği basit bir form görür. Gerçek kimlik doğrulama yapılmaz, sayfa yalnızca arayüzden oluşur.

## Bağlam
- Header'daki işlem bağlantıları `nav.header-actions` içinde ve `a.header-link > span.header-icon + span` kalıbını izliyor (`src/components/Header.tsx:44-55`). Stilleri `src/App.css:89-111`'de, dar ekran düzeni `src/App.css:817` ve sonrasında.
- Rotalar `src/router.ts:3-20` içindeki `Route` birleşim tipinde ve `parse` işlevinde tanımlı. Sayfa seçimi `src/App.tsx:22-40` içindeki `switch` ile yapılıyor.
- Form kalıbı `src/pages/CheckoutPage.tsx:31-76` içinde: `validate` işlevi, `errors` state'i, `aria-invalid`, `.field-error`, `noValidate`. Form stilleri `.form-grid` ve `.field-error` (`src/App.css:735-773`), düğmeler `.btn` ve `.btn-primary`.
- SPIN-7'nin `AdminLoginPage` / `#/yonetici` sayfası ana dalda yok, bu işle bir çakışması olmaz.
- Projede test altyapısı yok (`package.json` içinde test script'i ya da test bağımlılığı bulunmuyor).

## Kapsam
**Yapılacak**
- `Route` tipine `{ name: 'login' }` eklenir ve `parse` işlevi `/giris` yolunu buna eşler.
- Yeni `src/pages/LoginPage.tsx` sayfası. Alanlar: E-posta (`type="email"`, `autoComplete="email"`) ve Şifre (`type="password"`, `autoComplete="current-password"`). Altında "Giriş Yap" gönderme düğmesi ve "Bu bir demo; gerçek giriş yapılmaz." notu bulunur.
- İstemci tarafı doğrulama:
  - E-posta biçimi geçersizse "Geçerli bir e-posta gir" yazar.
  - Şifre 6 karakterden kısaysa "Şifre en az 6 karakter olmalı" yazar.
  - Form geçerliyse formun yerine "Giriş başarılı (demo)." mesajı ve "Alışverişe Dön" bağlantısı (`#/`) çıkar.
- `App.tsx` içindeki `switch`'e `login` durumu eklenir.
- Header'daki `nav.header-actions`'ın sonuna, Sepetim'den sonra `<a href="#/giris" className="header-link">` eklenir. İçinde ikon `👤` (`.header-icon`) ve "Giriş Yap" metni bulunur.
- Gerekirse giriş kutusunu ortalayıp genişliğini sınırlayan küçük bir stil (`.login`) `App.css`'e eklenir.

**Kapsam dışı**
- Gerçek kimlik doğrulama, oturum saklama ve header'da giriş yapılmış durumun gösterilmesi
- Kayıt ol ve şifremi unuttum akışları
- Test altyapısı kurulumu
- SPIN-7'nin yönetici girişi

## Kabul ölçütleri
- Header'ın sağında, Sepetim'den sonra "Giriş Yap" metinli ve `👤` ikonlu bir bağlantı görünür. Bağlantının `href` değeri `#/giris`'tir.
- Bu bağlantıya tıklanınca adres `#/giris` olur ve "Giriş Yap" başlıklı, E-posta ile Şifre alanlı form görünür. Header ve footer yerinde kalır.
- Boş form gönderilince iki alanın altında da hata mesajı çıkar ve alanlar `aria-invalid="true"` alır. Sayfa değişmez.
- Geçersiz e-posta (ör. `abc`) ile 6 karakterden kısa şifre ayrı ayrı denendiğinde her biri kendi hata mesajını gösterir.
- Geçerli e-posta ve en az 6 karakterli şifreyle gönderilince "Giriş başarılı (demo)." mesajı ve "Alışverişe Dön" bağlantısı görünür. Bağlantı `#/` adresine gider.
- Şifre alanının tipi `password` olduğundan girilen değer maskeli görünür.
- `#/giris` dışındaki rotalar önceki gibi çalışır, bilinmeyen yollar yine ana sayfaya düşer.

## Elle doğrulama
Yok

## Arayüz denemesi
Platform web (masaüstü tarayıcı); açma komutu `npm run dev`.
1. `http://localhost:5173/#/` adresini aç. Header'ın sağında Favoriler, Sepetim ve "👤 Giriş Yap" sırayla görünür. Fareyle üzerine gelince diğer bağlantılar gibi açık marka renginde vurgulanır.
2. "Giriş Yap"a tıkla. Adres `#/giris` olur, "Giriş Yap" başlığı ile E-posta ve Şifre alanları görünür.
3. Formu boş gönder. Her iki alanın altında da hata mesajı çıkar.
4. E-postaya `abc`, şifreye `123` yaz ve gönder. "Geçerli bir e-posta gir" ve "Şifre en az 6 karakter olmalı" mesajları görünür, şifre maskeli kalır.
5. E-postaya `test@ornek.com`, şifreye `123456` yaz ve gönder. "Giriş başarılı (demo)." mesajı ve "Alışverişe Dön" bağlantısı görünür. Bağlantıya tıklanınca ana sayfa açılır.
6. Pencereyi 860px'in altına daralt. Header sarılır ama "Giriş Yap" bağlantısı diğer bağlantılarla aynı satırda kalır ve taşmaz.

## Test ortamı
Vite geliştirme sunucusu — `npm run dev` (kapanmayan komut, `Local: http://localhost:5173/` satırı çıkınca hazırdır) — hazırlık kontrolü: `http://localhost:5173/` 200 döner.

## Adımlar
1. `login` rotasını ekle — `src/router.ts` — test: `npm run build` (tip kontrolü) ve tarayıcıda `#/giris` adresini açmak.
2. `LoginPage` bileşenini yaz. Doğrulama ve hata gösterimi `CheckoutPage` kalıbını izler, form gönderildikten sonra başarı durumu gösterilir — `src/pages/LoginPage.tsx` — test: Arayüz denemesi 3-5. adımlar.
3. Rotayı sayfaya bağla — `src/App.tsx` — test: Arayüz denemesi 2. adım.
4. Header'a "Giriş Yap" bağlantısını ekle — `src/components/Header.tsx` — test: Arayüz denemesi 1. adım.
5. Giriş kutusunun stilini ve dar ekran kontrolünü ekle — `src/App.css` — test: Arayüz denemesi 6. adım, `npm run lint`.

## Riskler
Belirgin risk yok. Şifre hiçbir yerde saklanmaz ve loglanmaz, yalnızca bileşen state'inde tutulur.

## Varsayımlar
- İkon olarak, mevcut emoji ikonlarla (♡, 🛒) tutarlı olması için `👤` kullanılır.
- Kullanıcı arayüzünde ikonun yanında "Giriş Yap" metni de bulunur, diğer bağlantılarla aynı düzende.
- Doğrulama kuralları basit tutulur: e-posta için `x@y.z` biçimi, şifre için en az 6 karakter.
- Test altyapısı olmadığı için davranış derleme, lint ve arayüz denemesiyle doğrulanır.
- Çalışma ağacındaki `src/index.css` değişikliğine ve `test-ana-dal.txt` silinmesine bu kart dokunmaz.
