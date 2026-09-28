"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, ExternalLink, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { certificates } from '@/lib/data';

const iconMap = {
  ShieldCheck,
  Cloud,
  Award,
};

export default function Certifications() {
  return (
    <section className="section-container">
      <SectionHeading subtitle="Credentials" title="Certifications" />
      
      <div className="relative overflow-hidden w-full max-w-5xl mx-auto py-10 before:absolute before:inset-y-0 before:left-0 before:w-16 before:bg-gradient-to-r before:from-slate-50 dark:before:from-[#050505] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-16 after:bg-gradient-to-l after:from-slate-50 dark:after:from-[#050505] after:to-transparent after:z-10">
        <div className="flex animate-marquee gap-6 w-max hover:[animation-play-state:paused]">
          {/* Double the list to create a seamless loop */}
          {[...certificates, ...certificates].map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;
            
            return (
              <GlassCard key={`${cert.title}-${index}`} className="flex flex-col items-start p-6 w-[300px] shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <IconComponent className="text-purple-500 dark:text-purple-400" size={24} />
                </div>
                
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1 line-clamp-1">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  {cert.issuer}
                </p>
                
                {cert.url && cert.url !== "#" && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline mt-auto"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
