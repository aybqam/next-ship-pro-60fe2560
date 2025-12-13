import cargoShip from "@/assets/cargo-ship.jpg";
import containers from "@/assets/containers.jpg";
import portImage from "@/assets/port.jpg";
import teamImage from "@/assets/team.jpg";
import heroShip from "@/assets/hero-ship.jpg";

const ImageGallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            معرض الصور
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لمحة عن <span className="text-primary">أعمالنا</span>
          </h2>
          <p className="text-muted-foreground">
            نفخر بأسطولنا الحديث ومرافقنا المتطورة في خدمة عملائنا
          </p>
        </div>

        {/* Professional Gallery Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large Featured Image */}
          <div className="col-span-12 md:col-span-8 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={heroShip} 
              alt="سفينة الشحن الرئيسية" 
              className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold mb-2">أسطولنا البحري</h3>
              <p className="text-white/80 text-sm">سفن حديثة مجهزة بأحدث التقنيات</p>
            </div>
          </div>

          {/* Top Right Image */}
          <div className="col-span-6 md:col-span-4 group relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={containers} 
              alt="حاويات الشحن" 
              className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-lg font-bold">الحاويات</h3>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="col-span-6 md:col-span-4 group relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={portImage} 
              alt="الميناء" 
              className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-lg font-bold">الموانئ</h3>
            </div>
          </div>

          {/* Bottom Row - Three Equal Images */}
          <div className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={cargoShip} 
              alt="سفينة شحن" 
              className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-lg font-bold">الشحن البحري</h3>
              <p className="text-white/80 text-sm">خدمات متكاملة</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 group relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={teamImage} 
              alt="فريق العمل" 
              className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-lg font-bold">فريقنا</h3>
              <p className="text-white/80 text-sm">خبراء محترفون</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <div className="text-center text-white p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">+500</div>
              <p className="text-white/80">رحلة ناجحة</p>
              <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
              <div className="text-2xl md:text-3xl font-bold mt-4 mb-2">+50</div>
              <p className="text-white/80">سفينة حديثة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
