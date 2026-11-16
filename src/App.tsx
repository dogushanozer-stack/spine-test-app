import { useState } from 'react'
import { Header } from './components/Header'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ProductPage } from './pages/ProductPage'
import { SuccessPage } from './pages/SuccessPage'
import { navigate, useRoute } from './router'
import { ShopProvider } from './store/ShopProvider'
import { useShop } from './store/shop-context'
import type { CategoryId } from './types'
import './App.css'

const currentYear = new Date().getFullYear()

function Routes() {
  const route = useRoute()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<CategoryId | null>(null)
  const { addToCart } = useShop()
  // Ürün sayfasındaki adet; ürün kimliğiyle eşleşmezse 1 sayılır (ürün değişince sıfırlanır).
  const [selection, setSelection] = useState<{ id: number; quantity: number } | null>(null)

  let page
  let onQuickBuy: (() => void) | undefined
  switch (route.name) {
    case 'product': {
      const id = route.id
      const quantity = selection?.id === id ? selection.quantity : 1
      page = (
        <ProductPage
          key={id}
          id={id}
          quantity={quantity}
          onQuantityChange={(value) => setSelection({ id, quantity: value })}
        />
      )
      if (getProduct(id)) {
        onQuickBuy = () => {
          addToCart(id, quantity)
          navigate('/odeme')
        }
      }
      break
    }
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
    case 'login':
      page = <LoginPage />
      break
    default:
      page = <HomePage search={search} category={category} onCategory={setCategory} />
  }

  return (
    <>
      <Header search={search} onSearch={setSearch} onQuickBuy={onQuickBuy} />
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
