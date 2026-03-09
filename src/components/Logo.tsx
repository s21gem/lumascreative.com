import React from 'react';
import { useTheme } from './ThemeContext';

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  const { theme } = useTheme();
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {theme === 'dark' ? (
        <img 
          src="/logo-dark.png" 
          alt="Lumas Creative Logo" 
          className="h-full w-auto object-contain"
        />
      ) : (
        <img 
          src="/logo-light.png" 
          alt="Lumas Creative Logo" 
          className="h-full w-auto object-contain"
        />
      )}
    </div>
  );
}
