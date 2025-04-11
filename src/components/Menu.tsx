
import { useState } from 'react';
import { cn } from '@/lib/utils';

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: 'antipasti',
    name: 'Antipasti',
    items: [
      {
        name: 'Bruschetta Classica',
        description: 'Pomodorini, basilico, aglio e olio extra vergine di oliva su pane casereccio tostato',
        price: '€9'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Sottili fette di manzo crudo con rucola, parmigiano e tartufo nero',
        price: '€14'
      },
      {
        name: 'Burrata con Prosciutto',
        description: 'Cremosa burrata pugliese servita con prosciutto di Parma stagionato 24 mesi',
        price: '€16'
      },
      {
        name: 'Polpo alla Griglia',
        description: 'Tenero polpo grigliato su crema di patate con olive taggiasche e capperi',
        price: '€18'
      },
    ]
  },
  {
    id: 'primi',
    name: 'Primi Piatti',
    items: [
      {
        name: 'Tagliatelle al Ragù',
        description: 'Tagliatelle fatte in casa con ragù tradizionale bolognese',
        price: '€16'
      },
      {
        name: 'Risotto ai Funghi Porcini',
        description: 'Cremoso risotto con funghi porcini e scaglie di parmigiano',
        price: '€18'
      },
      {
        name: 'Spaghetti alle Vongole',
        description: 'Spaghetti con vongole veraci, aglio, olio e prezzemolo',
        price: '€19'
      },
      {
        name: 'Ravioli di Ricotta e Spinaci',
        description: 'Ravioli fatti in casa ripieni di ricotta e spinaci con burro e salvia',
        price: '€17'
      },
    ]
  },
  {
    id: 'secondi',
    name: 'Secondi Piatti',
    items: [
      {
        name: 'Ossobuco alla Milanese',
        description: 'Ossobuco di vitello brasato con risotto allo zafferano',
        price: '€24'
      },
      {
        name: 'Branzino al Forno',
        description: 'Branzino intero al forno con patate, pomodorini e olive',
        price: '€26'
      },
      {
        name: 'Tagliata di Manzo',
        description: 'Controfiletto di manzo alla griglia con rucola e scaglie di parmigiano',
        price: '€28'
      },
      {
        name: 'Melanzane alla Parmigiana',
        description: 'Strati di melanzane con salsa di pomodoro, mozzarella e parmigiano',
        price: '€16'
      },
    ]
  },
  {
    id: 'dolci',
    name: 'Dolci',
    items: [
      {
        name: 'Tiramisù della Casa',
        description: 'Classico tiramisù con mascarpone, caffè e cacao',
        price: '€8'
      },
      {
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Cremosa panna cotta con coulis di frutti di bosco freschi',
        price: '€9'
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Cannoli ripieni di ricotta dolce con scaglie di cioccolato e pistacchi',
        price: '€9'
      },
      {
        name: 'Semifreddo al Pistacchio',
        description: 'Soffice semifreddo al pistacchio di Bronte con cioccolato fondente',
        price: '€10'
      },
    ]
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('antipasti');

  return (
    <section id="menu" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-restaurant-burgundy mb-4">Il Nostro Menu</h2>
          <p className="text-restaurant-charcoal text-lg max-w-3xl mx-auto">
            Un viaggio attraverso i sapori autentici della tradizione italiana, preparati con ingredienti freschi e di stagione
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all",
                activeCategory === category.id
                  ? "bg-restaurant-burgundy text-white"
                  : "bg-restaurant-cream text-restaurant-charcoal hover:bg-restaurant-terracotta/30"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {menuData.find(c => c.id === activeCategory)?.items.map((item, index) => (
            <div 
              key={index} 
              className="p-6 border border-restaurant-cream rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-playfair font-semibold text-restaurant-charcoal">
                  {item.name}
                </h3>
                <span className="text-lg font-semibold text-restaurant-burgundy">{item.price}</span>
              </div>
              <p className="mt-2 text-restaurant-charcoal/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="button-primary"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
