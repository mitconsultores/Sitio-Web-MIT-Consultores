export function ContentCorporativo() {
  return (
    <section className="py-20 bg-[#171b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#f6EDE3] mb-6">Nuestros Servicios</h2>
            <ul className="space-y-4 text-[#f6EDE3]">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f6EDE3] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Constitución y registro de sociedades</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f6EDE3] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Gobierno corporativo y cumplimiento normativo</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f6EDE3] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fusiones y adquisiciones</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f6EDE3] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Contratos comerciales y acuerdos corporativos</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f6EDE3] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Reestructuraciones corporativas</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#F6EDE3] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#57512F] mb-4">¿Por qué elegirnos?</h3>
            <p className="text-[#666472] mb-6 leading-relaxed">
              Contamos con un equipo de especialistas en derecho corporativo con amplia experiencia en el mercado mexicano e internacional. Nuestro enfoque personalizado nos permite entender las necesidades específicas de cada cliente y ofrecer soluciones efectivas.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-[#57512F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#998B6D] transition-colors"
            >
              Solicitar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

