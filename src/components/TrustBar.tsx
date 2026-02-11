export function TrustBar() {
  const brands = [
    { name: 'Epson', width: 'w-24' },
    { name: 'KEF', width: 'w-20' },
    { name: 'JBL', width: 'w-16' },
    { name: 'Sony', width: 'w-20' },
    { name: 'Bose', width: 'w-20' },
    { name: 'Samsung', width: 'w-28' },
  ];

  return (
    <section className="py-16 border-y border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm tracking-widest text-gray-500 mb-8 uppercase">
          Trusted Premium Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60">
          {brands.map((brand) => (
            <div key={brand.name} className={`${brand.width} h-12 flex items-center justify-center`}>
              <span className="text-2xl tracking-widest text-white/80 font-light">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
