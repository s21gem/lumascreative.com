import React from 'react';
import { motion } from 'motion/react';

const logos = [
  'NETFLIX',
  'ASUS',
  'VIVO',
  'RED BULL',
  'SONY',
  'NIKE',
];

export default function TrustedBy() {
  return (
    <div className="w-full overflow-hidden bg-white/50 dark:bg-black/50 py-8 border-y border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">Trusted by industry leaders</p>
      </div>
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-16 px-8"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="text-2xl md:text-4xl font-black tracking-tighter text-black/20 dark:text-white/20 uppercase"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
