import { useEffect } from 'react'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'

function SiteLayout({ children, className = '', headerClassName = '', title }) {
  useEffect(() => {
    if (!title) return undefined

    const previousTitle = document.title
    document.title = title
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <div id="top" className={`site-page ${className}`.trim()}>
      <div className={`site-header-shell ${headerClassName}`.trim()}>
        <SiteHeader />
      </div>
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
