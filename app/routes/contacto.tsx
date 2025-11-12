import { Contact } from "~/components/contacto";

export function meta() {
  return [
    { title: "Contacto - MIT Consultores" },
    { name: "description", content: "Ponte en contacto con MIT Consultores" },
  ];
}

export default function ContactoPage() {
  return (
    <>
      <Contact />
    </>
  );
}

