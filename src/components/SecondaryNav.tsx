import { motion } from 'motion/react';

export function SecondaryNav() {
  const links = [
    'Home It Works',
    'Screen Calculator',
    'Best Packages',
    'Custom Design',
    'Refer a Friend',
    'Partner With Us',
    'Consult Online Now'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white border-b border-gray-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {links.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-gray-700 hover:text-[#0066CC] transition-colors"
              style={{ fontFamily: 'Lora, serif' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
