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
        {/* Animated background */}
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm font-medium mb-6 animate-glow">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-gradient">
                Empowering Digital Transformation
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="text-gradient">Next-Gen</span>
              <br />
              IT Solutions
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology solutions that drive innovation, enhance
              efficiency, and accelerate your digital journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                size="lg"
                onClick={() => handleNavigation("/contact")}
                className="text-base px-8 py-6 bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavigation("/projects")}
                className="text-base px-8 py-6 glass-effect border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {[
                { value: "9+", label: "Years Experience", icon: Target },
                { value: "50+", label: "Projects Delivered", icon: Rocket },
                { value: "100%", label: "Client Satisfaction", icon: Sparkles },
                { value: "20+", label: "IT Professionals", icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-6 hover:bg-primary/5 transition-all duration-300 group border border-border/50 hover:border-primary/50"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 text-primary" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Comprehensive <span className="text-gradient">IT Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge services designed to propel your business into the
              future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group relative glass-effect rounded-2xl p-8 hover:bg-card/50 transition-all duration-500 border border-border/50 hover:border-primary/50 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <button
                    onClick={() => handleNavigation("/services")}
                    className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              Ready to Transform?
            </div>

            <h2 className="text-4xl md:text-6xl font-bold">
              Let's Build the <span className="text-gradient">Future</span>{" "}
              Together
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with us to unlock your business's full potential through
              innovative technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                size="lg"
                onClick={() => handleNavigation("/contact")}
                className="text-base px-8 py-6 bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavigation("/projects")}
                className="text-base px-8 py-6 glass-effect border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
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
