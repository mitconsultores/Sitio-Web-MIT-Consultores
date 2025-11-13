import { Contact } from "~/components/contacto";

export function meta() {
  return [
    { title: "Contacto | MIT Consultores" },
    { name: "description", content: "Contacta con MIT Consultores para asesoría legal profesional. Comunícate con nuestro despacho jurídico en México para consultar sobre servicios legales especializados." },
  ];
}

export default function ContactoPage() {
  return (
    <>
      <Contact />
    </>
  );
}

