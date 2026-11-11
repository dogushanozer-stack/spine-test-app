import type { Category, Product } from '../types'

export const categories: Category[] = [
  { id: 'cicek', name: 'Çiçek', icon: '💐' },
  { id: 'elektronik', name: 'Elektronik', icon: '🎧' },
  { id: 'moda', name: 'Moda', icon: '👟' },
  { id: 'ev', name: 'Ev & Yaşam', icon: '🛋️' },
  { id: 'kozmetik', name: 'Kozmetik', icon: '🧴' },
  { id: 'hediye', name: 'Hediye', icon: '🎁' },
]

export const products: Product[] = [
  { id: 1, name: 'Kırmızı Gül Buketi (11 Adet)', brand: 'Bahçe Atölyesi', category: 'cicek', price: 649, oldPrice: 799, rating: 4.8, reviewCount: 1243, emoji: '🌹', color: '#ffe4e6', description: 'Özenle seçilmiş 11 adet kırmızı gül, okaliptüs yapraklarıyla hazırlanır. Aynı gün teslimat seçeneğiyle.', freeShipping: true, fastDelivery: true },
  { id: 2, name: 'Beyaz Orkide (2 Dallı)', brand: 'Yeşil Köşe', category: 'cicek', price: 899, rating: 4.7, reviewCount: 856, emoji: '🌸', color: '#fce7f3', description: 'Seramik saksıda iki dallı beyaz orkide. Uzun ömürlü ve bakımı kolay.', freeShipping: true, fastDelivery: true },
  { id: 3, name: 'Ayçiçeği Kutusu', brand: 'Bahçe Atölyesi', category: 'cicek', price: 529, oldPrice: 589, rating: 4.6, reviewCount: 412, emoji: '🌻', color: '#fef9c3', description: 'Şık kutuda 7 adet ayçiçeği. Neşeli bir sürpriz için ideal.', fastDelivery: true },
  { id: 4, name: 'Mevsim Çiçekleri Aranjmanı', brand: 'Yeşil Köşe', category: 'cicek', price: 459, rating: 4.5, reviewCount: 298, emoji: '🌷', color: '#ede9fe', description: 'Mevsimin en taze çiçekleriyle hazırlanan renkli aranjman.' },
  { id: 5, name: 'Kablosuz Kulak İçi Kulaklık', brand: 'Volta', category: 'elektronik', price: 1299, oldPrice: 1799, rating: 4.4, reviewCount: 5321, emoji: '🎧', color: '#e0f2fe', description: 'Aktif gürültü engelleme, 30 saat pil ömrü ve hızlı şarj desteği.', freeShipping: true },
  { id: 6, name: 'Akıllı Saat Pro', brand: 'Volta', category: 'elektronik', price: 2499, oldPrice: 2999, rating: 4.3, reviewCount: 2210, emoji: '⌚', color: '#e2e8f0', description: 'Nabız, uyku ve adım takibi. Suya dayanıklı gövde, 7 gün pil.', freeShipping: true },
  { id: 7, name: 'Taşınabilir Bluetooth Hoparlör', brand: 'Sonik', category: 'elektronik', price: 849, rating: 4.6, reviewCount: 1789, emoji: '🔊', color: '#dbeafe', description: 'Güçlü bas, IPX7 su geçirmezlik ve 12 saat kesintisiz müzik.', fastDelivery: true },
  { id: 8, name: 'Hızlı Şarj Powerbank 20.000 mAh', brand: 'Sonik', category: 'elektronik', price: 599, oldPrice: 699, rating: 4.5, reviewCount: 3402, emoji: '🔋', color: '#dcfce7', description: 'Çift çıkışlı, 22.5W hızlı şarj destekli yüksek kapasiteli powerbank.' },
  { id: 9, name: 'Günlük Spor Ayakkabı', brand: 'Adım', category: 'moda', price: 1149, oldPrice: 1499, rating: 4.5, reviewCount: 2876, emoji: '👟', color: '#f1f5f9', description: 'Hafif taban, nefes alan file yüzey. Gün boyu konfor.', freeShipping: true },
  { id: 10, name: 'Oversize Pamuk Tişört', brand: 'Kumaş&Co', category: 'moda', price: 249, rating: 4.2, reviewCount: 984, emoji: '👕', color: '#fef3c7', description: '%100 pamuk, rahat kesim. 6 farklı renk seçeneği.' },
  { id: 11, name: 'Deri Sırt Çantası', brand: 'Kumaş&Co', category: 'moda', price: 899, oldPrice: 1099, rating: 4.7, reviewCount: 641, emoji: '🎒', color: '#fde68a', description: 'Laptop bölmeli, suya dayanıklı suni deri sırt çantası.', fastDelivery: true },
  { id: 12, name: 'Güneş Gözlüğü', brand: 'Adım', category: 'moda', price: 399, rating: 4.1, reviewCount: 453, emoji: '🕶️', color: '#e5e7eb', description: 'UV400 korumalı polarize camlar, hafif çerçeve.' },
  { id: 13, name: 'Aromaterapi Mum Seti', brand: 'Evim', category: 'ev', price: 329, oldPrice: 399, rating: 4.8, reviewCount: 1520, emoji: '🕯️', color: '#ffedd5', description: 'Lavanta, vanilya ve sandal ağacı kokulu 3\'lü soya mumu seti.', fastDelivery: true },
  { id: 14, name: 'Seramik Kupa (2\'li)', brand: 'Evim', category: 'ev', price: 219, rating: 4.6, reviewCount: 732, emoji: '☕', color: '#f5f5f4', description: 'El yapımı görünümlü, bulaşık makinesinde yıkanabilir kupa seti.' },
  { id: 15, name: 'Saksıda Sukulent Üçlüsü', brand: 'Yeşil Köşe', category: 'ev', price: 279, rating: 4.7, reviewCount: 1103, emoji: '🪴', color: '#dcfce7', description: 'Az bakım isteyen üç farklı sukulent, beton saksılarda.', fastDelivery: true },
  { id: 16, name: 'Yumuşak Battaniye', brand: 'Evim', category: 'ev', price: 549, oldPrice: 649, rating: 4.5, reviewCount: 867, emoji: '🧣', color: '#e0e7ff', description: 'Welsoft kumaş, 150x200 cm. Kanepe ve yatak için ideal.', freeShipping: true },
  { id: 17, name: 'Nemlendirici Yüz Kremi', brand: 'Saf', category: 'kozmetik', price: 189, oldPrice: 239, rating: 4.4, reviewCount: 4120, emoji: '🧴', color: '#fdf2f8', description: 'Hyaluronik asit içeren, tüm cilt tipleri için hafif formül.' },
  { id: 18, name: 'Kadın Parfüm 50 ml', brand: 'Esans', category: 'kozmetik', price: 749, rating: 4.6, reviewCount: 1890, emoji: '🌺', color: '#fae8ff', description: 'Çiçeksi ve meyveli notalar, kalıcı EDP.', freeShipping: true },
  { id: 19, name: 'Çikolata Hediye Kutusu', brand: 'Tatlı Dükkan', category: 'hediye', price: 349, rating: 4.9, reviewCount: 2654, emoji: '🍫', color: '#fef3c7', description: '16 adet el yapımı çikolata, şık hediye kutusunda.', fastDelivery: true },
  { id: 20, name: 'Peluş Ayıcık', brand: 'Neşe', category: 'hediye', price: 299, oldPrice: 349, rating: 4.7, reviewCount: 978, emoji: '🧸', color: '#ffedd5', description: '35 cm yumuşak peluş ayıcık. Çiçeğin yanına harika bir eşlikçi.' },
  { id: 21, name: 'Gül + Çikolata Sürpriz Seti', brand: 'Bahçe Atölyesi', category: 'hediye', price: 899, oldPrice: 1049, rating: 4.8, reviewCount: 1432, emoji: '💝', color: '#ffe4e6', description: '7 kırmızı gül ve 9\'lu çikolata kutusu bir arada.', freeShipping: true, fastDelivery: true },
]

export function getProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export const FREE_SHIPPING_LIMIT = 500
export const SHIPPING_FEE = 49.9
