import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const projects = [
  {
    id: 1,
    title: 'Rénovation Villa Moderne',
    category: 'Ravalement Complet',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Isolation Thermique',
    category: 'ITE & Finitions',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Restauration Façade Ancienne',
    category: 'Pierre & Enduit',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Maison Contemporaine',
    category: 'Peinture Extérieure',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
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
            Découvrez la qualité de nos finitions à travers nos derniers chantiers réalisés dans la région.
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
              className="group relative overflow-hidden rounded-2xl shadow-md bg-white"
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-400 font-medium text-sm mb-2">{project.category}</span>
                <h4 className="text-white text-2xl font-bold">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}