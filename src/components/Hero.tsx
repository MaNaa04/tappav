import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwY2luZW1hJTIwdGhlYXRlcnxlbnwxfHx8fDE3NzA3MTc0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Home Cinema"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
          Architecture for <br />the Senses
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          Transform your space into an extraordinary cinematic sanctuary with bespoke design and uncompromising audio-visual excellence
        </p>
        <button className="group bg-amber-400 text-black px-10 py-4 text-lg tracking-wide hover:bg-amber-300 transition-all inline-flex items-center gap-3">
          Start Your Design Journey
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
