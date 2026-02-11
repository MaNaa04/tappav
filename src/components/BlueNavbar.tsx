import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Monitor, Speaker, Home, Cable, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const storeCategories = [
  {
    id: 'speakers',
    label: 'Speakers',
    icon: Speaker,
    description: 'Premium bookshelf, floorstanding & surround speakers',
    brands: ['JBL', 'ELAC', 'Klipsch', 'KEF'],
    featured: 'JBL Synthesis Series',
  },
  {
    id: 'projectors',
    label: 'Projectors',
    icon: Monitor,
    description: '4K & laser projectors for immersive home cinema',
    brands: ['Epson', 'Sony', 'BenQ', 'JVC'],
    featured: 'Epson EH-TW9400',
  },
  {
    id: 'home-theater',
    label: 'Home Theater Packages',
    icon: Home,
    description: 'Complete curated cinema packages with installation',
    brands: ['TappAV Exclusive', 'Custom Builds'],
    featured: 'Cinematic 7.1 Package',
  },
  {
    id: 'accessories',
    label: 'Accessories',
    icon: Cable,
    description: 'Cables, screens, mounts & acoustic treatments',
    brands: ['AudioQuest', 'Elite Screens', 'Sanus'],
    featured: 'Elite Screens Aeon CLR',
  },
];

interface BlueNavbarProps {
  onNavigate?: (path: string) => void;
}

export function BlueNavbar({ onNavigate }: BlueNavbarProps) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (path: string) => {
    setMegaMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  const openMenu = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const closeMenu = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setHoveredCategory(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
        setHoveredCategory(null);
      }
    };
    if (megaMenuOpen) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [megaMenuOpen]);

  const navItems = [
    { label: 'Services', hasDropdown: true, href: '#services' },
    { label: 'Store', hasDropdown: true, isMega: true },
    { label: 'Design Ideas', hasDropdown: false, href: '#design-ideas' },
    { label: 'More', hasDropdown: true, href: '#more' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0066CC] text-white px-6 py-4"
      style={{ position: 'relative', zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl tracking-wide"
          style={{ fontFamily: 'Gloock, serif', cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavigate('/')}
        >
          <span className="font-normal">Tapp</span>
          <span className="font-bold">AV</span>
        </motion.div>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              ref={item.isMega ? menuRef : undefined}
              onMouseEnter={item.isMega ? openMenu : undefined}
              onMouseLeave={item.isMega ? closeMenu : undefined}
            >
              <motion.a
                href={item.isMega ? undefined : item.href}
                onClick={(e) => {
                  if (item.isMega) {
                    e.preventDefault();
                    setMegaMenuOpen(!megaMenuOpen);
                  }
                }}
                className="text-sm hover:text-yellow-300 transition-colors flex items-center gap-1"
                style={{ fontFamily: 'Lora, serif', cursor: 'pointer' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                {item.hasDropdown && <span className="text-xs">▼</span>}
              </motion.a>

              {/* Mega Menu for Store */}
              {item.isMega && (
                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '16px',
                        width: '720px',
                        background: 'linear-gradient(135deg, #0a1628 0%, #0d2145 50%, #0a1628 100%)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 215, 0, 0.15)',
                        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 102, 204, 0.15)',
                        overflow: 'hidden',
                        zIndex: 9999,
                      }}
                      onMouseEnter={openMenu}
                      onMouseLeave={closeMenu}
                    >
                      {/* Decorative top accent */}
                      <div style={{
                        height: '3px',
                        background: 'linear-gradient(90deg, transparent, #FFD700, #0066CC, transparent)',
                      }} />

                      <div style={{ padding: '28px' }}>
                        {/* Header */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '20px',
                          paddingBottom: '16px',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                        }}>
                          <h3 style={{
                            fontFamily: 'Gloock, serif',
                            fontSize: '18px',
                            color: '#FFD700',
                            margin: 0,
                          }}>
                            Shop by Category
                          </h3>
                          <motion.button
                            onClick={() => handleNavigate('/store')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              fontFamily: 'Lora, serif',
                              fontSize: '13px',
                              color: '#94a3b8',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              padding: '6px 16px',
                              borderRadius: '20px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.2s',
                            }}
                          >
                            View All <ChevronRight size={14} />
                          </motion.button>
                        </div>

                        {/* Category Grid */}
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '12px',
                        }}>
                          {storeCategories.map((cat) => {
                            const IconComponent = cat.icon;
                            const isHovered = hoveredCategory === cat.id;
                            return (
                              <motion.div
                                key={cat.id}
                                onClick={() => handleNavigate(`/store/${cat.id}`)}
                                onMouseEnter={() => setHoveredCategory(cat.id)}
                                onMouseLeave={() => setHoveredCategory(null)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                  padding: '18px',
                                  borderRadius: '14px',
                                  cursor: 'pointer',
                                  background: isHovered
                                    ? 'linear-gradient(135deg, rgba(0, 102, 204, 0.2), rgba(255, 215, 0, 0.08))'
                                    : 'rgba(255, 255, 255, 0.03)',
                                  border: `1px solid ${isHovered ? 'rgba(255, 215, 0, 0.25)' : 'rgba(255, 255, 255, 0.05)'}`,
                                  transition: 'all 0.3s ease',
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                  <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    background: isHovered
                                      ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                                      : 'rgba(255, 215, 0, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.3s ease',
                                  }}>
                                    <IconComponent
                                      size={22}
                                      style={{
                                        color: isHovered ? '#0a1628' : '#FFD700',
                                        transition: 'color 0.3s',
                                      }}
                                    />
                                  </div>
                                  <div style={{ flex: 1, minWidth: 0 }}>
                                    <h4 style={{
                                      fontFamily: 'Gloock, serif',
                                      fontSize: '15px',
                                      color: '#fff',
                                      margin: '0 0 4px 0',
                                    }}>
                                      {cat.label}
                                    </h4>
                                    <p style={{
                                      fontFamily: 'Lora, serif',
                                      fontSize: '12px',
                                      color: '#94a3b8',
                                      margin: '0 0 8px 0',
                                      lineHeight: 1.4,
                                    }}>
                                      {cat.description}
                                    </p>
                                    <div style={{
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      gap: '4px',
                                    }}>
                                      {cat.brands.slice(0, 3).map((brand) => (
                                        <span
                                          key={brand}
                                          style={{
                                            fontFamily: 'Lora, serif',
                                            fontSize: '10px',
                                            color: '#64748b',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            padding: '2px 8px',
                                            borderRadius: '8px',
                                          }}
                                        >
                                          {brand}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  <ChevronRight
                                    size={16}
                                    style={{
                                      color: isHovered ? '#FFD700' : '#475569',
                                      flexShrink: 0,
                                      marginTop: '2px',
                                      transition: 'all 0.3s',
                                      transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                                    }}
                                  />
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* Bottom CTA */}
                        <div style={{
                          marginTop: '20px',
                          padding: '16px 20px',
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(0, 102, 204, 0.08))',
                          border: '1px solid rgba(255, 215, 0, 0.1)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                          <div>
                            <p style={{
                              fontFamily: 'Gloock, serif',
                              fontSize: '14px',
                              color: '#FFD700',
                              margin: '0 0 2px 0',
                            }}>
                              Need Expert Guidance?
                            </p>
                            <p style={{
                              fontFamily: 'Lora, serif',
                              fontSize: '12px',
                              color: '#94a3b8',
                              margin: 0,
                            }}>
                              Our AV specialists can help you build the perfect setup
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              fontFamily: 'Lora, serif',
                              fontSize: '12px',
                              fontWeight: 600,
                              color: '#0a1628',
                              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                              border: 'none',
                              padding: '8px 20px',
                              borderRadius: '20px',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap' as const,
                            }}
                          >
                            Book Consultation
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-64">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none text-gray-700 text-sm"
              style={{ fontFamily: 'Lora, serif' }}
            />
            <Search size={18} className="text-gray-500" />
          </div>

          {/* CTA Button */}
          <motion.button
            className="bg-[#FFD700] text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-[#FFC700] transition-colors"
            style={{ fontFamily: 'Lora, serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>

          {/* Icons */}
          <motion.button
            className="relative"
            whileHover={{ scale: 1.1 }}
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }}>
            <User size={20} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
