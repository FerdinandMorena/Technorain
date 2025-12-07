import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Sparkles, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-effect border border-primary/20 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              Get In Touch
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold px-2">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
              We'd love to hear from you. Let's discuss how we can help your
              business grow
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Contact <span className="text-gradient">Information</span>
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Reach out to us through any of these channels. We're here to
                    help!
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <div className="group glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                        <a
                          href="tel:+27842031191"
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                        >
                          (+27) 84 203 1191
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                        <div className="flex flex-col gap-1">
                          <a
                            href="mailto:info@technorainsolutions.co.za"
                            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            info@technorainsolutions.co.za
                          </a>
                          <a
                            href="mailto:Tmnisi@technorainsolutions.co.za"
                            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            Tmnisi@technorainsolutions.co.za
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="group glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">Location</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          205 Tjakastad, Nhlazatje, Mpumalanga, 1193
                          <br />
                          South Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-background" />
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-foreground">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-foreground">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 border border-border/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                    Send Us a <span className="text-gradient">Message</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-medium"
                      >
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl glass-effect border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium"
                      >
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl glass-effect border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-xs sm:text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl glass-effect border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-xs sm:text-sm font-medium"
                      >
                        Subject <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl glass-effect border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-medium"
                      >
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl glass-effect border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-sm sm:text-base py-5 sm:py-6 bg-gradient-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      {/* <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="glass-effect rounded-2xl p-4 border border-border/50 overflow-hidden">
              <div className="aspect-video rounded-xl bg-muted/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">
                    Map integration coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </PageLayout>
  );
}
