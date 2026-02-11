import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Gloock, serif' }}>
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
            Book your free consultation today and let our experts design the perfect home cinema experience for you
          </p>
          
          <motion.button
            className="bg-[#FFD700] text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-[#FFC700] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
            style={{ fontFamily: 'Lora, serif' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Consultation
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
