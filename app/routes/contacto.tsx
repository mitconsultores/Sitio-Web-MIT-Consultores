import { Contact } from "~/components/contacto";
import { validateContactForm } from "~/lib/validation.server";
import { sendContactEmail } from "~/lib/email.server";
import { validateBotProtection, serverDelay } from "~/lib/rate-limit.server";
import type { Route } from "./+types/contacto";

export function meta() {
  return [
    { title: "Contacto | MIT Consultores" },
    { name: "description", content: "Contacta con MIT Consultores para asesoría legal profesional. Comunícate con nuestro despacho jurídico en México para consultar sobre servicios legales especializados." },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  // Bot protection checks
  if (!validateBotProtection(formData)) {
    return {
      success: false,
      errors: { _form: 'Solicitud inválida. Por favor intenta nuevamente.' },
    };
  }

  // Add artificial delay to prevent rapid submissions (even in serverless)
  await serverDelay(1000);

  // Validate form data
  const validation = validateContactForm(formData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  // Send email
  const emailResult = await sendContactEmail({ data: validation.data! });

  if (!emailResult.success) {
    return {
      success: false,
      errors: { _form: 'Error al enviar el mensaje. Por favor intenta nuevamente más tarde.' },
    };
  }

  return {
    success: true,
    message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.',
  };
}

export default function ContactoPage() {
  return (
    <>
      <Contact />
    </>
  );
}

