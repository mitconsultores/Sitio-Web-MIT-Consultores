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

  const privacyNoticeContent = (
    <div className="space-y-6 pb-4">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold mb-2" style={{ color: "#f6EDE3" }}>
          AVISO DE PRIVACIDAD INTEGRAL
        </h2>
      </div>

      <div className="space-y-5 text-sm leading-relaxed" style={{ color: "#f6EDE3" }}>
        <p>
          CONSULTORES ITAA ASESORES, S.C. (en lo sucesivo ITAA) con domicilio en Presidente Masaryk 360 A, interior 201, Colonia Polanco IV Sección, Alcaldía Miguel Hidalgo, C.P. 11550; es responsable de recabar los datos personales que se nos proporcionan, del uso que se le dé a los mismos y de su protección.
        </p>

        <p>
          La información personal que nos sea proporcionada será utilizada para todo lo relacionado con la prestación de nuestros servicios jurídicos profesionales; informándole al o los titulares de ésta sobre cambios en el objeto antes señalado. Para las finalidades ya mencionadas, requerimos obtener los siguientes datos personales:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Nombre</li>
          <li>Teléfono(s)</li>
          <li>Correo(s) electrónico(s)</li>
          <li>RFC</li>
          <li>Información bancaria como números de cuenta y CLABE, necesarios para la realización y recepción de pagos.</li>
          <li>Comprobante de domicilio</li>
          <li>Domicilio ordinario y/o fiscal</li>
          <li>Identificaciones oficiales.</li>
        </ul>

        <p>
          La información antes mencionada, se recaba con el propósito de cumplir con las obligaciones derivadas de la prestación de servicios jurídicos profesionales proporcionados por ITAA de conformidad con el artículo 9 fracción IV de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP); los cuales se obtienen cuando nos los proporcionan sus titulares ya sea directamente o a través de diversos medios electrónicos, por vía telefónica, así como cuando obtengamos información a través de otras fuentes que están permitidas por la LFPDPPP.
        </p>

        <p>
          Nos comprometemos a que los datos antes señalados serán tratados bajo las más estrictas medidas de seguridad que garanticen su confidencialidad.
        </p>

        <p>
          Tratándose de los datos personales proporcionados, el titular tiene derecho de acceder, rectificar, cancelar los mismos, así como de oponerse a su tratamiento o revocar el consentimiento que para tal fin se nos haya otorgado (Derechos ARCO), a través de los procedimientos que hemos implementado para estos efectos.
        </p>

        <p>
          El titular que desee ejercer sus derechos ARCO, podrá realizarlo por las siguientes vías:
        </p>

        <p className="pl-4">
          Electrónica: mediante correo electrónico a la dirección: <a href="mailto:avaca@aiconsultores.mx" className="underline hover:text-white">avaca@aiconsultores.mx</a>, o
        </p>

        <p className="pl-4">
          Personalmente con cita previa o por correo postal en la dirección: Presidente Masaryk 360 A, interior 201, Colonia Polanco IV Sección, Alcaldía Miguel Hidalgo, C.P. 11550.
        </p>

        <p>La solicitud deberá acompañarse de lo siguiente:</p>

        <p className="pl-4">
          1.- Nombre completo del Titular y domicilio u otro medio a través del cual pueda darse respuesta a su solicitud;
        </p>

        <p className="pl-4">
          2.-Los documentos que acrediten la identidad del titular es decir identificación oficial vigente (INE, Pasaporte, Cédula profesional);
        </p>

        <p className="pl-4">
          3.- En caso de estar representado documento que acredite fehacientemente la personalidad de su representante legal, es decir poder para actos de administración o pleitos y cobranzas que conste de cualquiera de las siguientes maneras:
        </p>

        <div className="pl-12 space-y-2">
          <p>a) En escritura pública otorgada ante fedatario público, acompañada de identificación vigente del representante;</p>
          <p>b) Carta firmada ante dos testigos y ratificadas las firmas del otorgante y testigos ante notario, o ante jueces o autoridades administrativas correspondientes;</p>
          <p>c) En escrito privado firmado ante dos testigos.</p>
        </div>

        <p className="pl-4">
          4.- Realizar dentro de la misma solicitud una descripción clara y precisa de los datos respecto de los cuales se busca ejercer alguno de los derechos ARCO;
        </p>

        <p className="pl-4">
          5.- Cualquier otro elemento o documento que permita facilitar la localización de los datos personales.
        </p>

        <p>
          ITAA emitirá respuesta a su solicitud en un plazo máximo de 20 días hábiles por el mismo medio en la que la solicitud haya sido realizada, contados a partir de la fecha de recepción de la solicitud. En virtud de lo anterior, ITAA acusará de recibido la solicitud enviada por el Titular.
        </p>

        <p>
          Si la solicitud resultare procedente, la misma habrá de hacerse efectiva dentro de los 15 días hábiles siguientes a la fecha en que se comunique la respuesta al titular.
        </p>

        <p>
          Los periodos antes mencionados, podrán ser ampliados una sola vez por un periodo igual, siempre y cuando así lo justifiquen las circunstancias del caso.
        </p>

        <p>
          En caso de que la información proporcionada en la solicitud sea insuficiente o errónea, o bien, no se acompañen los documentos que deben integrarse a la solicitud, ITAA podrá requerir al titular por una vez y dentro de los 5 días hábiles siguientes a la recepción de la solicitud, que aporte los documentos y/o información necesaria para darle trámite a su solicitud. El titular, contará con 10 días hábiles para atender dicho requerimiento, contados a partid del día siguiente en el que lo haya recibido. En caso de que el titular no dé respuesta dentro del plazo antes señalado, se tendrá por no presentada la solicitud correspondiente.
        </p>

        <p>
          En caso de que el titular si responda al requerimiento de información y/o documentación adicional, el plazo que tendrá ITAA para atender su solicitud, correrá a partir del día siguiente en el que el titular haya atendido el requerimiento.
        </p>

        <h3 className="text-lg font-semibold pt-4" style={{ color: "#998B6D" }}>
          Uso de nuestro sitio web https://mitconsultores.com
        </h3>

        <p>
          Nuestro sitio web no utiliza cookies ni web beacons, por lo que no recopila información de la computadora desde la que se accede a la misma, ni del usuario.
        </p>

        <h3 className="text-lg font-semibold pt-4" style={{ color: "#998B6D" }}>
          Transmisión de datos personales
        </h3>

        <p>
          Asimismo, informamos que los datos personales pueden ser transferidos y tratados dentro y fuera del país, por personas distintas a nosotros, en virtud de la naturaleza de la prestación de nuestros servicios jurídicos profesionales y con el único propósito de proporcionar a cabalidad dichos servicios. En ese sentido, su información puede ser compartida con Sociedades, Sociedades controladoras, subsidiarias o afiliadas con las que el titular de los datos personales tenga relación profesional, laboral y/o jurídica. Si el titular de los derechos personales no manifiesta su oposición para que sus datos personales sean transferidos, se entenderá que ha otorgado su consentimiento para ello y ha leído, entendido y acordado los términos antes expuestos.
        </p>

        <p>
          En caso de que el titular de los datos personales no consienta la transmisión de los mismos en los términos del presente aviso de privacidad, deberá hacerlo de nuestro conocimiento enviando dicha negativa a la siguiente dirección electrónica: <a href="mailto:avaca@aiconsultores.mx" className="underline hover:text-white">avaca@aiconsultores.mx</a> o bien, acudiendo al domicilio: Presidente Masaryk 360 A, interior 201, Colonia Polanco, alcaldía Miguel Hidalgo, C.P. 11550, en la Ciudad de México, previa cita.
        </p>

        <p>
          Cualquier modificación a este aviso de privacidad podrá consultarlo poniéndose en contacto con nuestra área de datos personales, en nuestra página web https://www.mitconsultores.com o bien, directamente en el domicilio señalado en el párrafo inmediato anterior.
        </p>

        <p className="text-center pt-4 font-semibold">
          Fecha última actualización: 20/11/2025
        </p>
      </div>
    </div>
  );

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
              Contáctanos
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
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl flex flex-col"
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
                className="flex items-start justify-between px-6 py-4 flex-shrink-0"
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
                className="overflow-y-auto px-6 py-6 flex-1 privacy-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                style={{
                  overscrollBehavior: "contain",
                }}
                onWheel={(e) => {
                  // Prevenir que el scroll se propague al body
                  e.stopPropagation();
                }}
              >
                {privacyNoticeContent}
              </motion.div>
              
              <style>{`
                .privacy-scroll {
                  scrollbar-width: thin;
                  scrollbar-color: rgba(246, 237, 227, 0.5) rgba(255, 255, 255, 0.1);
                }
                
                .privacy-scroll::-webkit-scrollbar {
                  width: 8px;
                }
                
                .privacy-scroll::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 4px;
                }
                
                .privacy-scroll::-webkit-scrollbar-thumb {
                  background: rgba(246, 237, 227, 0.5);
                  border-radius: 4px;
                }
                
                .privacy-scroll::-webkit-scrollbar-thumb:hover {
                  background: rgba(246, 237, 227, 0.7);
                }
              `}</style>

              {/* Footer */}
              <div
                className="flex justify-end px-6 py-3 flex-shrink-0"
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

