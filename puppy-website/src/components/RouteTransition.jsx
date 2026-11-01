import { cloneElement, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { puppies } from '../data/puppies.js'
import './RouteTransition.css'

const DOOR_CLOSE_DURATION = 520
const DOOR_OPEN_DURATION = 1250
const transitionPuppy = puppies[0]

function RouteTransition({ children }) {
  const location = useLocation()
  const [displayedLocation, setDisplayedLocation] = useState(location)
  const [phase, setPhase] = useState('idle')
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
      }, DOOR_CLOSE_DURATION)
    })

    return () => {
      window.cancelAnimationFrame(exitFrame)
      if (exitTimer) window.clearTimeout(exitTimer)
    }
  }, [displayedLocation.pathname, location])

  useEffect(() => {
    if (phase !== 'entering') return undefined

    const enterTimer = window.setTimeout(() => setPhase('idle'), DOOR_OPEN_DURATION)
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
    <>
      <div className={`route-transition route-transition--${phase}`}>
        {routeContent}
      </div>
      {phase !== 'idle' && (
        <div className={`door-transition door-transition--${phase}`} aria-hidden="true">
          <div className="door-panel door-panel--left">
            {phase === 'exiting' && (
              <div className="door-puppy-plaque">
                <span className="door-puppy-name">Meet {transitionPuppy.name}</span>
                <img src={transitionPuppy.image} alt="" />
                <span className="door-puppy-caption">A little love awaits</span>
              </div>
            )}
          </div>
          <div className="door-panel door-panel--right">
            {phase === 'exiting' && (
              <div className="door-puppy-plaque door-puppy-plaque--right">
                <span className="door-puppy-name">Meet {transitionPuppy.name}</span>
                <img src={transitionPuppy.image} alt="" />
                <span className="door-puppy-caption">A little love awaits</span>
              </div>
            )}
          </div>
          {phase === 'entering' && (
            <div className="door-puppy-runner">
              <span className="door-puppy-trail door-puppy-trail--one" aria-hidden="true">🐾</span>
              <span className="door-puppy-trail door-puppy-trail--two" aria-hidden="true">🐾</span>
              <img src={transitionPuppy.image} alt="" />
              <span className="door-puppy-runner-name">{transitionPuppy.name}</span>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default RouteTransition
