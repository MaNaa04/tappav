import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwaG9tZSUyMHRoZWF0ZXIlMjBsdXh1cnklMjBzZWF0aW5nfGVufDF8fHx8MTc3MDc0MDkzOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Home Cinema"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'Gloock, serif' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unleash the Ultimate Home Cinema Experience
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Lora, serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform any room into an immersive home theater experience. Expert design and installation with a range of screens right in your own home. Ready to get started?
          </motion.p>

          <motion.button
            className="bg-[#FFD700] text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-[#FFC700] transition-all shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Lora, serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Claim Your Free Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
}
