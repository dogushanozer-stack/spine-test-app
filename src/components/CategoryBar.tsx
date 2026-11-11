import { categories } from '../data/products'
import type { CategoryId } from '../types'

interface Props {
  selected: CategoryId | null
  onSelect: (id: CategoryId | null) => void
}

export function CategoryBar({ selected, onSelect }: Props) {
  return (
    <div className="category-bar">
      <button
        className={`category-chip ${selected === null ? 'active' : ''}`}
        onClick={() => onSelect(null)}
      >
        <span>🛍️</span> Tümü
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          className={`category-chip ${selected === c.id ? 'active' : ''}`}
          onClick={() => onSelect(c.id)}
        >
          <span>{c.icon}</span> {c.name}
        </button>
      ))}
    </div>
  )
}
