import { ShoppingCart } from 'lucide-react';

export function ProductGrid() {
  const products = [
    {
      name: 'KEF Reference 5 Meta',
      category: 'Floor-Standing Speaker',
      price: '£10,999',
      image: 'https://images.unsplash.com/photo-1666017730352-d4d273e0edd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vciUyMHN0YW5kaW5nJTIwc3BlYWtlcnMlMjBsdXh1cnl8ZW58MXx8fHwxNzcwNzQwNjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Epson LS12000 4K PRO-UHD',
      category: '4K Laser Projector',
      price: '£4,999',
      image: 'https://images.unsplash.com/photo-1658044552340-42456e3cc071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw0ayUyMHByb2plY3RvciUyMHByZW1pdW18ZW58MXx8fHwxNzcwNzQwNjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Bowers & Wilkins 800 D4',
      category: 'Reference Speaker System',
      price: '£28,000',
      image: 'https://images.unsplash.com/photo-1636294155450-4aad425a970b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdWRpb3BoaWxlJTIwbGlzdGVuaW5nJTIwcm9vbXxlbnwxfHx8fDE3NzA3NDA2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="store" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl mb-4">Curated Selection</h2>
            <p className="text-xl text-gray-400">
              Hand-picked premium components for discerning enthusiasts
            </p>
          </div>
          <button className="hidden md:block text-amber-400 hover:text-amber-300 transition-colors">
            View All Products →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-96 bg-zinc-900 mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-amber-400 text-black px-6 py-3 inline-flex items-center gap-2 hover:bg-amber-300 transition-colors">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2 tracking-wide uppercase">{product.category}</p>
                <h3 className="text-xl mb-3">{product.name}</h3>
                <p className="text-2xl text-amber-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
