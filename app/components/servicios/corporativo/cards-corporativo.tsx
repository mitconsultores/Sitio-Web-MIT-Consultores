import { FaBuilding, FaGavel, FaHandshake, FaShieldAlt, FaUsers } from "react-icons/fa";

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
      "Constitución de sociedades y diseño legal de las mismas",
      "Diseño corporativo: Diseño de la mejor estructura societaria de acuerdo al propósito y necesidades del cliente, fusiones, escisiones, transformaciones, etc"
    ]
  },
  {
    icon: <FaGavel className="size-8" />,
    title: "Gobernanza y Gobierno Corporativo",
    items: [
      "Gobierno corporativo: implementación de órganos de gobierno (junta, consejos), elaboración y modificación de estatutos, poderes, reglamentos internos, auditoría y cumplimiento",
      "Elaboración de Actas, RUAS, convenios de accionistas, estatutos sociales de sociedades con diversas naturalezas jurídicas, mantenimiento de libros corporativos, entre otras cosas",
      "Elaboración y revisión de contratos",
      "Diseño de estructuras jurídicas para la solución de conflictos o para la realización de negocios específicos: acompañamiento en negociaciones, disputas contractuales y cumplimiento legal."
    ]
  },
  {
    icon: <FaHandshake className="size-8" />,
    title: "Due Diligence y Fusiones/Adquisiciones (M&A)",
    items: [
      "Due diligence: revisión y regulación legal de empresas, proyectos y/o transacciones para identificar riesgos legales"
    ]
  },
  {
    icon: <FaShieldAlt className="size-8" />,
    title: "Regulación y Cumplimiento Legal (Compliance)",
    items: [
      "Compliance corporativo: implementación de políticas internas, documentos jurídicos y todo lo necesario de acuerdo  a la naturaleza jurídica de la sociedad para dar cumplimiento normativo",
    ]
  },
  {
    icon: <FaUsers className="size-8" />,
    title: "Asesoría en Asuntos Laborales",
    items: [
      "Asesoría en asuntos laborales",
      "Elaboración de contratos, políticas laborales, y asesorías en derecho laboral."
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

        {/* Bento Grid - Layout similar to image: 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Card 1: Gobernanza y Gobierno Corporativo - LARGE CARD (spans 2 rows) */}
          <div className="group bg-white rounded-2xl border border-[#F6EDE3] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#998B6D] md:row-span-2">
            <div className="flex justify-center mb-4 text-[#57512F] group-hover:text-[#998B6D] transition-colors duration-300">
              {services[1].icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#57512F] text-center mb-4 group-hover:text-[#998B6D] transition-colors duration-300">
              {services[1].title}
            </h3>
            <div className="h-[1px] mb-4 rounded-full bg-gradient-to-r from-transparent via-[#57512F] to-transparent group-hover:via-[#998B6D] transition-all duration-300" />
            <ul className="space-y-3">
              {services[1].items.map((item, itemIndex) => (
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

          {/* Top Middle - Card 2: Constitución y Estructura Empresarial */}
          <div className="group bg-white rounded-2xl border border-[#F6EDE3] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#998B6D]">
            <div className="flex justify-center mb-4 text-[#57512F] group-hover:text-[#998B6D] transition-colors duration-300">
              {services[0].icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#57512F] text-center mb-4 group-hover:text-[#998B6D] transition-colors duration-300">
              {services[0].title}
            </h3>
            <div className="h-[1px] mb-4 rounded-full bg-gradient-to-r from-transparent via-[#57512F] to-transparent group-hover:via-[#998B6D] transition-all duration-300" />
            <ul className="space-y-3">
              {services[0].items.map((item, itemIndex) => (
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

          {/* Top Right - Card 3: Due Diligence */}
          <div className="group bg-white rounded-2xl border border-[#F6EDE3] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#998B6D]">
            <div className="flex justify-center mb-4 text-[#57512F] group-hover:text-[#998B6D] transition-colors duration-300">
              {services[2].icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#57512F] text-center mb-4 group-hover:text-[#998B6D] transition-colors duration-300">
              {services[2].title}
            </h3>
            <div className="h-[1px] mb-4 rounded-full bg-gradient-to-r from-transparent via-[#57512F] to-transparent group-hover:via-[#998B6D] transition-all duration-300" />
            <ul className="space-y-3">
              {services[2].items.map((item, itemIndex) => (
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

          {/* Bottom Middle - Card 4: Regulación y Cumplimiento Legal */}
          <div className="group bg-white rounded-2xl border border-[#F6EDE3] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#998B6D]">
            <div className="flex justify-center mb-4 text-[#57512F] group-hover:text-[#998B6D] transition-colors duration-300">
              {services[3].icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#57512F] text-center mb-4 group-hover:text-[#998B6D] transition-colors duration-300">
              {services[3].title}
            </h3>
            <div className="h-[1px] mb-4 rounded-full bg-gradient-to-r from-transparent via-[#57512F] to-transparent group-hover:via-[#998B6D] transition-all duration-300" />
            <ul className="space-y-3">
              {services[3].items.map((item, itemIndex) => (
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

          {/* Bottom Right - Card 5: Asesoría en Asuntos Laborales */}
          <div className="group bg-white rounded-2xl border border-[#F6EDE3] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#998B6D]">
            <div className="flex justify-center mb-4 text-[#57512F] group-hover:text-[#998B6D] transition-colors duration-300">
              {services[4].icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#57512F] text-center mb-4 group-hover:text-[#998B6D] transition-colors duration-300">
              {services[4].title}
            </h3>
            <div className="h-[1px] mb-4 rounded-full bg-gradient-to-r from-transparent via-[#57512F] to-transparent group-hover:via-[#998B6D] transition-all duration-300" />
            <ul className="space-y-3">
              {services[4].items.map((item, itemIndex) => (
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
        </div>
      </div>
    </section>
  );
}

