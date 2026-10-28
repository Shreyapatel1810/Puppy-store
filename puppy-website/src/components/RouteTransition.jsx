import { cloneElement, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import './RouteTransition.css'

function RouteTransition({ children }) {
  const location = useLocation()
  const navigationType = useNavigationType()
  const [displayedLocation, setDisplayedLocation] = useState(location)
  const [phase, setPhase] = useState('idle')
  const direction = navigationType === 'POP' ? 'back' : 'forward'
  const transitionLocation = displayedLocation.pathname === location.pathname
    ? location
    : displayedLocation
  const previousScrollTarget = useRef({ pathname: '', hash: '' })
  const scrollFrame = useRef(0)

  useEffect(() => {
    if (location.pathname === displayedLocation.pathname) return undefined

    let exitTimer
    const exitFrame = window.requestAnimationFrame(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setDisplayedLocation(location)
        setPhase('idle')
        return
      }

      setPhase('exiting')
      exitTimer = window.setTimeout(() => {
        setDisplayedLocation(location)
        setPhase('entering')
      }, 240)
    })

    return () => {
      window.cancelAnimationFrame(exitFrame)
      if (exitTimer) window.clearTimeout(exitTimer)
    }
  }, [displayedLocation.pathname, location, navigationType])

  useEffect(() => {
    if (phase !== 'entering') return undefined

    const enterTimer = window.setTimeout(() => setPhase('idle'), 460)
    return () => window.clearTimeout(enterTimer)
  }, [phase])

  useEffect(() => {
    if (location.pathname !== transitionLocation.pathname) return

    const { pathname, hash } = previousScrollTarget.current
    if (pathname === location.pathname && hash === location.hash) return

    previousScrollTarget.current = { pathname: location.pathname, hash: location.hash }
    window.cancelAnimationFrame(scrollFrame.current)

    if (location.hash) {
      scrollFrame.current = window.requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
        target?.scrollIntoView()
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location, transitionLocation])

  useEffect(() => () => window.cancelAnimationFrame(scrollFrame.current), [])

  const routeContent = cloneElement(children, { location: transitionLocation })

  return (
    <div
      className={`route-transition route-transition--${phase} route-transition--${direction}`}
    >
      {routeContent}
    </div>
  )
}

export default RouteTransition
