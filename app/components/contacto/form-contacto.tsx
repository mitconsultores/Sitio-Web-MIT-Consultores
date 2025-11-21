import { Form, useActionData, useNavigation } from "react-router";
import { Button } from "~/ui/button";
import { FAQ } from "~/components/contacto";
import { useEffect, useState } from "react";

export function Contact() {
  const actionData = useActionData<{
    success: boolean;
    errors?: Record<string, string>;
    message?: string;
  }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  const [formTimestamp] = useState(() => Date.now());
  const [showSuccess, setShowSuccess] = useState(false);

  // Show success message and reset after successful submission
  useEffect(() => {
    if (actionData?.success) {
      setShowSuccess(true);
      // Hide success message after 5 seconds
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [actionData]);

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
      <section className="py-32 bg-[#f6EDE3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          {showSuccess && actionData?.success && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-md animate-fade-in">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{actionData.message}</span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {actionData?.errors?._form && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{actionData.errors._form}</span>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-[#171b0b] to-[#57462f] rounded-xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-[#F6EDE3] mb-6 text-center">Envíanos un mensaje</h2>
            <Form method="post" className="space-y-4" key={actionData?.success ? Date.now() : undefined}>
              {/* Hidden fields for bot protection */}
              <input type="hidden" name="timestamp" value={formTimestamp} />
              <input 
                type="text" 
                name="website" 
                className="hidden" 
                tabIndex={-1} 
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-white/10 border ${actionData?.errors?.name ? 'border-red-400' : 'border-[#998B6D]'} rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white placeholder:text-gray-300 disabled:opacity-50`}
                  placeholder="Tu nombre"
                />
                {actionData?.errors?.name && (
                  <p className="mt-1 text-sm text-red-300">{actionData.errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-white/10 border ${actionData?.errors?.email ? 'border-red-400' : 'border-[#998B6D]'} rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white placeholder:text-gray-300 disabled:opacity-50`}
                  placeholder="tu@correo.com"
                />
                {actionData?.errors?.email && (
                  <p className="mt-1 text-sm text-red-300">{actionData.errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-white/10 border ${actionData?.errors?.phone ? 'border-red-400' : 'border-[#998B6D]'} rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white placeholder:text-gray-300 disabled:opacity-50`}
                  placeholder="55 1234 5678"
                />
                {actionData?.errors?.phone && (
                  <p className="mt-1 text-sm text-red-300">{actionData.errors.phone}</p>
                )}
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
                      disabled={isSubmitting}
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3] disabled:opacity-50"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Derecho Corporativo</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value="propiedad-intelectual"
                      disabled={isSubmitting}
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3] disabled:opacity-50"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Propiedad Intelectual</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value="migratorio"
                      disabled={isSubmitting}
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3] disabled:opacity-50"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Derecho Migratorio</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value="otro"
                      disabled={isSubmitting}
                      className="w-4 h-4 bg-white/10 border border-[#998B6D] rounded focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-[#57462f] accent-[#F6EDE3] disabled:opacity-50"
                    />
                    <span className="text-[#F6EDE3] group-hover:text-white transition-colors">Otro</span>
                  </label>
                </div>
                {actionData?.errors?.services && (
                  <p className="mt-2 text-sm text-red-300">{actionData.errors.services}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F6EDE3] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-white/10 border ${actionData?.errors?.message ? 'border-red-400' : 'border-[#998B6D]'} rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all resize-none text-white placeholder:text-gray-300 disabled:opacity-50`}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
                {actionData?.errors?.message && (
                  <p className="mt-1 text-sm text-red-300">{actionData.errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </Form>
          </div>
        </div>
        <FAQ />
      </section>
    </section>
  );
}

