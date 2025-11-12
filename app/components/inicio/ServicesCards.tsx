import { Link } from "react-router";
import { FaBuilding, FaCopyright, FaPassport } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  link: string;
}

const services: Service[] = [
  {
    id: "corporativo",
    title: "Derecho Corporativo",
    description:
      "Constitución empresarial, gobierno corporativo, contratos, M&A, compliance y recursos humanos.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    icon: <FaBuilding className="size-6" />,
    link: "/servicios/corporativo",
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad Intelectual",
    description:
      "Protección de marcas, patentes, derechos de autor y asesoría en tecnología.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    icon: <FaCopyright className="size-6" />,
    link: "/servicios/propiedad-intelectual",
  },
  {
    id: "migratorio",
    title: "Derecho Migratorio",
    description:
      "Visas, residencias, permisos de trabajo, regularización y naturalización mexicana.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    icon: <FaPassport className="size-6" />,
    link: "/servicios/migratorio",
  },
];

export function ServicesCards() {
  return (
    <section className=" py-12 lg:py-32 px-6 bg-[#f6EDE3]">
      <div className="container mx-auto flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-[#171b0b]">
            Nuestros Servicios
          </h2>
          <p className="mb-8 text-[#666472] lg:text-lg">
            Soluciones jurídicas especializadas para empresas y particulares con atención personalizada y profesional.
          </p>
          <Link
            to="/servicios"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg text-[#171b0b] hover:text-[#57512F] transition-colors"
          >
            Ver todos los servicios
            <FaArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services[0] && (
            <Link
              to={services[0].link}
              className="group flex flex-col overflow-clip rounded-xl border border-white/30 bg-[#171b0b]/90 shadow-xl md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem] relative overflow-hidden">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="aspect-[16/9] h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <div className="mb-4 text-[#f6EDE3] group-hover:text-[#998B6D] transition-colors">
                  {services[0].icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-[#f6EDE3] group-hover:text-[#998B6D] transition-colors">
                  {services[0].title}
                </h3>
                <p className="text-[#f6EDE3]/90 lg:text-lg mb-4">
                  {services[0].description}
                </p>
                <span className="flex items-center text-sm font-medium text-[#f6EDE3] group-hover:text-[#998B6D] transition-colors">
                  Conocer más
                  <FaArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          {services.slice(1).map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group flex flex-col overflow-clip rounded-xl border border-white/30 bg-[#171b0b]/90 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171b0b]/20 to-[#FFFFFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <div className="mb-4 text-[#f6EDE3] group-hover:text-[#998B6D] transition-colors">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-[#f6EDE3] group-hover:text-[#998B6D] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#f6EDE3]/90 lg:text-lg mb-4">
                  {service.description}
                </p>
                <span className="flex items-center text-sm font-medium text-[#f6EDE3] group-hover:text-[#998B6D] transition-colors">
                  Conocer más
                  <FaArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

