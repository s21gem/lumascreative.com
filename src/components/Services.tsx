import React from 'react';
import { motion } from 'motion/react';
import { Video, Mic, Clapperboard, MonitorPlay, CalendarDays, Share2 } from 'lucide-react';
import CTAButton from './CTAButton';

const services = [
  {
    title: 'Real Estate Production',
    description: 'Cinematic property tours and aerial drone footage that sell lifestyle, not just square footage.',
    icon: <Video className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'VSL & Talking Head',
    description: 'High-converting Video Sales Letters and expert positioning content designed to build trust instantly.',
    icon: <MonitorPlay className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Commercial Production',
    description: 'Brand anthems and product commercials that look like a million bucks without the agency bloat.',
    icon: <Clapperboard className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Event Coverage',
    description: 'Dynamic highlight reels and full-session recordings that capture the energy of your live events.',
    icon: <CalendarDays className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Podcast Production',
    description: 'End-to-end audio/video podcast production, from set design to editing and distribution strategy.',
    icon: <Mic className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Social Media Ads',
    description: 'Short-form, hook-driven creative optimized for TikTok, Reels, and YouTube Shorts algorithms.',
    icon: <Share2 className="w-8 h-8 text-cyan-400" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-cyan-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter mb-6">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We are your full-stack creative partners, handling everything from concept to final cut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 hover:border-cyan-400/30 p-8 rounded-2xl transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white dark:bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-black/5 dark:shadow-white/5">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <CTAButton text="Book a Meeting" />
        </div>
      </div>
    </section>
  );
}
