import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export function ExperienceCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setItemsPerPage(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const experiences = [
    {
      number: '01',
      title: 'Cinema Room',
      image: 'https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwaG9tZSUyMHRoZWF0ZXIlMjBsdXh1cnklMjBzZWF0aW5nfGVufDF8fHx8MTc3MDc0MDkzOHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      number: '02',
      title: 'Media Room',
      image: 'https://images.unsplash.com/photo-1764344814733-930223ac186c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwdGhlYXRlciUyMHNlYXRpbmd8ZW58MXx8fHwxNzcwNzQwNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      number: '03',
      title: 'Living Room',
      image: 'https://images.unsplash.com/photo-1766080971568-c05c295e9008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbnRlcnRhaW5tZW50JTIwbG91bmdlJTIwZGFya3xlbnwxfHx8fDE3NzA3NDA5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      number: '04',
      title: 'Audio Suite',
      image: 'https://images.unsplash.com/photo-1531104985437-603d6490e6d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwc291bmQlMjBzeXN0ZW0lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDc0MDkzOHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const maxIndex = Math.max(0, experiences.length - itemsPerPage);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Gloock, serif' }}>
            TappAV Cinema Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
            Take a look at some of the most enjoyed and best calibrated home cinema spaces
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex >= maxIndex}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${activeIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`group cursor-pointer ${itemsPerPage === 1 ? 'min-w-[calc(100%-0px)]' : itemsPerPage === 2 ? 'min-w-[calc(50%-12px)]' : 'min-w-[calc(33.333%-16px)]'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium">
                      <span style={{ fontFamily: 'Lora, serif' }}>{exp.number}</span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl text-white mb-3" style={{ fontFamily: 'Gloock, serif' }}>
                        {exp.title}
                      </h3>

                      {/* Golden Arrow Button */}
                      <motion.button
                        className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFC700] transition-colors"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight size={20} className="text-black" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${index === activeIndex
                    ? 'w-8 bg-[#FFD700]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
