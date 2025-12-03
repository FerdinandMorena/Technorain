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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              About Us
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              Innovating the <span className="text-gradient">Future</span> of
              Technology
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in digital transformation and IT excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Who We Are */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technorain Solutions is a 100% black owned South African ICT
                company committed to enabling inclusive digital transformation
                through innovative, community-focused technology solutions. With
                a proven track record in deploying cutting edge solutions across
                industries, Technorain prides itself on broadband connectivity,
                smart infrastructure, and digital skills development. Technorain
                Solutions is uniquely positioned to address the persistent
                digital divide affecting underserved and rural communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on principles of accessibility, innovation, and social
                impact, Technorain leverages cutting-edge 4IR technologies—such
                as IoT, AI, and cloud-based platforms—to deliver cost-effective
                and scalable digital solutions. Our services range from
                broadband rollout and network infrastructure design to smart
                community implementation and enterprise IT support, tailored to
                both public and private sector needs.
              </p>

              {/* Credentials Badge */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-effect px-4 py-2 rounded-full border border-primary/30">
                  <span className="text-sm font-semibold">
                    BBBEE Level 1 Contributor
                  </span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-full border border-primary/30">
                  <span className="text-sm font-semibold">
                    100% Black-Owned
                  </span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-full border border-primary/30">
                  <span className="text-sm font-semibold">Est. 2015</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="glass-effect rounded-2xl p-8 md:p-12 border border-primary/20">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                    <Eye className="w-8 h-8 text-background" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be a leading force in South Africa's digital
                    transformation by delivering inclusive, sustainable, and
                    forward-looking ICT solutions that uplift communities and
                    drive economic growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="glass-effect rounded-2xl p-8 md:p-12 border border-primary/20">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                    <Target className="w-8 h-8 text-background" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower underserved communities through innovative
                    digital infrastructure, skills development, and strategic
                    partnerships that advance equitable access to technology,
                    opportunity, and prosperity.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="glass-effect rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <value.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="relative container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">Technorain</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group glass-effect rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "2015", label: "Established" },
                { value: "5000+", label: "Learners Trained" },
                { value: "50K+", label: "Users Connected" },
                { value: "10+", label: "Smart Hubs" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center glass-effect rounded-2xl p-4 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 md:mb-3 group-hover:scale-110 transition-transform break-words">
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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Work <span className="text-gradient">Together?</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed in the digital
              age
            </p>

            <Button
              size="lg"
              onClick={() => handleNavigation("/contact")}
              className="text-base px-8 py-6 bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
