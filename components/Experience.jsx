"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { workExperience, education } from '@/lib/data';

function TimelineItem({ item, type, index, align = 'left' }) {
  const Icon = type === 'work' ? Briefcase : GraduationCap;
  const isLeft = align === 'left';

  return (
    <div className="relative w-full mb-12 flex flex-col md:flex-row items-center justify-between">
      {/* Center timeline dot (visible on md+) */}
      <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 z-10 border-4 border-slate-50 dark:border-[#0a0a0f]"></div>
      
      {/* Mobile timeline dot */}
      <div className="md:hidden absolute left-[-29px] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 z-10 border-4 border-slate-50 dark:border-[#0a0a0f]"></div>

      {/* Content wrapper */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
        <ScrollReveal direction={isLeft ? 'left' : 'right'}>
          <GlassCard className="p-6 relative group hover:border-indigo-500/50 transition-colors">
            {/* Arrow pointing to timeline */}
            <div className={`hidden md:block absolute top-8 w-0 h-0 border-y-8 border-y-transparent ${isLeft ? 'right-[-16px] border-l-[16px] border-l-slate-200 dark:border-l-white/10' : 'left-[-16px] border-r-[16px] border-r-slate-200 dark:border-r-white/10'}`}></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{item.title || item.degree}</h3>
                <h4 className="text-indigo-600 dark:text-indigo-400 font-medium">{item.company || item.institution}</h4>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{item.duration || item.period}</span>
              </div>
              {item.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              )}
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading subtitle="My Journey" title="Experience & Education" />
      
      <div className="relative max-w-4xl mx-auto mt-16 pl-8 md:pl-0">
        {/* The Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/20 via-blue-500/20 to-transparent -translate-x-1/2"></div>
        
        {/* Work Experience */}
        {workExperience?.map((job, index) => (
          <TimelineItem 
            key={`work-${index}`} 
            item={job} 
            type="work" 
            index={index} 
            align={index % 2 === 0 ? 'left' : 'right'} 
          />
        ))}

        {/* Education */}
        {education?.map((edu, index) => {
          // Continue alternating based on workExperience length
          const globalIndex = (workExperience?.length || 0) + index;
          return (
            <TimelineItem 
              key={`edu-${index}`} 
              item={edu} 
              type="education" 
              index={index} 
              align={globalIndex % 2 === 0 ? 'left' : 'right'} 
            />
          )
        })}
      </div>
    </section>
  );
}
