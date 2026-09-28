"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { blogPosts } from '@/lib/data';

export default function Blog() {
  return (
    <section className="section-container">
      <SectionHeading subtitle="Insights" title="Blog & Articles" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <ScrollReveal key={post.id || index} delay={index * 0.1}>
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <GlassCard className="h-full p-6 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300">
                    {post.tag}
                  </span>
                </div>
                
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mt-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 mb-6 flex-1">
                  {post.description}
                </p>
                
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 mt-auto transition-colors">
                  Read Article <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </GlassCard>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
