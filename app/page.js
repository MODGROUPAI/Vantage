import React, { useState, useEffect } from 'react';
import { ExternalLink, Target, AlertTriangle, TrendingUp, Search, ChevronRight } from 'lucide-react';

export default function VantageDashboard() {
  // Stato per l'hotel selezionato (Simuliamo una ricerca completata)
  const [hotel, setHotel] = useState({
    name: "Mandarin Oriental",
    location: "Milan, Italy",
    logoUrl: "https://logo.clearbit.com/mandarinoriental.com", 
    website: "https://www.mandarinoriental.com/milan",
    score: 66,
    font: "'Playfair Display', serif"
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-900 selection:bg-orange-100">
      
      {/* --- HEADER SUPERIOR (Sticky & Glassmorphism) --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-50 px-4 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LEFT: VANTAGE BRAND (Clicca per Home) */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="/" className="flex flex-col group no-underline">
              <h1 className="text-xl md:text-2xl font-light italic tracking-tighter text-slate-800 transition-all group-hover:opacity-70">
                <span className="text-[#EF7D00] font-bold not-italic">V</span>antage
              </h1>
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-slate-400 font-black -mt-1 ml-4 md:ml-5">
                Intelligence
              </span>
            </a>

            <div className="hidden md:block h-8 w-[1px] bg-slate-100"></div>

            {/* CENTER: HOTEL DINAMICO (Clicca per Sito Hotel) */}
            <a 
              href={hotel.website} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
            >
              <img 
                src={hotel.logoUrl} 
                alt="Client Logo" 
                className="h-8 md:h-10 w-auto object-contain mix-blend-multiply brightness-90 grayscale-[0.2]" 
              />
              <span className="hidden sm:block text-xs md:text-sm tracking-widest uppercase font-medium text-slate-500" style={{ fontFamily: hotel.font }}>
                {hotel.name}
              </span>
            </a>
          </div>

          {/* RIGHT: MODGROUP BRAND */}
          <a href="https://modgroup.it" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
            <span className="hidden lg:block text-[9px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-orange-500 transition-colors">Powered by</span>
            <img src="/logo_mod_1.png" alt="Modgroup" className="h-6 md:h-8 w-auto opacity-40 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" />
          </a>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16">
        
        {/* HERO: SCORE & AI INSIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          
          {/* BIG SCORE (Mobile Centered) */}
          <div className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1">
            <div className="relative inline-block">
              <span className="text-[100px] md:text-[150px] font-black tracking-tighter text-slate-900 leading-none">
                {hotel.score}
              </span>
              <span className="text-xl md:text-3xl font-bold text-slate-200 absolute top-2 md:top-4 -right-10 md:-right-14">/100</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
               <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></div>
               <p className="text-slate-400 uppercase tracking-[0.4em] text-[10px] font-bold">Vantage Index Live</p>
            </div>
          </div>

          {/* AI STRATEGY BOX */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Target size={120} className="text-[#EF7D00]" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-light italic mb-6" style={{ fontFamily: hotel.font }}>Strategic Insight</h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mb-8">
                   "Rilevata una <span className="text-slate-900 font-bold underline decoration-orange-500/30">disparità tariffaria del 4.2%</span> su Expedia. I competitor diretti stanno investendo il +15% in campagne Video Meta puntando sulla SPA. Modgroup può finanziare la tua risposta mediatica immediata."
                </p>
                <button className="w-full md:w-auto bg-[#EF7D00] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                   Richiedi Accesso Full Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* COMPETITOR ADS SECTION */}
        <section className="mb-20">
            <div className="flex justify-between items-end mb-10 border-b border-slate-50 pb-6">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Market Intelligence</h3>
                  <p className="text-xl font-medium text-slate-800">Competitor Ad Library</p>
                </div>
                <div className="hidden md:flex gap-2">
                   <div className="h-2 w-8 rounded-full bg-orange-500"></div>
                   <div className="h-2 w-2 rounded-full bg-slate-100"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="group cursor-pointer">
                    <div className="aspect-[4/5] bg-slate-50 rounded-[2rem] mb-5 overflow-hidden relative flex items-center justify-center border border-transparent group-hover:border-orange-100 transition-all">
                        <div className="text-[10px] uppercase font-bold text-slate-300 tracking-widest group-hover:text-orange-300">Preview Ad Content</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex justify-between items-start px-2">
                        <div>
                          <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Google Search</p>
                          <p className="text-sm font-bold text-slate-800">Marriott Marquis Strategy</p>
                        </div>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                  </div>
                ))}
            </div>
        </section>

      </main>

      {/* --- FOOTER CTA (Deep Blue Luxury) --- */}
      <footer className="bg-slate-950 py-24 px-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h4 className="text-3xl md:text-5xl font-light italic mb-8" style={{ fontFamily: hotel.font }}>
              Trasforma i tuoi dati in <br className="hidden md:block" /> prenotazioni dirette.
            </h4>
            <p className="text-slate-400 text-sm md:text-base mb-12 max-w-lg mx-auto leading-relaxed uppercase tracking-[0.1em]">
              Senza costi fissi. Senza rischi. <br /> Modgroup finanzia la tua crescita.
            </p>
            <a 
              href="https://modgroup.it" 
              className="inline-flex items-center gap-4 text-white border border-white/20 px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all"
            >
              Scopri Modgroup Hospitality <ExternalLink size={14} />
            </a>
          </div>
      </footer>
    </div>
  );
}
