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
                  <AnimatedCounter value="1" suffix="+" />
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Years Exp.</div>
              </GlassCard>
              <GlassCard className="text-center p-6 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  <AnimatedCounter value="6" suffix="+" />
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Projects</div>
              </GlassCard>
            </div>
          </ScrollReveal>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Practice Platforms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {platforms?.map((platform, index) => {
                const Icon = platformIcons[platform.icon] || Code;
                return (
                  <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                    <GlassCard className="relative overflow-hidden group hover:-translate-y-1 transition-transform">
                      <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center text-indigo-500 shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-sm text-slate-800 dark:text-slate-200">{platform.name}</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                        </div>
                        <div>
                          <div className={`text-xl font-bold ${platform.color ? platform.color : 'text-indigo-500'}`}>
                            {platform.stat}
                          </div>
                          <div className="text-xs font-medium text-slate-600 dark:text-slate-400">{platform.statLabel}</div>
                        </div>
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
