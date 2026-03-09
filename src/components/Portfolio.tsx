import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Real Estate', 'Commercial', 'VSL', 'Events', 'Podcast', 'Social Media Ads'];

const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Villa Tour',
    category: 'Real Estate',
    client: 'Sotheby\'s',
    results: '+45% Viewing Requests',
    videoUrl: 'https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Summer Campaign',
    category: 'Commercial',
    client: 'Nike',
    results: '2.1M Views',
    videoUrl: 'https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Founder Story',
    category: 'VSL',
    client: 'TechStart',
    results: '3x Conversion Rate',
    videoUrl: 'https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Tech Summit 2023',
    category: 'Events',
    client: 'WebSummit',
    results: '10k+ Attendees Reached',
    videoUrl: 'https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'The Daily Grind',
    category: 'Podcast',
    client: 'Spotify Studios',
    results: 'Top 10 Business Chart',
    videoUrl: 'https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'TikTok Viral Ad',
    category: 'Social Media Ads',
    client: 'Glossier',
    results: '5M+ Impressions',
    videoUrl: 'https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter mb-4">Our Work</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
              We don't just make things look pretty. We build creative assets designed to convert.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-cyan-400 text-black shadow-[0_0_10px_rgba(34,211,238,0.4)]' 
                    : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-black/10 active:bg-black/10 dark:hover:bg-white/10 dark:active:bg-white/10 hover:text-black active:text-black dark:hover:text-white dark:active:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                tabIndex={0}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-zinc-100 dark:bg-zinc-900 focus:outline-none"
              >
                {/* Thumbnail Image */}
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105 group-focus:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Video on Hover (Simulated with image for now, but could be actual video) */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 group-active:bg-black/70 group-focus:bg-black/70 transition-colors duration-500 z-10" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 group-focus:translate-y-0">
                  <span className="text-cyan-400 text-sm font-bold tracking-wider uppercase mb-2">
                    {item.client}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <div className="h-px w-12 bg-cyan-400/50 my-4" />
                  <p className="text-gray-300 text-sm mb-4">
                    {item.category}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-semibold bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg w-fit">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    {item.results}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
