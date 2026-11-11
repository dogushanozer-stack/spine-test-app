import { useSyncExternalStore } from 'react'

export type Route =
  | { name: 'home' }
  | { name: 'product'; id: number }
  | { name: 'cart' }
  | { name: 'favorites' }
  | { name: 'checkout' }
  | { name: 'success' }

function parse(hash: string): Route {
  const path = hash.replace(/^#/, '') || '/'
  const product = path.match(/^\/urun\/(\d+)$/)
  if (product) return { name: 'product', id: Number(product[1]) }
  if (path === '/sepet') return { name: 'cart' }
  if (path === '/favoriler') return { name: 'favorites' }
  if (path === '/odeme') return { name: 'checkout' }
  if (path === '/siparis-tamam') return { name: 'success' }
  return { name: 'home' }
}

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

export function useRoute(): Route {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash)
  return parse(hash)
}

export function navigate(path: string) {
  window.location.hash = path
  window.scrollTo({ top: 0 })
}
