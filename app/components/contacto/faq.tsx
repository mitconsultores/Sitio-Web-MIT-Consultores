// File: src/components/FAQ.tsx
// Description: FAQ component with categories for MIT Consultores
// Tech: React + TailwindCSS + Framer Motion

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    category: "Servicios Legales",
    items: [
      {
        question: "¿En qué áreas del derecho se especializan?",
        answer: "Nos especializamos en derecho corporativo, propiedad intelectual y derecho migratorio. Ofrecemos asesoría integral para empresas y particulares en estas áreas."
      },
      {
        question: "¿Trabajan con empresas internacionales?",
        answer: "Sí, tenemos experiencia asesorando empresas multinacionales y brindamos servicios en inglés y español. Conocemos las regulaciones mexicanas e internacionales."
      },
      {
        question: "¿Ofrecen servicios de consultoría preventiva?",
        answer: "Definitivamente. Nuestro enfoque preventivo ayuda a evitar problemas legales antes de que ocurran, ahorrándote tiempo y costos."
      }
    ]
  },
  {
    category: "Proceso y Consultas",
    items: [
      {
        question: "¿Cómo funciona el proceso de una consulta?",
        answer: "La primera consulta es gratuita y nos permite entender tu situación. Posteriormente, evaluamos el caso y te presentamos un plan de acción con honorarios claros."
      },
      {
        question: "¿Cuánto tiempo toma resolver un caso típico?",
        answer: "Los tiempos varían según la complejidad. Un trámite corporativo puede tomar 1-2 semanas, mientras que casos migratorios pueden extenderse a varios meses dependiendo de las autoridades."
      },
      {
        question: "¿Qué documentación necesito para iniciar un trámite?",
        answer: "Depende del servicio específico. Para corporativo necesitamos estatutos y documentos de identidad; para migratorio, pasaporte y documentos personales; para propiedad intelectual, especificaciones técnicas y certificados."
      }
    ]
  },
  {
    category: "Honorarios y Pagos",
    items: [
      {
        question: "¿Cómo determinan sus honorarios?",
        answer: "Trabajamos con honorarios fijos por trámite o por hora, dependiendo de la complejidad. Siempre transparentes y sin costos ocultos."
      },
      {
        question: "¿Ofrecen planes de pago o financiamiento?",
        answer: "Sí, ofrecemos planes de pago flexibles para casos de mayor complejidad. Podemos dividir los honorarios según las etapas del proceso."
      },
      {
        question: "¿Emiten facturas fiscales?",
        answer: "Por supuesto. Emitimos facturas electrónicas CFDI con todos los requisitos fiscales. Solo necesitamos tus datos fiscales completos."
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const faqItemVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F6EDE3] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-[#F6EDE3]/90">
            Encuentra respuestas rápidas a las dudas más comunes
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {FAQ_DATA.map((category, index) => (
            <motion.button
              key={index}
              variants={categoryVariants}
              onClick={() => {
                setSelectedCategory(index);
                setExpandedFaq(null);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all ${
                selectedCategory === index
                  ? 'bg-[#57462f] border border-[#998B6D] text-[#F6EDE3] shadow-lg'
                  : 'bg-[#171b0b]/60 border border-[#998B6D]/50 text-[#F6EDE3]/80 hover:bg-[#57462f]/70 hover:text-[#F6EDE3]'
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="bg-gradient-to-br from-[#171b0b] to-[#57462f] border border-[#998B6D]/30 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-2"
              >
                {FAQ_DATA[selectedCategory].items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-b border-[#998B6D]/20 last:border-0 overflow-hidden"
                  >
                    <motion.button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      whileHover={{ x: 4 }}
                      className="w-full flex items-center justify-between py-5 text-left hover:text-[#F6EDE3]/90 transition-colors duration-200 group cursor-pointer"
                    >
                      <span className="text-[#F6EDE3] font-medium pr-4">{item.question}</span>
                      <motion.div
                        animate={{
                          rotate: expandedFaq === index ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <FaPlus
                          className="text-[#F6EDE3]/80 flex-shrink-0 group-hover:text-[#F6EDE3]"
                        />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          variants={faqItemVariants}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="text-[#F6EDE3]/80 pb-5 text-sm leading-relaxed"
                          >
                            {item.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

