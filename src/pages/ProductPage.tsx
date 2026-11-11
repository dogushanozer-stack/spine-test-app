import { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { Stars } from '../components/Stars'
import { categories, getProduct, products } from '../data/products'
import { navigate } from '../router'
import { useShop } from '../store/shop-context'
import { discountPercent, formatPrice } from '../utils/format'

export function ProductPage({ id }: { id: number }) {
  const product = getProduct(id)
  const { addToCart, toggleFavorite, isFavorite } = useShop()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="empty">
        <p className="empty-icon">🤷</p>
        <p>Ürün bulunamadı.</p>
        <a href="#/" className="btn btn-primary">
          Alışverişe Dön
        </a>
      </div>
    )
  }

  const category = categories.find((c) => c.id === product.category)
  const discount = discountPercent(product.price, product.oldPrice)
  const fav = isFavorite(product.id)
  const similar = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <>
      <nav className="breadcrumb">
        <a href="#/">Ana Sayfa</a> › <span>{category?.name}</span> › <span>{product.name}</span>
      </nav>

      <section className="detail">
        <div className="detail-media" style={{ background: product.color }}>
          <span>{product.emoji}</span>
          {discount && <span className="tag tag-discount">%{discount} İndirim</span>}
        </div>

        <div className="detail-info">
          <p className="detail-brand">{product.brand}</p>
          <h1>{product.name}</h1>
          <Stars rating={product.rating} count={product.reviewCount} />

          <div className="price-row big">
            {product.oldPrice && <span className="old-price">{formatPrice(product.oldPrice)}</span>}
            <span className="price">{formatPrice(product.price)}</span>
          </div>

          <div className="product-tags">
            {product.fastDelivery && <span className="tag tag-fast">⚡ Bugün kargoda</span>}
            {product.freeShipping && <span className="tag tag-ship">Kargo Bedava</span>}
          </div>

          <p className="detail-desc">{product.description}</p>

          <div className="detail-actions">
            <div className="qty">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Azalt">
                −
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => Math.min(10, q + 1))} aria-label="Artır">
                +
              </button>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(product.id, quantity)
                navigate('/sepet')
              }}
            >
              Sepete Ekle
            </button>
            <button
              className={`btn btn-outline fav-inline ${fav ? 'active' : ''}`}
              onClick={() => toggleFavorite(product.id)}
              aria-label={fav ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            >
              {fav ? '♥' : '♡'}
            </button>
          </div>

          <ul className="detail-perks">
            <li>🚚 500 ₺ üzeri ücretsiz kargo</li>
            <li>↩️ 14 gün içinde ücretsiz iade</li>
            <li>🔒 Güvenli ödeme</li>
          </ul>
        </div>
      </section>

      {similar.length > 0 && (
        <section>
          <h2 className="section-title">Benzer Ürünler</h2>
          <div className="product-grid">
            {similar.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
