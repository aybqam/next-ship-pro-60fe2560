import { Check, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import portImage from "@/assets/port.jpg";
import teamImage from "@/assets/team.jpg";

const features = [
  "أسطول حديث من السفن والحاويات",
  "شبكة موانئ عالمية واسعة",
  "خدمة عملاء على مدار الساعة",
  "تأمين شامل على جميع الشحنات",
  "أسعار تنافسية ومرنة",
  "تتبع لحظي للشحنات",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={portImage} 
                    alt="ميناء الشحن" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary to-ocean p-6 text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-1">+25</div>
                  <div className="text-primary-foreground/80 text-sm">سنة خبرة</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-accent/20 p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-1">+10K</div>
                  <div className="text-foreground/80 text-sm">عميل سعيد</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={teamImage} 
                    alt="فريق العمل" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              أكثر من 25 عامًا من الخبرة في الشحن البحري
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              عبارة البحار هي شركة رائدة في مجال الشحن البحري والخدمات اللوجستية، تأسست بهدف تقديم حلول نقل متكاملة وموثوقة للشركات والأفراد. نفخر بتاريخنا الحافل بالإنجازات وثقة عملائنا.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              نسعى دائماً لتوفير أفضل الخدمات اللوجستية بأسعار تنافسية، مع الالتزام بمواعيد التسليم وضمان سلامة البضائع.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg">
                تعرف علينا أكثر
              </Button>
              <div className="flex items-center gap-3 bg-card rounded-xl px-4 py-2 shadow-md">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">معتمدون دولياً</div>
                  <div className="text-muted-foreground text-xs">ISO 9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
