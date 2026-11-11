import { ProductCard } from '../components/ProductCard'
import { getProduct } from '../data/products'
import { useShop } from '../store/shop-context'
import type { Product } from '../types'

export function FavoritesPage() {
  const { favorites } = useShop()
  const items = favorites.map(getProduct).filter((p): p is Product => Boolean(p))

  if (items.length === 0) {
    return (
      <div className="empty">
        <p className="empty-icon">♡</p>
        <h2>Henüz favorin yok</h2>
        <p className="muted">Ürünlerdeki kalp simgesine tıklayarak favorilerine ekleyebilirsin.</p>
        <a href="#/" className="btn btn-primary">
          Ürünlere Göz At
        </a>
      </div>
    )
  }

  return (
    <section>
      <h2 className="section-title">Favorilerim ({items.length})</h2>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
