import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="bg-white p-3 rounded-xl inline-block w-fit">
              <img
                src="https://i.imgur.com/vH8Yh0k.png"
                alt="Logo Enduit Plus 63 - Ravalement de façade"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre expert en rénovation de façade et isolation extérieure. Qualité, durabilité et esthétique pour votre habitat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hero" className="hover:text-brand transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand transition-colors">Réalisations</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Ravalement de façade</li>
              <li>Isolation ITE</li>
              <li>Peinture extérieure</li>
              <li>Traitement hydrofuge</li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Informations</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>CGV</li>
              <li>Plan du site</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Enduit Plus 63. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
             <p className="text-gray-600 text-xs">Built with ❤️ by Aurelia</p>
             <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full bg-gray-800 border-gray-700 text-white hover:bg-brand hover:text-gray-900 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}