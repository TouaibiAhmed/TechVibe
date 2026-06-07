import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeadphones, FiPackage, FiStar } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { formatTnd } from '../utils/cart'

const FEATURED_PRODUCTS = [
  {
    id: 'airpods',
    name: 'AirPods Pro Edition',
    price: 10.0,
    image: '/products/airpods.jpg',
  },
  {
    id: 'smart-watch',
    name: 'Smart Watch Series',
    price: 30.0,
    image: '/products/smart%20watch.jpg',
  },
  {
    id: 'jbl-headphones',
    name: 'JBL Wireless Headphones',
    price: 12.0,
    image: '/products/jbl%20headphones.jpg',
  },
  {
    id: 'typec-cable',
    name: 'Type-C Fast Cable',
    price: 8.0,
    image: '/products/typec%20cable.jpg',
  },
]

const CATEGORY_CARDS = [
  {
    title: 'Chargers',
    image: '/products/chargercat.jpg',
    description: 'Fast charging essentials for everyday power.',
  },
  {
    title: 'Headphones',
    image: '/products/headphonescat.jpg',
    description: 'Comfort-fit audio picks with clear sound.',
  },
  {
    title: 'Cables',
    image: '/products/cablecat.jpg',
    description: 'Reliable cables for charging and sync.',
  },
]

function Hero(){
  return (
    <PageHero
      eyebrow="Curated retail experience"
      title="Premium mobile accessories designed for everyday use"
      description="Explore polished essentials built for clean desks, modern routines, and reliable performance."
      image="/home%20header.png"
      imageAlt="TechVibe featured accessories"
    >
      <Link to="/shop" className="btn btn-primary">Shop Now</Link>
      <Link to="/contact" className="btn btn-ghost">Visit Store</Link>
    </PageHero>
  )
}

function HeroStats(){
  return (
    <section className="hero-stats-section container">
      <div className="hero-stats-grid">
        <div className="hero-stat hero-stat-dark hero-stat-products">
          <div className="hero-stat-icon"><FiPackage size={18} /></div>
          <strong>120+</strong>
          <span>products</span>
        </div>
        <div className="hero-stat hero-stat-dark hero-stat-rating">
          <div className="hero-stat-icon"><FiStar size={18} /></div>
          <strong>4.9/5</strong>
          <span>customer rating</span>
        </div>
        <div className="hero-stat hero-stat-dark hero-stat-support">
          <div className="hero-stat-icon"><FiHeadphones size={18} /></div>
          <strong>24/7</strong>
          <span>support</span>
        </div>
      </div>
    </section>
  )
}

function HotDeals(){
  return (
    <section className="section container">
      <div className="section-heading section-heading-home section-heading-single">
        <h3>Hot Deals</h3>
      </div>
      <div className="product-grid home-grid">
        {FEATURED_PRODUCTS.map((product) => (
          <article key={product.id} className="product-card product-card-home">
            <div className="product-image product-image-home">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-head">
              <div className="home-product-name">{product.name}</div>
            </div>
            <div className="product-card-footer">
              <div className="home-price">{formatTnd(product.price)}</div>
              <Link to={`/product/${product.id}`} className="btn btn-ghost">Quick View</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Home(){
  return (
    <div>
      <Hero />
      <HeroStats />
      <HotDeals />
      <section className="section container">
        <div className="section-heading section-heading-home section-heading-single">
          <h3>Shop by Category</h3>
        </div>
        <div className="category-grid">
          {CATEGORY_CARDS.map((category) => (
            <Link key={category.title} to="/shop" className="category-card category-card-link">
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="category-body">
                <div className="home-product-name">{category.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section container">
        <div className="section-heading section-heading-home section-heading-single">
          <h3>Best Sellers</h3>
        </div>
        <div className="product-grid">
          {FEATURED_PRODUCTS.map(product=> (
            <div key={product.id} className="product-card product-card-home">
              <div className="product-image product-image-home"><img src={product.image} alt={product.name}/></div>
              <div className="product-card-head">
                <div className="home-product-name">{product.name}</div>
              </div>
              <div className="product-card-footer">
                <div className="home-price">{formatTnd(product.price)}</div>
                <Link to={`/product/${product.id}`} className="btn btn-ghost">Quick View</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
