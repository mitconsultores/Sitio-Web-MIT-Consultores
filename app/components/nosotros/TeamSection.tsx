// File: TeamSection.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  shortBio: string;
  fullProfile: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "María A. Islas Torres",
    role: "Directora General",
    shortBio:
      "Abogada egresada de la Facultad de Derecho de la UNAM, con mas de 30 años de experiencia en asuntos corporativos y financieros.",
    fullProfile: `Posición: Socia Fundadora

Educación: Abogada, Facultad de Derecho de la UNAM

Experiencia: Más de 30 años en asuntos corporativos y financieros

Antecedentes:

María A. Islas Torres se graduó de la Facultad de Derecho de la UNAM y cuenta con más de tres décadas de experiencia en asuntos corporativos y financieros. Ha colaborado con numerosos despachos jurídicos de prestigio y se desempeñó como Directora Jurídica de Banca Comercial en Banco Mexicano (ahora Banco Santander). Fundó MIT Consultores y, a través de su práctica independiente, asesora y representa a diversas entidades financieras y empresas con presencia internacional.`,
  },
  {
    id: 2,
    name: "B. Alejandra Vaca Rosillo",
    role: "Abogada Senior",
    shortBio:
      "Especialista en auditorías de riesgos legales, cumplimiento normativo y derecho corporativo con más de 15 años de experiencia.",
    fullProfile: `Posición: Abogada Senior

Educación: Abogada, Facultad de Derecho de la UNAM

Experiencia: Más de 15 años en asuntos corporativos y financieros

Antecedentes:

B. Alejandra Vaca Rosillo egresada de la Facultad de Derecho de la UNAM y cuenta con más de 15 años de experiencia en derecho corporativo y financiero. Se especializa en auditorías de riesgos legales y cumplimiento, enfocándose en los requisitos de las autoridades, la protección de datos personales, la prevención de lavado de dinero, los derechos de autor, los trámites migratorios y las actividades comerciales. Alejandra también ha trabajado con varios notarios y tiene amplia experiencia en el registro y auditoría de documentación legal.`,
  },
  {
    id: 3,
    name: "Dulce Cortez López",
    role: "Abogada Junior",
    shortBio:
      "Licenciada en Derecho con experiencia en Derecho Agrario, Civil y Corporativo, especializada en gobierno corporativo y trámites migratorios.",
    fullProfile: `Posición: Abogada Junior

Educación: Licenciada en Derecho, Facultad de Derecho de la UNAM

Experiencia: Amplia experiencia en Derecho Agrario, Civil y Corporativo

Antecedentes:

Dulce Cortez López es egresada de la Facultad de Derecho de la UNAM con sólida formación jurídica. Cuenta con experiencia en Derecho Agrario, Civil y Corporativo, especializándose en regulación, gobierno corporativo y actividades vinculadas a sociedades mercantiles. Se enfoca en constitución de sociedades, elaboración y revisión de actas, libros corporativos y estatutos sociales, además de trámites migratorios relacionados. Ofrece acompañamiento integral con énfasis en responsabilidad, honestidad, eficacia y compromiso, garantizando atención profesional y oportuna adaptada a las necesidades de cada cliente.`,
  },
  {
    id: 4,
    name: "Judith Valencia",
    role: "Abogada Especialista",
    shortBio:
      "Especialista en derecho migratorio, resolución de conflictos civiles y comerciales, y derecho corporativo.",
    fullProfile: `Posición: Abogada Especialista

Educación: Abogada

Experiencia: Amplia experiencia en derecho migratorio, resolución de conflictos civiles y comerciales

Antecedentes:

Judith Valencia es una abogada con amplia experiencia en derecho migratorio, brindando asistencia integral a extranjeros durante su estancia en el país. Ofrece atención personalizada para asegurar una transición fluida y sin complicaciones. Además, Judith cuenta con vasta experiencia en la resolución de conflictos en áreas civiles y mercantiles, garantizando soluciones efectivas y profesionales. También posee conocimientos en brindar asesoría integral en todas las etapas de la estructuración e implementación del derecho corporativo.`,
  },
];

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  // Función para renderizar el contenido estructurado del perfil
  const renderProfileContent = (fullProfile: string) => {
    const lines = fullProfile.split('\n');
    const sections: { [key: string]: string[] } = {};
    let currentSection = '';

    lines.forEach(line => {
      if (line.includes(':')) {
        const [section, content] = line.split(':');
        currentSection = section.trim();
        sections[currentSection] = content ? [content.trim()] : [];
      } else if (line.trim() && currentSection) {
        sections[currentSection].push(line.trim());
      }
    });

    return (
      <div className="space-y-4">
        {Object.entries(sections).map(([section, content], index) => (
          <div key={index}>
            {section !== 'Antecedentes' ? (
              <div>
                <span className="font-semibold" style={{ color: "#998B6D" }}>
                  {section}:
                </span>{" "}
                <span style={{ color: "#f6EDE3" }}>
                  {content.join(' ')}
                </span>
              </div>
            ) : (
              <div>
                <p className="font-semibold mb-2" style={{ color: "#998B6D" }}>
                  {section}:
                </p>
                {content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "#f6EDE3" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  // Cerrar modal al hacer click fuera
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <section
      className="w-full px-4 py-24"
      style={{
        backgroundColor: "#171b0b",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header con animación */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl font-semibold tracking-tight md:text-5xl"
            style={{ color: "#f6EDE3" }}
          >
            Conoce a nuestro equipo
          </h2>
          <p
            className="mt-3 text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "#998B6D" }}
          >
            Un equipo multidisciplinario de especialistas comprometidos con
            ofrecer soluciones integrales y acompañamiento cercano a cada
            cliente.
          </p>
        </motion.div>

        {/* Grid de cards con animación */}
        <div className="grid gap-8 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex h-full flex-col justify-between rounded-xl p-8 shadow-lg overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div>
                <h3
                  className="text-3xl font-semibold"
                  style={{ color: "#57512F" }}
                >
                  {member.name}
                </h3>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: "#998B6D" }}
                >
                  {member.role}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "#666472" }}
                >
                  {member.shortBio}
                </p>
              </div>

              <motion.button
                type="button"
                onClick={() => openModal(member)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white transition-all cursor-pointer"
                style={{
                  backgroundColor: "#57512F",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver perfil completo
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal con AnimatePresence - Glassmorphism */}
      <AnimatePresence>
        {selectedMember && (
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
            aria-labelledby="team-member-modal-title"
          >
            <motion.div
              className="relative max-h-[80vh] w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl"
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
                    id="team-member-modal-title"
                    className="text-3xl font-semibold"
                    style={{ color: "#f6EDE3" }}
                  >
                    {selectedMember.name}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#998B6D" }}
                  >
                    {selectedMember.role}
                  </p>
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
                {renderProfileContent(selectedMember.fullProfile)}
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
    </section>
  );
};

export default TeamSection;
