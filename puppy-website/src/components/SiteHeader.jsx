import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SiteHeader.css'

const navigation = [
  { label: 'Our puppies', href: '/puppies' },
  { label: 'Gone home', href: '/gone-home' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Happy families', href: '/happy-families' },
  { label: 'Our story', href: '/about' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="PawFect Pups home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" focusable="false">
            <ellipse cx="24" cy="31" rx="10" ry="8" />
            <ellipse cx="11" cy="20" rx="5" ry="7" transform="rotate(-25 11 20)" />
            <ellipse cx="21" cy="13" rx="5" ry="7" transform="rotate(-8 21 13)" />
            <ellipse cx="31" cy="14" rx="5" ry="7" transform="rotate(12 31 14)" />
            <ellipse cx="39" cy="22" rx="5" ry="7" transform="rotate(28 39 22)" />
          </svg>
        </span>
        <span className="brand-copy">
          <span className="brand-name">PawFect <span>Pups</span></span>
          <span className="brand-tagline">Little paws, lifelong love</span>
        </span>
      </Link>

      <nav
        className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === '/'}
            onClick={closeMenu}
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="header-whatsapp"
          href="https://wa.me/?text=Hi%20PawFect%20Pups!%20I%27d%20love%20to%20learn%20more."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with PawFect Pups on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.7Z" />
            <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.4.4-1 .6-1.6.5-1-.1-2.2-.7-3.3-1.7-1.1-.9-1.8-2.1-2-3.1-.2-.9.1-1.7.5-2.2Z" />
          </svg>
          <span>Chat with us</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className={`menu-icon${menuOpen ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="menu-label">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>
    </header>
  )
}

export default SiteHeader
