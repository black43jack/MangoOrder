import React from 'react';

const App = () => {
  const varieties = [
    { name: "Kesar", origin: "Gujarat", desc: "The Saffron Sweetheart", tag: "Best Seller" },
    { name: "Banganapalli", origin: "Andhra", desc: "Rich & Creamy King", tag: "Premium" },
    { name: "Suri (Seeri)", origin: "Delhi", desc: "Soft & Juicy Delight", tag: "Local Favorite" },
    { name: "Rasalu", origin: "Andhra", desc: "Burst of Golden Nectar", tag: "Sweetest" },
    { name: "Totapuri", origin: "Bulk", desc: "Perfect for Premium Pulp", tag: "Versatile" },
    { name: "Neelam", origin: "Late Season", desc: "The Final Summer Treat", tag: "Limited" },
    { name: "Himayat", origin: "Royal", desc: "The Limited Royal Harvest", tag: "Exclusive" }
  ];

  const backgroundUrl = "https://images.unsplash.com/photo-1591073113125-e46713c829fd?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-orange-400 overflow-x-hidden">
      
      {/* BACKGROUND LAYER */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* CONTENT START */}
      <div className="relative z-10">
        
        {/* NAV */}
        <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-serif font-black tracking-tighter text-white">
              MANGO<span className="text-orange-400 tracking-normal">LUXE</span>
            </div>
            <a 
              href="https://wa.me/911234567890" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg"
            >
              Order Now
            </a>
          </div>
        </nav>

        {/* HERO */}
        <header className="min-h-[85vh] flex items-center justify-center text-center px-6 py-20">
          <div className="max-w-4xl">
            <span className="inline-block bg-orange-500/20 text-orange-200 border border-orange-500/30 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Naturally Ripened • Farm Direct
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-lg">
              The Gold of <br/><span className="italic text-orange-400">Summer.</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/95 p-6 rounded-3xl min-w-[160px] shadow-2xl">
                <p className="text-[10px] text-gray-400 font-black uppercase mb-1">Price / KG</p>
                <p className="text-3xl font-bold text-slate-800">₹270</p>
              </div>
              <div className="bg-green-800 p-6 rounded-3xl min-w-[160px] shadow-2xl border border-green-700 text-white">
                <p className="text-[10px] text-green-200 font-black uppercase mb-1">Dozen Pack</p>
                <p className="text-3xl font-bold">₹850</p>
              </div>
            </div>
          </div>
        </header>

        {/* PRODUCTS */}
        <main className="bg-slate-50 py-24 px-6 rounded-t-[3rem] md:rounded-t-[5rem]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Curated Harvest</h2>
              <p className="text-slate-500 italic max-w-xl mx-auto">Premium, carbide-free mangoes hand-selected for size and sweetness.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {varieties.map((m, i) => (
                <div key={i} className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                  <div className="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                    🥭
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2 py-1 rounded mb-3 inline-block">
                    {m.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{m.name}</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-3">{m.origin}</p>
                  <p className="text-sm text-slate-500 italic">"{m.desc}"</p>
                  <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-orange-500 transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* DETAILS */}
        <section className="bg-slate-900 py-24 px-6 text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-serif font-bold mb-4 text-orange-400 italic">Delivery</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li>• Weekly Area Dispatch</li>
                <li>• Farm Hub Self-Pickup</li>
                <li>• Express Delivery Service</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-serif font-bold mb-4 text-orange-400 italic">Options</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li>• Bulk Crates (Best Value)</li>
                <li>• Luxury Gift Dozens</li>
                <li>• Seasonal Combo Boxes</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-orange-500 text-white">
              <h4 className="text-xl font-serif font-bold mb-4 italic">The Promise</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Naturally ripened in hay. No chemicals. Hand-checked for weight and aroma.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-900 py-24 text-center px-6">
          <div className="max-w-3xl mx-auto border-t border-white/5 pt-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-10">Ready for a Taste?</h2>
            <a 
              href="https://wa.me/911234567890" 
              className="inline-flex flex-col md:flex-row items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl text-lg font-black hover:scale-105 transition-transform"
            >
              <span>WhatsApp: +91 12345 67890</span>
            </a>
            <p className="mt-12 text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 MANGOLUXE — LIMITED HARVEST
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;