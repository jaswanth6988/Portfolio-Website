"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navLinks, personalDetails } from '../lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-1 group z-50">
            <span className="font-bold text-xl text-slate-900 dark:text-slate-100 transition-colors">
              {personalDetails.firstName || 'Portfolio'}
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {personalDetails.resumeUrl && (
              <a
                href={personalDetails.resumeUrl}
                download
                className="btn-primary px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                Resume
              </a>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-slate-900 dark:text-slate-100 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0a0a0f] flex flex-col items-center justify-center min-h-screen pt-20 px-6"
          >
            <nav className="w-full max-w-sm">
              <ul className="flex flex-col gap-6 text-center">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-2xl font-bold transition-colors ${
                        activeSection === link.href.substring(1)
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                
                {personalDetails.resumeUrl && (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * navLinks.length }}
                    className="mt-6"
                  >
                    <a
                      href={personalDetails.resumeUrl}
                      download
                      className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-lg font-medium shadow-lg shadow-purple-500/25"
                    >
                      Download Resume
                    </a>
                  </motion.li>
                )}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
