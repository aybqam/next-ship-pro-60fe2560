import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+966 50 000 0000",
    subValue: "+966 11 000 0000",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@seaferry.com",
    subValue: "support@seaferry.com",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "الرياض، المملكة العربية السعودية",
    subValue: "حي الأعمال، برج البحار",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "السبت - الخميس",
    subValue: "8:00 ص - 6:00 م",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-muted-foreground text-lg">
            تواصل مع فريقنا للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="أدخل اسمك"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="+966 5X XXX XXXX"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">
                  رسالتك
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full">
                <Send className="h-5 w-5" />
                إرسال الرسالة
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-sm border border-border/50 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-ocean flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.value}</p>
                  <p className="text-muted-foreground text-sm">{item.subValue}</p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary to-ocean rounded-2xl p-8 text-center">
              <MapPin className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h4 className="text-xl font-bold text-primary-foreground mb-2">
                زورنا في مكاتبنا
              </h4>
              <p className="text-primary-foreground/80">
                الرياض، المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
