import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Lead Editor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Cinematographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'Producer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'VFX Artist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Maya Patel',
    role: 'Sound Designer',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'James Wilson',
    role: 'Colorist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Chloe Smith',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax movements
  const textY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const carouselY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Staggered vertical offsets and tilts for the cards to match the organic look
  const yOffsets = [40, -30, 20, -40, 30, -20, 50, -10];
  const rotations = [-4, 3, -5, 4, -3, 5, -6, 2];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white dark:bg-black overflow-hidden flex flex-col items-center justify-center py-24 md:py-32">
      <style>{`
        .perspective-container {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .carousel-card {
          --tz: 380px;
        }
      `}</style>

      {/* Massive Background Text with Parallax */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h2 className="text-[35vw] md:text-[30vw] font-black text-black/5 dark:text-white/10 leading-[0.75] tracking-tighter text-center lowercase select-none">
          big <br /> results
        </h2>
      </motion.div>

      {/* Header Text */}
      <div className="relative md:absolute md:top-24 text-center z-20 px-6 mb-16 md:mb-0">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tighter mb-6">
          Compact Team. <br />
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">Big Production.</span>
        </h2>
      </div>

      {/* Mobile View: Vertical List */}
      <div className="relative z-10 w-full flex flex-col items-center gap-12 md:hidden px-6 mt-8">
        {teamMembers.map((member, index) => {
          const rotation = rotations[index];
          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full max-w-[280px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 shadow-2xl group"
              style={{ rotateZ: rotation }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Desktop View: 3D Merry-Go-Round Carousel */}
      <div className="relative z-10 w-full h-[500px] perspective-container hidden md:flex items-center justify-center mt-32">
        <motion.div
          style={{ y: carouselY, rotateX: -8, rotateY: scrollRotate }}
          className="relative w-full h-full flex items-center justify-center preserve-3d"
        >
          {/* Continuous Rotation Inner Container */}
          <motion.div
            animate={{ rotateY: [0, -360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative w-52 h-64 preserve-3d"
          >
            {teamMembers.map((member, index) => {
              const angle = (index / teamMembers.length) * 360;
              const yOffset = yOffsets[index];
              const rotation = rotations[index];

              return (
                <div
                  key={member.id}
                  className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 carousel-card group shadow-2xl"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(var(--tz)) translateY(${yOffset}px) rotateZ(${rotation}deg)`,
                    backfaceVisibility: 'visible',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
