import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import './HappyFamiliesPage.css'

const familyMoments = [
  {
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=85',
    alt: 'A puppy enjoying a quiet moment with its person',
    name: 'Cuddles on the couch',
    detail: 'A new best friend, right at home',
    style: 'family-moment-tall',
  },
  {
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&w=900&q=85',
    alt: 'A happy puppy spending time with its family',
    name: 'First days together',
    detail: 'The start of something lovely',
    style: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=85',
    alt: 'A family sharing a playful moment with their dog',
    name: 'Playtime, every day',
    detail: 'Best friends from the very beginning',
    style: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1000&q=85',
    alt: 'A puppy relaxing beside its favorite person',
    name: 'A little sidekick',
    detail: 'Together is our favorite place',
    style: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85',
    alt: 'Two dogs enjoying a sunny day outdoors',
    name: 'Out for an adventure',
    detail: 'Making memories one walk at a time',
    style: 'family-moment-wide',
  },
  {
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85',
    alt: 'A sweet puppy settling into its new home',
    name: 'Home at last',
    detail: 'A very happy new chapter',
    style: '',
  },
]

const testimonials = [
  {
    quote: 'From our first hello, everything felt thoughtful and easy. Bringing our little one home has made every day brighter.',
    family: 'A PawFect family',
    puppy: 'Puppy parent',
  },
  {
    quote: 'We got so much care and guidance along the way. Our puppy settled in so quickly and already feels like they have always been here.',
    family: 'A PawFect family',
    puppy: 'Puppy parent',
  },
  {
    quote: 'The sweetest new addition to our family. There is nothing like that first cuddle when you know you have found your best friend.',
    family: 'A PawFect family',
    puppy: 'Puppy parent',
  },
]

function FamilyGallery() {
  return (
    <div className="family-gallery">
      {familyMoments.map((moment, index) => (
        <figure
          className={`family-moment ${moment.style}`.trim()}
          key={moment.name}
          style={{ '--moment-index': index }}
        >
          <img src={moment.image} alt={moment.alt} loading="lazy" />
          <figcaption>
            <span className="moment-heart" aria-hidden="true">♡</span>
            <span>
              <strong>{moment.name}</strong>
              <small>{moment.detail}</small>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function FamilyTestimonials() {
  return (
    <section className="family-testimonials" aria-labelledby="family-testimonials-title">
      <div className="family-testimonials-heading">
        <p className="eyebrow">Kind words, full hearts</p>
        <h2 id="family-testimonials-title">Notes from our puppy parents</h2>
        <p>Every new home is the beginning of a very special story.</p>
      </div>
      <div className="family-testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <blockquote className="family-testimonial" key={testimonial.quote}>
            <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <span className="testimonial-quote-mark" aria-hidden="true">“</span>
            <p>{testimonial.quote}</p>
            <footer>
              <span className={`testimonial-avatar testimonial-avatar-${index + 1}`} aria-hidden="true">
                {index === 0 ? '♡' : index === 1 ? '✿' : '♥'}
              </span>
              <span><strong>{testimonial.family}</strong><small>{testimonial.puppy}</small></span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function HappyFamiliesPage() {
  return (
    <SiteLayout className="happy-families-page" title="Happy Families | PawFect Pups">
      <section className="families-hero">
        <span className="families-hero-doodle families-doodle-left" aria-hidden="true">♡</span>
        <span className="families-hero-doodle families-doodle-right" aria-hidden="true">✳</span>
        <p className="eyebrow">Our wall of happy endings</p>
        <h1>Love looks good<br />on <span>every family.</span></h1>
        <p className="families-hero-description">
          Nothing makes us happier than seeing our puppies settle into loving homes. Here are a few little moments from their big new adventures.
        </p>
        <a className="families-scroll-link" href="#family-gallery">Take a peek <span aria-hidden="true">↓</span></a>
      </section>

      <section className="families-gallery-section" id="family-gallery" aria-labelledby="family-gallery-title">
        <div className="families-section-heading">
          <div>
            <p className="eyebrow">The best kind of hello</p>
            <h2 id="family-gallery-title">PawFect moments</h2>
          </div>
          <p>From first cuddles to forever memories, every picture tells a little love story.</p>
        </div>
        <FamilyGallery />
        <p className="gallery-note"><span aria-hidden="true">♡</span> Every one of them was a little PawFect pup once.</p>
      </section>

      <FamilyTestimonials />

      <section className="families-cta">
        <span aria-hidden="true">🐾</span>
        <p className="eyebrow">Your story could be next</p>
        <h2>Ready to meet your new best friend?</h2>
        <Link className="button button-caramel" to="/puppies">Meet the puppies <span aria-hidden="true">→</span></Link>
      </section>
    </SiteLayout>
  )
}

export default HappyFamiliesPage
