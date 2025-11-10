import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Cloud,
  Shield,
  Database,
  LineChart,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps"
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const testimonials = [
    {
      quote:
        "Technorain transformed our entire IT infrastructure. The results exceeded our expectations and the team was incredibly professional throughout the process.",
      author: "John Smith",
      role: "CTO, Enterprise Corp",
      rating: 5,
    },
    {
      quote:
        "Professional, efficient, and innovative. They delivered exactly what we needed on time and within budget. Highly recommended!",
      author: "Sarah Johnson",
      role: "CEO, Tech Startup",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and support. Our business operations have never been smoother. The team is always available when we need them.",
      author: "Michael Brown",
      role: "Director, Manufacturing Co",
      rating: 5,
    },
    {
      quote:
        "The cloud migration project was seamless. They handled everything with expertise and minimal disruption to our daily operations.",
      author: "Emily Davis",
      role: "IT Manager, Financial Services",
      rating: 5,
    },
    {
      quote:
        "Exceptional cybersecurity implementation. We feel much more secure knowing our data is protected by their advanced solutions.",
      author: "David Wilson",
      role: "COO, Healthcare Provider",
      rating: 5,
    },
    {
      quote:
        "The custom software they developed has revolutionized how we do business. It's intuitive, powerful, and exactly what we needed.",
      author: "Lisa Anderson",
      role: "VP Operations, Retail Chain",
      rating: 5,
    },
    {
      quote:
        "Best IT consulting experience we've ever had. They truly understand business needs and deliver solutions that work.",
      author: "Robert Taylor",
      role: "CEO, Logistics Company",
      rating: 5,
    },
    {
      quote:
        "Their data analytics platform has given us insights we never had before. Decision-making has become so much more data-driven.",
      author: "Jennifer Martinez",
      role: "Director of Analytics, E-commerce",
      rating: 5,
    },
  ];

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      category: "Cloud Computing",
      description:
        "Successfully migrated a large enterprise to cloud infrastructure, reducing operational costs by 40% while improving scalability and performance.",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      stats: ["40% Cost Reduction", "99.9% Uptime", "500+ Users"],
    },
    {
      title: "Custom ERP System",
      category: "Software Development",
      description:
        "Developed a comprehensive ERP system for a manufacturing company, streamlining operations across 500+ users and multiple departments.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      stats: ["500+ Users", "10 Modules", "24/7 Support"],
    },
    {
      title: "Security Infrastructure Overhaul",
      category: "Cyber Security",
      description:
        "Implemented enterprise-grade security solutions protecting sensitive financial data with zero breaches since deployment.",
      icon: Shield,
      color: "from-pink-500 to-red-500",
      stats: ["Zero Breaches", "24/7 Monitoring", "ISO Compliant"],
    },
    {
      title: "Business Intelligence Dashboard",
      category: "Data Analytics",
      description:
        "Created a real-time analytics dashboard providing actionable business insights, improving decision-making speed by 60%.",
      icon: LineChart,
      color: "from-orange-500 to-yellow-500",
      stats: ["60% Faster Decisions", "Real-time Data", "50+ KPIs"],
    },
    {
      title: "Mobile App Development",
      category: "Software Development",
      description:
        "Built a cross-platform mobile application serving 10,000+ active users with 4.8-star rating on app stores.",
      icon: Code,
      color: "from-green-500 to-cyan-500",
      stats: ["10K+ Users", "4.8★ Rating", "iOS & Android"],
    },
    {
      title: "IT Infrastructure Setup",
      category: "Infrastructure",
      description:
        "Designed and deployed complete IT infrastructure for a new office location, supporting 200+ employees seamlessly.",
      icon: Database,
      color: "from-blue-500 to-purple-500",
      stats: ["200+ Employees", "99.9% Uptime", "Scalable Design"],
    },
  ];

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
              Our Work
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              Success <span className="text-gradient">Stories</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful IT solutions and digital
              transformations
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-32">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-effect rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
              >
                {/* Project Header */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                  />
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-24 h-24 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full glass-effect border border-white/20 text-xs font-medium text-white">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>

                  {/* View Button */}
                  <button className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300 pt-2">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Slider */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="relative container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Carousel Container */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                  >
                    <div className="glass-effect rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                      <div className="mb-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full bg-gradient-primary"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="glass-effect rounded-full p-3 border border-border/50 hover:border-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="glass-effect rounded-full p-3 border border-border/50 hover:border-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </button>
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
              Start Your <span className="text-gradient">Project</span> Today
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's create something amazing together and transform your
              business
            </p>

            <Button
              size="lg"
              onClick={() => handleNavigation("/contact")}
              className="text-base px-8 py-6 bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
