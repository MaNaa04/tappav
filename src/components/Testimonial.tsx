import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1636294155450-4aad425a970b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdWRpb3BoaWxlJTIwbGlzdGVuaW5nJTIwcm9vbXxlbnwxfHx8fDE3NzA3NDA2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Completed Project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Quote className="text-amber-400 mx-auto mb-8" size={64} strokeWidth={1.5} />
        <blockquote className="text-3xl md:text-5xl leading-relaxed mb-12 font-light">
          "TappAV transformed our basement into a cinematic masterpiece that exceeds every expectation. The attention to acoustic detail and seamless integration is simply extraordinary."
        </blockquote>
        <div>
          <p className="text-xl mb-1">James Richardson</p>
          <p className="text-gray-400">Private Residence, Knightsbridge</p>
        </div>
      </div>
    </section>
  );
}
