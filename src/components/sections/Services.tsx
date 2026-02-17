import React from 'react';
import { motion } from 'framer-motion';
import { PaintRoller, Home, ShieldCheck, Hammer, Droplets, Ruler } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
const services = [
  {
    icon: PaintRoller,
    title: 'Ravalement de Façade',
    description: 'Nettoyage, réparation et mise en peinture pour redonner l\'éclat du neuf à votre habitation.',
  },
  {
    icon: Home,
    title: 'Isolation Extérieure (ITE)',
    description: 'Am��liorez votre confort thermique et réduisez vos factures d\'énergie grâce à une isolation performante.',
  },
  {
    icon: Droplets,
    title: 'Traitement Hydrofuge',
    description: 'Protection durable contre l\'humidité, les mousses et la pollution pour préserver vos murs.',
  },
  {
    icon: Hammer,
    title: 'Réparation de Fissures',
    description: 'Diagnostic et traitement expert des fissures pour assurer la solidité et l\'étanchéité.',
  },
  {
    icon: ShieldCheck,
    title: 'Peinture Extérieure',
    description: 'Large choix de finitions et de couleurs résistantes aux intempéries et aux UV.',
  },
  {
    icon: Ruler,
    title: 'Enduit Projeté',
    description: 'Application professionnelle d\'enduits monocouches pour un rendu uniforme et esthétique.',
  },
];
export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Nos Expertises</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Des solutions complètes pour votre extérieur
          </h3>
          <p className="text-lg text-gray-600">
            Nous combinons savoir-faire artisanal et techniques modernes pour protéger et embellir votre patrimoine.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand text-brand-600 group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}