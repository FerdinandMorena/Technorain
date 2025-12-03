import { Link, useNavigate } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

/**
 * Footer component - Futuristic design
 */
export default function Footer() {
  const navigate = useNavigate();

  const socials = [
    {
      name: "facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/TechnorainSolutions",
    },
    {
      name: "linkedin",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/technorain-solutions",
    },
    {
      name: "twitter",
      icon: FaTwitter,
      url: "https://twitter.com/TechnorainZA",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                  <Zap className="w-6 h-6 text-background" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gradient text-lg">
                  Technorain
                </span>
                <span className="text-xs text-muted-foreground">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering businesses through innovative IT solutions and
              cutting-edge technology.
            </p>

            <div className="flex gap-3">
              {socials.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-primary rounded-full" />
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Software Development", path: "/services" },
                { label: "Cloud Computing", path: "/services" },
                { label: "Cyber Security", path: "/services" },
                { label: "Business Intelligence", path: "/services" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-primary rounded-full" />
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
                { label: "Careers", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-primary rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    (+27) 84 203 1191
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors break-all">
                    info@technorainsolutions.co.za
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    205 Tjakastad, Nhlazatje, Mpumalanga, 1193
                    <br />
                    South Africa
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Technorain Solutions (PTY) LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-110 glow-primary z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-background group-hover:animate-bounce" />
      </button>
    </footer>
  );
}
