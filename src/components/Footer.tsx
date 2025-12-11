import { Ship, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "خدماتنا", href: "#services" },
    { label: "من نحن", href: "#about" },
    { label: "اتصل بنا", href: "#contact" },
  ];

  const services = [
    "الشحن البحري",
    "شحن الحاويات",
    "الشحن الدولي",
    "النقل البري",
    "التأمين البحري",
    "تتبع الشحنات",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="عبارة البحار" className="h-20 w-auto mb-6 bg-primary-foreground rounded-lg p-2" />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              شركة رائدة في مجال الشحن البحري والخدمات اللوجستية، نقدم حلولاً متكاملة لنقل البضائع حول العالم.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Ship className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@seaferry.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  الرياض، المملكة العربية السعودية
                  <br />
                  حي الأعمال، برج البحار
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} عبارة البحار. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
