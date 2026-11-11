export type CategoryId = 'cicek' | 'elektronik' | 'moda' | 'ev' | 'kozmetik' | 'hediye'

export interface Category {
  id: CategoryId
  name: string
  icon: string
}

export interface Product {
  id: number
  name: string
  brand: string
  category: CategoryId
  price: number
  oldPrice?: number
  rating: number
  reviewCount: number
  emoji: string
  color: string
  description: string
  freeShipping?: boolean
  fastDelivery?: boolean
}

export interface CartItem {
  productId: number
  quantity: number
}
