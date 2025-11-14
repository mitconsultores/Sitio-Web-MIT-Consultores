import { Button } from "~/ui/button";
import { FAQ } from "~/components/contacto";

export function Contact() {
  return (
    <section className="bg-[#57462f]">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl text-[#F6EDE3] max-w-4xl leading-relaxed">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-gradient-to-br from-[#57462f] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#171b0b] to-[#57462f] rounded-xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-[#F6EDE3] mb-6 text-center">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/10 border border-[#998B6D] rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white placeholder:text-gray-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 border border-[#998B6D] rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white placeholder:text-gray-300"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-[#998B6D] rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white placeholder:text-gray-300"
                  placeholder="55 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#F6EDE3] mb-3">
                  Servicios de Interés
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value="corporativo"
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3]"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Derecho Corporativo</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value="propiedad-intelectual"
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3]"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Propiedad Intelectual</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value="migratorio"
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3]"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Derecho Migratorio</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value="otro"
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3]"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Otro</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-[#998B6D] rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all resize-none text-white placeholder:text-gray-300"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
        <FAQ />
      </section>
    </section>
  );
}

