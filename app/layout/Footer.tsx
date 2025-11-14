import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "~/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Cerrar modal al hacer click fuera
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      closeModal();
    }
  };

  const privacyNoticeContent = `
AVISO DE PRIVACIDAD

Última actualización: ${new Date().toLocaleDateString('es-ES')}

MIT Consultores, con domicilio en [Dirección del despacho], es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).

FINALIDADES DEL TRATAMIENTO DE DATOS

Sus datos personales serán utilizados para las siguientes finalidades:
- Brindar servicios legales y de consultoría
- Gestionar comunicaciones relacionadas con nuestros servicios
- Cumplir con obligaciones legales y regulatorias
- Mejorar nuestros servicios

DATOS PERSONALES QUE RECABAMOS

Podemos recabar los siguientes datos personales:
- Nombre completo
- Información de contacto (correo electrónico, teléfono)
- Información profesional y empresarial
- Datos necesarios para la prestación de servicios legales

DERECHOS ARCO

Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, puede contactarnos a través de nuestro formulario de contacto o enviando un correo electrónico a [correo electrónico].

TRANSFERENCIA DE DATOS

Sus datos personales podrán ser transferidos a terceros únicamente cuando sea necesario para la prestación de nuestros servicios legales, con su consentimiento expreso cuando sea requerido por la ley.

MEDIDAS DE SEGURIDAD

Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o acceso no autorizado.

CAMBIOS AL AVISO DE PRIVACIDAD

Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Los cambios serán publicados en nuestro sitio web.

CONTACTO

Para cualquier duda o comentario sobre este aviso de privacidad, puede contactarnos a través de:
- Sitio web: www.mitconsultores.com
- Correo electrónico: [correo electrónico]
- Teléfono: [número de teléfono]
  `;

  return (
    <footer className="bg-[#171b0b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src="/mit_logo_white.png" 
              alt="MIT Consultores" 
              className="h-32 w-auto mb-4"
            />
            <p className="text-[#F6EDE3] text-sm leading-relaxed">
              Despacho jurídico especializado en derecho corporativo, migratorio y propiedad intelectual con atención personalizada y profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6EDE3]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/nosotros" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6EDE3]">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/servicios/corporativo" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Derecho Corporativo
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios/propiedad-intelectual" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Propiedad Intelectual
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios/migratorio" 
                  className="text-white hover:text-[#F6EDE3] transition-colors text-sm"
                >
                  Derecho Migratorio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6EDE3]">Contacto</h3>
            <Button href="/contacto" variant="secondary" className="bg-[#f6EDE3] text-[#57462f] hover:bg-[#57462f]/80">
              Contactanos
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#998B6D] mt-8 pt-8 text-center">
          <p className="text-[#F6EDE3] text-sm">
            © {new Date().getFullYear()} MIT Consultores. Todos los derechos reservados.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-2 text-[#F6EDE3] text-xs hover:text-white underline transition-colors cursor-pointer"
          >
            Aviso de Privacidad
          </button>
        </div>
      </div>

      {/* Modal del Aviso de Privacidad */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{
              backgroundColor: "rgba(23, 27, 11, 0.7)",
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
          >
            <motion.div
              className="relative max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 20 }}
            >
              {/* Header */}
              <div
                className="flex items-start justify-between px-6 py-4"
                style={{
                  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div>
                  <h3
                    id="privacy-modal-title"
                    className="text-2xl font-semibold"
                    style={{ color: "#f6EDE3" }}
                  >
                    Aviso de Privacidad
                  </h3>
                </div>
                <motion.button
                  type="button"
                  onClick={closeModal}
                  className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-2xl font-bold transition-all cursor-pointer"
                  style={{
                    color: "#f6EDE3",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Cerrar"
                >
                  ×
                </motion.button>
              </div>

              {/* Content */}
              <motion.div
                className="max-h-[60vh] overflow-y-auto px-6 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <div className="space-y-4">
                  {privacyNoticeContent.split('\n\n').map((section, index) => {
                    const lines = section.split('\n');
                    const title = lines[0];
                    const content = lines.slice(1).join('\n');

                    if (title && content) {
                      return (
                        <div key={index}>
                          <h4
                            className="text-lg font-semibold mb-2"
                            style={{ color: "#998B6D" }}
                          >
                            {title}
                          </h4>
                          <div
                            className="text-sm leading-relaxed whitespace-pre-line"
                            style={{ color: "#f6EDE3" }}
                          >
                            {content}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </motion.div>

              {/* Footer */}
              <div
                className="flex justify-end px-6 py-3"
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all cursor-pointer"
                  style={{
                    color: "#f6EDE3",
                    backgroundColor: "rgba(87, 81, 47, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(87, 81, 47, 0.9)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cerrar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

