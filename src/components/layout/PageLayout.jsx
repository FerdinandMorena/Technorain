import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";

/**
 * Page layout wrapper component
 * Provides consistent navigation and footer across all pages
 * Automatically scrolls to top on route change
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function PageLayout({ children }) {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past ~70% of viewport height (past hero section)
      const scrollThreshold = window.innerHeight * 0.7;
      setShowScrollTop(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-110 z-50 group border-2 border-white/20 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
