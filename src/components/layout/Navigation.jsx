import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Navigation component - Futuristic design with scroll-to-top
 */
export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
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

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                <div className="relative w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 glow-primary">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col text-start">
                <span className="text-xl font-bold text-gradient">
                  Technorain
                </span>
                <span className="text-xs text-muted-foreground">Solutions</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    location.pathname === link.href
                      ? "text-primary scale-105"
                      : "text-muted-foreground hover:text-foreground hover:scale-110"
                  }`}
                >
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text */}
                  <span className="relative">{link.label}</span>

                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-300 ${
                      location.pathname === link.href
                        ? "w-full shadow-lg shadow-primary/50"
                        : "w-0 group-hover:w-full group-hover:shadow-lg group-hover:shadow-primary/50"
                    }`}
                  />

                  {/* Dot indicator for active */}
                  {location.pathname === link.href && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => handleNavigation("/contact")}
                className="relative overflow-hidden group bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className={`text-2xl font-bold transition-all duration-300 ${
                location.pathname === link.href
                  ? "text-gradient scale-110"
                  : "text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen
                  ? "slideIn 0.3s ease-out forwards"
                  : "none",
              }}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => handleNavigation("/contact")}
            size="lg"
            className="mt-8 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
