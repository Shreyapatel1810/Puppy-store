import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import './GoneHomePage.css'

const adoptedPuppies = [
  {
    name: 'Milo',
    breed: 'Maltipoo',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=900&q=85',
    alt: 'Milo the Maltipoo relaxing in his new home',
  },
  {
    name: 'Luna',
    breed: 'Toy Poodle',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85',
    alt: 'Luna the Toy Poodle enjoying time with her family',
  },
  {
    name: 'Teddy',
    breed: 'Pomeranian',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
    alt: 'Teddy the Pomeranian out for an adventure',
  },
  {
    name: 'Daisy',
    breed: 'Cavalier King Charles',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85',
    alt: 'Daisy the Cavalier King Charles settling in with her family',
  },
  {
    name: 'Archie',
    breed: 'Corgi',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85',
    alt: 'Archie the Corgi meeting a new friend',
  },
  {
    name: 'Bailey',
    breed: 'Golden Retriever',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=900&q=85',
    alt: 'Bailey the Golden Retriever enjoying a sunny day',
  },
]

function AdoptedPuppyCard({ puppy }) {
  return (
    <article className="puppy-card gone-home-card">
      <div className="puppy-card-image-wrap">
        <img className="puppy-card-image" src={puppy.image} alt={puppy.alt} loading="lazy" />
        <span className="puppy-badge gone-home-badge"><span aria-hidden="true">♡</span> Gone home</span>
      </div>
      <div className="puppy-card-content">
        <div className="puppy-card-title">
          <h2>{puppy.name}</h2>
          <span className="adoption-status"><span aria-hidden="true">✓</span> Adopted</span>
        </div>
        <p>{puppy.breed}</p>
        <Link className="puppy-card-link" to="/happy-families">
          Happy tails <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}

function GoneHomePage() {
  return (
    <SiteLayout className="gone-home-page" title="Gone Home | PawFect Pups">
      <section className="gone-home-hero">
        <span className="gone-home-doodle gone-home-doodle-left" aria-hidden="true">♡</span>
        <span className="gone-home-doodle gone-home-doodle-right" aria-hidden="true">✳</span>
        <p className="eyebrow">Every puppy finds their person</p>
        <h1>Gone home,<br /><span>loved forever.</span></h1>
        <p>
          These little ones have already found their forever families. Looking for a puppy just like them? We’d love to help you find your match.
        </p>
        <Link className="button button-caramel" to="/puppies">See available puppies <span aria-hidden="true">→</span></Link>
      </section>

      <section className="gone-home-gallery" aria-labelledby="gone-home-heading">
        <div className="gone-home-gallery-heading">
          <div>
            <p className="eyebrow">A few happy endings</p>
            <h2 id="gone-home-heading">Already home, always loved</h2>
          </div>
          <p>Each of these sweet faces is now making memories with a family of their own.</p>
        </div>

        <div className="gone-home-grid">
          {adoptedPuppies.map((puppy) => (
            <AdoptedPuppyCard key={puppy.name} puppy={puppy} />
          ))}
        </div>
      </section>

      <section className="gone-home-cta">
        <span aria-hidden="true">🐾</span>
        <p className="eyebrow">Your happy ending starts here</p>
        <h2>There’s a little friend waiting to meet you.</h2>
        <Link className="button button-green" to="/puppies">Meet available puppies <span aria-hidden="true">↗</span></Link>
      </section>
    </SiteLayout>
  )
}

export default GoneHomePage
