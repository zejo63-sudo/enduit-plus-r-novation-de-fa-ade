import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
const projects = [
  {
    id: 1,
    title: 'Rénovation Villa Moderne',
    category: 'Ravalement Complet',
    // Using a dirty/clean contrast for demo purposes
    beforeImage: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop', // Old stone look
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop', // Modern clean look - Verified URL
  },
  {
    id: 2,
    title: 'Isolation Thermique',
    category: 'ITE & Finitions',
    beforeImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop', // Older house
    afterImage: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2070&auto=format&fit=crop', // Modern facade
  },
  {
    id: 3,
    title: 'Restauration Façade Ancienne',
    category: 'Pierre & Enduit',
    beforeImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop', // Weathered
    afterImage: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop', // Clean
  },
  {
    id: 4,
    title: 'Maison Contemporaine',
    category: 'Peinture Extérieure',
    beforeImage: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop', // Before paint
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', // After paint
  },
];
export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Nos Réalisations</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Avant / Après : La preuve par l'image
            </h3>
          </div>
          <p className="text-gray-600 max-w-md text-lg">
            Déplacez le curseur sur les photos pour découvrir la qualité de nos transformations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100"
            >
              <div className="p-1">
                <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-xl">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    alt={project.title}
                    className="h-full"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <span className="text-brand-600 font-semibold text-sm mb-1 block">{project.category}</span>
                <h4 className="text-gray-900 text-xl font-bold">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}