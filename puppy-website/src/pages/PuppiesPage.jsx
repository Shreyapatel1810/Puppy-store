import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import { formatPuppyPrice, puppies } from '../data/puppies.js'
import './PuppiesPage.css'

const categories = ['All puppies', 'Toy', 'Small', 'Medium', 'Large']

function PuppyListingCard({ puppy }) {
  return (
    <article className="listing-card">
      <div className="listing-card-image-wrap">
        <img src={puppy.image} alt={`${puppy.name}, ${puppy.breed} puppy`} loading="lazy" />
        <span className={`availability-badge availability-${puppy.availability.toLowerCase().replaceAll(' ', '-')}`}>
          <span aria-hidden="true" />{puppy.availability}
        </span>
      </div>
      <div className="listing-card-content">
        <div className="listing-card-title">
          <div>
            <h2>{puppy.name}</h2>
            <p>{puppy.breed}</p>
          </div>
          <span className="listing-price">{formatPuppyPrice(puppy.price)}</span>
        </div>
        <div className="listing-card-meta">
          <span><span aria-hidden="true">♡</span> {puppy.age} old</span>
          <span>{puppy.category} breed</span>
        </div>
        <Link className="button button-outline listing-details-button" to={`/puppies/${puppy.id}`}>
          View details <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}

function PuppiesPage() {
  const [activeCategory, setActiveCategory] = useState('All puppies')
  const filteredPuppies = activeCategory === 'All puppies'
    ? puppies
    : puppies.filter((puppy) => puppy.category === activeCategory)

  return (
    <SiteLayout className="puppies-page" headerClassName="puppies-header" title="Available Puppies | PawFect Pups">
        <section className="listing-intro">
          <p className="eyebrow">A little love is waiting</p>
          <h1>Available <span>puppies</span></h1>
          <p>Meet the little personalities ready to make themselves at home in your heart.</p>
          <div className="listing-sparkle listing-sparkle-one" aria-hidden="true">✳</div>
          <div className="listing-sparkle listing-sparkle-two" aria-hidden="true">♡</div>
        </section>

        <section className="listing-section" aria-label="Available puppies">
          <div className="listing-toolbar">
            <div className="category-filters" aria-label="Filter puppies by category">
              {categories.map((category) => (
                <button
                  className={`filter-button${activeCategory === category ? ' is-active' : ''}`}
                  type="button"
                  key={category}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'All puppies' ? category : `${category} breeds`}
                </button>
              ))}
            </div>
            <p className="listing-count">{filteredPuppies.length} {filteredPuppies.length === 1 ? 'puppy' : 'puppies'} to meet</p>
          </div>

          {filteredPuppies.length > 0 ? (
            <div className="listing-grid">
              {filteredPuppies.map((puppy) => (
                <PuppyListingCard key={puppy.id} puppy={puppy} />
              ))}
            </div>
          ) : (
            <div className="listing-empty">
              <span aria-hidden="true">🐾</span>
              <h2>No puppies in this category just yet</h2>
              <p>Try another category or check back soon for new little faces.</p>
              <button className="button button-caramel" type="button" onClick={() => setActiveCategory('All puppies')}>See all puppies</button>
            </div>
          )}
        </section>
    </SiteLayout>
  )
}

export default PuppiesPage
