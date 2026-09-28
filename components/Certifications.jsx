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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {certificates.map((cert, index) => {
          const IconComponent = iconMap[cert.icon] || Award;
          
          return (
            <ScrollReveal key={cert.id || index} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col items-start p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <IconComponent className="text-purple-500 dark:text-purple-400" size={24} />
                </div>
                
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  {cert.issuer}
                </p>
                
                {cert.url && (
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
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
