import { ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Custom Home Cinema Design',
      description:
        'Experience cinema-grade immersion in the comfort of your home. Our bespoke design process creates acoustically optimized spaces featuring premium projection systems, luxury seating, and intelligent lighting control—all tailored to your architectural vision.',
      image: 'https://images.unsplash.com/photo-1764344814733-930223ac186c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwdGhlYXRlciUyMHNlYXRpbmd8ZW58MXx8fHwxNzcwNzQwNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: false,
    },
    {
      title: 'High-Fidelity Audio Solutions',
      description:
        'Elevate your listening experience with audiophile-grade sound systems. From discrete multi-room audio to dedicated listening rooms, we engineer sonic environments that reveal every nuance of your music with breathtaking clarity and presence.',
      image: 'https://images.unsplash.com/photo-1636294155438-9c62231bc173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwYXVkaW8lMjBzcGVha2VycyUyMHJvb218ZW58MXx8fHwxNzcwNzQwNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: true,
    },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-5xl md:text-6xl mb-4">The Experience</h2>
        <p className="text-xl text-gray-400 max-w-2xl">
          Crafting immersive environments that transcend conventional entertainment
        </p>
      </div>

      <div className="space-y-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <div className={`relative h-[600px] overflow-hidden ${service.reverse ? 'md:order-1' : ''}`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className={`px-6 md:px-16 py-20 bg-zinc-950 h-full flex flex-col justify-center ${service.reverse ? 'md:order-2' : ''}`}>
              <div className="max-w-xl">
                <h3 className="text-4xl mb-6">{service.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{service.description}</p>
                <button className="group inline-flex items-center gap-2 text-amber-400 hover:gap-4 transition-all">
                  Explore This Service
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
