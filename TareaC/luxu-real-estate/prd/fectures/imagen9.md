# Prompt de Diseño de Interfaz de Usuario (UI) para Pantalla de Inicio de Sesión

### **Asunto:**
Generar una pantalla de inicio de sesión de UI web limpia, moderna y minimalista para una plataforma de bienes raíces de lujo.

### **Composición y Diseño:**
* **Contenedor Principal:** Un fondo de página completo con un degradado radial muy sutil y suave, que va de un tono menta pálido (#F0F9F6) en el centro a un tono menta blanquecino más claro (#F7FCFA) hacia los bordes.
* **Cuerpo Central:** Todos los elementos deben estar centrados vertical y horizontalmente en la pantalla.
* **Tarjeta de Botones (Modal):** Una tarjeta rectangular flotante con esquinas redondeadas (border-radius: ~16px) y un fondo blanco puro (#FFFFFF). Esta tarjeta debe tener una sombra paralela (box-shadow) muy suave y difusa para darle profundidad sobre el fondo.

### **Elementos Detallados (de arriba a abajo):**

1.  **Icono de la Marca:**
    * Un pequeño recuadro cuadrado redondeado de color verde esmeralda oscuro (p. ej., #0F5A4D).
    * Dentro de este recuadro, un icono minimalista de color blanco que representa una casa estilizada sobre una mano abierta (símbolo de propiedad/cuidado).
2.  **Encabezado:**
    * Texto grande y en negrita (p. ej., tamaño de fuente ~24px, peso de fuente ~700): "Welcome to LuxeEstate".
    * Color del texto: Gris muy oscuro/Casi negro (#1A1D1F).
3.  **Subencabezado:**
    * Texto más pequeño y ligero por debajo (p. ej., tamaño de fuente ~14px): "Unlock exclusive properties worldwide."
    * Color del texto: Gris medio (#6F767E).
4.  **Botones de Autenticación Social (dentro de la tarjeta blanca):**
    * **Botón 1: Google**
        * Estilo: Botón rectangular con bordes muy finos y esquinas redondeadas (~8px).
        * Fondo: Blanco.
        * Icono: Logotipo "G" multicolor oficial de Google a la izquierda.
        * Texto: "Continue with Google" a la derecha del icono.
        * Alineación: Centrada dentro del botón.
    * **Botón 2: GitHub**
        * Estilo: Idéntico al botón 1, con el mismo espacio y bordes.
        * Icono: Logotipo de la "Octocat" de GitHub en negro a la izquierda.
        * Texto: "Continue with GitHub" a la derecha del icono.
        * Alineación: Centrada dentro del botón.
5.  **Enlace de Registro:**
    * Texto debajo de los botones: "Don't have an account?" (en gris medio).
    * Enlace al lado: "Sign up" (en verde esmeralda, igual que el icono de la marca, para que se note que es un enlace clicable).
6.  **Pie de Página (Footer):**
    * Tres enlaces de texto pequeños y discretos en una fila horizontal en la parte inferior de la pantalla: "Privacy Policy", "Terms of Service", "Help Center".
    * Color del texto: Gris medio-claro, muy sutil.

### **Estilo Visual General:**
* **Fuente:** Una tipografía Sans-Serif moderna y limpia (tipo Inter, Roboto, o San Francisco) para toda la interfaz.
* **Espaciado:** Asegurar un espaciado generoso y equilibrado entre todos los elementos (paddings y margins) para evitar el desorden y mantener la sensación de lujo y orden.
* **Acabado:** Profesional, de alta gama, seguro y minimalista.

### **Ejemplo de Código CSS de Referencia (Opcional pero útil):**
```css
/* Para el contenedor de botones */
.auth-card {
    background-color: #FFFFFF;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
}
/* Para los botones */
.btn-social {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E6E8EC;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
}