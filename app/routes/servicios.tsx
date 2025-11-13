import { Link } from "react-router";

export function meta() {
  return [
    { title: "Servicios Legales | MIT Consultores" },
    { name: "description", content: "Servicios legales especializados en derecho corporativo, propiedad intelectual y derecho migratorio. Soluciones jurídicas a medida para empresas y personas en México." },
  ];
}

export default function ServiciosPage() {
  const services = [
    {
      title: "Derecho Corporativo",
      description: "Soluciones integrales para la estructura, gobierno y operación de su empresa",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      link: "/servicios/corporativo"
    },
    {
      title: "Propiedad Intelectual y Tecnología",
      description: "Protección integral de sus activos intangibles y derechos de propiedad intelectual",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      link: "/servicios/propiedad-intelectual"
    },
    {
      title: "Derecho Migratorio",
      description: "Asesoría integral en trámites migratorios para personas y empresas",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      link: "/servicios/migratorio"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#57512F] to-[#998B6D]">
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            NUESTROS SERVICIOS
          </h1>
          <p className="text-xl md:text-2xl text-[#F6EDE3] max-w-4xl leading-relaxed">
            Soluciones legales especializadas para cada necesidad
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#57512F] mb-3 group-hover:text-[#998B6D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#666472] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#57512F] group-hover:text-[#998B6D] transition-colors">
                    <span className="font-medium">Conocer más</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

