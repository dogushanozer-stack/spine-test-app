
## Uygulama · 16.11.2026 11:34 · Claude Code

Şimdi düzenlemeler.

Duman testi geçti. Kararı kaydedip servisi kapatıyorum.

Plan uygulandı. Header'daki "⚡ Hızlı Al" düğmesi yalnızca var olan bir ürünün sayfasında görünüyor. Ürünü seçili adetle sepete ekleyip `/odeme`'ye gidiyor.

**Değişiklikler**
- `src/App.tsx`: adet state'i `{ id, quantity }` olarak `Routes`'ta tutuluyor. Ürün kimliği değişince adet 1 sayılıyor. Düğmeye basınca çalışan işlev (`onQuickBuy`: `addToCart` → `navigate('/odeme')`) yalnızca `getProduct(id)` bir ürün döndürdüğünde veriliyor.
- `src/pages/ProductPage.tsx`: yerel `useState` kaldırıldı, adet artık `quantity` ve `onQuantityChange` prop'larıyla geliyor.
- `src/components/Header.tsx`: isteğe bağlı `onQuickBuy?` prop'u eklendi. Düğme `header-link header-quick` sınıflarını taşıyor ve `aria-label="Hızlı Al"` etiketi var.
- `src/App.css`: `.header-quick` stili eklendi (marka rengi, button sıfırlama).
- `decisions.md`: plan dışında verdiğim 3 karar yazıldı.

**Kabul ölçütleri**
- ✓ Ürün sayfasında düğme Sepetim'in sağında görünüyor (duman testinde gördüm).
- ✓ Adet 3 seçilip "Hızlı Al"a basılınca adres `#/odeme` oluyor ve Sepetim rozeti 3 gösteriyor (duman testinde gördüm).
- ✓ Düğme diğer sayfalarda ve `#/urun/9999`'da görünmüyor: kodda bu sayfalara `onQuickBuy` hiç verilmiyor. Bunu tarayıcıda denemedim.
- ✓ Ürün sepette varsa adet üstüne ekleniyor: değişmeyen `addToCart` davranışı bunu sağlıyor.
- ✓ Başka ürüne geçince adet 1'e dönüyor: `{ id, quantity }` eşleşmesi bunu sağlıyor. Tarayıcıda denemedim.
- ✓ "Sepete Ekle" eskisi gibi `#/sepet`'e gidiyor: koduna dokunulmadı.
- ✓ Mobilde düğmede yalnızca ⚡ görünüyor: var olan `.header-link` mobil kuralı metni gizliyor. Bunu ekranda görmedim.

Tarayıcıda denemediğim maddeler (5, 6, 8 ve mobil görünüm) plandaki Arayüz denemesinde Test eden ajan tarafından kontrol edilecek.

**Testler**
- `npm run build`: geçti (tsc + vite).
- `npm run lint`: geçti (çıkış kodu 0).
- Duman testi (`spine-web`, `#/urun/1` → Artır ×2 → Hızlı Al): son adres `#/odeme`, rozet 3. Port 5173 doluydu, bu yüzden testi 5191'de çalıştırdım ve sonra servisi kapattım. Projede birim test altyapısı yok, plan da kurulmasını kapsam dışı bırakıyor.

Plandan sapma yok. `src/index.css` ve `test-ana-dal.txt` değişikliklerine dokunulmadı.

Durum: BİTTİ
