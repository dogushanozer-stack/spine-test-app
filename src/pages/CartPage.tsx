import { OrderSummary } from '../components/OrderSummary'
import { navigate } from '../router'
import { useShop } from '../store/shop-context'
import { summarizeCart } from '../utils/cart'
import { formatPrice } from '../utils/format'

export function CartPage() {
  const { cart, setQuantity, removeFromCart } = useShop()
  const summary = summarizeCart(cart)

  if (summary.lines.length === 0) {
    return (
      <div className="empty">
        <p className="empty-icon">🛒</p>
        <h2>Sepetin boş</h2>
        <p className="muted">Beğendiğin ürünleri sepetine ekleyerek alışverişe başla.</p>
        <a href="#/" className="btn btn-primary">
          Alışverişe Başla
        </a>
      </div>
    )
  }

  return (
    <div className="two-col">
      <section>
        <h2 className="section-title">Sepetim ({summary.lines.length} ürün)</h2>

        {summary.remainingForFreeShipping > 0 && summary.shipping > 0 && (
          <div className="notice">
            Kargonun bedava olması için <strong>{formatPrice(summary.remainingForFreeShipping)}</strong> daha ekle.
          </div>
        )}

        <ul className="cart-list">
          {summary.lines.map(({ product, quantity, lineTotal }) => (
            <li key={product.id} className="cart-item">
              <a href={`#/urun/${product.id}`} className="cart-thumb" style={{ background: product.color }}>
                {product.emoji}
              </a>
              <div className="cart-info">
                <a href={`#/urun/${product.id}`}>
                  <strong>{product.brand}</strong> {product.name}
                </a>
                <span className="muted small">Birim: {formatPrice(product.price)}</span>
              </div>
              <div className="qty">
                <button onClick={() => setQuantity(product.id, quantity - 1)} aria-label="Azalt">
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(product.id, Math.min(10, quantity + 1))} aria-label="Artır">
                  +
                </button>
              </div>
              <span className="price">{formatPrice(lineTotal)}</span>
              <button className="icon-btn" onClick={() => removeFromCart(product.id)} aria-label="Sil">
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </section>

      <OrderSummary summary={summary}>
        <button className="btn btn-primary btn-block" onClick={() => navigate('/odeme')}>
          Sepeti Onayla
        </button>
      </OrderSummary>
    </div>
  )
}
