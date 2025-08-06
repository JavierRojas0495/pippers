# 🧪 Prueba del Sistema de Variables Globales

## ✅ ¿Qué se ha actualizado?

### 📋 **Elementos ahora dinámicos en HTML:**

1. **Hero Section (Principal):**
   - `<h1 data-text="company.welcome">` → Título de bienvenida
   - `<p data-text="company.slogan">` → Slogan principal

2. **Sección de Contacto:**
   - `<p data-text="company.vision">` → Texto de visión
   - `<p data-text="company.mission">` → Texto de misión

3. **Sección de Pedidos:**
   - `<h3 data-text="texts.orderTitle">` → "¿Listo para ordenar?"
   - `<p data-text="texts.orderDescription">` → Descripción del pedido
   - `<span data-text="texts.orderButton">` → Texto del botón

4. **Footer:**
   - `<p data-text="texts.copyright">` → Derechos de autor

## 🔧 **Cómo probar:**

### 1. **Prueba del slogan** (tu petición específica):
```javascript
// En js/config.js, cambia la línea 8:
slogan: "¡NUEVO SLOGAN DE PRUEBA! Las mejores pizzas del mundo",
```

**Resultado esperado:** El texto del hero cambiará automáticamente.

### 2. **Prueba del título de bienvenida:**
```javascript
// En js/config.js:
welcome: "¡Hola! Bienvenido a la mejor pizzería!",
```

### 3. **Prueba de la misión:**
```javascript
// En js/config.js:
mission: "NUEVA MISIÓN: Hacer las pizzas más deliciosas del universo",
```

## 📍 **Ubicaciones exactas del slogan en HTML:**

- **Línea 48**: `<p class="hero-eslogan" data-text="company.slogan">`
- **Línea 256**: `<p data-text="texts.orderDescription">` (mención de pizzas artesanales)

## 🎯 **Variables disponibles para modificar:**

### En `company`:
- `name` - Nombre de la empresa
- `slogan` - Slogan principal ⭐ **TU SOLICITUD**
- `welcome` - Título de bienvenida
- `mission` - Texto de misión
- `vision` - Texto de visión

### En `texts`:
- `orderTitle` - Título de la sección de pedidos
- `orderDescription` - Descripción de pedidos
- `orderButton` - Texto del botón
- `copyright` - Derechos de autor

## ⚡ **Instrucciones de prueba rápida:**

1. Abre `js/config.js`
2. Cambia el valor de `slogan` en la línea 8
3. Guarda el archivo
4. Abre `index.html` en el navegador
5. ¡El slogan debería cambiar automáticamente!

## 🔍 **Verificación:**

Si el slogan NO cambia, revisar:
- ¿El archivo `js/config.js` se guardó correctamente?
- ¿Hay errores en la consola del navegador? (F12)
- ¿El navegador está cacheando archivos? (Ctrl+F5 para recargar sin caché)

---

**✨ ¡Ahora TODOS los textos importantes se pueden cambiar desde un solo archivo!**