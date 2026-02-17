import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}