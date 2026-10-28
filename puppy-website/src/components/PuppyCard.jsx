import './PuppyCard.css'

function PuppyCard({ puppy }) {
  const message = encodeURIComponent(`Hi PawFect Pups! I'd love to know more about ${puppy.name}.`)

  return (
    <article className="puppy-card">
      <div className="puppy-card-image-wrap">
        <img className="puppy-card-image" src={puppy.image} alt={`${puppy.name}, a ${puppy.breed}`} loading="lazy" />
        <span className="puppy-badge">{puppy.badge}</span>
      </div>
      <div className="puppy-card-content">
        <div className="puppy-card-title">
          <h3>{puppy.name}</h3>
          <span className="puppy-age">{puppy.age}</span>
        </div>
        <p>{puppy.breed}</p>
        <a
          className="puppy-card-link"
          href={`https://wa.me/?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          Meet {puppy.name} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default PuppyCard
