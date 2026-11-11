import { useMemo, useState } from 'react'
import { CategoryBar } from '../components/CategoryBar'
import { ProductCard } from '../components/ProductCard'
import { categories, products } from '../data/products'
import type { CategoryId } from '../types'

type SortKey = 'recommended' | 'price-asc' | 'price-desc' | 'rating' | 'discount'

interface Props {
  search: string
  category: CategoryId | null
  onCategory: (id: CategoryId | null) => void
}

const normalize = (s: string) => s.toLocaleLowerCase('tr-TR')

export function HomePage({ search, category, onCategory }: Props) {
  const [sort, setSort] = useState<SortKey>('recommended')
  const [onlyFast, setOnlyFast] = useState(false)
  const [onlyFreeShipping, setOnlyFreeShipping] = useState(false)

  const visible = useMemo(() => {
    const q = normalize(search.trim())
    const list = products.filter((p) => {
      if (category && p.category !== category) return false
      if (onlyFast && !p.fastDelivery) return false
      if (onlyFreeShipping && !p.freeShipping) return false
      if (!q) return true
      const catName = categories.find((c) => c.id === p.category)?.name ?? ''
      return [p.name, p.brand, catName].some((s) => normalize(s).includes(q))
    })

    const discountOf = (price: number, old?: number) => (old ? (old - price) / old : 0)
    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating)
      case 'discount':
        return [...list].sort((a, b) => discountOf(b.price, b.oldPrice) - discountOf(a.price, a.oldPrice))
      default:
        return list
    }
  }, [search, category, sort, onlyFast, onlyFreeShipping])

  const title = search.trim()
    ? `"${search.trim()}" için sonuçlar`
    : (categories.find((c) => c.id === category)?.name ?? 'Tüm Ürünler')

  return (
    <>
      {!search.trim() && !category && (
        <section className="hero">
          <div>
            <p className="hero-kicker">Sevdiklerine sürpriz yap</p>
            <h1>Aynı gün teslimat çiçeklerde %20'ye varan indirim</h1>
            <p className="hero-sub">500 ₺ ve üzeri alışverişlerde kargo bedava.</p>
            <button className="btn btn-light" onClick={() => onCategory('cicek')}>
              Çiçekleri Keşfet →
            </button>
          </div>
          <div className="hero-art" aria-hidden>
            💐
          </div>
        </section>
      )}

      <CategoryBar selected={category} onSelect={onCategory} />

      <div className="listing-head">
        <div>
          <h2>{title}</h2>
          <p className="muted">{visible.length} ürün</p>
        </div>
        <div className="filters">
          <label className="check">
            <input type="checkbox" checked={onlyFast} onChange={(e) => setOnlyFast(e.target.checked)} />
            Hızlı Teslimat
          </label>
          <label className="check">
            <input
              type="checkbox"
              checked={onlyFreeShipping}
              onChange={(e) => setOnlyFreeShipping(e.target.checked)}
            />
            Kargo Bedava
          </label>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} aria-label="Sırala">
            <option value="recommended">Önerilen</option>
            <option value="price-asc">En düşük fiyat</option>
            <option value="price-desc">En yüksek fiyat</option>
            <option value="rating">En yüksek puan</option>
            <option value="discount">En çok indirim</option>
          </select>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="empty">
          <p className="empty-icon">🔎</p>
          <p>Aradığın kriterlere uygun ürün bulunamadı.</p>
        </div>
      ) : (
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </>
  )
}
