import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black py-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="hover:opacity-80 transition-opacity inline-block">
              <Logo className="h-10" />
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              A creative production and post-production studio helping brands turn ideas into conversion-driven assets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-black dark:text-white font-semibold mb-2">Quick Links</h4>
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">About Us</a>
            <a href="#portfolio" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Portfolio</a>
            <a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Process</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Contact</a>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-black dark:text-white font-semibold mb-2">Services</h4>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Real Estate Production</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Commercial Production</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">VSL & Talking Head</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Event Coverage</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm transition-colors">Podcast Production</a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-6">
            <h4 className="text-black dark:text-white font-semibold mb-2">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>123 Creative Blvd, Suite 400</p>
              <p>Los Angeles, CA 90015</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Lumas Creative Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
