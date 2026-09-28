"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Code, Shield, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { personalDetails, platforms } from '@/lib/data';

function AnimatedCounter({ value, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const isNumeric = !isNaN(parseFloat(value));
  const numericValue = isNumeric ? parseFloat(value) : null;

  useEffect(() => {
    if (inView && isNumeric) {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration * 1000 / numericValue));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= numericValue) {
          clearInterval(timer);
          setCount(numericValue);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, isNumeric, numericValue, duration]);

  return (
    <span ref={ref}>
      {isNumeric ? `${count}${suffix}` : (inView ? value : '')}
    </span>
  );
}

export default function About() {
  const platformIcons = {
    Code: Code,
    Shield: Shield
  };

  return (
    <section id="about" className="section-container relative z-10">
      <SectionHeading subtitle="About Me" title="Who I Am" />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <ScrollReveal>
            <div className="space-y-6">
              {personalDetails.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        <div className="lg:col-span-2 space-y-10">
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="text-center p-6 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  <AnimatedCounter value="800" suffix="+" />
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Problems Solved</div>
              </GlassCard>
              <GlassCard className="text-center p-6 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  <AnimatedCounter value="Top 5%" />
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Global Rank</div>
              </GlassCard>
            </div>
          </ScrollReveal>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Practice Platforms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms?.map((platform, index) => {
                const Icon = platformIcons[platform.icon] || Code;
                return (
                  <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                    <GlassCard className="relative overflow-hidden group hover:-translate-y-1 transition-transform h-full">
                      <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block p-5 h-full">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-purple-500">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{platform.name}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-colors" />
                        </div>
                        <div className="mb-2">
                          <span className={`text-2xl font-bold ${platform.color ? platform.color : 'text-purple-500'}`}>
                            {platform.stat}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">{platform.statLabel}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{platform.description}</div>
                      </a>
                    </GlassCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
