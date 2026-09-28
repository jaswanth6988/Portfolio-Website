"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layout, Server, Shield, Wrench } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { skillCategories } from '@/lib/data';

const iconMap = { Code2, Layout, Server, Shield, Wrench };

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <section id="skills" className="section-container">
      <SectionHeading subtitle="Tech Stack" title="Skills & Technologies" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        {skillCategories?.map((category, index) => {
          const Icon = iconMap[category.icon] || Code2;
          
          return (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlassCard className="h-full p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center text-cyan-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mt-auto"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-badge hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
