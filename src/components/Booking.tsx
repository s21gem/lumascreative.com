import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageCircle, Phone, Mail } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Booking() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-black border-t border-black/5 dark:border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter mb-6 leading-[1.1]">
              Let's Create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Something Powerful</span> <br />
              Together.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-md">
              Fill out the form below or book a direct meeting to discuss your next big project.
            </p>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-600 dark:text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-400">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>
              <CTAButton text="Send Message" className="w-full mt-4" />
            </form>
          </motion.div>

          {/* Right Side: Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center bg-zinc-100/50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-3xl p-10 lg:p-16 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8">Direct Contact</h3>
            
            <div className="flex flex-col gap-6 mb-12">
              <button className="flex items-center gap-4 w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-4 px-6 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors group">
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Book via Calendly</span>
              </button>
              
              <button className="flex items-center gap-4 w-full bg-[#25D366] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#20bd5a] transition-colors group">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-black/10 dark:border-white/10">
              <a href="tel:+1234567890" className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center border border-black/5 dark:border-white/5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Call Us</p>
                  <p className="text-lg font-semibold text-black dark:text-white">+1 (555) 123-4567</p>
                </div>
              </a>
              
              <a href="mailto:hello@lumascreative.com" className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center border border-black/5 dark:border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Us</p>
                  <p className="text-lg font-semibold text-black dark:text-white">hello@lumascreative.com</p>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
