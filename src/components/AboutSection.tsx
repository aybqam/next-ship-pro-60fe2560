import { Check, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          {/* Content */}
          <div>
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

            <Button variant="accent" size="lg">
              تعرف علينا أكثر
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-ocean rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <Anchor className="h-16 w-16 text-accent mb-8" />
                
                {/* Stats */}
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-bold text-primary-foreground mb-2">+10,000</div>
                    <div className="text-primary-foreground/70">عميل سعيد</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-primary-foreground mb-2">+500,000</div>
                    <div className="text-primary-foreground/70">شحنة تم تسليمها</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-primary-foreground mb-2">99.5%</div>
                    <div className="text-primary-foreground/70">نسبة رضا العملاء</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Check className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground">معتمدون دولياً</div>
                  <div className="text-muted-foreground text-sm">ISO 9001:2015</div>
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
