import React from 'react'
import PageHero from '../components/PageHero'

export default function Wishlist(){
  return (
    <div>
      <PageHero
        eyebrow="Saved for later"
        title="Your wishlist keeps the pieces you love in one place"
        description="Save products, revisit them later, and move the right picks into checkout when you are ready."
        image="/home%20header.png"
        imageAlt="Wishlist preview"
      />
      <div className="container section">
      <div className="product-grid">
        <div className="product-card"><div className="product-image"><img src="/public/products/airpods.jpg" alt=""/></div><h4>Beats Studio Buds</h4><button className="btn btn-ghost">Move to Cart</button></div>
      </div>
      </div>
    </div>
  )
}
