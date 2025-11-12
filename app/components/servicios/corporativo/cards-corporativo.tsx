import { FaBuilding, FaGavel, FaFileContract, FaHandshake, FaShieldAlt, FaUsers } from "react-icons/fa";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const services: ServiceCard[] = [
  {
    icon: <FaBuilding className="size-8" />,
    title: "Constitución y Estructura Empresarial",
    items: [
      "Formación e incorporación de empresas: constitución de sociedades, creación de sucursales o representación en México",
      "Estructuración corporativa: diseño de la mejor estructura societaria, fusiones, escisiones, reorganizaciones y joint ventures"
    ]
  },
  {
    icon: <FaGavel className="size-8" />,
    title: "Gobernanza y Gobierno Corporativo",
    items: [
      "Gobierno corporativo: implementación de órganos (junta, consejos), elaboración y modificación de estatutos, poderes, reglamentos internos, auditoría y cumplimiento",
      "Asambleas y actas: convocatorias, desarrollo de juntas de accionistas y consejos, mantenimiento de libros corporativos y registro público"
    ]
  },
  {
    icon: <FaFileContract className="size-8" />,
    title: "Contratos y Transacciones Comerciales",
    items: [
      "Elaboración y revisión de contratos: desde acuerdos de servicios, arrendamientos, hasta licencia, suministro, franquicias, entre otros",
      "Negociación y resolución: acompañamiento en negociaciones, disputas contractuales y cumplimiento legal"
    ]
  },
  {
    icon: <FaHandshake className="size-8" />,
    title: "Due Diligence y Fusiones/Adquisiciones (M&A)",
    items: [
      "Due diligence: revisión legal de empresas, proyectos o transacciones para identificar riesgos legales, fiscales o regulatorios"
    ]
  },
  {
    icon: <FaShieldAlt className="size-8" />,
    title: "Regulación y Cumplimiento Legal (Compliance)",
    items: [
      "Compliance corporativo: implementación de políticas internas, prevención de corrupción, lavado de dinero, cumplimiento ESG, FCPA, Anti-Bribery"
    ]
  },
  {
    icon: <FaUsers className="size-8" />,
    title: "Recursos Humanos y Laboral",
    items: [
      "Laboral y seguridad social: elaboración de contratos, políticas laborales, asuntos IMSS/INFONAVIT, elaboración y regulación de Reglamento Interior de Trabajo"
    ]
  }
];

export function CardsCorporativo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57512F] mb-4">
            Áreas de Especialización
          </h2>
          <p className="text-lg text-[#666472] max-w-3xl mx-auto">
            Soluciones integrales en derecho corporativo adaptadas a las necesidades de su empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

