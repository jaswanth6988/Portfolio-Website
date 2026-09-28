"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { contactDetails, socialLinks } from '@/lib/data';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram
};

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-container relative">
      {/* Aurora background overlay - could be implemented via a CSS class on the section or an absolute div */}
      <div className="absolute inset-0 aurora-bg opacity-30 -z-10 rounded-3xl blur-3xl pointer-events-none" />
      
      <SectionHeading subtitle="Get In Touch" title="Let's Work Together" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Contact Info */}
        <ScrollReveal>
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project that you want to get started, think you need my help 
              with something or just fancy saying hey, then get in touch.
            </p>
            
            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{contactDetails.email}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy(contactDetails.email, 'email')}
                  className="p-2 text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>


            </div>

            {/* Social Links */}
            <div className="mt-auto pt-4">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Connect with me</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon] || Github;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 hover:scale-110"
                      title={link.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Contact Form */}
        <ScrollReveal delay={0.2}>
          <GlassCard className="p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                  <Check size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">Message Sent!</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-1 focus:ring-purple-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-transparent border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-1 focus:ring-purple-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-1 focus:ring-purple-500/20 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
