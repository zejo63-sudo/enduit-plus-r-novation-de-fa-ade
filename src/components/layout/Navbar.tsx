import React, { useState, useEffect } from 'react';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('#hero')}
          >
            <img 
              src="https://fal.media/files/monkey/o7T4F0000000000000000.png" 
              alt="Enduit Plus 63 Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-brand hover:bg-brand-500 text-gray-900 font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2" />
              Devis Gratuit
            </Button>
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-900 hover:bg-brand-100">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left text-lg font-bold mb-6 flex items-center gap-2">
                  <img 
                    src="https://fal.media/files/monkey/o7T4F0000000000000000.png" 
                    alt="Enduit Plus 63 Logo" 
                    className="h-10 w-auto object-contain"
                  />
                </SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-lg font-medium text-left text-gray-900 hover:text-brand-600 transition-colors border-b border-gray-100 pb-2"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-brand hover:bg-brand-500 text-gray-900 font-bold mt-4 py-6 text-lg shadow-md"
                  >
                    Demander un Devis
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}