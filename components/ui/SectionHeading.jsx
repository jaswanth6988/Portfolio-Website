"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col mb-12 ${alignmentClasses[align]}`}
    >
      {subtitle && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span className="uppercase tracking-widest text-sm text-indigo-600 dark:text-indigo-400 font-mono">
            {subtitle}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-400 pb-2 leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
