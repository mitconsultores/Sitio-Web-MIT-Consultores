// Utility functions for server-side validation and sanitization

/**
 * Sanitizes a string by trimming whitespace and removing potential XSS attempts
 */
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent basic HTML injection
    .slice(0, 1000); // Limit length
}

/**
 * Validates email format using a robust regex
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254; // RFC 5321
}

/**
 * Validates phone number (basic validation for Mexican format)
 */
export function isValidPhone(phone: string): boolean {
  // Remove spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Allow 10-15 digits
  return /^\d{10,15}$/.test(cleaned);
}

/**
 * Validates that a string has content and meets minimum requirements
 */
export function isValidText(text: string, minLength: number = 2, maxLength: number = 1000): boolean {
  const sanitized = sanitizeString(text);
  return sanitized.length >= minLength && sanitized.length <= maxLength;
}

/**
 * Validates service selection
 */
export function isValidService(service: string): boolean {
  const validServices = ['corporativo', 'propiedad-intelectual', 'migratorio', 'otro'];
  return validServices.includes(service);
}

/**
 * Sanitizes and validates form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

export interface ValidationResult {
  success: boolean;
  data?: ContactFormData;
  errors?: Record<string, string>;
}

export function validateContactForm(formData: FormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Extract and sanitize data
  const name = sanitizeString(formData.get('name')?.toString() || '');
  const email = sanitizeString(formData.get('email')?.toString() || '');
  const phone = sanitizeString(formData.get('phone')?.toString() || '');
  const message = sanitizeString(formData.get('message')?.toString() || '');
  const services = formData.getAll('services').map(s => sanitizeString(s.toString()));

  // Validate name
  if (!isValidText(name, 2, 100)) {
    errors.name = 'El nombre debe tener entre 2 y 100 caracteres';
  }

  // Validate email
  if (!isValidEmail(email)) {
    errors.email = 'Por favor ingresa un correo electrónico válido';
  }

  // Validate phone
  if (!isValidPhone(phone)) {
    errors.phone = 'Por favor ingresa un número de teléfono válido';
  }

  // Validate services
  const validServices = services.filter(isValidService);
  if (validServices.length === 0) {
    errors.services = 'Por favor selecciona al menos un servicio';
  }

  // Validate message
  if (!isValidText(message, 10, 2000)) {
    errors.message = 'El mensaje debe tener entre 10 y 2000 caracteres';
  }

  // Return result
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      email,
      phone,
      services: validServices,
      message,
    },
  };
}

