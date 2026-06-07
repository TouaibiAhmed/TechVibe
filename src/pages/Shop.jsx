import React, { useState } from 'react'
import { PRODUCTS } from '../data/products'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { formatTnd, TND_RATE } from '../utils/cart'

export default function Shop(){
  const categories = ['All', ...new Set(PRODUCTS.map((product) => product.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [maxPrice, setMaxPrice] = useState(Math.round(Math.max(...PRODUCTS.map((product) => product.price * TND_RATE))))

  const visibleProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesPrice = product.price * TND_RATE <= maxPrice
    return matchesCategory && matchesPrice
  })

  return (
    <div>
      <PageHero
        eyebrow="Browse the full collection"
        title="Shop all products in one clean, structured catalog"
        description="Explore every accessory from the public products library and open the full details page for each item."
        image="/home%20header.png"
        imageAlt="Shop collection preview"
        reverse
      />
      <div className="container section">
        <div className="shop-toolbar">
          <div className="shop-toolbar-copy">
            <span className="section-kicker">All items</span>
            <h3>{visibleProducts.length} products available</h3>
          </div>
          <div className="shop-toolbar-actions">
            <select>
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="shop-layout">
          <aside className="panel-card shop-filter-card">
            <h4>Filters</h4>
            <div className="shop-filter-list">
              <label>
                Product type
                <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                  {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
              </label>
              <label>
                Max price: {maxPrice} TND
                <input
                  type="range"
                  min="0"
                  max={Math.round(Math.max(...PRODUCTS.map((product) => product.price * TND_RATE)))}
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                />
              </label>
            </div>
          </aside>

          <section>
            <div className="shop-grid">
              {visibleProducts.map((product) => (
                <article key={product.id} className="product-card shop-product-card">
                  <div className="product-image">
                    <img src={product.images[0]} alt={product.name} />
                  </div>
                  <div className="product-card-head">
                    <div className="product-category-label">{product.category}</div>
                    <div className="home-product-name">{product.name}</div>
                  </div>
                  <div className="product-card-footer">
                    <div className="home-price">{formatTnd(product.price)}</div>
                    <div className="shop-card-actions">
                      <Link to={`/product/${product.id}`} className="btn btn-ghost">View Details</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
