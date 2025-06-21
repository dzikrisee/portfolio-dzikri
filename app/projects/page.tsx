'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data';
import { navItems } from '@/data';
import { Project } from '@/types/project';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import Footer from '@/components/Footer';

const AllProjects = () => {
  const [filter, setFilter] = useState('All');
  const [mounted, setMounted] = useState(false);

  const categories = ['All', 'E-Commerce', 'Organization Website', 'Mobile Application', 'Portfolio'];

  // Fix hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects: Project[] = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Navbar - akan otomatis berubah karena path /projects */}
        <FloatingNav navItems={navItems} />

        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="pt-36 pb-20 text-center">
          <h1 className="heading mb-6">
            All <span className="text-purple">Projects</span>
          </h1>
          <p className="text-white-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Explore my complete portfolio of web development projects, from e-commerce platforms to mobile applications</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-full border transition-all duration-300 text-xs md:text-sm ${
                filter === category ? 'bg-purple border-purple text-white shadow-lg shadow-purple/25' : 'border-white/20 text-white-100 hover:border-purple hover:text-purple'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Mobile: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-3 md:p-6 hover:border-purple/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-6 bg-gradient-to-br from-purple/20 to-blue/20">
                <img src={project.img} alt={project.title} className="w-full h-28 sm:h-36 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="space-y-2 md:space-y-4">
                {/* Title & Category */}
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-sm sm:text-base md:text-xl font-bold text-white line-clamp-2 group-hover:text-purple transition-colors duration-300">{project.title}</h3>
                  <span className="inline-block px-2 md:px-3 py-1 bg-purple/20 text-purple text-xs rounded-full border border-purple/30">{project.category}</span>
                </div>

                {/* Description - Only show on medium screens and up */}
                <p className="text-white-100 text-sm leading-relaxed line-clamp-3 hidden md:block">{project.des}</p>

                {/* Tech Stack - Show fewer icons on mobile */}
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.iconLists.slice(0, 3).map((icon, index) => (
                    <div key={index} className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                      <img src={icon} alt="tech" className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  ))}
                  {project.iconLists.length > 3 && <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-xs text-white-100">+{project.iconLists.length - 3}</div>}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 md:gap-4 pt-2 md:pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 px-3 md:px-6 py-2 md:py-3 bg-purple/20 hover:bg-purple/30 text-purple border border-purple/30 rounded-lg md:rounded-xl font-medium transition-all duration-300 text-xs md:text-sm text-center"
                  >
                    <span className="hidden sm:inline">View Details</span>
                    <span className="sm:hidden">Details</span>
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 md:px-4 py-2 md:py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg md:rounded-xl transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Found Message */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center py-20">
            <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
            <p className="text-white-100">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default AllProjects;
