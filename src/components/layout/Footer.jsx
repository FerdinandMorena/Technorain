import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

/**
 * Footer component - Clean modern design
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

  return (
    <footer className="relative border-t border-border bg-muted/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/50 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <img
                src="/logo.png"
                alt="Technorain Solutions"
                className="h-16 w-auto object-contain"
              />
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
                  className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group shadow-sm"
                >
                  <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-primary rounded-full" />
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
              <div className="w-1 h-5 bg-gradient-primary rounded-full" />
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
              <div className="w-1 h-5 bg-gradient-primary rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors shadow-sm">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    (+27) 84 203 1191
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors shadow-sm">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors break-all">
                    info@technorainsolutions.co.za
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors shadow-sm">
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
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Technorain Solutions (PTY) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
