import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Navigation component - Modern professional design
 */
export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-border/50"
            : "bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavigation("/")}
              className="group cursor-pointer flex-shrink-0"
            >
              <img
                src="/logo.png"
                alt="Technorain Solutions"
                className="h-10 sm:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-md font-semibold transition-all duration-300 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Active indicator */}
                  {location.pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavigation("/contact")}
                className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "top-2 rotate-45" : "top-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 scale-0"
                      : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "top-2 -rotate-45" : "top-3"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            {/* <img
              src="/logo.png"
              alt="Technorain Solutions"
              className="h-8 w-auto object-contain"
            /> */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
                style={{
                  transform: isMobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(20px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 50 + 100}ms`
                    : "0ms",
                }}
              >
                <span>{link.label}</span>
                {location.pathname === link.href && (
                  <span className="w-2 h-2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-muted/30">
            <Button
              onClick={() => handleNavigation("/contact")}
              className="w-full bg-gradient-primary text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>

            {/* Contact Info */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">Need help?</p>
              <a
                href="tel:+27842031191"
                className="text-sm font-medium text-primary hover:underline"
              >
                (+27) 84 203 1191
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
