import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { CartItem } from '../types'
import { ShopContext, type ShopState } from './shop-context'

const CART_KEY = 'spine-market:cart'
const FAV_KEY = 'spine-market:favorites'

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => load(CART_KEY, []))
  const [favorites, setFavorites] = useState<number[]>(() => load(FAV_KEY, []))

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites))
  }, [favorites])

  const value = useMemo<ShopState>(() => {
    const setQuantity = (productId: number, quantity: number) =>
      setCart((items) =>
        quantity <= 0
          ? items.filter((i) => i.productId !== productId)
          : items.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
      )

    return {
      cart,
      favorites,
      cartCount: cart.reduce((sum, i) => sum + i.quantity, 0),
      addToCart: (productId, quantity = 1) =>
        setCart((items) => {
          const existing = items.find((i) => i.productId === productId)
          if (existing) {
            return items.map((i) =>
              i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i,
            )
          }
          return [...items, { productId, quantity }]
        }),
      setQuantity,
      removeFromCart: (productId) => setQuantity(productId, 0),
      clearCart: () => setCart([]),
      toggleFavorite: (productId) =>
        setFavorites((ids) =>
          ids.includes(productId) ? ids.filter((id) => id !== productId) : [...ids, productId],
        ),
      isFavorite: (productId) => favorites.includes(productId),
    }
  }, [cart, favorites])

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
