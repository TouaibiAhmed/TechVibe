import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import PageHero from '../components/PageHero'
import { addToCart, formatTnd } from '../utils/cart'

const highlights = [
  'Premium materials and durable finish',
  'Designed for modern daily use',
  'Easy to pair with your current setup',
]

const shippingInfo = [
  { label: 'Shipping', value: 'Fast delivery in 2-5 business days' },
  { label: 'Returns', value: '30-day return policy' },
  { label: 'Warranty', value: 'Standard manufacturer coverage' },
]

export default function Product(){
  const { id } = useParams();
  const p = PRODUCTS.find(x=>x.id===id) || PRODUCTS[0];
  const featuredColors = p.colors.slice(0, 4)
  const specificationEntries = Object.entries(p.specs || {})
  return (
    <div>
      <PageHero
        eyebrow="Product details"
        title={p.name}
        description="Review the finish, features, and compatibility before adding this item to your setup."
        image={p.images[0]}
        imageAlt={p.name}
        reverse
      />
      <div className="container section product-detail-shell">
        <div className="product-detail-grid">
          <section className="panel-card product-gallery-panel">
            <div className="product-gallery-main">
              <img src={p.images[0]} alt={p.name} />
            </div>
            <div className="product-gallery-thumbs">
              {p.images.map((image, index) => (
                <button key={index} className="product-thumb" type="button">
                  <img src={image} alt={`${p.name} preview ${index + 1}`} />
                </button>
              ))}
            </div>
          </section>

          <aside className="product-summary-panel">
            <div className="panel-card product-summary-card">
              <div className="product-summary-top">
                <p className="product-category-label">{p.category}</p>
                <h1>{p.name}</h1>
                <div className="product-summary-rating">★ {p.rating.toFixed(1)} rating</div>
              </div>

              <div className="product-summary-price">{formatTnd(p.price)}</div>

              <p className="product-summary-text">
                A refined accessory built for everyday performance, with a clean finish and dependable quality.
              </p>

              <div className="product-option-block">
                <span>Available colors</span>
                <div className="color-row">
                  {featuredColors.map((color, index) => (
                    <button
                      key={index}
                      className="color-swatch"
                      type="button"
                      style={{ background: color }}
                      aria-label={`Select color ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="product-actions">
                <button className="btn btn-primary" onClick={() => addToCart(p)}>Add to Cart</button>
                <button className="btn btn-ghost">Buy Now</button>
              </div>

              <div className="product-summary-list">
                <div className="product-summary-item"><strong>Category</strong><span>{p.category}</span></div>
                <div className="product-summary-item"><strong>Rating</strong><span>{p.rating.toFixed(1)} / 5</span></div>
                <div className="product-summary-item"><strong>Colors</strong><span>{p.colors.length} options</span></div>
              </div>
            </div>
          </aside>
        </div>

        <div className="product-info-grid">
          <section className="panel-card product-info-card">
            <h2>Overview</h2>
            <p>{p.description}</p>
            <ul className="product-info-list">
              {(p.features || highlights).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="panel-card product-info-card">
            <h2>Specifications</h2>
            <div className="spec-grid">
              {specificationEntries.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="panel-card product-info-card">
            <h2>What's in the box</h2>
            <ul className="product-info-list">
              {(p.whatsIncluded || ['1 x Product unit', '1 x Quick start guide']).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="panel-card product-info-card">
            <h2>Shipping & returns</h2>
            <div className="shipping-list">
              <div className="shipping-row"><strong>Shipping</strong><span>{p.shipping || shippingInfo[0].value}</span></div>
              <div className="shipping-row"><strong>Returns</strong><span>{p.returns || shippingInfo[1].value}</span></div>
              <div className="shipping-row"><strong>Warranty</strong><span>{p.warranty || shippingInfo[2].value}</span></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
