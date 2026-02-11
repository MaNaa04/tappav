import { Calculator, Package, Video } from 'lucide-react';

export function UtilityGrid() {
  const utilities = [
    {
      icon: Calculator,
      title: 'Screen Size Calculator',
      description: 'Find the perfect display dimensions for your space with our intelligent sizing tool',
    },
    {
      icon: Package,
      title: 'Curated Package Finder',
      description: 'Discover pre-designed system bundles tailored to your room and budget',
    },
    {
      icon: Video,
      title: 'Virtual Expert Consultation',
      description: 'Connect with our specialists remotely for personalized guidance and planning',
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {utilities.map((utility, index) => {
            const Icon = utility.icon;
            return (
              <div
                key={index}
                className="group bg-zinc-900 border border-white/10 p-10 hover:border-amber-400/50 transition-all cursor-pointer"
              >
                <div className="mb-6">
                  <Icon className="text-amber-400 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-4">{utility.title}</h3>
                <p className="text-gray-400 leading-relaxed">{utility.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
