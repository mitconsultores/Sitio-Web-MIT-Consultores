import { Button } from "~/ui/button";
import { FaHome, FaEnvelope, FaArrowLeft } from "react-icons/fa";

export function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#57512F] via-[#f6EDE3] to-[#57512F]/50" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Large 404 number with elegant styling */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#171b0b] opacity-10 select-none">
            404
          </h1>
        </div>

        {/* Main content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171b0b] mb-4 font-['Cormorant_Garamond']">
            Página no encontrada
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            Te invitamos a explorar nuestros servicios o contactarnos directamente.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" href="/" className="flex items-center gap-2">
            <FaHome className="size-4" />
            Volver al inicio
          </Button>

          <Button variant="secondary" href="/contacto" className="flex items-center gap-2">
            <FaEnvelope className="size-4" />
            Contactar
          </Button>
        </div>

        {/* Additional navigation hint */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            También puedes explorar:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/nosotros" className="text-[#171b0b] hover:text-[#57512F] transition-colors flex items-center gap-1">
              <FaArrowLeft className="size-3" />
              Sobre nosotros
            </a>
            <a href="/servicios/corporativo" className="text-[#171b0b] hover:text-[#57512F] transition-colors">
              Servicios Corporativos
            </a>
            <a href="/servicios/propiedad-intelectual" className="text-[#171b0b] hover:text-[#57512F] transition-colors">
              Propiedad Intelectual
            </a>
            <a href="/servicios/migratorio" className="text-[#171b0b] hover:text-[#57512F] transition-colors">
              Servicios Migratorios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
