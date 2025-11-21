/**
 * Rate limiting for Vercel serverless environment
 * Since we don't have persistent memory, we use request-level checks
 * and honeypot fields to prevent bot spam
 */

/**
 * Adds an artificial delay to prevent rapid-fire requests
 * This provides basic protection even in serverless environments
 */
export async function serverDelay(ms: number = 1000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Validates that the request doesn't look like a bot
 */
export function validateBotProtection(formData: FormData): boolean {
  // Check for honeypot field (should be empty)
  const honeypot = formData.get('website')?.toString() || '';
  if (honeypot.length > 0) {
    return false; // Bot detected
  }

  // Check for submission timestamp (should take at least 3 seconds to fill)
  const timestamp = formData.get('timestamp')?.toString() || '';
  if (timestamp) {
    const submissionTime = parseInt(timestamp, 10);
    const now = Date.now();
    const timeTaken = now - submissionTime;
    
    // If form was filled in less than 3 seconds, likely a bot
    if (timeTaken < 3000) {
      return false;
    }
    
    // If timestamp is more than 1 hour old, reject (form was left open too long)
    if (timeTaken > 60 * 60 * 1000) {
      return false;
    }
  }

  return true;
}

/**
 * Get client identifier from request
 * Uses multiple fallbacks to identify the client
 */
export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers (Vercel specific)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const vercelIp = request.headers.get('x-vercel-forwarded-for');
  
  const ip = vercelIp || forwarded?.split(',')[0] || realIp || 'unknown';
  
  return ip;
}

