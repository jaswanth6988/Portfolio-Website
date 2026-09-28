"use client";
import { ArrowUp, Heart, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { socialLinks, personalDetails } from '../lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'instagram': return <Instagram size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-8 bg-[#fafafa] dark:bg-[#0a0a0f] text-slate-600 dark:text-slate-400">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Name + Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
              {personalDetails.firstName} {personalDetails.lastName}
            </h3>
            <p className="text-sm mt-1">Building digital experiences.</p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks?.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 text-sm flex flex-col items-center justify-center gap-4 text-center">
          <p>&copy; {currentYear} {personalDetails.firstName} {personalDetails.lastName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
