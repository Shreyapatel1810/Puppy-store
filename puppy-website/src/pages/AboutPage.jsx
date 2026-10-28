import SectionHeading from '../components/SectionHeading.jsx'
import SiteLayout from '../components/SiteLayout.jsx'
import './AboutPage.css'

const puppyPhoto = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1100&q=85'

function AboutPage() {
  return (
    <SiteLayout className="about-page" title="Our Story | PawFect Pups">
      <section className="about-section">
        <div className="about-inner">
          <div className="about-visual">
            <img src={puppyPhoto} alt="Two happy dogs spending time together" />
            <div className="about-stamp"><span>little paws</span><strong>big love</strong><span>since day one ♡</span></div>
          </div>
          <div className="about-copy">
            <SectionHeading
              eyebrow="A little about us"
              title="Good beginnings make happy tails."
              description="At PawFect Pups, we believe finding your puppy should feel just as lovely as bringing them home."
            />
            <p className="about-body">
              We put care, comfort, and the right match first. From your first hello to those first days together, we are here to make the journey feel warm, joyful, and wonderfully personal.
            </p>
            <div className="about-points">
              <div><span className="point-icon">♡</span><span><strong>Raised with care</strong><small>Kind hands and plenty of cuddles</small></span></div>
              <div><span className="point-icon">✿</span><span><strong>Here for your family</strong><small>Guidance before and after hello</small></span></div>
            </div>
            <a className="button button-caramel" href="https://wa.me/?text=Hi%20PawFect%20Pups!%20I%27d%20love%20to%20learn%20more%20about%20your%20puppies." target="_blank" rel="noreferrer">
              Say hello <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default AboutPage
