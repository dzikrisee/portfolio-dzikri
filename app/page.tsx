'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/data';

import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Footer from '@/components/Footer';
import Approach from '@/components/Approach';
import RecentProjects from '@/components/RecentProjects';
import Skills from '@/components/Skills';
import { FloatingNav } from '@/components/ui/FloatingNavbar';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
