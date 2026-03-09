import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import CTAButton from './CTAButton';

const testimonials = [
  {
    id: 1,
    quote: "Lumas didn't just shoot a video; they built an entire visual strategy that increased our conversion rate by 3x in the first month. Their attention to detail is unmatched.",
    name: 'David Chen',
    role: 'CMO, TechStart',
    logo: 'TECHSTART',
    videoThumb: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
  {
    id: 2,
    quote: "The team operates with the agility of a startup but delivers the quality of a massive agency. The summer campaign they produced for us broke all previous engagement records.",
    name: 'Sarah Jenkins',
    role: 'VP Marketing, GlobalFit',
    logo: 'GLOBALFIT',
    videoThumb: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    reverse: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter mb-6">Client Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say.
          </p>
        </div>

        <div className="flex flex-col gap-24 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex flex-col ${testimonial.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Video Thumbnail Side */}
              <motion.div
                initial={{ opacity: 0, x: testimonial.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                tabIndex={0}
                className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden aspect-video bg-zinc-200 dark:bg-zinc-900 focus:outline-none cursor-pointer"
              >
                <img
                  src={testimonial.videoThumb}
                  alt={`${testimonial.name} Testimonial`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105 group-focus:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-active:bg-black/40 group-focus:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/90 backdrop-blur-sm flex items-center justify-center text-black shadow-xl transform group-hover:scale-110 group-active:scale-110 group-focus:scale-110 transition-transform duration-300 cursor-pointer">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Quote Side */}
              <motion.div
                initial={{ opacity: 0, x: testimonial.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <Quote className="w-12 h-12 text-cyan-400/20 mb-6" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black dark:text-white leading-tight mb-8">
                  "{testimonial.quote}"
                </h3>
                
                <div className="flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-6">
                  <div>
                    <p className="text-black dark:text-white font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="text-xl font-black tracking-widest text-black/30 dark:text-white/30 uppercase">
                    {testimonial.logo}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CTAButton text="Book a Meeting" />
        </div>
      </div>
    </section>
  );
}
