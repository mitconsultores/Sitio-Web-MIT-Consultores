export function HeroHeadhunter() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-b from-[#57512F] to-[#3d3725] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#998B6D] rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#998B6D] rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Servicio de Head Hunter
        </h1>
        <p className="text-xl md:text-2xl text-[#E8DCC8] mb-8 leading-relaxed">
          Búsqueda especializada del talento idóneo para las necesidades de su empresa.
        </p>
      </div>
    </section>
  );
}
