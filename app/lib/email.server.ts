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
        return `<li style="padding: 8px 0; padding-left: 24px; position: relative; font-size: 15px; color: #333333;">
          <span style="position: absolute; left: 0; color: #57462f;">•</span>
          ${serviceNames[service] || service}
        </li>`;
      })
      .join('');

    // Create HTML email content using site colors
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #F6EDE3; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border: 1px solid #998B6D;">
            <!-- Header -->
            <div style="background-color: #57462f; color: #F6EDE3; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px; color: #F6EDE3;">Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #F6EDE3; opacity: 0.9;">MIT Consultores</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px; background-color: #ffffff;">
              <!-- Información del Cliente -->
              <div style="margin-bottom: 35px;">
                <h2 style="color: #57462f; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; padding-bottom: 12px; border-bottom: 2px solid #998B6D;">
                  Información del Cliente
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #57462f; width: 35%; vertical-align: top;">Nombre:</td>
                    <td style="padding: 12px 0; color: #333333; font-size: 15px;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #57462f; vertical-align: top;">Email:</td>
                    <td style="padding: 12px 0;">
                      <a href="mailto:${data.email}" style="color: #57462f; text-decoration: none; font-size: 15px;">${data.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #57462f; vertical-align: top;">Teléfono:</td>
                    <td style="padding: 12px 0;">
                      <a href="tel:${data.phonePrefix}${data.phone}" style="color: #57462f; text-decoration: none; font-size: 15px;">${data.phonePrefix} ${data.phone}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Servicios de Interés -->
              <div style="margin-bottom: 35px;">
                <h2 style="color: #57462f; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; padding-bottom: 12px; border-bottom: 2px solid #998B6D;">
                  Servicios de Interés
                </h2>
                <ul style="margin: 0; padding-left: 0; list-style: none; color: #333333;">
                  ${servicesList}
                </ul>
              </div>

              <!-- Mensaje -->
              <div style="margin-bottom: 35px;">
                <h2 style="color: #57462f; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; padding-bottom: 12px; border-bottom: 2px solid #998B6D;">
                  Mensaje
                </h2>
                <div style="background-color: #F6EDE3; padding: 20px; border-radius: 6px; border-left: 4px solid #57462f; white-space: pre-wrap; color: #333333; font-size: 15px; line-height: 1.7;">
${data.message}
                </div>
              </div>

              <!-- Footer -->
              <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid #998B6D; text-align: center;">
                <p style="margin: 0; color: #998B6D; font-size: 13px; line-height: 1.6;">
                  Este mensaje fue enviado desde el formulario de contacto de<br>
                  <strong style="color: #57462f;">MIT Consultores</strong>
                </p>
                <p style="margin: 8px 0 0 0; color: #998B6D; font-size: 12px;">
                  ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City', dateStyle: 'long', timeStyle: 'short' })}
                </p>
              </div>
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
Teléfono: ${data.phonePrefix} ${data.phone}

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

