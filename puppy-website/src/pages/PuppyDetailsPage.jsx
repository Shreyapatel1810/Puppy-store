import { Link, useParams } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import { formatPuppyPrice, puppies } from '../data/puppies.js'
import './PuppyDetailsPage.css'

function PuppyDetailsPage() {
  const { puppyId } = useParams()
  const puppy = puppies.find((item) => item.id === puppyId)

  if (!puppy) {
    return (
      <SiteLayout className="puppy-details-page" title="Puppy Not Found | PawFect Pups">
        <section className="puppy-not-found">
          <p className="eyebrow">Oops, little paws missing</p>
          <h1>We couldn't find that puppy.</h1>
          <p>They may have found their forever home, or the link may be incorrect.</p>
          <Link className="button button-caramel" to="/puppies">Browse all puppies</Link>
        </section>
      </SiteLayout>
    )
  }

  const message = encodeURIComponent(`Hi PawFect Pups! I'd love to enquire about ${puppy.name} the ${puppy.breed}.`)

  return (
    <SiteLayout
      className="puppy-details-page"
      title={`Meet ${puppy.name} | PawFect Pups`}
    >
      <div className="puppy-details-wrap">
        <Link className="details-back-link" to="/puppies">← Back to all puppies</Link>
        <article className="puppy-profile">
          <div className="puppy-profile-image-wrap">
            <img className="puppy-profile-image" src={puppy.image} alt={`${puppy.name}, ${puppy.breed} puppy`} />
            <span className={`availability-badge availability-${puppy.availability.toLowerCase().replaceAll(' ', '-')}`}>
              <span aria-hidden="true" />{puppy.availability}
            </span>
          </div>

          <div className="puppy-profile-content">
            <p className="eyebrow">Your new best friend</p>
            <h1>{puppy.name}</h1>
            <p className="puppy-profile-breed">{puppy.breed}</p>
            <p className="puppy-profile-description">{puppy.description}</p>

            <dl className="puppy-facts">
              <div><dt>Age</dt><dd>{puppy.age}</dd></div>
              <div><dt>Gender</dt><dd>{puppy.gender}</dd></div>
              <div><dt>Breed size</dt><dd>{puppy.category}</dd></div>
              <div><dt>Price</dt><dd>{formatPuppyPrice(puppy.price)}</dd></div>
            </dl>

            <section className="puppy-health" aria-labelledby="health-heading">
              <h2 id="health-heading">Health &amp; care</h2>
              <p>Our team will share your puppy's health records and care guidance with you.</p>
              <ul>
                {puppy.healthInformation.map((item) => (
                  <li key={item}><span aria-hidden="true">✓</span>{item}</li>
                ))}
              </ul>
            </section>

            <a className="button button-green puppy-enquire-button" href={`https://wa.me/?text=${message}`} target="_blank" rel="noreferrer">
              Enquire about {puppy.name} <span aria-hidden="true">↗</span>
            </a>
            <p className="puppy-contact-note">Have a question? We’re happy to help you find your match.</p>
          </div>
        </article>
      </div>
    </SiteLayout>
  )
}

export default PuppyDetailsPage
