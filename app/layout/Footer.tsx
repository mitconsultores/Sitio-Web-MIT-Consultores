import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#171b0b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src="/mit_logo_white.png" 
              alt="MIT Consultores" 
              className="h-32 w-auto mb-4"
            />
            <p className="text-[#F6EDE3] text-sm leading-relaxed">
              Despacho jurídico especializado en derecho corporativo, migratorio y propiedad intelectual con atención personalizada y profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6EDE3]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/nosotros" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6EDE3]">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/servicios/corporativo" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Derecho Corporativo
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios/propiedad-intelectual" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Propiedad Intelectual
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios/migratorio" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Derecho Migratorio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6EDE3]">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white">
                  Av. Pdte. Masaryk Int.201, Polanco, Polanco II Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:5552812018" 
                  className="text-white hover:text-[#F6EDE3] transition-colors"
                >
                  55 5281 2018
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:m.islas@aiconsultores.mx" 
                  className="text-white hover:text-[#F6EDE3] transition-colors"
                >
                  m.islas@aiconsultores.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#998B6D] mt-8 pt-8 text-center">
          <p className="text-[#F6EDE3] text-sm">
            © {new Date().getFullYear()} MIT Consultores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

