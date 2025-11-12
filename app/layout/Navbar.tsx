import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detectar scroll para cambiar transparencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar el delay del dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServiciosOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServiciosOpen(false);
    }, 300); // 300ms de delay antes de cerrar
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#171b0b]/80 backdrop-blur-md shadow-xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/mit_logo_white.png" 
              alt="MIT Consultores" 
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-[#f6EDE3] hover:text-[#998B6D] font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link 
              to="/nosotros" 
              className="text-[#f6EDE3] hover:text-[#998B6D] font-medium transition-colors"
            >
              Nosotros
            </Link>
            
            {/* Servicios Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-[#f6EDE3] hover:text-[#998B6D] font-medium transition-colors duration-200 flex items-center gap-1"
              >
                Servicios
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isServiciosOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`absolute top-full left-0 mt-2 w-64 bg-[#171b0b] shadow-xl rounded-lg py-2 border border-white/30 transition-all duration-300 ease-in-out ${
                  isServiciosOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <Link 
                  to="/servicios/corporativo" 
                  className="block px-4 py-3 text-[#f6EDE3] hover:text-[#998B6D] hover:bg-[#171b0b]/60 transition-colors duration-200"
                >
                  Derecho Corporativo
                </Link>
                <Link 
                  to="/servicios/propiedad-intelectual" 
                  className="block px-4 py-3 text-[#f6EDE3] hover:text-[#998B6D] hover:bg-[#171b0b]/60 transition-colors duration-200"
                >
                  Propiedad Intelectual
                </Link>
                <Link 
                  to="/servicios/migratorio" 
                  className="block px-4 py-3 text-[#f6EDE3] hover:text-[#998B6D] hover:bg-[#171b0b]/60 transition-colors duration-200"
                >
                  Derecho Migratorio
                </Link>
              </div>
            </div>

            <Link 
              to="/contacto" 
              className="text-[#f6EDE3] hover:text-[#998B6D] font-medium transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#57512F] focus:outline-none transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-6 h-6">
              <svg 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white/90 backdrop-blur-md border-t border-white/30 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              className="block py-2 text-[#57512F] hover:text-[#998B6D] font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/nosotros" 
              className="block py-2 text-[#57512F] hover:text-[#998B6D] font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            
            {/* Mobile Servicios */}
            <div>
              <button 
                onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                className="w-full text-left py-2 text-[#57512F] hover:text-[#998B6D] font-medium flex items-center justify-between transition-colors duration-200"
              >
                Servicios
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isServiciosOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isServiciosOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-2 mt-2">
                  <Link 
                    to="/servicios/corporativo" 
                    className="block py-2 text-[#666472] hover:text-[#57512F] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Derecho Corporativo
                  </Link>
                  <Link 
                    to="/servicios/propiedad-intelectual" 
                    className="block py-2 text-[#666472] hover:text-[#57512F] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Propiedad Intelectual
                  </Link>
                  <Link 
                    to="/servicios/migratorio" 
                    className="block py-2 text-[#666472] hover:text-[#57512F] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Derecho Migratorio
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/contacto" 
              className="block py-2 text-[#57512F] hover:text-[#998B6D] font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
        </div>
      </div>
    </nav>
  );
}

