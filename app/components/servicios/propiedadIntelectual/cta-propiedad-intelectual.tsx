import { Button } from "~/ui/button";

export function CTAPropiedadIntelectual() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#f6EDE3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171b0b] mb-6 leading-tight">
          Proteja su propiedad intelectual
        </h2>
        <p className="text-lg md:text-xl text-[#666472] mb-8 leading-relaxed max-w-2xl mx-auto">
          Contáctenos para asesoría especializada en registro y protección de sus activos intangibles
        </p>
        <div className="flex justify-center">
          <Button variant="primary" href="/contacto">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
}
