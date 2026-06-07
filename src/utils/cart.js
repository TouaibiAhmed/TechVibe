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

export function addToCart(product, quantity = 1, isBulk = false) {
  if (typeof window === 'undefined') {
    return
  }

  const cart = getCart()
  const key = isBulk ? `${product.id}-bulk` : product.id

  if (cart[key]) {
    // If the existing entry is old schema (just quantity number), migrate it
    if (typeof cart[key] !== 'object') {
      cart[key] = {
        productId: product.id,
        qty: cart[key] + quantity,
        isBulk: isBulk
      }
    } else {
      cart[key].qty += quantity
    }
  } else {
    cart[key] = {
      productId: product.id,
      qty: quantity,
      isBulk: isBulk
    }
  }

  window.localStorage.setItem('ecomus_cart', JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent('cart-updated'))
}

export function removeFromCart(cartKey) {
  if (typeof window === 'undefined') {
    return
  }

  const cart = getCart()
  if (!(cartKey in cart)) {
    return
  }

  delete cart[cartKey]
  window.localStorage.setItem('ecomus_cart', JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent('cart-updated'))
}
