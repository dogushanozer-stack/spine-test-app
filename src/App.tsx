import { useState } from 'react'
import { Header } from './components/Header'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { SuccessPage } from './pages/SuccessPage'
import { useRoute } from './router'
import { ShopProvider } from './store/ShopProvider'
import type { CategoryId } from './types'
import './App.css'

const currentYear = new Date().getFullYear()

function Routes() {
  const route = useRoute()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<CategoryId | null>(null)

  let page
  switch (route.name) {
    case 'product':
      page = <ProductPage key={route.id} id={route.id} />
      break
    case 'cart':
      page = <CartPage />
      break
    case 'favorites':
      page = <FavoritesPage />
      break
    case 'checkout':
      page = <CheckoutPage />
      break
    case 'success':
      page = <SuccessPage />
      break
    default:
      page = <HomePage search={search} category={category} onCategory={setCategory} />
  }

  return (
    <>
      <Header search={search} onSearch={setSearch} />
      <main className="container">{page}</main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {currentYear} Doruk&amp;Yiğit Market · SpineOS test projesi</span>
          <span>Güvenli Alışveriş · Kolay İade · 7/24 Destek</span>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <ShopProvider>
      <Routes />
    </ShopProvider>
  )
}
