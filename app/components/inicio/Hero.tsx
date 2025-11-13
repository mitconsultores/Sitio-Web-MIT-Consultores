import { Button } from "~/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home-imgs/hero-bg.jpg')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[#171b0b]/20" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-24">
        <div className="mr-auto max-w-2xl text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f6EDE3] mb-6 leading-tight">
            MIT CONSULTORES
          </h1>
          <p className="text-xl md:text-2xl text-[#F6EDE3] mb-8 leading-relaxed">
            Despacho jurídico especializado en derecho corporativo, migratorio y propiedad intelectual con atención personalizada y profesional.
          </p>
          <div className="flex gap-4 justify-start flex-wrap">
            <Button variant="primary" href="/contacto">
              Contactar
            </Button>
            <Button variant="secondary" href="/nosotros" className="border-2 border-[#f6EDE3] text-[#f6EDE3] hover:bg-[#f6EDE3] hover:text-[#171b0b]">
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

