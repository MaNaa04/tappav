import { useState, useEffect } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export function GlassmorphicNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="/" className="text-3xl font-light tracking-widest" style={{ fontFamily: 'Gloock, serif' }}>
              TAPP<span className="font-normal">AV</span>
            </a>
          </motion.div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-16">
            {['Showroom', 'Design Studio', 'Portfolio'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-widest text-gray-300 hover:text-amber-400 transition-colors relative group"
                style={{ fontFamily: 'Lora, serif' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <motion.button 
              className="text-gray-300 hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </motion.button>
            <motion.button 
              className="text-gray-300 hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              className="relative px-8 py-3 bg-transparent border-2 border-amber-400/80 text-amber-400 overflow-hidden group"
              style={{ fontFamily: 'Lora, serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-sm tracking-wider">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-amber-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-wider">
                Get Started
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
