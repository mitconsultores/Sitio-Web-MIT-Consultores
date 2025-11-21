import { Resend } from 'resend';
import type { ContactFormData } from './validation.server';

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = 'm.islas@aiconsultores.mx';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export interface SendContactEmailParams {
  data: ContactFormData;
}

export interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Sends a contact form email using Resend
 */
export async function sendContactEmail({ data }: SendContactEmailParams): Promise<EmailResult> {
  try {
    // Validate that Resend is properly configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return {
        success: false,
        error: 'Email service is not properly configured',
      };
    }

    // Prepare service list as HTML
    const servicesList = data.services
      .map(service => {
        const serviceNames: Record<string, string> = {
          'corporativo': 'Derecho Corporativo',
          'propiedad-intelectual': 'Propiedad Intelectual',
          'migratorio': 'Derecho Migratorio',
          'otro': 'Otro',
        };
        return `<li style="margin: 5px 0;">${serviceNames[service] || service}</li>`;
      })
      .join('');

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #171b0b 0%, #57462f 100%); color: #F6EDE3; padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 25px;">
              <h2 style="color: #57462f; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #F6EDE3; padding-bottom: 10px;">
                Información del Cliente
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: 600; color: #57462f; width: 30%;">Nombre:</td>
                  <td style="padding: 10px 0;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: 600; color: #57462f;">Email:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #57462f;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: 600; color: #57462f;">Teléfono:</td>
                  <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #57462f;">${data.phone}</a></td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom: 25px;">
              <h2 style="color: #57462f; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #F6EDE3; padding-bottom: 10px;">
                Servicios de Interés
              </h2>
              <ul style="margin: 0; padding-left: 20px; color: #333;">
                ${servicesList}
              </ul>
            </div>

            <div style="margin-bottom: 25px;">
              <h2 style="color: #57462f; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #F6EDE3; padding-bottom: 10px;">
                Mensaje
              </h2>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #57462f; white-space: pre-wrap;">
${data.message}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de MIT Consultores</p>
              <p style="margin: 5px 0 0 0;">Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Create plain text version
    const textContent = `
Nuevo Mensaje de Contacto - MIT Consultores

INFORMACIÓN DEL CLIENTE
=======================
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}

SERVICIOS DE INTERÉS
====================
${data.services.map(s => `- ${s}`).join('\n')}

MENSAJE
=======
${data.message}

---
Enviado el: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}
    `.trim();

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `Nuevo Contacto: ${data.name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Failed to send email',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}

