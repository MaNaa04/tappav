import { Search, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-light tracking-wider">
              TAPP<span className="font-semibold">AV</span>
            </a>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#services" className="text-sm tracking-wide hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#store" className="text-sm tracking-wide hover:text-amber-400 transition-colors">
              Store
            </a>
            <a href="#studio" className="text-sm tracking-wide hover:text-amber-400 transition-colors">
              Design Studio
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="hover:text-amber-400 transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="hover:text-amber-400 transition-colors" aria-label="Cart">
              <ShoppingCart size={20} />
            </button>
            <button className="bg-amber-400 text-black px-6 py-2.5 text-sm tracking-wide hover:bg-amber-300 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
