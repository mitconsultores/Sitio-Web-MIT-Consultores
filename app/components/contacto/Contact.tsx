import { Button } from "~/ui/button";

export function Contact() {
  return (
    <div>
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
      <section className="py-32 bg-gradient-to-br from-[#F6EDE3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information & Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            {/* Contact Information */}
            <div className="pb-6 border-b border-gray-200 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#57512F] rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#57512F]">Teléfono</h3>
                  <a href="tel:5552812018" className="text-[#666472] hover:text-[#57512F] transition-colors">
                    55 5281 2018
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#57512F] rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#57512F]">Correo Electrónico</h3>
                  <a href="mailto:m.islas@aiconsultores.mx" className="text-[#666472] hover:text-[#57512F] transition-colors">
                    m.islas@aiconsultores.mx
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#57512F] rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#57512F]">Horario</h3>
                  <p className="text-[#666472]">Lunes a Viernes de 9:00 a 18:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#57512F] mb-6">Envíanos un mensaje</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#666472] mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57512F] focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#666472] mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57512F] focus:border-transparent outline-none transition-all"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#666472] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57512F] focus:border-transparent outline-none transition-all"
                    placeholder="55 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#666472] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57512F] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>

          {/* Right Side - Location & Map */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md mb-6">
              <h2 className="text-2xl font-bold text-[#57512F] mb-6">Nuestra Ubicación</h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#57512F] rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#57512F] mb-2">Dirección</h3>
                  <p className="text-[#666472] leading-relaxed">
                    Av. Pdte. Masaryk Int.201, Polanco, Polanco II Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.390773831764!2d-99.19523842413658!3d19.43403854164789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8c7b8f5d8a1%3A0x7e0e0b3d5c8c8c8c!2sAv.%20Pdte.%20Masaryk%20201%2C%20Polanco%2C%20Polanco%20II%20Secc%2C%20Miguel%20Hidalgo%2C%2011550%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1699999999999!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MIT Consultores Location"
              />
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

