import { useState } from 'react'
import SiteLayout from '../components/SiteLayout.jsx'
import './ContactPage.css'

const contactEmail = 'hello@pawfectpups.com'
const whatsappUrl = 'https://wa.me/?text=Hi%20PawFect%20Pups!%20I%27d%20love%20to%20get%20in%20touch.'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const validatePhone = (event) => {
    const phone = event.currentTarget.value
    const digitCount = phone.replace(/\D/g, '').length
    const allowedCharacters = /^[+]?[0-9 ()().-]{7,20}$/.test(phone)

    event.currentTarget.setCustomValidity(
      phone && (!allowedCharacters || digitCount < 7)
        ? 'Enter a valid phone number with at least 7 digits.'
        : '',
    )
  }

  return (
    <SiteLayout className="contact-page" title="Contact Us | PawFect Pups">
      <section className="contact-hero">
        <span className="contact-hero-doodle contact-doodle-left" aria-hidden="true">♡</span>
        <span className="contact-hero-doodle contact-doodle-right" aria-hidden="true">✳</span>
        <p className="eyebrow">We’d love to hear from you</p>
        <h1>Let’s have a<br /><span>little chat.</span></h1>
        <p>Questions about a puppy, the process, or what comes next? We’re here to help.</p>
      </section>

      <section className="contact-main-section" aria-label="Contact PawFect Pups">
        <div className="contact-main-grid">
          <div className="contact-form-panel">
            <p className="eyebrow">Drop us a note</p>
            <h2>How can we help?</h2>
            <p className="contact-form-intro">Fill in the form and we’ll be happy to chat about your puppy questions.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="e.g. Alex Morgan" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[+]?[0-9 ()().-]{7,20}"
                  title="Enter a phone number with at least 7 digits."
                  placeholder="+971 50 123 4567"
                  required
                  onInput={validatePhone}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea id="contact-message" name="message" rows="5" placeholder="Tell us what’s on your mind..." required />
              </div>

              <button className="button button-caramel contact-submit" type="submit">
                Review my details <span aria-hidden="true">→</span>
              </button>

              {submitted && (
                <div className="contact-success" role="status" aria-live="polite">
                  <span aria-hidden="true">♡</span>
                  <div>
                    <strong>Your details look good.</strong>
                    <p>This demo does not send or save form submissions. Please use email or WhatsApp below to contact us directly.</p>
                    <div className="contact-success-links">
                      <a href={`mailto:${contactEmail}`}>Email PawFect Pups</a>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer">Message on WhatsApp</a>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          <aside className="contact-info-panel">
            <div className="contact-info-copy">
              <p className="eyebrow">The PawFect team</p>
              <h2>Say hello, anytime.</h2>
              <p>We’re always happy to help you find the right little friend for your family.</p>
            </div>

            <div className="contact-info-items">
              <a className="contact-info-item" href={`mailto:${contactEmail}`}>
                <span className="contact-info-icon" aria-hidden="true">✉</span>
                <span><small>Email us</small><strong>{contactEmail}</strong></span>
                <span className="contact-info-arrow" aria-hidden="true">↗</span>
              </a>
              <a className="contact-info-item" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span className="contact-info-icon" aria-hidden="true">☏</span>
                <span><small>WhatsApp</small><strong>Chat with our team</strong></span>
                <span className="contact-info-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="contact-info-item contact-location">
                <span className="contact-info-icon" aria-hidden="true">⌖</span>
                <span><small>Our location</small><strong>Dubai, UAE</strong><small>Contact us for visit details</small></span>
              </div>
            </div>

            <a className="button button-green contact-whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span aria-hidden="true">✦</span> Chat on WhatsApp
            </a>
          </aside>
        </div>
      </section>

      <section className="contact-map-section" aria-labelledby="contact-map-heading">
        <div className="contact-map-heading">
          <div>
            <p className="eyebrow">Come say hello</p>
            <h2 id="contact-map-heading">Find us in Dubai</h2>
          </div>
          <p>Visits are arranged by appointment. Get in touch and we’ll share the details.</p>
        </div>
        <div className="contact-map-frame">
          <iframe
            title="Map showing Dubai, United Arab Emirates"
            src="https://maps.google.com/maps?q=Dubai%2C%20United%20Arab%20Emirates&t=&z=11&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  )
}

export default ContactPage
