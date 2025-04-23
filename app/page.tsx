'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { ProjectsSection } from '@/app/components/sections/ProjectsSection';
import { TechStackSection } from '@/app/components/sections/TechStackSection';
import { ContactSection } from '@/app/components/sections/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </main>
  );
} 