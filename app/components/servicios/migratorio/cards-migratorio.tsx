import { FaBriefcase, FaPassport, FaExchangeAlt, FaEdit, FaCheckCircle, FaFlag, FaSearch } from "react-icons/fa";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const services: ServiceCard[] = [
  {
    icon: <FaBriefcase className="size-8" />,
    title: "Constancia de Empleador y Oferta de Trabajo",
    items: [
      "Obtención de la Constancia de Inscripción de Empleador para compañías que desean contratar extranjeros",
      "Gestión de documentación, presentación ante el INM y seguimiento hasta la emisión del permiso correspondiente",
      "Redacción de cartas de oferta laboral para iniciar trámites de trabajo"
    ]
  },
  {
    icon: <FaPassport className="size-8" />,
    title: "Visas y Residencias",
    items: [
      "Gestión de visas por oferta de empleo, residencia temporal y permanente",
      "Asesoría desde el consulado hasta la expedición de la tarjeta de residencia",
      "Permisos especiales: nómada digital, inversionista, estudiante, familiar y jubilado"
    ]
  },
  {
    icon: <FaExchangeAlt className="size-8" />,
    title: "Canje, Renovación y Reposición de Documentos",
    items: [
      "Trámites de canje de FM/RM",
      "Renovación de tarjetas de residencia",
      "Reposición por pérdida o robo"
    ]
  },
  {
    icon: <FaEdit className="size-8" />,
    title: "Cambios y Actualizaciones ante el INM",
    items: [
      "Modificación de condición o calidad migratoria (ej: visitante → residente temporal)",
      "Cambios de empleador, domicilio, actividades, estado civil o nacionalidad"
    ]
  },
  {
    icon: <FaCheckCircle className="size-8" />,
    title: "Regularización Migratoria",
    items: [
      "Procesos para regularizar situación por estancia irregular",
      "Vencimiento de documentos o actividades no autorizadas"
    ]
  },
  {
    icon: <FaFlag className="size-8" />,
    title: "Nacionalidad y Naturalización",
    items: [
      "Asistencia para la obtención de la naturalización mexicana",
      "Por residencia, matrimonio o vínculo familiar",
      "Inscripción de documentos extranjeros"
    ]
  },
  {
    icon: <FaSearch className="size-8" />,
    title: "Auditorías y Cumplimiento Corporativo",
    items: [
      "Revisión interna de la situación migratoria de empleados extranjeros",
      "Procurar cumplimiento normativo y prevenir sanciones"
    ]
  }
];

export function CardsMigratorio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57512F] mb-4">
            Servicios Migratorios
          </h2>
          <p className="text-lg text-[#666472] max-w-3xl mx-auto">
            Acompañamiento completo en todos sus trámites ante el Instituto Nacional de Migración
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl border border-[#F6EDE3] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#998B6D] ${
                index === services.length - 1 ? 'lg:col-span-3' : ''
              }`}
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
