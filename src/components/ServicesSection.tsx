import { Ship, Package, Globe, Truck, Shield, Clock } from "lucide-react";
import cargoShip from "@/assets/cargo-ship.jpg";
import containers from "@/assets/containers.jpg";

const services = [
  {
    icon: Ship,
    title: "الشحن البحري",
    description: "نقل الحاويات والبضائع عبر أسطول حديث من السفن إلى جميع الموانئ العالمية.",
  },
  {
    icon: Package,
    title: "شحن الحاويات",
    description: "خدمات شحن حاويات بأحجام متنوعة مع ضمان سلامة البضائع طوال الرحلة.",
  },
  {
    icon: Globe,
    title: "الشحن الدولي",
    description: "شبكة واسعة تغطي أكثر من 50 ميناء حول العالم مع خدمات تخليص جمركي.",
  },
  {
    icon: Truck,
    title: "النقل البري",
    description: "خدمات نقل بري متكاملة من الميناء إلى باب المستودع أو العميل.",
  },
  {
    icon: Shield,
    title: "التأمين البحري",
    description: "تغطية تأمينية شاملة لحماية بضائعك من جميع المخاطر المحتملة.",
  },
  {
    icon: Clock,
    title: "تتبع الشحنات",
    description: "نظام تتبع لحظي يمكنك من متابعة شحناتك في أي وقت ومن أي مكان.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Image Banner */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={cargoShip} 
            alt="سفينة شحن حاويات" 
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            حلول شحن متكاملة لأعمالك
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم مجموعة شاملة من خدمات الشحن والخدمات اللوجستية لتلبية جميع احتياجاتك التجارية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border/50 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-ocean flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent */}
              <div className="mt-6 flex items-center text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>المزيد من التفاصيل</span>
                <svg
                  className="w-4 h-4 mr-2 transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Containers Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={containers} 
            alt="حاويات الشحن" 
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
