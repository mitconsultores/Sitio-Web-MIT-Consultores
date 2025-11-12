export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Un Distinguido Despacho Jurídico en el Corazón de la Ciudad de México
        </h1>
        <p className="text-xl md:text-2xl text-[#F6EDE3] max-w-4xl leading-relaxed">
          Especializados en derecho corporativo, migratorio y propiedad intelectual
        </p>
      </div>
    </section>
  );
}

