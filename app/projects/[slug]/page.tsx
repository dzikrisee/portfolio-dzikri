'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaUsers, FaCog, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getProjectBySlug, projects, navItems } from '@/data';
import { notFound } from 'next/navigation';
import { Project } from '@/types/project';
import { FloatingNav } from '@/components/ui/FloatingNavbar';

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const [mounted, setMounted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fix hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  const project: Project | undefined = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects (exclude current project)
  const relatedProjects: Project[] = projects.filter((p) => p.id !== project.id).slice(0, 2);

  // Combine main image with gallery for lightbox
  const allImages = [project.img, ...project.gallery];

  // Lightbox functions
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full  mt-40">
          {/* Navbar - akan otomatis berubah karena path /projects/[slug] */}
          <FloatingNav navItems={navItems} />

          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-purple/20 text-purple rounded-full border border-purple/30 text-sm font-medium">{project.category}</span>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === 'Live'
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : project.status === 'In Development'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">{project.title}</h1>

                <p className="text-white-100 text-lg mb-8 leading-relaxed">{project.detailedDescription}</p>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <FaCalendar className="text-purple" />
                    <div>
                      <p className="text-white-100 text-sm">Year</p>
                      <p className="text-white font-medium">{project.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-purple" />
                    <div>
                      <p className="text-white-100 text-sm">Team Size</p>
                      <p className="text-white font-medium">{project.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCog className="text-purple" />
                    <div>
                      <p className="text-white-100 text-sm">Role</p>
                      <p className="text-white font-medium">{project.role}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-purple hover:bg-purple/80 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 border border-white/20 hover:border-purple text-white-100 hover:text-purple rounded-xl font-medium transition-all duration-300 flex items-center gap-3"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Main Project Image - Clickable */}
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 cursor-pointer group" onClick={() => openLightbox(0)}>
                  <img src={project.img} alt={project.title} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />

                  {/* Click to Enlarge Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">Main Image</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-transparent rounded-2xl blur-3xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Project Sections */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-black-200 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-white-100">
                    <span className="w-2 h-2 bg-purple rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-black-200 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
              <div className="space-y-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="border-l-2 border-purple/30 pl-4">
                    <h4 className="text-white font-medium">{tech.name}</h4>
                    <p className="text-white-100 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-black-200 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-white-100">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Gallery Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Project Gallery</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden border border-white/10" onClick={() => openLightbox(index + 1)}>
                  <img src={image} alt={`${project.title} gallery ${index + 1}`} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {index + 1} / {project.gallery.length}
                  </div>
                </div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center text-white-100 mt-8">
              Click any image to view in full size.
            </motion.p>
          </motion.div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">Related Projects</h3>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`} className="group block">
                    <div className="bg-black-200 rounded-2xl border border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-purple/20 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <img src={relatedProject.img} alt={relatedProject.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-3">{relatedProject.title}</h4>
                        <p className="text-white-100 text-sm leading-relaxed">{relatedProject.des}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
            {/* Close Button */}
            <button onClick={closeLightbox} className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300">
              <FaTimes className="text-xl" />
            </button>

            {/* Navigation Buttons */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  <FaChevronLeft className="text-xl" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  <FaChevronRight className="text-xl" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {currentImageIndex + 1} / {allImages.length}
            </div>

            {/* Main Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={allImages[currentImageIndex]} alt={`${project.title} - Image ${currentImageIndex + 1}`} className="w-full h-full object-contain rounded-lg" />
            </motion.div>

            {/* Image Description */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm max-w-md text-center">
              {currentImageIndex === 0 ? 'Main Project Image' : `Gallery Image ${currentImageIndex}`}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;
