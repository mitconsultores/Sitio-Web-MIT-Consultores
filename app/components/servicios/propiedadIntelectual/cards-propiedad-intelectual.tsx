import { FaTrademark, FaLightbulb, FaCopyright, FaLaptop } from "react-icons/fa";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const services: ServiceCard[] = [
  {
    icon: <FaTrademark className="size-8" />,
    title: "Registro de Marcas",
    items: [
      "Asesoría integral en el registro y protección de marcas comerciales, tanto a nivel nacional como internacional."
    ]
  },
  {
    icon: <FaLightbulb className="size-8" />,
    title: "Patentes",
    items: [
      "Gestión y registro de patentes para proteger sus invenciones e innovaciones tecnológicas."
    ]
  },
  {
    icon: <FaCopyright className="size-8" />,
    title: "Derechos de Autor",
    items: [
      "Protección de obras literarias, artísticas, software y contenido digital mediante el registro de derechos de autor."
    ]
  },
  {
    icon: <FaLaptop className="size-8" />,
    title: "Asesoría en Tecnología",
    items: [
      "Consultoría legal especializada en contratos tecnológicos, licenciamiento de software, protección de datos y cumplimiento normativo en el sector tecnológico."
    ]
  }
];

export function CardsPropiedadIntelectual() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57512F] mb-4">
            Protección de Propiedad Intelectual
          </h2>
          <p className="text-lg text-[#666472] max-w-3xl mx-auto">
            Soluciones completas para proteger y gestionar su propiedad intelectual en el entorno digital y empresarial moderno
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-[#F6EDE3] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#998B6D]"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-[#57512F] group-hover:text-[#998B6D] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#57512F] text-center mb-4 group-hover:text-[#998B6D] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Gradient Line */}
              <div className="h-[1px] mb-6 rounded-full bg-gradient-to-r from-transparent via-[#57512F] to-transparent group-hover:via-[#998B6D] transition-all duration-300" />

              {/* Items */}
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-[#666472] text-sm leading-relaxed"
                  >
                    <span className="text-[#57512F] mt-1 flex-shrink-0 group-hover:text-[#998B6D] transition-colors duration-300">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
