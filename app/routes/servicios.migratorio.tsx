import { HeroMigratorio, ContentMigratorio, CardsMigratorio, ProcessMigratorio, CTAMigratorio } from "~/components/servicios";

export function meta() {
  return [
    { title: "Derecho Migratorio | MIT Consultores" },
    { name: "description", content: "Asesoría especializada en trámites migratorios para personas y empresas. MIT Consultores facilita visas, residencia y cumplimiento normativo migratorio en México." },
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

