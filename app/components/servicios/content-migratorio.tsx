export function ContentMigratorio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#57512F] mb-6">Nuestros Servicios</h2>
            <ul className="space-y-4 text-[#666472]">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#57512F] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Visas de trabajo y residencia temporal</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#57512F] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Residencia permanente y naturalización</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#57512F] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trámites corporativos para empresas extranjeras</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#57512F] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Regularización migratoria</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#57512F] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Defensa en procedimientos administrativos migratorios</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#F6EDE3] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#57512F] mb-4">¿Por qué elegirnos?</h3>
            <p className="text-[#666472] mb-6 leading-relaxed">
              Los trámites migratorios pueden ser complejos y consumir mucho tiempo. Nuestro equipo especializado en derecho migratorio facilita el proceso, asegurando que todas las solicitudes se presenten correctamente y en tiempo, para que usted o su empresa puedan operar en México sin contratiempos.
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

