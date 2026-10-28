import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PuppiesPage from './pages/PuppiesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import PuppyDetailsPage from './pages/PuppyDetailsPage.jsx'
import HappyFamiliesPage from './pages/HappyFamiliesPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import GoneHomePage from './pages/GoneHomePage.jsx'
import RouteTransition from './components/RouteTransition.jsx'
import './App.css'

function App() {
  return (
    <RouteTransition>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puppies/:puppyId" element={<PuppyDetailsPage />} />
        <Route path="/puppies" element={<PuppiesPage />} />
        <Route path="/happy-families" element={<HappyFamiliesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gone-home" element={<GoneHomePage />} />
      </Routes>
    </RouteTransition>
  )
}

export default App
