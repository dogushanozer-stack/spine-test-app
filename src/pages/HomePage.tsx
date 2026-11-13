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

type BannerVariant = 'orange' | 'blue' | 'green'

interface Banner {
  id: string
  kicker: string
  title: string
  sub: string
  cta: string
  category: CategoryId
  art: string
  variant: BannerVariant
}

const banners: Banner[] = [
  {
    id: 'cicek',
    kicker: 'Sevdiklerine sürpriz yap',
    title: "Aynı gün teslimat çiçeklerde %20'ye varan indirim",
    sub: '500 ₺ ve üzeri alışverişlerde kargo bedava.',
    cta: 'Çiçekleri Keşfet →',
    category: 'cicek',
    art: '💐',
    variant: 'orange',
  },
  {
    id: 'elektronik',
    kicker: 'Teknoloji haftası',
    title: "Kulaklıklarda %30'a varan indirim",
    sub: 'Seçili markalarda hızlı teslimat.',
    cta: 'Elektroniği Keşfet →',
    category: 'elektronik',
    art: '🎧',
    variant: 'blue',
  },
  {
    id: 'ev',
    kicker: 'Yeni sezon',
    title: 'Evini yenile, kargo bedava',
    sub: 'Ev & Yaşam ürünlerinde fırsatlar.',
    cta: 'Ev & Yaşam →',
    category: 'ev',
    art: '🛋️',
    variant: 'green',
  },
]

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
        <div className="hero-stack">
          {banners.map((b) => (
            <section key={b.id} className={`hero hero--${b.variant}`}>
              <div>
                <p className="hero-kicker">{b.kicker}</p>
                <h1>{b.title}</h1>
                <p className="hero-sub">{b.sub}</p>
                <button className="btn btn-light" onClick={() => onCategory(b.category)}>
                  {b.cta}
                </button>
              </div>
              <div className="hero-art" aria-hidden>
                {b.art}
              </div>
            </section>
          ))}
        </div>
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
