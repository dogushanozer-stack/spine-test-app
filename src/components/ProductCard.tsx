import { useState } from 'react'
import type { Product } from '../types'
import { useShop } from '../store/shop-context'
import { discountPercent, formatPrice } from '../utils/format'
import { Stars } from './Stars'

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleFavorite, isFavorite } = useShop()
  const [added, setAdded] = useState(false)
  const discount = discountPercent(product.price, product.oldPrice)
  const fav = isFavorite(product.id)

  return (
    <article className="product-card">
      <a href={`#/urun/${product.id}`} className="product-media" style={{ background: product.color }}>
        <span className="product-emoji">{product.emoji}</span>
        {discount && <span className="tag tag-discount">%{discount} İndirim</span>}
      </a>
      <button
        className={`fav-btn ${fav ? 'active' : ''}`}
        aria-label={fav ? 'Favorilerden çıkar' : 'Favorilere ekle'}
        onClick={() => toggleFavorite(product.id)}
      >
        {fav ? '♥' : '♡'}
      </button>

      <div className="product-body">
        <a href={`#/urun/${product.id}`} className="product-title">
          <strong>{product.brand}</strong> {product.name}
        </a>
        <Stars rating={product.rating} count={product.reviewCount} />
        <div className="product-tags">
          {product.fastDelivery && <span className="tag tag-fast">⚡ Hızlı Teslimat</span>}
          {product.freeShipping && <span className="tag tag-ship">Kargo Bedava</span>}
        </div>
        <div className="price-row">
          {product.oldPrice && <span className="old-price">{formatPrice(product.oldPrice)}</span>}
          <span className="price">{formatPrice(product.price)}</span>
        </div>
        <button
          className={`btn btn-primary btn-block ${added ? 'btn-success' : ''}`}
          onClick={() => {
            addToCart(product.id)
            setAdded(true)
            setTimeout(() => setAdded(false), 1200)
          }}
        >
          {added ? '✓ Sepete Eklendi' : 'Sepete Ekle'}
        </button>
      </div>
    </article>
  )
}
