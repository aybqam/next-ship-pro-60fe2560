import { Ship, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ship.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="سفينة شحن"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Wave Decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 64L48 69.3C96 75 192 85 288 80C384 75 480 53 576 48C672 43 768 53 864 64C960 75 1056 85 1152 80C1248 75 1344 53 1392 42.7L1440 32V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V64Z"
            fill="hsl(210 40% 98%)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Ship className="h-5 w-5 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              شريكك الموثوق في الشحن البحري
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up [animation-delay:100ms]">
            نقل بضائعك عبر
            <span className="block text-accent mt-2">البحار بأمان</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-up [animation-delay:200ms]">
            نقدم حلول شحن بحري متكاملة وخدمات لوجستية احترافية لنقل بضائعك إلى جميع أنحاء العالم بأعلى معايير الجودة والأمان.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:300ms]">
            <Button variant="heroAccent" size="lg">
              احصل على عرض سعر
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="hero" size="lg">
              تعرف على خدماتنا
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up [animation-delay:400ms]">
            {[
              { value: "+25", label: "سنة خبرة" },
              { value: "+150", label: "سفينة شحن" },
              { value: "+50", label: "ميناء عالمي" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Ship Animation */}
      <div className="absolute left-10 bottom-40 hidden lg:block animate-float">
        <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-4">
          <Ship className="h-10 w-10 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
