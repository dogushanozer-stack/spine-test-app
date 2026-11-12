import { navigate } from '../router'
import { useShop } from '../store/shop-context'

interface Props {
  search: string
  onSearch: (value: string) => void
}

export function Header({ search, onSearch }: Props) {
  const { cartCount, favorites } = useShop()

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#/" className="logo" onClick={() => onSearch('')}>
          <span className="logo-mark">D</span>
          <span>
            Doruk&amp;Yiğit <strong>Market</strong>
          </span>
        </a>

        <form
          className="search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          <input
            type="search"
            placeholder="Ürün, marka veya kategori ara"
            value={search}
            onChange={(e) => {
              onSearch(e.target.value)
              if (window.location.hash && window.location.hash !== '#/') navigate('/')
            }}
          />
          <button type="submit" aria-label="Ara">
            🔍
          </button>
        </form>

        <nav className="header-actions">
          <a href="#/favoriler" className="header-link">
            <span className="header-icon">♡</span>
            <span>Favoriler</span>
            {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
          </a>
          <a href="#/sepet" className="header-link">
            <span className="header-icon">🛒</span>
            <span>Sepetim</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </a>
        </nav>
      </div>
    </header>
  )
}
