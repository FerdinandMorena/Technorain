import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Users,
  Zap,
  Award,
  Sparkles,
  Rocket,
  Eye,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
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
              <span className="font-semibold text-foreground">About Us</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold px-2 text-foreground">
              Innovating the <span className="text-gradient">Future</span> of
              Technology
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
              Your trusted partner in digital transformation and IT excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 lg:space-y-16">
            {/* Company Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <img
                  src="/logo.png"
                  alt="Technorain Solutions"
                  className="relative h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain"
                />
              </div>
            </div>

            {/* Who We Are */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Technorain Solutions is a 100% black owned South African ICT
                company committed to enabling inclusive digital transformation
                through innovative, community-focused technology solutions. With
                a proven track record in deploying cutting edge solutions across
                industries, Technorain prides itself on broadband connectivity,
                smart infrastructure, and digital skills development. Technorain
                Solutions is uniquely positioned to address the persistent
                digital divide affecting underserved and rural communities.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Founded on principles of accessibility, innovation, and social
                impact, Technorain leverages cutting-edge 4IR technologies—such
                as IoT, AI, and cloud-based platforms—to deliver cost-effective
                and scalable digital solutions. Our services range from
                broadband rollout and network infrastructure design to smart
                community implementation and enterprise IT support, tailored to
                both public and private sector needs.
              </p>

              {/* Credentials Badge */}
              <div className="flex flex-wrap gap-2 sm:gap-4 pt-3 sm:pt-4">
                <div className="px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    BBBEE Level 1 Contributor
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    100% Black-Owned
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    Est. 2015
                  </span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="card-elevated rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="relative flex-shrink-0">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                  </div>
                </div>

                <div className="flex-1 space-y-2 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    Our Vision
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    To be a leading force in South Africa's digital
                    transformation by delivering inclusive, sustainable, and
                    forward-looking ICT solutions that uplift communities and
                    drive economic growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="card-elevated rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="relative flex-shrink-0">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                  </div>
                </div>

                <div className="flex-1 space-y-2 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    Our Mission
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    To empower underserved communities through innovative
                    digital infrastructure, skills development, and strategic
                    partnerships that advance equitable access to technology,
                    opportunity, and prosperity.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground">
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: "Innovation",
                    description:
                      "We embrace new ideas and emerging technologies to solve real-world problems.",
                    icon: Sparkles,
                  },
                  {
                    title: "Inclusion",
                    description:
                      "We are committed to digital equity and empowering marginalized communities.",
                    icon: Users,
                  },
                  {
                    title: "Sustainability",
                    description:
                      "We focus on long-term impact through smart design and scalable implementation.",
                    icon: Target,
                  },
                  {
                    title: "Collaboration",
                    description:
                      "We build strong partnerships with communities, government, and industry.",
                    icon: Zap,
                  },
                  {
                    title: "Integrity",
                    description:
                      "We conduct our business with transparency, accountability, and ethical leadership.",
                    icon: Award,
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="card-elevated rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <value.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 gradient-mesh" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 text-foreground">
              Why Choose <span className="text-gradient">Technorain</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              We combine expertise, innovation, and dedication to deliver
              exceptional results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Users,
                title: "Community-Focused",
                description:
                  "Dedicated to bridging the digital divide in underserved and rural communities",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Award,
                title: "BBBEE Level 1",
                description:
                  "100% black-owned company with proven transformation credentials",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Sustainable Impact",
                description:
                  "Long-term solutions focused on people, planet, and prosperity",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Rocket,
                title: "4IR Innovation",
                description:
                  "Leveraging IoT, AI, and cloud platforms for scalable digital transformation",
                color: "from-green-500 to-cyan-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group card-elevated rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                { value: "2015", label: "Established" },
                { value: "5000+", label: "Learners Trained" },
                { value: "50K+", label: "Users Connected" },
                { value: "10+", label: "Smart Hubs" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center card-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient mb-1 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform break-words">
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
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold px-2 text-foreground">
              Ready to Work <span className="text-gradient">Together?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Let's discuss how we can help your business succeed in the digital
              age
            </p>

            <Button
              size="lg"
              onClick={() => handleNavigation("/contact")}
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-gradient-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
