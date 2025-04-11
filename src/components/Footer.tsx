
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-restaurant-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4">Locanda<span className="text-restaurant-terracotta">York</span></h3>
            <p className="text-gray-300 mb-6">
              Un angolo d'Italia nel cuore della città, dove tradizione e innovazione si incontrano per offrire un'esperienza culinaria indimenticabile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-restaurant-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-terracotta transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Via Roma 123, 00100 Roma, Italia</li>
              <li>+39 06 1234 5678</li>
              <li>info@locandayork.it</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Orari</h4>
            <ul className="space-y-3 text-gray-300">
              <li><span className="font-medium">Pranzo:</span> 12:00 - 15:00</li>
              <li><span className="font-medium">Cena:</span> 19:00 - 23:00</li>
              <li><span className="font-medium">Lunedì:</span> Chiuso</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-restaurant-terracotta transition-colors">Prenota un Tavolo</a></li>
              <li><a href="#" className="hover:text-restaurant-terracotta transition-colors">Menu Completo</a></li>
              <li><a href="#" className="hover:text-restaurant-terracotta transition-colors">Eventi Privati</a></li>
              <li><a href="#" className="hover:text-restaurant-terracotta transition-colors">Lavora con Noi</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Locanda York. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
