# SPIN-23 · Doğrulama

Son güncelleme: 16.11.2026 13:34

## Kontroller
- ✓ Lint: Geçti

## Arayüz testi · geçti
Test eden: Claude Code
Ölçüm: 4 dk · 26 model isteği · 36 araç çağrısı · 91k token

### Adımlar
- ✓ 1. `http://localhost:5173/#/` adresini aç. Header'ın sağında Favoriler, Sepetim ve "👤 Giriş Yap" sırayla görünür. Fareyle üzerine gelince diğer bağlantılar gibi açık marka renginde vurgulanır. — geçti — Favoriler, Sepetim, Giriş Yap sırayla; hover'da Favoriler ile aynı açık turuncu vurgu — `.spine/board/S1-sprint-1/SPIN-23/shots/02-header-hover-giris.png`
- ✓ 2. "Giriş Yap"a tıkla. Adres `#/giris` olur, "Giriş Yap" başlığı ile E-posta ve Şifre alanları görünür. — geçti — #/giris açıldı; Giriş Yap başlığı, E-posta ve Şifre alanları, header ve footer yerinde — `.spine/board/S1-sprint-1/SPIN-23/shots/04-giris-sayfasi.png`
- ✓ 3. Formu boş gönder. Her iki alanın altında da hata mesajı çıkar. — geçti — Boş gönderimde iki hata mesajı, iki alan aria-invalid=true, sayfa değişmedi — `.spine/board/S1-sprint-1/SPIN-23/shots/05-bos-gonderim.png`
- ✓ 4. E-postaya `abc`, şifreye `123` yaz ve gönder. "Geçerli bir e-posta gir" ve "Şifre en az 6 karakter olmalı" mesajları görünür, şifre maskeli kalır. — geçti — abc/123 ile iki mesaj; şifre ••• maskeli; e-posta düzelince yalnız şifre hatası kalıyor — `.spine/board/S1-sprint-1/SPIN-23/shots/06-gecersiz-giris.png`
- ✓ 5. E-postaya `test@ornek.com`, şifreye `123456` yaz ve gönder. "Giriş başarılı (demo)." mesajı ve "Alışverişe Dön" bağlantısı görünür. Bağlantıya tıklanınca ana sayfa açılır. — geçti — Giriş başarılı (demo). ve Alışverişe Dön görünüyor; tıklanınca ana sayfa (21 ürün) açıldı — `.spine/board/S1-sprint-1/SPIN-23/shots/08-basari.png`
- ✓ 6. Pencereyi 860px'in altına daralt. Header sarılır ama "Giriş Yap" bağlantısı diğer bağlantılarla aynı satırda kalır ve taşmaz. — geçti — 860 altı: üç bağlantı aynı satırda simge olarak (metin diğerleri gibi gizli, aria-label var); 390/375/320'de taşma yok (scrollWidth=clientWidth) — `.spine/board/S1-sprint-1/SPIN-23/shots/12-dar-390.png`

### Tasarım
- İyileştirme — Ana sayfa header'ı, 861 px ile yaklaşık 960 px arası (880 px'te ölçüldü). Üçüncü bağlantı yazıyla birlikte eklenince menü 340 px'e çıkıyor, arama kutusu 184 px'e daralıyor ve yer tutucu "Ürün, marka veya katego…" diye kesiliyor. Beklenen: bu aralıkta yer tutucu kesilmeden okunsun; örneğin bağlantı yazıları daha geniş bir kırılımda gizlensin ya da arama kutusuna en az genişlik verilsin. — `.spine/b
- İyileştirme — `#/giris` sayfasındayken header'daki "Giriş Yap" bağlantısı etkin olarak işaretlenmiyor; kullanıcı hangi sayfada olduğunu header'dan anlayamıyor. Diğer bağlantılarda da etkin durum yok, bu yüzden tutarlı. — `.spine/board/S1-sprint-1/SPIN-23/shots/05-bos-gonderim.png`
- Kapsam dışı — Kısa sayfalarda (giriş, başarı) footer ekranın dibinde değil ortada duruyor, altında boş gri alan kalıyor. Bu kartın getirdiği bir şey değil, uygulamanın genel düzeni. — `.spine/board/S1-sprint-1/SPIN-23/shots/04-giris-sayfasi.png`
- Kapsam dışı — 390 px'te header üç satır (logo / simgeler / arama, 170 px yükseklik). Yeni bağlantı gizlenerek ölçüldüğünde de menü aynı yere (58 px) iniyor; bu kartla gelen bir değişiklik değil. — `.spine/board/S1-sprint-1/SPIN-23/shots/12-dar-390.png`

## SPIN-23 · Header'a "Giriş Yap" eklenmesi: test raporu

Ortam: ✓ web — http://localhost:5174 HTTP 200 döndü. `curl /src/components/Header.tsx` yanıtındaki `_jsxFileName` bu kopyayı gösteriyor ve `#/giris` bağlantısını içeriyor.

Sonuç: altı adımın hepsi geçti, değişen ekranlarda bozuk görünüm yok.

- ✓ 1. Header'ın sağında sırayla "♡ Favoriler", "🛒 Sepetim" ve "👤 Giriş Yap" görünüyor; bağlantı `#/giris`'e gidiyor. Fareyle üzerine gelince Favoriler'le aynı açık turuncu arka plan ve turuncu yazıyla vurgulanıyor. — `.spine/board/S1-sprint-1/SPIN-23/shots/01-header.png`, `02-header-hover-giris.png`, `03-header-hover-favoriler.png`
- ✓ 2. Tıklayınca adres `#/giris` oluyor. "Giriş Yap" başlığı, E-posta alanı ve şifre tipindeki Şifre alanı görünüyor; header ve footer yerinde. — `.spine/board/S1-sprint-1/SPIN-23/shots/04-giris-sayfasi.png`
- ✓ 3. Boş gönderimde iki alanın altında da hata çıkıyor ("Geçerli bir e-posta gir", "Şifre en az 6 karakter olmalı"). İki alan da `aria-invalid="true"` alıyor, sayfa değişmiyor. — `.spine/board/S1-sprint-1/SPIN-23/shots/05-bos-gonderim.png`
- ✓ 4. `abc` / `123` ile Enter'a basınca iki mesaj da çıkıyor, şifre `•••` olarak maskeli. E-posta düzeltilince yalnız şifre hatası kalıyor. — `.spine/board/S1-sprint-1/SPIN-23/shots/06-gecersiz-giris.png`, `07-yalniz-sifre-hatasi.png`
- ✓ 5. `test@ornek.com` / `123456` ile "Giriş başarılı (demo)." mesajı ve "Alışverişe Dön" düğmesi çıkıyor. Düğmeye tıklayınca ana sayfa ("Tüm Ürünler", "21 ürün") açılıyor. — `.spine/board/S1-sprint-1/SPIN-23/shots/08-basari.png`, `09-alisverise-don.png`
- ✓ 6. 860 px'in altında header sarılıyor, üç bağlantı aynı satırda kalıyor.
  - "Giriş Yap" yazısı Favoriler ve Sepetim gibi gizleniyor, yalnız 👤 kalıyor. Plan yazının görünür kalacağını söylüyordu; uygulayıcı bu sapmayı raporunda belirtmiş. Ekran okuyucu için `aria-label="Giriş Yap"` var.
  - 390, 375 ve 320 px'te ana sayfada, giriş sayfasında ve sepet rozetliyken yatay taşma yok (`scrollWidth` = `clientWidth`, 375/360/305). Bağlantıların üst kenarı aynı (58 px), menünün sağ kenarı içerikte kalıyor.
  - Görüntüler: `.spine/board/S1-sprint-1/SPIN-23/shots/10-dar-880.png`, `11-dar-800.png`, `12-dar-390.png`, `13-dar-320.png`, `14-giris-390-hatali.png`
- ✓ Regresyon (ek kontrol): sepete ekleme, rozet "1", Sepetim, Favoriler, bilinmeyen yolun ana sayfaya düşmesi ve `#/giris`'ten logoyla ana sayfaya dönüş çalışıyor. — `.spine/board/S1-sprint-1/SPIN-23/shots/15-regresyon-logo-donus.png`
- Konsolda hata ya da uyarı yok (MCP: 0 hata, 0 uyarı).
- `#/giris?x=1` adresi giriş sayfasını değil ana sayfayı açıyor. Bu kopyada hiçbir rota hash sorgusunu ayırmıyor (`#/sepet?…` de böyle); kartın getirdiği bir hata değil.

## Tasarım
- İyileştirme — Ana sayfa header'ı, 861 px ile yaklaşık 960 px arası (880 px'te ölçüldü). Üçüncü bağlantı yazıyla birlikte eklenince menü 340 px'e çıkıyor, arama kutusu 184 px'e daralıyor ve yer tutucu "Ürün, marka veya katego…" diye kesiliyor. Beklenen: bu aralıkta yer tutucu kesilmeden okunsun; örneğin bağlantı yazıları daha geniş bir kırılımda gizlensin ya da arama kutusuna en az genişlik verilsin. — `.spine/board/S1-sprint-1/SPIN-23/shots/10-dar-880.png`
- İyileştirme — `#/giris` sayfasındayken header'daki "Giriş Yap" bağlantısı etkin olarak işaretlenmiyor; kullanıcı hangi sayfada olduğunu header'dan anlayamıyor. Diğer bağlantılarda da etkin durum yok, bu yüzden tutarlı. — `.spine/board/S1-sprint-1/SPIN-23/shots/05-bos-gonderim.png`
- Kapsam dışı — Kısa sayfalarda (giriş, başarı) footer ekranın dibinde değil ortada duruyor, altında boş gri alan kalıyor. Bu kartın getirdiği bir şey değil, uygulamanın genel düzeni. — `.spine/board/S1-sprint-1/SPIN-23/shots/04-giris-sayfasi.png`
- Kapsam dışı — 390 px'te header üç satır (logo / simgeler / arama, 170 px yükseklik). Yeni bağlantı gizlenerek ölçüldüğünde de menü aynı yere (58 px) iniyor; bu kartla gelen bir değişiklik değil. — `.spine/board/S1-sprint-1/SPIN-23/shots/12-dar-390.png`

## Test defteri
### Ortam
- Proje Vite + React + TypeScript. Test için yalnızca geliştirme sunucusu gerekiyor (`npm run dev`); veritabanı ya da arka uç yok. (SPIN-1, 2026-11-11)
- Vite portu ortam değişkeninden okumuyor; port komut satırıyla veriliyor. Çalışan tarif: `npm run dev -- --host 127.0.0.1 --port $env:PORT --strictPort`, port değişkeni `PORT`, hazır olma yolu `/`. (SPIN-1, 2026-11-11)
- Sunucunun bu kopyanın kodunu sunduğu, değişen dosya doğrudan çekilerek doğrulanabiliyor (ör. `curl -s http://localhost:<port>/src/App.tsx`; çıktıdaki `_jsxFileName` kopyanın yolunu gösteriyor). (SPIN-2, 2026-11-12; SPIN-23, 2026-11-16)
- SPIN-7'nin yönetici girişi (`#/yonetici`, `AdminLoginPage`, `.env.local` içindeki `VITE_ADMIN_*`) ve SPIN-17'nin `#/admin` sayfası ana dalda yok. Kart kopyasında olup olmadığını `ls src/pages` ile kontrol edin; SPIN-17, 18, 19, 21 ve 23 kopyalarında yoktu. Varsa değerleri yazdırmadan `sed 's/=.*/=…/' .env.local` ile kontrol edin. (SPIN-7, 2026-11-12; SPIN-23, 2026-11-16)
- Kartın test şifresi her zaman o kartın planında yazıyor; deftere yazılmıyor. (SPIN-17, 2026-11-13)
- Logo yazı tipi Poppins, `@fontsource/poppins` paketinden yerel olarak yükleniyor; dış ağ gerekmiyor. Yüklendiği `document.fonts.check('700 22px Poppins')` ile doğrulanıyor. (SPIN-4, 2026-11-12)
### Gezinme
- Yönlendirme hash ile: ana sayfa `#/`, sepet `#/sepet`, favoriler `#/favoriler`, ödeme `#/odeme`, başarı `#/siparis-tamam`, giriş `#/giris`. Ürün sayfası ürün kartındaki ad bağlantısıyla (`.product-grid > article:nth-of-type(1) .product-title`) ya da doğrudan `#/urun/<id>` adresiyle açılıyor; `#/urun/1` "Kırmızı Gül Buketi (11 Adet)", ₺649. Bilinmeyen yol ana sayfayı gösteriyor; `#/urun/9999` "Ürün bulunamadı." gösteriyor. (SPIN-1, 2026-11-11; SPIN-17, 2026-11-13; SPIN-23, 2026-11-16)
- Ana daldaki `src/router.ts` hash sorgusunu (`?…`) ayırmıyor; `#/giris?x=1` ana sayfaya düşüyor. Sorgu ayırma yalnız SPIN-17 kopyasındaydı. (SPIN-23, 2026-11-16)
- Duyuru sayfası (yalnız SPIN-17 kopyası) `#/admin`, sorg

## İnceleme
İnceleyiciler: Claude Code, Claude Code

### Kabul ölçütleri (7/7)
- ✓ Header'ın sağında, Sepetim'den sonra "Giriş Yap" metinli ve `👤` ikonlu bir bağlantı görünür. Bağlantının `href` değeri `#/giris`'tir. — Header.tsx'te bağlantı Sepetim'den sonra, nav.header-actions içinde ekleniyor. href değeri "#/giris", içinde 👤 ikonu (.header-icon) ve "Giriş Yap" metni var.
- ✓ Bu bağlantıya tıklanınca adres `#/giris` olur ve "Giriş Yap" başlıklı, E-posta ile Şifre alanlı form görünür. Header ve footer yerinde kalır. — router.ts '/giris' yolunu 'login' rotasına eşliyor ve App.tsx'teki switch LoginPage'i gösteriyor. LoginPage'de 'Giriş Yap' başlığı ile E-posta ve Şifre alanları var. Sayfa Routes içindeki page değişkenine konduğu için header ve footer yerinde kalıyor.
- ✓ Boş form gönderilince iki alanın altında da hata mesajı çıkar ve alanlar `aria-invalid="true"` alır. Sayfa değişmez. — Boş form gönderilince validate iki hatayı da döndürüyor. err() mesajları alanların altında gösteriyor, field() da aria-invalid değerini true yapıyor. preventDefault çağrıldığı ve done false kaldığı için sayfa değişmiyor.
- ✓ Geçersiz e-posta (ör. `abc`) ile 6 karakterden kısa şifre ayrı ayrı denendiğinde her biri kendi hata mesajını gösterir. — E-posta 'abc' iken regex eşleşmiyor ve 'Geçerli bir e-posta gir' çıkıyor. 6 karakterden kısa şifrede 'Şifre en az 6 karakter olmalı' çıkıyor. Hatalar her alan için ayrı anahtarda tutuluyor.
- ✓ Geçerli e-posta ve en az 6 karakterli şifreyle gönderilince "Giriş başarılı (demo)." mesajı ve "Alışverişe Dön" bağlantısı görünür. Bağlantı `#/` adresine gider. — Form geçerliyse done true oluyor ve 'Giriş başarılı (demo).' mesajı ile href="#/" olan 'Alışverişe Dön' bağlantısı gösteriliyor.
- ✓ Şifre alanının tipi `password` olduğundan girilen değer maskeli görünür. — Şifre alanı type="password" olarak tanımlı.
- ✓ `#/giris` dışındaki rotalar önceki gibi çalışır, bilinmeyen yollar yine ana sayfaya düşer. — parse işlevine yalnızca '/giris' satırı eklendi. Diğer eşlemeler ve varsayılan home dönüşü olduğu gibi duruyor.

### Bulgular
- [minor] `src/App.css:731` — Plandaki 5. adım dar ekran düzeni için bir kontrol istiyor, ancak 817. satır civarındaki medya sorgusuna bir şey eklenmedi. Mevcut .header-link kuralları büyük olasılıkla yeterli, ama 860px altındaki görünüm farktan doğrulanamıyor.
