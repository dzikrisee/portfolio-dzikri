'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLocationArrow, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data';
import { Project } from '@/types/project';

const AllProjects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'E-Commerce', 'Organization Website', 'Mobile Application', 'Portfolio'];

  const filteredProjects: Project[] = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="pt-36 pb-20 text-center">
          <h1 className="heading mb-6">
            All <span className="text-purple">Projects</span>
          </h1>
          <p className="text-white-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Explore my complete portfolio of web development projects, from e-commerce platforms to mobile applications</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${filter === category ? 'bg-purple text-white border-purple' : 'bg-transparent text-white-100 border-white/20 hover:border-purple hover:text-purple'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <div className="bg-black-200 rounded-2xl border border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-purple/20 transition-all duration-300 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
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

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple/20 text-purple text-xs rounded-full border border-purple/30">{project.category}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">{project.title}</h3>

                  <p className="text-white-100 text-sm mb-4 line-clamp-3 leading-relaxed">{project.des}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.iconLists.slice(0, 4).map((icon, iconIndex) => (
                      <div key={iconIndex} className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center">
                        <img src={icon} alt="tech" className="w-4 h-4" />
                      </div>
                    ))}
                    {project.iconLists.length > 4 && (
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <span className="text-xs text-white">+{project.iconLists.length - 4}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link href={`/projects/${project.slug}`} className="flex-1 bg-purple hover:bg-purple/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                      View Details <FaLocationArrow className="w-3 h-3" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center pb-20">
          <Link href="/">
            <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 transform hover:scale-105">← Back to Home</button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default AllProjects;
