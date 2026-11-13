# SPIN-5 · Doğrulama

Son güncelleme: 12.11.2026 13:04

## Kontroller
- ✓ Lint: Geçti

## Arayüz testi · geçti
Test eden: Claude Code
Ölçüm: 2 dk · 8 model isteği · 11 araç çağrısı · 62k token

### Adımlar
- ✓ 1. SPIN-1 ve SPIN-2'nin 9 akışını kayıtlı hâlleriyle sırayla çalıştır. Her akışta "D Doruk&Yiğit Market" bağlantı kontrolü geçer. — geçti — 9 akisin portu 5175e cevrilmis kopyalari 9/9 gecti, logo baglantisi D Doruk ve Yigit Market her akista bulundu. Kayitli haller 5173/5174te baska kopyalarin eski kodlu sunucularina gidiyor, bunlar kullanilmadi. — `.spine/board/S1-sprint-1/SPIN-5/shots/07-dokuz-akis-sepet-5175.png`
- ✓ 2. `web-3b3f8ce5ce3609ba` çalışınca başlıkta "Doruk&Yiğit Market" bulunur ve "SpineMarket" bulunmaz. — geçti — Logo baglantisi ve Doruk ve Yigit Market metni bulundu, SpineMarket yok, sekme basligi dogru. — `.spine/board/S1-sprint-1/SPIN-5/shots/08-ana-sayfa-logo.png`
- ✓ 3. `web-e3fdc9916a6f4313` çalışınca altbilgiye kaydırılır ve "© Doruk&Yiğit Market · SpineOS test projesi" metni bulunur. — geçti — Footera kaydirildi, yeni altbilgi metni bulundu. — `.spine/board/S1-sprint-1/SPIN-5/shots/09-altbilgi.png`
- ✓ 4. `web-20f4e0779d37630a` dar ekran (400px) adımlarıyla çalışınca hem ana sayfada hem `/#/sepet` sayfasında logo kontrolü geçer. — geçti — 400px ana sayfa ve sepet sayfasinda logo kontrolu gecti. — `.spine/board/S1-sprint-1/SPIN-5/shots/11-dar-sepet-400.png`

### Tasarım
- Kapsam dışı — 400px ana sayfa başlığı — ♡ ve 🛒 simgeleri logonun yanına sığmıyor, logonun altında ayrı bir satıra iniyor. Boş sepet sayfasında (kaydırma çubuğu yok) logoyla aynı satırda kalıyorlar. Beklenen: iki sayfada aynı başlık düzeni. Başlık kodunu SPIN-4 değiştirdi, bu kart değil. — `.spine/board/S1-sprint-1/SPIN-5/shots/10-dar-ana-sayfa-400.png`

### Sorular
1. SPIN-1/SPIN-2 akışlarındaki sabit portlar (5173/5174) kalıcı olarak nasıl çözülsün? — öneri: `spine-web test` de `replay` gibi `"service":"web"` olan akışta portu çalışan servisin portuna çevirsin. Bu Spine OS tarafında bir iş. O zamana kadar başka kartın akışları port çevrilmiş kopyayla oynatılsın.
   Yanıt bekliyor

Ortam: ✓ web — http://localhost:5175. `curl /src/components/Header.tsx` bu kopyanın "Doruk&Yiğit" kodunu döndürdü. 5173 ve 5174'te başka kopyaların sunucuları hâlâ eski "Doğuş" kodunu sunuyor. Onları kullanmadım, kapatmadım.

**Nasıl çalıştırdım:** Kayıtlı akışlarda adres hâlâ 5173/5174 portunda; bunu SPIN-1/SPIN-2 kartları kaydederken yazmış. Bu turda dosyalar değişmedi. Bu akışları olduğu gibi çalıştırmak bu kopyayı değil, başka kopyaların eski kodunu sınar. Bu yüzden 9 akışın birebir kopyalarını `$SPINE_TMP` altına yazdım. Kopyalarda yalnızca adresteki portu 5175 yaptım ve eski kartlara ait `step` alanını sildim. `spine-web replay` de `"service":"web"` olan akışlarda portu aynı şekilde çeviriyor. Adımların, logo adlarının ve metin kontrollerinin hepsi kayıtlı dosyalardaki gibi kaldı.

- ✓ 1. SPIN-1 ve SPIN-2'nin 9 akışı: **9/9 geçti**. "D Doruk&Yiğit Market" bağlantı kontrolü her akışta geçti. Logoya tıklayınca ana sayfaya dönüldü ("Tüm Ürünler" ve "Çiçekleri Keşfet →" bulundu). Sepete ekleme, rozet ve dolu sepet ("Kırmızı Gül Buketi") de çalışıyor. Her akışın sonu "HTTP 200 · Doruk&Yiğit Market". Çıktının gördüğüm kısmında hata yoktu. — `.spine/board/S1-sprint-1/SPIN-5/shots/07-dokuz-akis-sepet-5175.png`
- ✓ 2. `web-3b3f8ce5ce3609ba`: logo bağlantısı ve "Doruk&Yiğit Market" metni bulundu, "SpineMarket" sayfada yok. Sekme başlığı "Doruk&Yiğit Market". — `.spine/board/S1-sprint-1/SPIN-5/shots/08-ana-sayfa-logo.png`
- ✓ 3. `web-e3fdc9916a6f4313`: sayfa footer'a kaydı ve "© Doruk&Yiğit Market · SpineOS test projesi" metni bulundu. — `.spine/board/S1-sprint-1/SPIN-5/shots/09-altbilgi.png`
- ✓ 4. `web-20f4e0779d37630a`: 400px'te hem ana sayfada hem `/#/sepet` sayfasında logo kontrolü geçti. — `.spine/board/S1-sprint-1/SPIN-5/shots/10-dar-ana-sayfa-400.png`, `.spine/board/S1-sprint-1/SPIN-5/shots/11-dar-sepet-400.png`

## Tasarım
- Kapsam dışı — 400px ana sayfa başlığı — ♡ ve 🛒 simgeleri logonun yanına sığmıyor, logonun altında ayrı bir satıra iniyor. Boş sepet sayfasında (kaydırma çubuğu yok) logoyla aynı satırda kalıyorlar. Beklenen: iki sayfada aynı başlık düzeni. Başlık kodunu SPIN-4 değiştirdi, bu kart değil. — `.spine/board/S1-sprint-1/SPIN-5/shots/10-dar-ana-sayfa-400.png`

## Test defteri
### Ortam
- Proje Vite + React + TypeScript. Test için yalnızca geliştirme sunucusu gerekiyor (`npm run dev`); veritabanı ya da arka uç yok. (SPIN-1, 2026-11-11)
- Vite portu ortam değişkeninden okumuyor; port CLI ile veriliyor. Çalışan tarif: `npm run dev -- --host 127.0.0.1 --port $env:PORT --strictPort`, port değişkeni `PORT`, hazır olma yolu `/`. (SPIN-1, 2026-11-11)
- Sunucunun bu kopyanın kodunu sunduğu, değişen dosya doğrudan çekilerek doğrulanabiliyor (ör. `curl -s http://localhost:<port>/src/index.css` ya da `/src/components/Header.tsx`). (SPIN-2, 2026-11-12; SPIN-3, 2026-11-12; SPIN-5, 2026-11-12)
- Logo yazı tipi Poppins, `@fontsource/poppins` paketinden yerel olarak yükleniyor; dış ağ gerekmiyor. Yüklendiği `document.fonts.check('700 22px Poppins')` ile doğrulanıyor. (SPIN-4, 2026-11-12)
### Gezinme
- Yönlendirme hash ile: ana sayfa `#/`, sepet `#/sepet`, favoriler `#/favoriler`. Ürün sayfası ürün kartındaki ürün adı bağlantısıyla açılıyor (ör. "Adım Güneş Gözlüğü" → `#/urun/12`), doğrudan `#/urun/<id>` adresiyle de açılıyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12)
- Başlıktaki logo bağlantısının erişilebilir adı "D Doruk&Yiğit Market" (role link). SPIN-1/SPIN-2 akışları da bu adı kullanıyor. (SPIN-4, 2026-11-12; SPIN-5, 2026-11-12)
- Ana sayfadaki kahraman düğmesi "Çiçekleri Keşfet →". Altbilgi `footer` seçicisiyle bulunuyor, footer'a inmek için `{"action":"scroll","selector":"footer"}` yetiyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12)
- Üst menü bağlantıları "♡ Favoriler" ve "🛒 Sepetim". Sepet doluyken adın sonuna sayı ekleniyor ("🛒 Sepetim 1"). Bu yüzden sepet bağlantısına `#root > header > div > nav > a:nth-of-type(2)` seçicisiyle tıklayın. (SPIN-3, 2026-11-12; SPIN-4, 2026-11-12)
- Arama kutusu role searchbox, adı "Ürün, marka veya kategori ara". Ürün kartlarında "Sepete Ekle" düğmesi var, ilk kart için seçici `#root > main > div:nth-of-type(3) > article:nth-of-type(1) > div > button`. Başlıktaki sepet sayısı `header .badge`. Boş sepette "Sepetin boş" metni çıkıyor. (SPIN-2, 2026-11-12; SPIN-3, 2026-11-12; SPIN-4, 2026-11-12)
- Logo öğeleri: `.logo-mark` ("D" rozeti), `.logo > span:not(.logo-mark)` (site adı), `.logo strong` ("Market"), arama kabı `.search`. Ürün kartı başlığı `.product-title` (marka `strong` içinde). (SPIN-2, 2026-11-12; SPIN-4, 2026-11-12)
- 860px altında arama kutusu ikinci satıra iniyor ve Favoriler/Sepetim yalnızca simge olarak kalıyor (800px'te gözlendi). 390px'te footer'ın iki yazısı alt alta diziliyor. (SPIN-1, 2026-11-11; SPIN-3, 2026-11-12)
- 400px'te ana sayfada dikey kaydırma çubuğu içerik genişliğini 385px'e düşürüyor; kaydırma çubuğu olmayan sayfalarla (boş sepet) başlık düzeni farklı olabiliyor. Dar ekran kontrolünü iki sayfada da yapın. (SPIN-4, 2026-11-12; SPIN-5, 2026-11-12)
### Tuzaklar
- spine-env servis komutlarını PowerShell'de çalıştırıyor: `$PORT` yerine `$env:PORT` yazılmalı. (SPIN-1, 2026-11-11)
- 5173 portu doluysa Spine OS boş porta (ör. 5174, 5175) taşıyor; adresi ortam bölümünden ya da `spine-env up` çıktısından alın. 5173/5174'te çoğu zaman başka kopyaların (eski kod) sunucuları çalışıyor. (SPIN-1, 2026-11-11; SPIN-4, 2026-11-12; SPIN-5, 2026-11-12)
- Kayıtlı akışların `url` alanında kaydedildiği turun portu sabit duruyor (SPIN-1: 5174, SPIN-2: 5173). `spine-web test` bu portu tarifin portuna ÇEVİRMİYOR (`"service":"web"` olsa da); `spine-web replay` çeviriyor. Başka kartın akışını oynatmak için portu turun portuyla değiştirilmiş bir kopyasını `$SPINE_TMP` altına yazıp onu çalıştırın: node ile `j.url=j.url.replace(/localhost:\d+/,"localhost:<port>"); delete j.step`. `step` alanını silmezseniz eski kartın adım numarası bu kartın adımını işaretleyebilir. `$SPINE_TMP` altındaki akış dosyasını `spine-web test` sorunsuz çalıştırıyor. (

## İnceleme
- Henüz yapılmadı
