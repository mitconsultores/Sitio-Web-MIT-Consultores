// ProcessTimelineSimple.tsx
// React + TSX + TailwindCSS (Vite-ready)
// Horizontal 3-step timeline with baseline and hover effect on numbers (no progress lines).

import React from "react";

type Step = {
  id: number;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Protección Integral",
    description:
      "Salvaguardamos todos sus activos intangibles con estrategias personalizadas",
  },
  {
    id: 2,
    title: "Experiencia Comprobada",
    description:
      "Años de experiencia en registro y defensa de derechos de propiedad intelectual",
  },
  {
    id: 3,
    title: "Asesoría Continua",
    description:
      "Acompañamiento permanente en la gestión y renovación de sus derechos",
  },
];

export function ProcessPropiedadIntelectual() {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <section aria-label="Proceso" className="bg-white w-full px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        {/* Vertical line for mobile */}
        <div
          aria-hidden="true"
          className="absolute left-8 top-0 bottom-0 w-[2px] rounded bg-gray-200 md:hidden"
        />
        
        {/* Horizontal line for desktop */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-0 right-0 top-8 h-[2px] rounded bg-gray-200"
        />

        <ol className="flex flex-col gap-12 md:grid md:grid-cols-3">
          {STEPS.map((step) => {
            const active = hovered === step.id;
            return (
              <li key={step.id} className="relative">
                <div className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0">
                  {/* Circle with number */}
                  <button
                    type="button"
                    onMouseEnter={() => setHovered(step.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(step.id)}
                    onBlur={() => setHovered(null)}
                    className={[
                      "relative z-10 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border bg-white transition-all",
                      "border-gray-300",
                      active ? "shadow-lg shadow-green-100" : "",
                    ].join(" ")}
                    aria-label={`Paso ${step.id}: ${step.title}`}
                  >
                    <span
                      className={[
                        "text-2xl font-semibold",
                        active ? "text-green-700" : "text-gray-800",
                      ].join(" ")}
                    >
                      {step.id}
                    </span>

                    {/* Hover pulse ring */}
                    <span
                      aria-hidden="true"
                      className={[
                        "pointer-events-none absolute inset-0 rounded-full transition-all",
                        active ? "ring-8 ring-green-100 opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  </button>

                  {/* Titles & descriptions */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:mt-4">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-base leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
