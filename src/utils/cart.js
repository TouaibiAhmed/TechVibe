export const TND_RATE = 3.1

export function formatTnd(value) {
  return `${Math.round(value * TND_RATE)} TND`
}

export function getCart() {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    return JSON.parse(window.localStorage.getItem('ecomus_cart') || '{}')
  } catch {
    return {}
  }
}

export function addToCart(product, quantity = 1) {
  if (typeof window === 'undefined') {
    return
  }

  const cart = getCart()
  cart[product.id] = (cart[product.id] || 0) + quantity
  window.localStorage.setItem('ecomus_cart', JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent('cart-updated'))
}
