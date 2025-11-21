import { Form, useActionData, useNavigation } from "react-router";
import { Button } from "~/ui/button";
import { FAQ } from "~/components/contacto";
import { useState } from "react";

export function Contact() {
  const actionData = useActionData<{
    success: boolean;
    errors?: Record<string, string>;
    message?: string;
  }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  const [formTimestamp] = useState(() => Date.now());

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
                <div className="flex gap-2">
                  <select
                    name="phonePrefix"
                    id="phonePrefix"
                    disabled={isSubmitting}
                    className="w-32 px-3 py-3 bg-white/10 border border-[#998B6D] rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white disabled:opacity-50 appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F6EDE3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                    defaultValue="+52"
                  >
                    <option value="+52" className="bg-[#171b0b] text-white">🇲🇽 +52</option>
                    <option value="+1" className="bg-[#171b0b] text-white">🇺🇸 +1</option>
                    <option value="+34" className="bg-[#171b0b] text-white">🇪🇸 +34</option>
                    <option value="+54" className="bg-[#171b0b] text-white">🇦🇷 +54</option>
                    <option value="+55" className="bg-[#171b0b] text-white">🇧🇷 +55</option>
                    <option value="+33" className="bg-[#171b0b] text-white">🇫🇷 +33</option>
                    <option value="+49" className="bg-[#171b0b] text-white">🇩🇪 +49</option>
                    <option value="+44" className="bg-[#171b0b] text-white">🇬🇧 +44</option>
                    <option value="+39" className="bg-[#171b0b] text-white">🇮🇹 +39</option>
                    <option value="+86" className="bg-[#171b0b] text-white">🇨🇳 +86</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    disabled={isSubmitting}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    onInput={(e) => {
                      // Solo permite números y limita a 10 dígitos
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '').slice(0, 10);
                    }}
                    className={`flex-1 px-4 py-3 bg-white/10 border ${actionData?.errors?.phone ? 'border-red-400' : 'border-[#998B6D]'} rounded-lg focus:ring-2 focus:ring-[#F6EDE3] focus:border-transparent outline-none transition-all text-white placeholder:text-gray-300 disabled:opacity-50`}
                    placeholder="5512345678"
                  />
                </div>
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

              <div className="space-y-3">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : actionData?.success ? '✓ Mensaje Enviado' : 'Enviar Mensaje'}
                </Button>
                
                {/* Success Message */}
                {actionData?.success && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 text-green-800 px-6 py-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="font-medium">{actionData.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </Form>
          </div>
        </div>
        <FAQ />
      </section>
    </section>
  );
}

