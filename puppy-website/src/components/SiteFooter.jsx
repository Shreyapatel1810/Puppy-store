import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark" aria-hidden="true">🐶</span>
            <span className="brand-name">PawFect <span>Pups</span></span>
          </Link>
          <p>Little paws, lifelong love.<br />Your new best friend starts here.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/puppies">Meet the puppies</Link>
          <Link to="/gone-home">Gone home</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/happy-families">Happy families</Link>
          <Link to="/about">Our story</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Say hello</h2>
          <p>Questions, puppy cuddles, or just a hello — our inbox is open.</p>
          <a href="https://wa.me/?text=Hi%20PawFect%20Pups!" target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a>
          <a href="mailto:hello@pawfectpups.com">hello@pawfectpups.com</a>
        </div>
        <div className="footer-note" aria-hidden="true">Home is<br />where the<br /><span>paws are.</span> ♡</div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PawFect Pups. Made with love.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default SiteFooter
