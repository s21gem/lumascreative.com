import React from 'react';
import { motion } from 'motion/react';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({ text, onClick, className = '' }: CTAButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] transition-shadow duration-300 ${className}`}
    >
      {text}
    </motion.button>
  );
}
