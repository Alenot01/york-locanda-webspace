
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop')", 
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero content */}
      <div className="container-custom relative z-10 text-center space-y-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white">
          Locanda<span className="text-restaurant-cream">York</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
          Autentica cucina italiana in un'atmosfera accogliente e raffinata
        </p>
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className={cn(
              "px-8 py-3 rounded-md font-medium text-lg transition-all",
              "bg-restaurant-burgundy text-white hover:bg-restaurant-burgundy/90"
            )}
          >
            Scopri il Menu
          </a>
          <a 
            href="#contact" 
            className={cn(
              "px-8 py-3 rounded-md font-medium text-lg transition-all",
              "bg-white text-restaurant-burgundy hover:bg-restaurant-cream"
            )}
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
