import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

/**
 * Page layout wrapper component
 * Provides consistent navigation and footer across all pages
 * Automatically scrolls to top on route change
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function PageLayout({ children }) {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}
