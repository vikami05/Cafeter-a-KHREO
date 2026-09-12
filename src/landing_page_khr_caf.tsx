import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  ArrowRight, 
  Check, 
  MapPin, 
  Clock, 
  Phone, 
  AtSign,
  Star 
} from 'lucide-react';

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    .font-brand {
      font-family: 'Oswald', sans-serif;
      letter-spacing: -0.02em;
    }
    
    .font-sans-editorial {
      font-family: 'Space Grotesk', sans-serif;
    }
    
    .font-mono-editorial {
      font-family: 'JetBrains Mono', monospace;
    }

    * {
      border-radius: 0px !important;
    }

    ::selection {
      background-color: #FF5A26;
      color: #FCF5E5;
    }
  `}</style>
);

const MENU_CATEGORIES = [
  {
    id: 'espresso',
    code: 'CAT-01',
    title: 'ESPRESSO & FILTRADOS',
    subtitle: 'Extracción de precisión (V60, Aeropress, Kalita)',
    accentBg: 'bg-[#C8E5ED]',
    textColor: 'text-[#030408]',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'granos',
    code: 'CAT-02',
    title: 'CAFÉ EN GRANO 250G',
    subtitle: 'Tueste semanal local • Trazabilidad directa',
    accentBg: 'bg-[#FF5A26]',
    textColor: 'text-[#FCF5E5]',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pasteleria',
    code: 'CAT-03',
    title: 'PASTELERÍA & BAKERY',
    subtitle: 'Masa madre & manteca de masa laminada 48hs',
    accentBg: 'bg-[#CAC550]',
    textColor: 'text-[#030408]',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'frios',
    code: 'CAT-04',
    title: 'COLD BREW & BEBIDAS',
    subtitle: 'Maceración en frío 18 horas en lote pequeño',
    accentBg: 'bg-[#030408]',
    textColor: 'text-[#FCF5E5]',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop'
  }
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    code: 'LOT-882',
    name: 'COLOMBIA HUILA SUPREMO',
    tag: 'ORIGEN ÚNICO',
    tagColor: 'bg-[#FF5A26] text-[#FCF5E5]',
    notes: 'Notas a chocolate amargo, caramelo tostado y acidez brillante de cereza.',
    details: '250G • TUESTE MEDIO • ESPRESSO & FILTRO',
    price: '$16.500',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    code: 'LOT-104',
    name: 'FLAT WHITE DOUBLE SHOT',
    tag: 'FAVORITO DE LA CASA',
    tagColor: 'bg-[#CAC550] text-[#030408]',
    notes: 'Ristretto doble de origen Colombia + leche emulsionada a 65°C.',
    details: '220ML • TAZA CERÁMICA',
    price: '$4.800',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    code: 'LOT-912',
    name: 'ETIOPÍA YIRGACHEFFE',
    tag: 'MICRO-LOTE',
    tagColor: 'bg-[#C8E5ED] text-[#030408]',
    notes: 'Proceso lavado. Notas a bergamota, jazmín y té negro. Sutil y elegante.',
    details: '250G • EDICIÓN LIMITADA • V60 RECOMMENDED',
    price: '$18.900',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    code: 'LOT-044',
    name: 'CROISSANT Mantequilla 100%',
    tag: 'BAKERY',
    tagColor: 'bg-[#030408] text-[#FCF5E5]',
    notes: 'Hojaldre artesanal de 48 horas fermentado en frío con manteca de primera.',
    details: 'HORNEADO DIARIO 08:00 HS',
    price: '$3.900',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop'
  }
];

const PRESS_REVIEWS = [
  {
    publication: 'THE GUARDIAN',
    quote: 'KHRĒŌ redefine la experiencia del café de especialidad con una precisión técnica y una estética rigurosa impecable.',
    location: 'LONDRES & BUENOS AIRES'
  },
  {
    publication: 'FINANCIAL TIMES',
    quote: 'El micro-tueste más consistente de la ciudad. Su control de calidad en origen marca un nuevo estándar.',
    location: 'SECCIÓN LIFESTYLE & CULTURE'
  },
  {
    publication: 'COURIER MAGAZINE',
    quote: 'Una marca con identidad tipográfica quirúrgica y una propuesta gastronómica honesta sin distracciones.',
    location: 'ISSUE 42 • DESIGN & FOOD'
  }
];

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [toastText, setToastText] = useState('');

  const addToCart = (productName) => {
    setCartCount((prev) => prev + 1);
    setToastText(`AÑADIDO AL PEDIDO: ${productName}`);
    setTimeout(() => setToastText(''), 3000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF5E5] text-[#030408] font-sans-editorial antialiased selection:bg-[#FF5A26] selection:text-[#FCF5E5]">
      <FontStyles />

      {}
      {toastText && (
        <div className="fixed bottom-0 right-0 z-50 bg-[#030408] text-[#FCF5E5] px-6 py-4 border-t-2 border-l-2 border-[#FF5A26] flex items-center space-x-4 font-mono-editorial text-xs tracking-wider">
          <span className="w-2 h-2 bg-[#FF5A26] inline-block"></span>
          <span>{toastText}</span>
        </div>
      )}

      {}
      <div className="bg-[#FF5A26] text-[#FCF5E5] font-mono-editorial text-xs font-bold uppercase tracking-widest py-2 px-4 border-b border-[#030408] overflow-hidden whitespace-nowrap">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span>+ 10% OFF EN TU PRIMERA COMPRA DE CAFÉ EN GRANO • CÓDIGO: KHREO10</span>
          <span className="hidden md:inline text-[#030408]">TUESTE SEMANAL LOCAL • LUNES A DOMINGO 08:00 - 20:00 HS</span>
        </div>
      </div>

      {}
      <header className="sticky top-0 z-40 bg-[#FCF5E5] border-b border-[#030408]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding (Exact KHRĒŌ Editorial Style) */}
          <a href="#" className="flex flex-col group">
            <span className="font-brand text-4xl sm:text-5xl font-bold tracking-tight text-[#030408] leading-none">
              KHRĒŌ
            </span>
            <span className="font-mono-editorial text-[9px] font-bold tracking-[0.35em] text-[#FF5A26] uppercase mt-0.5">
              ESTUDIO DE CAFÉ
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 font-mono-editorial text-xs font-bold uppercase tracking-widest text-[#030408]">
            <a href="#origen" className="hover:text-[#FF5A26] transition-colors">01. ORIGEN</a>
            <a href="#menu" className="hover:text-[#FF5A26] transition-colors">02. MENÚ</a>
            <a href="#productos" className="hover:text-[#FF5A26] transition-colors">03. PRODUCTOS</a>
            <a href="#prensa" className="hover:text-[#FF5A26] transition-colors">04. PRENSA</a>
          </nav>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => addToCart('PEDIDO RÁPIDO')}
              className="bg-[#030408] text-[#FCF5E5] hover:bg-[#FF5A26] hover:text-[#FCF5E5] px-5 py-3 font-mono-editorial text-xs font-bold uppercase tracking-widest border border-[#030408] transition-colors flex items-center space-x-3"
            >
              <ShoppingBag size={14} />
              <span>PEDIDO [{cartCount}]</span>
            </button>

            <button 
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 text-[#030408] border border-[#030408] hover:bg-[#030408] hover:text-[#FCF5E5]"
              aria-label="Abrir Menú"
            >
              {mobileNavOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileNavOpen && (
          <div className="md:hidden bg-[#FCF5E5] border-b border-[#030408] px-6 py-6 font-mono-editorial text-sm font-bold uppercase space-y-4">
            <a href="#origen" onClick={() => setMobileNavOpen(false)} className="block py-2 border-b border-[#030408]/20">01. ORIGEN</a>
            <a href="#menu" onClick={() => setMobileNavOpen(false)} className="block py-2 border-b border-[#030408]/20">02. MENÚ</a>
            <a href="#productos" onClick={() => setMobileNavOpen(false)} className="block py-2 border-b border-[#030408]/20">03. PRODUCTOS</a>
            <a href="#prensa" onClick={() => setMobileNavOpen(false)} className="block py-2 border-b border-[#030408]/20">04. PRENSA</a>
          </div>
        )}
      </header>

      {}
      <section className="border-b border-[#030408]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Big Editorial Poster Typography */}
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#030408] bg-[#FCF5E5]">
            <div className="space-y-6">
              <div className="inline-block bg-[#FF5A26] text-[#FCF5E5] font-mono-editorial text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1">
                TUESTE ARTESANAL & CAFETERÍA DE ESPECIALIDAD
              </div>

              <h1 className="font-brand text-6xl sm:text-8xl lg:text-9xl font-bold uppercase leading-[0.85] tracking-tight text-[#030408]">
                BUT FIRST,<br />
                <span className="text-[#FF5A26]">COFFEE.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#030408] font-normal leading-relaxed max-w-xl pt-4">
                Seleccionamos micro-lotes directamente en origen de fincas sustentables en Colombia, Etiopía y Brasil. Tostamos semanalmente en pequeños lotes para garantizar la extracción óptima en taza.
              </p>
            </div>

            {/* Quick Data Points Strip */}
            <div className="mt-12 pt-8 border-t border-[#030408] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-editorial text-xs">
              <div className="space-y-1">
                <span className="text-[#FF5A26] font-bold block">UBICACIÓN</span>
                <span className="font-medium text-[#030408]">AV. CORRIENTES 1248</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#FF5A26] font-bold block">HORARIOS</span>
                <span className="font-medium text-[#030408]">08:00 — 20:00 HS</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#FF5A26] font-bold block">CONTACTO</span>
                <span className="font-medium text-[#030408]">+54 11 4821-9900</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sharp Editorial Image (NO border radius) */}
          <div className="lg:col-span-5 relative bg-[#030408] overflow-hidden min-h-[400px] lg:min-h-[600px] flex items-stretch">
            <img 
              src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop" 
              alt="Barista vertiendo café de especialidad con técnica V60" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 block"
            />
            {/* Color accent badge overlay */}
            <div className="absolute top-0 right-0 bg-[#CAC550] text-[#030408] font-mono-editorial text-xs font-bold px-4 py-3 border-b border-l border-[#030408] uppercase tracking-widest">
              LOTE FRESCO N° 402
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="origen" className="bg-[#030408] text-[#FCF5E5] py-16 px-6 sm:px-12 border-b border-[#030408]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#FCF5E5]/20 pb-6">
            <div>
              <span className="font-mono-editorial text-xs font-bold tracking-[0.3em] text-[#C8E5ED] uppercase block mb-2">
                // MANIFIESTO DE MARCA
              </span>
              <h2 className="font-brand text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#FCF5E5]">
                EL CAFÉ COMO DISCIPLINA TÉCNICA
              </h2>
            </div>
            <span className="font-mono-editorial text-xs text-[#CAC550] mt-4 md:mt-0">
              ESTÁNDAR DE EXTRACCIÓN SCAA 92°C - 96°C
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-3 bg-[#030408] p-6 border border-[#FCF5E5]/20">
              <span className="font-mono-editorial text-2xl font-bold text-[#FF5A26]">01.</span>
              <h3 className="font-brand text-2xl font-bold uppercase text-[#FCF5E5]">TRAZABILIDAD EN ORIGEN</h3>
              <p className="text-sm text-[#FCF5E5]/80 leading-relaxed font-sans-editorial">
                Compramos lotes directamente a productores de pequeñas fincas en altitudes superiores a los 1.600 msnm.
              </p>
            </div>

            <div className="space-y-3 bg-[#030408] p-6 border border-[#FCF5E5]/20">
              <span className="font-mono-editorial text-2xl font-bold text-[#C8E5ED]">02.</span>
              <h3 className="font-brand text-2xl font-bold uppercase text-[#FCF5E5]">TUESTE A MEDIDA</h3>
              <p className="text-sm text-[#FCF5E5]/80 leading-relaxed font-sans-editorial">
                Perfilamos cada grano individualmente para resaltar sus notas florales, frutales o chocolatadas de origen sin quemar el producto.
              </p>
            </div>

            <div className="space-y-3 bg-[#030408] p-6 border border-[#FCF5E5]/20">
              <span className="font-mono-editorial text-2xl font-bold text-[#CAC550]">03.</span>
              <h3 className="font-brand text-2xl font-bold uppercase text-[#FCF5E5]">BARISMO RIGUROSO</h3>
              <p className="text-sm text-[#FCF5E5]/80 leading-relaxed font-sans-editorial">
                Pesamos cada dosis al miligramo y cronometramos cada extracción para asegurar consistencia absoluta en taza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="menu" className="border-b border-[#030408] bg-[#FCF5E5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="p-6 sm:p-12 border-b border-[#030408] flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <span className="font-mono-editorial text-xs font-bold tracking-[0.3em] text-[#FF5A26] uppercase block mb-1">
                // CATEGORÍAS PRINCIPALES
              </span>
              <h2 className="font-brand text-5xl sm:text-7xl font-bold uppercase text-[#030408] leading-none">
                CATEGORÍAS DE CARTA
              </h2>
            </div>
            <span className="font-mono-editorial text-xs font-bold text-[#030408] uppercase tracking-widest mt-4 md:mt-0 bg-[#C8E5ED] px-4 py-2 border border-[#030408]">
              DISPONIBLE EN TIENDA & TAKE AWAY
            </span>
          </div>

          {/* Grid of Categories with Sharp Rectangle Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#030408]">
            {MENU_CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                className="group relative flex flex-col justify-between bg-[#FCF5E5] hover:bg-[#030408] hover:text-[#FCF5E5] transition-colors duration-300 cursor-pointer"
              >
                {/* Image Frame (Sharp Corners) */}
                <div className="h-64 overflow-hidden border-b border-[#030408] bg-[#030408]">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 block"
                  />
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono-editorial text-xs font-bold tracking-widest opacity-70">
                        {cat.code}
                      </span>
                      <span className={`font-mono-editorial text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border border-[#030408] ${cat.accentBg} ${cat.textColor}`}>
                        DISPONIBLE
                      </span>
                    </div>

                    <h3 className="font-brand text-2xl font-bold uppercase tracking-tight leading-tight group-hover:text-[#FCF5E5]">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-sans-editorial opacity-80 mt-2 leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#030408]/20 group-hover:border-[#FCF5E5]/20 flex items-center justify-between font-mono-editorial text-xs font-bold uppercase">
                    <span>EXPLORAR</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="productos" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#030408]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#030408] pb-6">
          <div>
            <span className="font-mono-editorial text-xs font-bold tracking-[0.3em] text-[#FF5A26] uppercase block mb-1">
              // SELECCIÓN DESTACADA
            </span>
            <h2 className="font-brand text-5xl sm:text-7xl font-bold uppercase text-[#030408]">
              PRODUCTOS DE LA CASA
            </h2>
          </div>
          <p className="font-mono-editorial text-xs text-[#030408] max-w-xs mt-4 md:mt-0">
            Envíos locales en 24hs. Bolsa sellada con válvula trilaminada para conservación de aromas.
          </p>
        </div>

        {/* Product Grid - Zero Border Radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((prod) => (
            <div 
              key={prod.id} 
              className="bg-[#FCF5E5] border border-[#030408] flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_#030408] transition-all duration-200"
            >
              <div>
                {/* Product Photo */}
                <div className="relative h-64 border-b border-[#030408] bg-[#030408] overflow-hidden">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover block hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-0 left-0 font-mono-editorial text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-b border-r border-[#030408] ${prod.tagColor}`}>
                    {prod.tag}
                  </span>
                  <span className="absolute bottom-0 right-0 bg-[#FCF5E5] text-[#030408] font-mono-editorial text-[10px] font-bold px-2 py-1 border-t border-l border-[#030408]">
                    {prod.code}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <span className="font-mono-editorial text-[10px] font-bold text-[#FF5A26] uppercase tracking-widest block">
                    {prod.details}
                  </span>
                  <h3 className="font-brand text-2xl font-bold uppercase text-[#030408] leading-tight">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#030408]/80 font-sans-editorial leading-relaxed">
                    {prod.notes}
                  </p>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex items-center justify-between border-t border-[#030408]/20 pt-4">
                  <span className="font-brand text-3xl font-bold text-[#030408]">
                    {prod.price}
                  </span>
                  <button 
                    onClick={() => addToCart(prod.name)}
                    className="bg-[#FF5A26] hover:bg-[#030408] text-[#FCF5E5] font-mono-editorial text-xs font-bold uppercase tracking-wider px-4 py-2.5 border border-[#030408] transition-colors"
                  >
                    AÑADIR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="border-b border-[#030408] bg-[#030408] text-[#FCF5E5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 p-8 sm:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#FCF5E5]/20">
            <div className="space-y-6">
              <span className="font-mono-editorial text-xs font-bold tracking-[0.3em] text-[#CAC550] uppercase block">
                // ESPACIO & AMBIENTE
              </span>
              <h2 className="font-brand text-5xl sm:text-7xl font-bold uppercase leading-none text-[#FCF5E5]">
                NUESTRO LOCAL EN BUENOS AIRES
              </h2>
              <p className="text-sm font-sans-editorial text-[#FCF5E5]/80 leading-relaxed">
                Diseñado bajo premisas de arquitectura brutalista y minimalismo funcional. Un espacio pensado para concentrarse, conversar y apreciar el café de especialidad sin artificios.
              </p>
            </div>

            <div className="mt-12 space-y-4 font-mono-editorial text-xs">
              <div className="flex items-center space-x-3 text-[#C8E5ED]">
                <MapPin size={16} />
                <span>AV. CORRIENTES 1248, CABA</span>
              </div>
              <div className="flex items-center space-x-3 text-[#C8E5ED]">
                <Clock size={16} />
                <span>LUNES A DOMINGO — 08:00 A 20:00 HS</span>
              </div>
              <div className="flex items-center space-x-3 text-[#C8E5ED]">
                <Phone size={16} />
                <span>+54 11 4821-9900</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#FCF5E5]/20">
            <div className="h-80 sm:h-auto relative overflow-hidden bg-[#030408]">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop" 
                alt="Interior de la cafetería con barra de café" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 block"
              />
            </div>
            <div className="h-80 sm:h-auto relative overflow-hidden bg-[#030408]">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
                alt="Taza de café recién servida" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 block"
              />
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="prensa" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#030408] bg-[#FCF5E5]">
        <div className="text-center mb-12">
          <span className="font-mono-editorial text-xs font-bold tracking-[0.3em] text-[#FF5A26] uppercase block mb-2">
            // PRENSA & RESEÑAS
          </span>
          <h2 className="font-brand text-4xl sm:text-6xl font-bold uppercase text-[#030408]">
            RECONOCIMIENTO INTERNACIONAL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRESS_REVIEWS.map((rev, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-[#FCF5E5] border border-[#030408] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="font-brand text-3xl font-bold text-[#030408] block border-b border-[#030408] pb-3">
                  {rev.publication}
                </span>
                <p className="text-sm font-sans-editorial text-[#030408] leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>
              <span className="font-mono-editorial text-[10px] font-bold text-[#FF5A26] uppercase tracking-widest block">
                {rev.location}
              </span>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="bg-[#FF5A26] text-[#FCF5E5] py-16 px-6 border-b border-[#030408]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="font-mono-editorial text-xs font-bold tracking-[0.3em] text-[#030408] uppercase bg-[#FCF5E5] px-3 py-1 inline-block border border-[#030408]">
              CLUB DE CAFÉ KHRĒŌ
            </span>
            <h2 className="font-brand text-5xl sm:text-7xl font-bold uppercase leading-none">
              SUSCRÍBETE Y RECIBE 10% OFF
            </h2>
            <p className="font-sans-editorial text-sm sm:text-base max-w-xl mx-auto text-[#FCF5E5]/90">
              Recibe notificaciones exclusivas de nuevos micro-lotes de café en grano, catas privadas y lanzamientos de edición limitada.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto gap-0 border border-[#030408]">
            <input 
              type="email" 
              placeholder="TU CORREO ELECTRÓNICO" 
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              className="w-full px-5 py-4 bg-[#FCF5E5] text-[#030408] font-mono-editorial text-xs font-bold focus:outline-none placeholder-[#030408]/50 border-b sm:border-b-0 sm:border-r border-[#030408]"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#030408] hover:bg-[#CAC550] text-[#FCF5E5] hover:text-[#030408] font-mono-editorial text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors whitespace-nowrap"
            >
              {subscribed ? '¡SUSCRITO!' : 'UNIRME'}
            </button>
          </form>
        </div>
      </section>

      {}
      <footer className="bg-[#030408] text-[#FCF5E5] pt-16 pb-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#FCF5E5]/20 pb-12">
            
            {/* Brand Title */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-brand text-6xl font-bold tracking-tight text-[#FCF5E5] leading-none block">
                KHRĒŌ
              </span>
              <p className="font-mono-editorial text-xs text-[#C8E5ED] uppercase tracking-widest">
                ESTUDIO FLORAL & CAFÉ DE ESPECIALIDAD
              </p>
              <p className="text-xs text-[#FCF5E5]/70 max-w-sm font-sans-editorial leading-relaxed pt-2">
                Identidad editorial, rigurosidad técnica en tueste y selección directa en finca para amantes del verdadero café.
              </p>
            </div>

            {/* Nav Columns */}
            <div className="md:col-span-3 space-y-3 font-mono-editorial text-xs">
              <span className="text-[#FF5A26] font-bold block tracking-widest uppercase">// NAVEGACIÓN</span>
              <ul className="space-y-2 uppercase text-[#FCF5E5]/80">
                <li><a href="#origen" className="hover:text-[#FCF5E5]">01. ORIGEN & PROCESOS</a></li>
                <li><a href="#menu" className="hover:text-[#FCF5E5]">02. CATEGORÍAS</a></li>
                <li><a href="#productos" className="hover:text-[#FCF5E5]">03. SELECCIÓN DE GRANOS</a></li>
                <li><a href="#prensa" className="hover:text-[#FCF5E5]">04. COMENTARIOS DE PRENSA</a></li>
              </ul>
            </div>

            {/* Contact / Social */}
            <div className="md:col-span-4 space-y-3 font-mono-editorial text-xs">
              <span className="text-[#CAC550] font-bold block tracking-widest uppercase">// DIRECCIÓN & ATENCIÓN</span>
              <p className="text-[#FCF5E5]/80 leading-relaxed uppercase">
                AV. CORRIENTES 1248, CABA<br />
                BUENOS AIRES, ARGENTINA<br />
                INFO@KHREOCAFE.COM
              </p>
              <div className="pt-2 flex items-center space-x-4">
                <a href="#" className="p-2 border border-[#FCF5E5]/30 hover:border-[#FF5A26] hover:text-[#FF5A26] transition-colors" aria-label="Instagram">
                  <AtSign size={16} />
                </a>
                <span className="text-[10px] text-[#FCF5E5]/50">@KHREO.STUDIO</span>
              </div>
            </div>

          </div>

          {/* Bottom Palette Strip & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between font-mono-editorial text-[10px] text-[#FCF5E5]/60 gap-4">
            <div>
              © {new Date().getFullYear()} KHRĒŌ ESTUDIO DE CAFÉ. TODOS LOS DERECHOS RESERVADOS.
            </div>

            {/* Brand Colors Block Indicators */}
            <div className="flex items-center space-x-2">
              <span className="text-xs mr-2">PALETA:</span>
              <span className="w-4 h-4 bg-[#030408] border border-[#FCF5E5]/30 inline-block" title="#030408"></span>
              <span className="w-4 h-4 bg-[#FCF5E5] inline-block" title="#FCF5E5"></span>
              <span className="w-4 h-4 bg-[#FF5A26] inline-block" title="#FF5A26"></span>
              <span className="w-4 h-4 bg-[#C8E5ED] inline-block" title="#C8E5ED"></span>
              <span className="w-4 h-4 bg-[#CAC550] inline-block" title="#CAC550"></span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}