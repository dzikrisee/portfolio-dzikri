"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaUsers, FaCog } from "react-icons/fa";
import { getProjectBySlug, projects } from "@/data";
import { notFound } from "next/navigation";
import { Project } from "@/types/project";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const project: Project | undefined = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects (exclude current project)
  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-36 pb-10"
        >
          <Link href="/projects">
            <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:scale-105">
              <FaArrowLeft /> Back to Projects
            </button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-purple/20 text-purple rounded-full border border-purple/30 text-sm font-medium">
                  {project.category}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  project.status === "Live" 
                    ? "bg-green-500/20 text-green-400 border border-green-400/30"
                    : project.status === "In Development"
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                    : "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                }`}>
                  {project.status}
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-white-100 text-lg mb-8 leading-relaxed">
                {project.detailedDescription}
              </p>

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
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-purple rounded-full mt-2 flex-shrink-0" />
                <p className="text-white-100">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Challenges Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Challenges & Solutions</h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple/10 to-blue/10 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-purple/20 border border-purple/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white-100 leading-relaxed">{challenge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Related Projects */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject, index) => (
              <motion.div
                key={relatedProject.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${relatedProject.slug}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.img}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{relatedProject.title}</h3>
                      <p className="text-white-100 text-sm mb-4 line-clamp-2">{relatedProject.des}</p>
                      <div className="flex items-center gap-2">
                        {relatedProject.iconLists.slice(0, 3).map((icon, iconIndex) => (
                          <div key={iconIndex} className="w-6 h-6 rounded-full bg-black border border-white/20 flex items-center justify-center">
                            <img src={icon} alt="tech" className="w-3 h-3" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-between items-center pb-20"
        >
          <Link href="/projects">
            <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 transform hover:scale-105">
              ← All Projects
            </button>
          </Link>
          <Link href="/">
            <button className="px-8 py-4 rounded-xl bg-purple hover:bg-purple/80 text-white font-medium transition-all duration-300 transform hover:scale-105">
              Back to Home
            </button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
};