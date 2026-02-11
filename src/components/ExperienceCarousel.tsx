import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface ExperienceCarouselProps {
  onThemeChange: (theme: string) => void;
}

export function ExperienceCarousel({ onThemeChange }: ExperienceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const experiences = [
    {
      id: 'cinema',
      title: 'Cinema Room',
      subtitle: 'Theatrical Immersion',
      description: 'Step into a world of cinematic grandeur. Our custom-designed theaters feature 4K laser projection, Dolby Atmos surround sound, and acoustically treated environments that rival professional screening rooms.',
      image: 'https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwaG9tZSUyMHRoZWF0ZXIlMjBsdXh1cnklMjBzZWF0aW5nfGVufDF8fHx8MTc3MDc0MDkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      theme: 'cinema'
    },
    {
      id: 'audio',
      title: 'Audiophile Lounge',
      subtitle: 'Pure Sonic Clarity',
      description: 'Experience music as the artist intended. Hand-selected reference speakers, precision amplification, and room correction technology create an intimate listening environment of unparalleled fidelity.',
      image: 'https://images.unsplash.com/photo-1531104985437-603d6490e6d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwc291bmQlMjBzeXN0ZW0lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDc0MDkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      theme: 'audio'
    },
    {
      id: 'lounge',
      title: 'Entertainment Lounge',
      subtitle: 'Versatile Luxury',
      description: 'The perfect fusion of style and technology. Discrete multi-room audio, motorized display solutions, and intelligent lighting create an adaptable space for any occasion.',
      image: 'https://images.unsplash.com/photo-1766080971568-c05c295e9008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbnRlcnRhaW5tZW50JTIwbG91bmdlJTIwZGFya3xlbnwxfHx8fDE3NzA3NDA5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      theme: 'lounge'
    }
  ];

  const activeExperience = experiences[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const handleHover = (theme: string, hovering: boolean) => {
    setIsHovering(hovering);
    if (hovering) {
      onThemeChange(theme);
    } else {
      onThemeChange('default');
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={activeExperience.image}
            alt={activeExperience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>
      </AnimatePresence>

      {/* Animated video overlay on hover */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute inset-0 z-5 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-96 h-96 rounded-full bg-black/40 backdrop-blur-xl border-4 border-amber-400/30 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Play className="text-amber-400" size={80} strokeWidth={1} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-7xl mb-4" style={{ fontFamily: 'Gloock, serif' }}>
            The Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
            Curated environments designed to transcend expectations
          </p>
        </motion.div>

        {/* Carousel Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative h-[600px] group cursor-pointer"
            onHoverStart={() => handleHover(activeExperience.theme, true)}
            onHoverEnd={() => handleHover(activeExperience.theme, false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden"
              >
                <img
                  src={activeExperience.image}
                  alt={activeExperience.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-amber-400/50"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-amber-400/50"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Text Side */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.p 
                  className="text-sm tracking-widest text-amber-400 mb-4 uppercase"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {activeExperience.subtitle}
                </motion.p>
                <motion.h3 
                  className="text-6xl mb-8 text-white"
                  style={{ fontFamily: 'Gloock, serif' }}
                >
                  {activeExperience.title}
                </motion.h3>
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed mb-12"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {activeExperience.description}
                </motion.p>

                {/* Navigation */}
                <div className="flex items-center gap-6">
                  <motion.button
                    onClick={handlePrev}
                    className="w-14 h-14 border border-white/20 hover:border-amber-400 hover:bg-amber-400/10 transition-all flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="text-white group-hover:text-amber-400 transition-colors" size={24} />
                  </motion.button>
                  
                  <div className="flex gap-3">
                    {experiences.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-1 transition-all ${
                          index === activeIndex 
                            ? 'w-16 bg-amber-400' 
                            : 'w-8 bg-white/30 hover:bg-white/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={handleNext}
                    className="w-14 h-14 border border-white/20 hover:border-amber-400 hover:bg-amber-400/10 transition-all flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="text-white group-hover:text-amber-400 transition-colors" size={24} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
