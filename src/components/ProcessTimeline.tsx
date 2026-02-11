import { Phone, Pencil, Wrench, Sliders } from 'lucide-react';

export function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Discovery Call',
      description: 'We begin by understanding your vision, space constraints, and performance expectations',
    },
    {
      number: '02',
      icon: Pencil,
      title: 'Bespoke Design',
      description: 'Our engineers create detailed plans integrating acoustics, aesthetics, and technology',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Certified technicians execute flawless integration with meticulous attention to detail',
    },
    {
      number: '04',
      icon: Sliders,
      title: 'Precision Calibration',
      description: 'Expert tuning ensures optimal performance calibrated specifically for your environment',
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-4">Our Process</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A refined methodology perfected through hundreds of luxury installations
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-amber-400/50 to-transparent"></div>
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-amber-400/30 bg-zinc-900 mb-6 relative z-10">
                    <Icon className="text-amber-400" size={36} strokeWidth={1.5} />
                  </div>
                  <div className="text-6xl font-light text-amber-400/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
