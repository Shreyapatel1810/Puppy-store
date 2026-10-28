import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import './HomePage.css'

const puppyPhotos = {
  bella: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
  coco: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85',
  oliver: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85',
  hero: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=1000&q=85',
  about: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1100&q=85',
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-kicker"><span aria-hidden="true">♡</span> every puppy is family</p>
        <h1>Meet your new<br />best <span>friend.</span></h1>
        <p className="hero-description">
          Meet the little one who makes your house feel like home. Happy, healthy puppies and a whole lot of love.
        </p>
        <div className="hero-actions">
          <Link className="button button-caramel" to="/puppies">Meet the puppies <span aria-hidden="true">→</span></Link>
          <a className="button button-outline" href="https://wa.me/?text=Hi%20PawFect%20Pups!%20I%27d%20love%20to%20meet%20your%20puppies." target="_blank" rel="noreferrer">
            Enquire on WhatsApp
          </a>
        </div>
        <div className="hero-note">
          <span>Little paws, lifelong love</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Some of our happy puppies">
        <div className="hero-photo hero-photo--one">
          <img src={puppyPhotos.about} alt="Two happy dogs spending time together" />
        </div>
        <div className="hero-photo hero-photo--two">
          <img src={puppyPhotos.coco} alt="A puppy looking for a family" />
        </div>
        <div className="hero-photo hero-photo--center">
          <img src={puppyPhotos.hero} alt="A fluffy puppy ready to meet its new family" />
        </div>
        <div className="hero-photo hero-photo--four">
          <img src={puppyPhotos.oliver} alt="A sweet puppy resting" />
        </div>
        <div className="hero-photo hero-photo--five">
          <img src={puppyPhotos.bella} alt="A golden puppy enjoying the outdoors" />
        </div>
        <span className="hero-doodle doodle-heart" aria-hidden="true">♡</span>
        <span className="hero-doodle doodle-sparkle" aria-hidden="true">✳</span>
        <span className="hero-sticker" aria-hidden="true">made with<br />puppy love <span>♥</span></span>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <SiteLayout className="home-page" title="PawFect Pups — Your New Best Friend">
      <HeroSection />
    </SiteLayout>
  )
}

export default HomePage
