import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, PenTool, Camera, Scissors } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Strategy & Concept',
    description: 'We dig deep into your brand, target audience, and goals to craft a narrative that converts.',
    icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
  },
  {
    number: '02',
    title: 'Pre-Production',
    description: 'Scripting, storyboarding, location scouting, and talent casting. We plan every detail before the cameras roll.',
    icon: <PenTool className="w-6 h-6 text-cyan-400" />,
  },
  {
    number: '03',
    title: 'Production Shoot',
    description: 'Our crew executes the vision with cinema-grade equipment, ensuring a smooth and professional set experience.',
    icon: <Camera className="w-6 h-6 text-cyan-400" />,
  },
  {
    number: '04',
    title: 'Editing & Delivery',
    description: 'Color grading, sound design, VFX, and formatting for all platforms. The magic happens in the edit.',
    icon: <Scissors className="w-6 h-6 text-cyan-400" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-black/5 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter mb-6">Our Process</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A proven framework to turn your ideas into high-performing creative assets.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group active:scale-[0.98] transition-transform duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 -left-4 lg:-left-2 text-6xl font-black text-black/5 dark:text-white/5 group-hover:text-cyan-400/10 group-active:text-cyan-400/10 transition-colors duration-500 pointer-events-none">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-8 group-hover:border-cyan-400 group-active:border-cyan-400 transition-colors duration-300 shadow-xl relative z-10">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
