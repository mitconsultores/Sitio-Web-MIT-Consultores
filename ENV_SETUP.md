# Configuración de Variables de Entorno

Para que el formulario de contacto funcione correctamente, necesitas configurar las siguientes variables de entorno.

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```bash
# Resend API Configuration
# Obtén tu API key desde https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email desde el cual se enviarán los mensajes (debe ser un dominio verificado en Resend)
# Para desarrollo, puedes usar: onboarding@resend.dev
# Para producción, usa tu propio dominio: contacto@mitconsultores.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

## Pasos para configurar Resend:

1. Crea una cuenta en [Resend](https://resend.com)
2. Ve a [API Keys](https://resend.com/api-keys) y crea una nueva API key
3. Copia la API key y pégala en tu archivo `.env`
4. Para producción, verifica tu dominio en Resend para poder enviar desde tu email personalizado

