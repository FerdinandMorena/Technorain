import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Cloud,
  Shield,
  Zap,
  Database,
  LineChart,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-gradient font-semibold">
                Empowering Digital Transformation
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground font-bold leading-tight px-2">
              Transform Your Business with{" "}
              <span className="text-gradient">Next-Gen</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              IT Solutions
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Cutting-edge technology solutions that drive innovation, enhance
              efficiency, and accelerate your digital journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-2">
              <Button
                size="lg"
                onClick={() => handleNavigation("/contact")}
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-gradient-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavigation("/projects")}
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-white border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-8 sm:pt-12 lg:pt-16">
              {[
                { value: "9+", label: "Years Experience", icon: Target },
                { value: "50+", label: "Projects Delivered", icon: Rocket },
                { value: "100%", label: "Client Satisfaction", icon: Sparkles },
                { value: "20+", label: "IT Professionals", icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Our Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold px-2 text-foreground">
              Comprehensive <span className="text-gradient">IT Solutions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Cutting-edge services designed to propel your business into the
              future
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Code,
                title: "Software Development",
                description:
                  "Custom software solutions tailored to streamline your business processes and enhance efficiency.",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Cloud,
                title: "Cloud Computing",
                description:
                  "Scalable cloud infrastructure, migration services, and disaster recovery solutions.",
                color: "from-blue-500 to-purple-500",
              },
              {
                icon: Shield,
                title: "Cyber Security",
                description:
                  "Comprehensive security management and proactive threat protection for your digital assets.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: LineChart,
                title: "Business Intelligence",
                description:
                  "Data analytics solutions that transform your data into actionable business insights.",
                color: "from-pink-500 to-red-500",
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                description:
                  "Strategic consulting to help you leverage technology for business growth and innovation.",
                color: "from-red-500 to-orange-500",
              },
              {
                icon: Database,
                title: "IT Infrastructure",
                description:
                  "Complete infrastructure solutions including servers, networking, and storage systems.",
                color: "from-orange-500 to-yellow-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group card-elevated rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-4 sm:mb-6">
                    <div
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>

                  <button
                    onClick={() => handleNavigation("/services")}
                    className="text-primary text-sm sm:text-base font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Ready to Transform?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold px-2 text-foreground">
              Let's Build the <span className="text-gradient">Future</span>{" "}
              Together
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Partner with us to unlock your business's full potential through
              innovative technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-2">
              <Button
                size="lg"
                onClick={() => handleNavigation("/contact")}
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-gradient-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started Today
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
