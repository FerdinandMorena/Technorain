import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Cloud,
  Shield,
  Zap,
  Database,
  LineChart,
  CheckCircle2,
  Users,
  Wrench,
  BarChart3,
  Sparkles,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Our Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold px-2 text-foreground">
              Comprehensive <span className="text-gradient">IT Solutions</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
              Tailored technology solutions for businesses of all sizes across
              South Africa and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-16 lg:mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 text-foreground">
              Core <span className="text-gradient">Business Functions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Creating value through innovative solutions and strategic services
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {/* Software Development */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Code className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Software Development</h3>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Custom software solutions designed to streamline your business
                  processes and enhance operational efficiency through
                  cutting-edge technology.
                </p>

                <ul className="space-y-4">
                  {[
                    "Custom software solutions tailored to your needs",
                    "Mobile and web app development",
                    "Integration of software systems",
                    "Ongoing support and maintenance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl card-elevated overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-32 h-32 sm:w-40 sm:h-40 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 sm:h-96 rounded-2xl card-elevated overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                <div className="absolute inset-0 dot-pattern" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="w-32 h-32 sm:w-40 sm:h-40 text-secondary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <LineChart className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Business Intelligence & Analytics
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Transform your data into actionable insights with our
                  comprehensive BI and analytics solutions powered by advanced
                  algorithms.
                </p>

                <ul className="space-y-4">
                  {[
                    "Data analytics and visualization",
                    "Custom reporting dashboards",
                    "Predictive analytics and forecasting",
                    "Real-time business intelligence",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cloud Computing */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Cloud className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Cloud Computing Services</h3>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Leverage the power of cloud technology with our comprehensive
                  solutions, migration services, and scalable infrastructure.
                </p>

                <ul className="space-y-4">
                  {[
                    "Cloud migration and hosting services",
                    "Data backup and disaster recovery",
                    "Scalable cloud infrastructure",
                    "Cloud security and compliance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl card-elevated overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cloud className="w-32 h-32 sm:w-40 sm:h-40 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Cyber Security */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 sm:h-96 rounded-2xl card-elevated overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10" />
                <div className="absolute inset-0 dot-pattern" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 sm:w-40 sm:h-40 text-secondary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-lg">
                    <Shield className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Cyber Security</h3>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Protect your digital assets with our comprehensive security
                  management and proactive threat protection services.
                </p>

                <ul className="space-y-4">
                  {[
                    "Security assessment and auditing",
                    "Threat detection and prevention",
                    "Security policy development",
                    "Incident response and recovery",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 gradient-mesh" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 text-foreground">
              Additional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Comprehensive support to ensure your IT infrastructure runs
              smoothly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "ICT Consulting",
                description:
                  "Expert consulting services including strategy development, vendor selection, and system integration.",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Wrench,
                title: "Managed ICT Services",
                description:
                  "Outsource your IT needs with our comprehensive managed services including support and maintenance.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Database,
                title: "IT Infrastructure",
                description:
                  "Supply and installation of computers, servers, storage, networking equipment, and security solutions.",
                color: "from-orange-500 to-red-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group card-elevated rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold px-2 text-foreground">
              Ready to Elevate Your{" "}
              <span className="text-gradient">IT Infrastructure?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Contact us today to discuss how our services can transform your
              business operations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-2">
              <Button
                size="lg"
                onClick={() => handleNavigation("/contact")}
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-gradient-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavigation("/projects")}
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-white border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
