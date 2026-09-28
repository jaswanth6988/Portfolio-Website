"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/lib/data';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map((project) => project.category))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-container">
      <SectionHeading subtitle="My Work" title="Featured Projects" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category
                ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white'
                : 'bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            // Check if it's the first featured project to make it span 2 columns
            const isFeatured = project.featured;
            
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id || index}
                className={`rounded-2xl overflow-hidden group border border-slate-200 dark:border-white/5 hover:border-indigo-300 dark:hover:border-indigo-500/20 bg-white dark:bg-[#111116] flex flex-col ${
                  isFeatured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`relative w-full ${isFeatured ? 'h-64' : 'h-48'} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 delay-100"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 delay-150"
                        title="GitHub Repository"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
