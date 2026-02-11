import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

export function PremiumFooter() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Final CTA */}
      <div className="relative z-10 py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: 'Gloock, serif' }}>
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
              Let's craft an extraordinary audio-visual experience tailored exclusively for you
            </p>
            <motion.button
              className="group relative px-12 py-5 bg-transparent border-2 border-amber-400 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-amber-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 text-lg tracking-wider text-amber-400 group-hover:text-black transition-colors" style={{ fontFamily: 'Lora, serif' }}>
                Schedule Private Consultation
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <motion.div 
                className="text-3xl tracking-widest mb-6"
                style={{ fontFamily: 'Gloock, serif' }}
                whileHover={{ scale: 1.05 }}
              >
                TAPP<span className="font-normal">AV</span>
              </motion.div>
              <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
                Bespoke home cinema and audiophile solutions for discerning clients worldwide.
              </p>
              <div className="flex gap-4">
                {[Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-amber-400 hover:bg-amber-400/10 transition-all group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="text-gray-400 group-hover:text-amber-400 transition-colors" size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Showroom */}
            <div>
              <h3 className="text-lg mb-6" style={{ fontFamily: 'Gloock, serif' }}>Showroom</h3>
              <ul className="space-y-3 text-gray-400" style={{ fontFamily: 'Lora, serif' }}>
                {['Home Cinemas', 'Hi-Fi Systems', 'Multi-Room Audio', 'Smart Integration'].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-amber-400 transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg mb-6" style={{ fontFamily: 'Gloock, serif' }}>Connect</h3>
              <ul className="space-y-4 text-gray-400" style={{ fontFamily: 'Lora, serif' }}>
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <span>+44 20 7946 0958</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <span>hello@tappav.co.uk</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-amber-400" strokeWidth={1.5} />
                  <span>Chelsea Harbour<br />London SW10 0XE</span>
                </motion.li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg mb-6" style={{ fontFamily: 'Gloock, serif' }}>Stay Informed</h3>
              <p className="text-gray-400 mb-4 text-sm" style={{ fontFamily: 'Lora, serif' }}>
                Exclusive insights and new arrivals delivered monthly
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                  style={{ fontFamily: 'Lora, serif' }}
                />
                <motion.button
                  type="submit"
                  className="w-full bg-amber-400/10 border border-amber-400/50 py-3 text-amber-400 hover:bg-amber-400 hover:text-black transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  Subscribe
                  <Send size={16} />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Lora, serif' }}>
              &copy; 2026 TappAV. Crafted with precision.
            </p>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'Lora, serif' }}>
              {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-amber-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
