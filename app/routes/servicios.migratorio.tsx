import { HeroMigratorio, ContentMigratorio, CardsMigratorio, ProcessMigratorio, CTAMigratorio } from "~/components/servicios";

export function meta() {
  return [
    { title: "Derecho Migratorio - MIT Consultores" },
    { name: "description", content: "Asesoría integral en trámites migratorios para personas y empresas" },
  ];
}

export default function MigratorioPage() {
  return (
    <div>
      <HeroMigratorio />
      <CardsMigratorio />
      <ContentMigratorio />
      <ProcessMigratorio />
      <CTAMigratorio />
    </div>
  );
}

