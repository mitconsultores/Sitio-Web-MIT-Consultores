import { Button } from "~/ui/button";

export function HomeAbout() {
  return (
    <section className="relative py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#171b0b]/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src="/home-imgs/nosotros.webp"
                alt="Despacho jurídico MIT Consultores"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171b0b]/10 to-transparent" />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f6EDE3] mb-6 leading-tight">
              Sobre Nosotros
            </h2>
            <div className="space-y-6 mb-8">
                <p className="text-lg text-[#f6EDE3] leading-relaxed text-justify">
                Somos un despacho de abogados especializado en asuntos corporativos, empresariales y financieros. Nos distinguimos por ser un despacho boutique, enfocado en satisfacer las necesidades de nuestros clientes y brindarles atención personalizada.
              </p>
              <p className="text-lg text-[#f6EDE3] leading-relaxed text-justify">
                Garantizamos brindar servicios legales profesionales de manera oportuna, especializada, eficiente y confiable.
              </p>
            </div>
            <div>
              <Button variant="secondary" className="bg-[#f6EDE3] text-[#171b0b]" href="/nosotros">
                Conoce más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

