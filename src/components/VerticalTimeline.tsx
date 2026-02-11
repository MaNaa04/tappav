import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Lightbulb, Hammer, Sliders, Sparkles } from 'lucide-react';

export function VerticalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Expert Call',
      description: 'Initial consultation to understand your vision, space, and aspirations for the ultimate entertainment experience.',
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Bespoke Design',
      description: 'Our acousticians and designers craft detailed architectural plans integrating technology with aesthetic perfection.',
      color: 'from-rose-500/20 to-pink-500/20'
    },
    {
      number: '03',
      icon: Hammer,
      title: 'Professional Install',
      description: 'Certified technicians execute flawless integration, treating your space with the care it deserves.',
      color: 'from-violet-500/20 to-purple-500/20'
    },
    {
      number: '04',
      icon: Sliders,
      title: 'Precision Calibration',
      description: 'Expert tuning and calibration ensures optimal audio-visual performance tailored to your unique environment.',
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      number: '05',
      icon: Sparkles,
      title: 'Ongoing Excellence',
      description: 'Continuous support and maintenance to keep your system performing at the pinnacle of entertainment technology.',
      color: 'from-emerald-500/20 to-green-500/20'
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl mb-6" style={{ fontFamily: 'Gloock, serif' }}>
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
            A refined methodology perfected through hundreds of luxury installations
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central beam line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"></div>
          
          {/* Animated light beam */}
          <motion.div
            className="absolute left-1/2 top-0 w-[4px] -translate-x-1/2 origin-top"
            style={{ 
              height: beamHeight,
              background: 'linear-gradient(to bottom, rgba(251, 191, 36, 0.8), rgba(251, 191, 36, 0.3))',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.3)',
              filter: 'blur(2px)'
            }}
          />

          {/* Glowing orb at beam end */}
          <motion.div
            className="absolute left-1/2 w-6 h-6 bg-amber-400 rounded-full -translate-x-1/2 shadow-[0_0_30px_rgba(251,191,36,0.8)]"
            style={{ 
              top: useTransform(beamHeight, (latest) => latest),
            }}
          />

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-5/12 ${isEven ? 'text-right pr-16' : 'text-left pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, x: isEven ? -10 : 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative p-8 bg-gradient-to-br ${step.color} backdrop-blur-sm border border-white/10 group cursor-pointer`}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/5 transition-all duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="text-amber-400" size={32} strokeWidth={1.5} />
                          </motion.div>
                          <span className="text-6xl font-light text-white/10" style={{ fontFamily: 'Gloock, serif' }}>
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-3xl mb-3 text-white" style={{ fontFamily: 'Gloock, serif' }}>
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                          {step.description}
                        </p>
                      </div>

                      {/* Animated corner accent */}
                      <motion.div
                        className={`absolute ${isEven ? 'top-0 left-0' : 'top-0 right-0'} w-12 h-12 ${isEven ? 'border-l-2 border-t-2' : 'border-r-2 border-t-2'} border-amber-400/30`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      />
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <motion.div
                    className="absolute left-1/2 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-amber-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
