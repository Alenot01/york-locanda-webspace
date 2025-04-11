
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="section-padding bg-restaurant-cream/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="heading-lg text-restaurant-burgundy">Chi Siamo</h2>
            <p className="text-restaurant-charcoal text-lg">
              Benvenuti alla Locanda York, un angolo d'Italia nel cuore della città. Dal 1992, offriamo un'esperienza culinaria autentica che celebra le tradizioni e i sapori della nostra terra.
            </p>
            <p className="text-restaurant-charcoal text-lg">
              La nostra cucina rende omaggio alle ricette tradizionali italiane, reinterpretate con un tocco contemporaneo dal nostro Chef Alessandro Bianchi, che seleziona personalmente ingredienti freschi e stagionali dai migliori produttori locali.
            </p>
            <p className="text-restaurant-charcoal text-lg">
              In un ambiente accogliente e raffinato, ogni pasto diventa un viaggio attraverso le regioni italiane, accompagnato da una selezione di vini pregiati che esaltano i sapori dei nostri piatti.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className={cn(
                  "px-6 py-3 rounded-md font-medium text-base transition-all inline-block",
                  "bg-restaurant-burgundy text-white hover:bg-restaurant-burgundy/90"
                )}
              >
                Prenota la tua Esperienza
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop" 
                alt="Interior of Locanda York" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full bg-restaurant-terracotta/20 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-playfair font-bold text-restaurant-burgundy">30+</h3>
            <p className="text-restaurant-charcoal">Anni di Esperienza</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-playfair font-bold text-restaurant-burgundy">50+</h3>
            <p className="text-restaurant-charcoal">Piatti Autentici</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-playfair font-bold text-restaurant-burgundy">200+</h3>
            <p className="text-restaurant-charcoal">Vini Selezionati</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-playfair font-bold text-restaurant-burgundy">15000+</h3>
            <p className="text-restaurant-charcoal">Clienti Soddisfatti</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
