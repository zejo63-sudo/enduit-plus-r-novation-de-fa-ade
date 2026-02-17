import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
              <div className="bg-white p-3 rounded-lg shadow-sm group-hover:shadow-glow transition-all duration-300 inline-block">
                <img
                  src="https://i.imgur.com/tL8Zq5N.png"
                  alt="Enduit Plus 63 Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre expert en rénovation de façade et isolation extérieure. Qualité, durabilité et esthétique pour votre habitat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand after:rounded-full">Navigation</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hero" className="hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 hover:opacity-100 transition-opacity"></span>Accueil</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 hover:opacity-100 transition-opacity"></span>Services</a></li>
              <li><a href="#gallery" className="hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 hover:opacity-100 transition-opacity"></span>Réalisations</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 hover:opacity-100 transition-opacity"></span>Contact</a></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand after:rounded-full">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors">Ravalement de façade</li>
              <li className="hover:text-white transition-colors">Isolation ITE</li>
              <li className="hover:text-white transition-colors">Peinture extérieure</li>
              <li className="hover:text-white transition-colors">Traitement hydrofuge</li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand after:rounded-full">Informations</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Plan du site</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Enduit Plus 63. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
             <p className="text-gray-600 text-xs">Built with ��️ by Aurelia</p>
             <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full bg-gray-800 border-gray-700 text-white hover:bg-brand hover:text-gray-900 hover:border-brand transition-all duration-300 shadow-lg hover:shadow-brand/20"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}