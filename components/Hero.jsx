"use client";
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { personalDetails } from '@/lib/data';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalDetails.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 aurora-bg opacity-30 dark:opacity-20 z-0"></div>
      <div className="absolute inset-0 grid-bg opacity-50 z-0"></div>
      
      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] animate-float z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-float-delayed z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-float-slow z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-white/5 backdrop-blur-sm shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available for opportunities</span>
            </div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium mb-2">
            Hi, I'm
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 gradient-text tracking-tight">
            {personalDetails.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="h-10 mb-6 flex items-center">
            <span className="font-mono text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 flex items-center">
              {"> "}
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="ml-2 inline-block"
              >
                {personalDetails.roles[currentRoleIndex]}
              </motion.span>
              <span className="animate-pulse ml-1">_</span>
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">
            {personalDetails.about.split('.')[0]}.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={personalDetails.resumeUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              Download Resume
              <Download className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-[400px] h-[400px] rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-transparent to-blue-400 animate-morph glow-indigo">
            <div className="w-full h-full rounded-[inherit] overflow-hidden bg-slate-100 dark:bg-[#0a0a0f] p-2">
              <div className="w-full h-full rounded-[inherit] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 mix-blend-overlay z-10"></div>
                <img
                  src={personalDetails.profileImg}
                  alt={personalDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
