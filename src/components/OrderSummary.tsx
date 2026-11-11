import type { ReactNode } from 'react'
import type { CartSummary } from '../utils/cart'
import { formatPrice } from '../utils/format'

export function OrderSummary({ summary, children }: { summary: CartSummary; children?: ReactNode }) {
  return (
    <aside className="summary">
      <h3>Sipariş Özeti</h3>
      <dl>
        <div>
          <dt>Ürünler</dt>
          <dd>{formatPrice(summary.subtotal)}</dd>
        </div>
        <div>
          <dt>Kargo</dt>
          <dd>{summary.shipping === 0 ? <span className="free">Bedava</span> : formatPrice(summary.shipping)}</dd>
        </div>
        {summary.savings > 0 && (
          <div className="savings">
            <dt>Kazancın</dt>
            <dd>−{formatPrice(summary.savings)}</dd>
          </div>
        )}
        <div className="total">
          <dt>Toplam</dt>
          <dd>{formatPrice(summary.total)}</dd>
        </div>
      </dl>
      {children}
    </aside>
  )
}
