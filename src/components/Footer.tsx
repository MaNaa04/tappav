import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black">
      {/* CTA Section */}
      <div className="border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">Ready to Begin?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can transform your space into an unforgettable audio-visual experience
          </p>
          <button className="bg-amber-400 text-black px-10 py-4 text-lg tracking-wide hover:bg-amber-300 transition-colors inline-flex items-center gap-3">
            Schedule Your Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="text-2xl font-light tracking-wider mb-6">
                TAPP<span className="font-semibold">AV</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Bespoke home cinema and high-fidelity audio solutions for the most discerning clients.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Home Cinema Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Hi-Fi Audio Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Multi-Room Audio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Acoustic Treatment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span>+44 20 7946 0958</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span>hello@tappav.co.uk</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>Chelsea Harbour Design Centre<br />London SW10 0XE</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for design insights and product launches</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-black py-3 hover:bg-amber-300 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; 2026 TappAV. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
