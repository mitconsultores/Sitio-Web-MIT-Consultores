# Configuración del Formulario de Contacto

## ✅ Implementación Completada

El formulario de contacto ha sido completamente configurado con:

### 🔒 Seguridad y Validación
- **Sanitización de inputs**: Todos los campos son limpiados para prevenir XSS
- **Validación de emails**: Regex robusto que valida formato RFC 5321
- **Validación de teléfonos**: Acepta formatos mexicanos de 10-15 dígitos
- **Límites de caracteres**: Nombre (2-100), mensaje (10-2000)
- **Honeypot field**: Campo oculto para detectar bots
- **Timestamp validation**: Previene envíos instantáneos (< 3 segundos)
- **Server delay**: Delay artificial de 1 segundo para prevenir spam

### 📧 Resend Integration
- Email profesional con formato HTML
- Copia en texto plano para compatibilidad
- Reply-to configurado al email del cliente
- Plantilla responsive y moderna

### ⚙️ Características
- Estado de carga con feedback visual
- Mensajes de éxito/error
- Reset automático del formulario
- Validación tanto cliente como servidor
- Optimizado para Vercel serverless

## 🚀 Configuración Requerida

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# Resend API Key (Obligatorio)
# Obtén tu API key desde: https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email desde el cual enviar (Opcional)
# Para desarrollo: onboarding@resend.dev
# Para producción: usa tu dominio verificado
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### 2. Configurar Resend

1. **Crear cuenta**: Ve a [resend.com](https://resend.com) y crea una cuenta
2. **Generar API Key**: 
   - Accede a [API Keys](https://resend.com/api-keys)
   - Click en "Create API Key"
   - Dale un nombre descriptivo (ej: "MIT Consultores Production")
   - Copia la key generada
3. **Agregar al .env**: Pega la key en tu archivo `.env`
4. **Verificar dominio** (Para producción):
   - Ve a [Domains](https://resend.com/domains)
   - Agrega tu dominio (ej: mitconsultores.com)
   - Configura los registros DNS según las instrucciones
   - Una vez verificado, actualiza `RESEND_FROM_EMAIL=contacto@mitconsultores.com`

### 3. Desplegar en Vercel

1. **Agregar variables de entorno**:
   - Ve a tu proyecto en [Vercel Dashboard](https://vercel.com)
   - Settings → Environment Variables
   - Agrega `RESEND_API_KEY` con tu key
   - Agrega `RESEND_FROM_EMAIL` si usas un dominio personalizado
   
2. **Redeploy**: 
   ```bash
   git push
   ```
   O redeploy manual desde Vercel

## 📁 Archivos Creados/Modificados

### Nuevos Archivos
- `app/lib/validation.server.ts` - Validación y sanitización
- `app/lib/rate-limit.server.ts` - Protección anti-bot para serverless
- `app/lib/email.server.ts` - Servicio de email con Resend
- `ENV_SETUP.md` - Guía de configuración de variables
- `SETUP_CONTACTO.md` - Este archivo

### Archivos Modificados
- `app/routes/contacto.tsx` - Action agregado para procesar formulario
- `app/components/contacto/form-contacto.tsx` - Formulario con validación y estado
- `app/ui/button.tsx` - Agregado prop `disabled`
- `package.json` - Agregada dependencia `resend`

## 🧪 Testing

### En Desarrollo
```bash
npm run dev
```

Navega a `/contacto` y prueba:
1. ✅ Envío exitoso con datos válidos
2. ❌ Validación de campos requeridos
3. ❌ Validación de formato de email
4. ❌ Validación de teléfono
5. ❌ Envío muy rápido (< 3 segundos)
6. ✅ Estados de carga

### En Producción
1. Envía un formulario de prueba
2. Verifica que llegue a `m.islas@aiconsultores.mx`
3. Revisa el formato del email
4. Prueba el botón "reply-to"

## 🔍 Troubleshooting

### "Email service is not properly configured"
- Verifica que `RESEND_API_KEY` esté configurada en `.env`
- Reinicia el servidor de desarrollo

### "Failed to send email"
- Verifica que tu API key sea válida
- Revisa los logs de Resend: [resend.com/logs](https://resend.com/logs)
- Verifica que no hayas excedido el límite gratuito (100 emails/día)

### El formulario no se resetea
- Esto es normal si hay errores de validación
- Solo se resetea cuando el envío es exitoso

### Los emails no llegan
- Revisa la carpeta de spam
- Verifica que `m.islas@aiconsultores.mx` sea el correcto
- Para cambiar el destinatario, edita `app/lib/email.server.ts` línea 5

## 📊 Límites del Plan Gratuito de Resend

- ✉️ **100 emails por día**
- 📧 **3,000 emails por mes**
- 🚀 Para más volumen, considera upgrading al plan Pro

## 🎨 Personalización

### Cambiar el destinatario
Edita `app/lib/email.server.ts`:
```typescript
const RECIPIENT_EMAIL = 'tu-email@ejemplo.com';
```

### Cambiar el remitente
Actualiza `.env`:
```bash
RESEND_FROM_EMAIL=contacto@tudominio.com
```

### Personalizar el template del email
Edita el `htmlContent` en `app/lib/email.server.ts` (línea 40+)

### Ajustar validaciones
Modifica las funciones en `app/lib/validation.server.ts`

## ✨ Próximos Pasos Opcionales

- [ ] Agregar Google reCAPTCHA para mayor seguridad
- [ ] Implementar rate limiting con Vercel KV (plan pro)
- [ ] Agregar confirmación por email al cliente
- [ ] Integrar con CRM (HubSpot, Salesforce, etc.)
- [ ] Analytics de conversión de formularios

