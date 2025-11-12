import { Button } from "~/ui/button";

export function AboutMetrics() {
  return (
    <section className="py-32 bg-[#f6EDE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-r-0 md:border-r border-[#F6EDE3] last:border-r-0">
              <div className="text-5xl font-bold text-[#57512F] mb-2">15+</div>
              <div className="text-lg text-[#666472]">Años de Experiencia</div>
            </div>
            <div className="border-r-0 md:border-r border-[#F6EDE3] last:border-r-0">
              <div className="text-5xl font-bold text-[#57512F] mb-2">500+</div>
              <div className="text-lg text-[#666472]">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#57512F] mb-2">98%</div>
              <div className="text-lg text-[#666472]">Casos Exitosos</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="primary" href="/contacto">
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
}

