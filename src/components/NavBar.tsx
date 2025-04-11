
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Chi Siamo', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galleria', href: '#gallery' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-restaurant-burgundy text-xl md:text-2xl font-playfair font-bold">
          Locanda<span className="text-restaurant-terracotta">York</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-restaurant-burgundy",
                isScrolled ? "text-restaurant-charcoal" : "text-restaurant-charcoal"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-restaurant-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-restaurant-charcoal hover:text-restaurant-burgundy"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
