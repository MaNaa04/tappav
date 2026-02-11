import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function MainFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div 
              className="text-2xl mb-6 tracking-wide"
              style={{ fontFamily: 'Gloock, serif' }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-normal">Tapp</span>
              <span className="font-bold">AV</span>
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Premium home cinema and audio-visual solutions for discerning clients.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6" style={{ fontFamily: 'Gloock, serif' }}>Quick Links</h3>
            <ul className="space-y-3" style={{ fontFamily: 'Lora, serif' }}>
              {['Home Cinema', 'Media Rooms', 'Audio Systems', 'Smart Home', 'About Us'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-6" style={{ fontFamily: 'Gloock, serif' }}>Services</h3>
            <ul className="space-y-3" style={{ fontFamily: 'Lora, serif' }}>
              {['Design Consultation', 'Installation', 'Calibration', 'Maintenance', 'Support'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6" style={{ fontFamily: 'Gloock, serif' }}>Contact Us</h3>
            <ul className="space-y-4" style={{ fontFamily: 'Lora, serif' }}>
              <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0 text-[#FFD700]" />
                <span>+44 20 7946 0958</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0 text-[#FFD700]" />
                <span>hello@tappav.co.uk</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#FFD700]" />
                <span>Chelsea Harbour<br />London SW10 0XE</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Lora, serif' }}>
            &copy; 2026 TappAV. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ fontFamily: 'Lora, serif' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
