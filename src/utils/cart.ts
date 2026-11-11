import { FREE_SHIPPING_LIMIT, SHIPPING_FEE, getProduct } from '../data/products'
import type { CartItem, Product } from '../types'

export interface CartLine {
  product: Product
  quantity: number
  lineTotal: number
}

export interface CartSummary {
  lines: CartLine[]
  subtotal: number
  savings: number
  shipping: number
  total: number
  remainingForFreeShipping: number
}

export function summarizeCart(cart: CartItem[]): CartSummary {
  const lines: CartLine[] = []
  for (const item of cart) {
    const product = getProduct(item.productId)
    if (product) lines.push({ product, quantity: item.quantity, lineTotal: product.price * item.quantity })
  }

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0)
  const savings = lines.reduce(
    (s, l) => s + (l.product.oldPrice ? (l.product.oldPrice - l.product.price) * l.quantity : 0),
    0,
  )
  const allFree = lines.length > 0 && lines.every((l) => l.product.freeShipping)
  const shipping = lines.length === 0 || allFree || subtotal >= FREE_SHIPPING_LIMIT ? 0 : SHIPPING_FEE

  return {
    lines,
    subtotal,
    savings,
    shipping,
    total: subtotal + shipping,
    remainingForFreeShipping: Math.max(0, FREE_SHIPPING_LIMIT - subtotal),
  }
}
