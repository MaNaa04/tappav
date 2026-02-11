import { motion } from 'motion/react';
import { Phone, Pencil, Wrench, Sliders, CheckCircle } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Expert Call',
      description: 'Initial consultation to understand your vision and requirements'
    },
    {
      number: '02',
      icon: Pencil,
      title: 'Bespoke Design',
      description: 'Custom design tailored to your space and preferences'
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Professional Install',
      description: 'Expert installation by certified technicians'
    },
    {
      number: '04',
      icon: Sliders,
      title: 'Calibration',
      description: 'Precision tuning for optimal performance'
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Final Handover',
      description: 'Complete walkthrough and support setup'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Gloock, serif' }}>
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
            Our proven 5-step process ensures a seamless experience from consultation to completion
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-[#FFD700] to-gray-200 -z-10"></div>
                )}

                {/* Card */}
                <motion.div
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={36} className="text-black" strokeWidth={1.5} />
                  </motion.div>

                  {/* Number */}
                  <div className="text-5xl font-light text-gray-200 mb-3" style={{ fontFamily: 'Gloock, serif' }}>
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Gloock, serif' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
