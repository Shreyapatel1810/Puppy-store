import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import './HowItWorksPage.css'

const steps = [
  {
    number: '01',
    icon: '♡',
    title: 'Find your match',
    description: 'Browse our puppies and get to know their little personalities. Think about your home, routine, and the kind of companion who would feel just right.',
    action: 'Explore puppies',
    href: '/puppies',
  },
  {
    number: '02',
    icon: '✉',
    title: 'Say hello',
    description: 'Found a puppy you love? Get in touch to ask questions, learn more, and arrange a visit or video call to meet your potential new best friend.',
    action: 'Send an enquiry',
    href: 'https://wa.me/?text=Hi%20PawFect%20Pups!%20I%27d%20love%20to%20enquire%20about%20your%20puppies.',
  },
  {
    number: '03',
    icon: '✿',
    title: 'Make it official',
    description: 'When you are ready, we will guide you through reserving your puppy and answer any last questions. We will also help you prepare for their first days at home.',
    action: 'Ask about reserving',
    href: 'https://wa.me/?text=Hi%20PawFect%20Pups!%20I%27d%20like%20to%20know%20about%20reserving%20a%20puppy.',
  },
  {
    number: '04',
    icon: '⌂',
    title: 'Welcome them home',
    description: 'The big day is here! We will coordinate collection or discuss delivery arrangements with you, and send your puppy home with the care details you need.',
    action: 'Plan a visit',
    href: 'https://wa.me/?text=Hi%20PawFect%20Pups!%20I%27d%20like%20to%20plan%20a%20puppy%20visit.',
  },
]

function StepCard({ step }) {
  const isExternal = step.href.startsWith('https://')

  return (
    <article className="process-card">
      <div className="process-card-top">
        <span className="process-icon" aria-hidden="true">{step.icon}</span>
        <span className="process-number">{step.number}</span>
      </div>
      <h2>{step.title}</h2>
      <p>{step.description}</p>
      {isExternal ? (
        <a className="process-step-link" href={step.href} target="_blank" rel="noreferrer">
          {step.action} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <Link className="process-step-link" to={step.href}>
          {step.action} <span aria-hidden="true">↗</span>
        </Link>
      )}
    </article>
  )
}

function HowItWorksPage() {
  return (
    <SiteLayout className="how-it-works-page" title="How It Works | PawFect Pups">
      <section className="process-hero">
        <span className="process-hero-doodle process-doodle-left" aria-hidden="true">♡</span>
        <span className="process-hero-doodle process-doodle-right" aria-hidden="true">✳</span>
        <p className="eyebrow">From first hello to forever</p>
        <h1>A little love,<br />step by <span>step.</span></h1>
        <p className="process-hero-description">
          Finding your new best friend should feel exciting and easy. We are here to make every part of your puppy journey a happy one.
        </p>
        <a className="button button-caramel" href="#puppy-journey">See how it works <span aria-hidden="true">↓</span></a>
      </section>

      <section className="process-section" id="puppy-journey" aria-labelledby="process-heading">
        <div className="process-section-heading">
          <p className="eyebrow">Your PawFect journey</p>
          <h2 id="process-heading">Four simple steps to your new best friend</h2>
          <p>We will be right here to help, from the first puppy browse to that very first cuddle at home.</p>
        </div>
        <div className="process-grid">
          {steps.map((step) => <StepCard key={step.number} step={step} />)}
        </div>
      </section>

      <section className="process-reassurance">
        <div className="reassurance-mark" aria-hidden="true">🐾</div>
        <div>
          <p className="eyebrow">Here for every little question</p>
          <h2>Need a hand along the way?</h2>
          <p>Choosing a puppy is a big, happy decision. Message us any time and we will help you feel ready for your new family member.</p>
        </div>
        <a className="button button-green" href="https://wa.me/?text=Hi%20PawFect%20Pups!%20I%20have%20a%20question%20about%20the%20puppy%20process." target="_blank" rel="noreferrer">
          Chat with us <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="process-bottom-cta">
        <p className="eyebrow">Your next chapter starts here</p>
        <h2>Ready to meet the little one?</h2>
        <Link className="button button-caramel" to="/puppies">Meet the puppies <span aria-hidden="true">→</span></Link>
      </section>
    </SiteLayout>
  )
}

export default HowItWorksPage
