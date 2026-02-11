import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calculator, Palette, Video } from 'lucide-react';

export function KineticHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const utilities = [
    {
      icon: Calculator,
      title: 'Screen Calculator',
      subtitle: 'Perfect Sizing',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Design Studio',
      subtitle: 'Custom Layouts',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: Video,
      title: 'Virtual Consult',
      subtitle: 'Expert Guidance',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[140vh] overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1755445477542-649565d2c985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaW5lbWElMjBwcm9qZWN0b3IlMjBiZWFtJTIwZGFya3xlbnwxfHx8fDE3NzA3NDA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cinema Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
          
          {/* Animated light beams */}
          <motion.div
            className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-amber-400/20 via-amber-300/10 to-transparent blur-xl"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-amber-300/20 via-amber-400/10 to-transparent blur-xl"
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              x: [0, -50, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <motion.div 
          className="text-center px-6 max-w-6xl mx-auto"
          style={{ opacity, scale }}
        >
          {/* Kinetic Typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1 
              className="mb-2"
              style={{ fontFamily: 'Gloock, serif' }}
            >
              <motion.span
                className="block text-7xl md:text-9xl tracking-tight text-white"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Unleash the Ultimate
              </motion.span>
            </motion.h1>
            <motion.h1
              className="text-8xl md:text-[12rem] tracking-tighter bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent leading-none"
              style={{ fontFamily: 'Gloock, serif' }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Experience
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Lora, serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Bespoke home cinema design where architectural excellence meets 
            audiophile-grade performance in your private sanctuary
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Interactive Cards */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {utilities.map((utility, index) => {
              const Icon = utility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-black/40 backdrop-blur-2xl border border-white/10 p-8 cursor-pointer overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${utility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Icon className="text-amber-400 group-hover:text-amber-300" size={40} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Gloock, serif' }}>
                      {utility.title}
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: 'Lora, serif' }}>
                      {utility.subtitle}
                    </p>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
