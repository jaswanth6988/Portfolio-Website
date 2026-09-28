"use client";
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "p-6",
}) {
  const baseClasses = `glass-card ${padding} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}
