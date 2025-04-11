
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    alt: "Interior of Locanda York",
    category: "restaurant"
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Pasta dish",
    category: "food"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Wine selection",
    category: "drinks"
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop",
    alt: "Italian dessert",
    category: "food"
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    alt: "Restaurant ambiance",
    category: "restaurant"
  },
  {
    src: "https://images.unsplash.com/photo-1608835291093-394b4a448d19?q=80&w=1972&auto=format&fit=crop",
    alt: "Chef preparing food",
    category: "kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?q=80&w=2036&auto=format&fit=crop",
    alt: "Seafood plate",
    category: "food"
  },
  {
    src: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=1974&auto=format&fit=crop", 
    alt: "Cozy dining area",
    category: "restaurant"
  }
];

type GalleryCategory = 'all' | 'food' | 'restaurant' | 'drinks' | 'kitchen';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-restaurant-cream/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-restaurant-burgundy mb-4">Galleria</h2>
          <p className="text-restaurant-charcoal text-lg max-w-3xl mx-auto">
            Esplora l'ambiente e la cucina di Locanda York attraverso la nostra galleria fotografica
          </p>
        </div>

        {/* Gallery Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {['all', 'food', 'restaurant', 'drinks', 'kitchen'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as GalleryCategory)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all capitalize",
                activeCategory === category
                  ? "bg-restaurant-burgundy text-white"
                  : "bg-white text-restaurant-charcoal hover:bg-restaurant-terracotta/30"
              )}
            >
              {category === 'all' ? 'Tutti' : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl">
                    Vista
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog - Using DialogContent instead of custom implementation */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-50 text-white bg-black/50 rounded-full p-1 hover:bg-black/70"
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image enlarged" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Gallery;
