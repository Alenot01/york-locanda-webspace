
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation data:', formData);
    toast({
      title: "Prenotazione Ricevuta",
      description: "Grazie per la tua prenotazione. Ti contatteremo presto per confermare.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg text-restaurant-burgundy mb-6">Contatti e Prenotazioni</h2>
            <p className="text-restaurant-charcoal text-lg mb-8">
              Siamo felici di aiutarti a prenotare un tavolo o rispondere a qualsiasi domanda. 
              Compila il modulo di prenotazione o contattaci direttamente.
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

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold text-restaurant-burgundy mb-6">Prenota un Tavolo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Data
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Ora
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Persone
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy"
                      required
                    >
                      <option value="">Seleziona</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'persone'}</option>
                      ))}
                      <option value="9+">9+ persone</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                    Richieste Speciali (opzionale)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-burgundy"
                  />
                </div>
                
                <button
                  type="submit"
                  className={cn(
                    "w-full py-3 px-4 rounded-md font-medium transition-all",
                    "bg-restaurant-burgundy text-white hover:bg-restaurant-burgundy/90"
                  )}
                >
                  Prenota Ora
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
