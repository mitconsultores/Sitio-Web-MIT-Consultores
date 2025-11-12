export function AboutContent() {
  return (
    <section className="py-20 bg-[#F6EDE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171b0b] mb-6 leading-tight">
              Un Distinguido Despacho Jurídico en el Corazón de la Ciudad de México
            </h2>
            <p className="text-lg text-[#666472] leading-relaxed mb-6 text-justify">
              MIT Consultores es un distinguido despacho jurídico boutique ubicado en el corazón de la Ciudad de México. Especializado en derecho corporativo, migratorio y propiedad intelectual, brindamos a nuestros clientes servicios legales de primera calidad adaptados a sus necesidades específicas.
            </p>
            <p className="text-lg text-[#666472] leading-relaxed mb-6 text-justify">
              Nuestro equipo de abogados altamente capacitados cuenta con años de experiencia en el mercado mexicano e internacional, lo que nos permite ofrecer soluciones legales integrales y estratégicas. Trabajamos de manera cercana con cada cliente, entendiendo sus objetivos empresariales y personales para proporcionar asesoría legal personalizada y efectiva.
            </p>
            <p className="text-lg text-[#666472] leading-relaxed text-justify">
              En MIT Consultores, nos enorgullece mantener los más altos estándares de excelencia profesional. Nuestra dedicación a la calidad, integridad y resultados excepcionales nos ha posicionado como un referente en el sector legal mexicano, ganando la confianza de empresas multinacionales, emprendedores y profesionales que buscan servicios jurídicos de primer nivel.
            </p>
          </div>

          {/* Right Side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img 
                src="/about-imgs/about-1.webp" 
                alt="Oficina moderna"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/about-imgs/about-2.webp" 
                alt="Trabajo en equipo"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/about-imgs/about-3.webp" 
                alt="Consultoría legal"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

