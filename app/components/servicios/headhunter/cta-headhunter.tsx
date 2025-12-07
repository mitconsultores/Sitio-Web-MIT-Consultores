import { useNavigate } from "react-router";

export function CtaHeadhunter() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-[#57512F] to-[#3d3725] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Necesita nuestro servicio?
        </h2>
        <p className="text-lg text-[#E8DCC8] mb-8 max-w-2xl mx-auto">
          Ponte en contacto con nosotros para más información.
        </p>
        <button
          onClick={() => navigate("/contacto")}
          className="px-8 py-3 bg-[#998B6D] hover:bg-[#B3A583] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
}
