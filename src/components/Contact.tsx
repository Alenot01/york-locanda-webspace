
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-restaurant-burgundy mb-6">Contatti</h2>
          <p className="text-restaurant-charcoal text-lg mb-8">
            Siamo felici di rispondere a qualsiasi domanda. 
            Contattaci direttamente o vieni a trovarci.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-burgundy/10 flex items-center justify-center text-restaurant-burgundy">
                <MapPin />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-restaurant-charcoal">Indirizzo</h3>
                <p>Via Roma 123, 00100 Roma, Italia</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-burgundy/10 flex items-center justify-center text-restaurant-burgundy">
                <Phone />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-restaurant-charcoal">Telefono</h3>
                <p>+39 06 1234 5678</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-burgundy/10 flex items-center justify-center text-restaurant-burgundy">
                <Mail />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-restaurant-charcoal">Email</h3>
                <p>info@locandayork.it</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-restaurant-burgundy/10 flex items-center justify-center text-restaurant-burgundy">
                <Clock />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-restaurant-charcoal">Orari</h3>
                <p>Martedì - Domenica: 12:00 - 15:00, 19:00 - 23:00</p>
                <p>Lunedì: Chiuso</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1649488745928!5m2!1sit!2sit" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Locanda York Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
