import { createContext, useContext } from 'react'
import type { CartItem } from '../types'

export interface ShopState {
  cart: CartItem[]
  favorites: number[]
  cartCount: number
  addToCart: (productId: number, quantity?: number) => void
  setQuantity: (productId: number, quantity: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  toggleFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
}

export const ShopContext = createContext<ShopState | null>(null)

export function useShop(): ShopState {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('useShop, ShopProvider içinde kullanılmalı')
  return ctx
}
