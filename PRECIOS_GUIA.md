# 🏷️ Guía del Sistema de Precios Variables - Piper's Pizza

## 📋 Descripción

Este sistema permite modificar todos los precios de la pizzería desde un solo archivo (`css/precios.css`), sin necesidad de editar múltiples archivos HTML o JavaScript.

## 🎯 Beneficios

- ✅ **Centralización**: Todos los precios en un solo lugar
- ✅ **Facilidad**: Cambiar precios sin tocar código
- ✅ **Consistencia**: Precios sincronizados en toda la aplicación
- ✅ **Mantenimiento**: Actualizaciones rápidas y sin errores

## 📁 Archivos del Sistema

### 1. `css/precios.css`
Archivo principal con todas las variables de precios organizadas por categorías.

### 2. `script.js`
Contiene las funciones para leer las variables CSS y aplicarlas dinámicamente.

### 3. `index.html`
Los precios se muestran automáticamente desde las variables CSS.

## 🏷️ Variables de Precios Disponibles

### 🍕 Pizzas

#### Pizza Especial (Clásicas)
```css
--precio-pizza-especial-personal: 9000;
--precio-pizza-especial-pequena: 15000;
--precio-pizza-especial-mediana: 23000;
--precio-pizza-especial-grande: 29000;
--precio-pizza-especial-extragrande: 36000;
```

#### Pizza La Carnívora (Especiales)
```css
--precio-pizza-carnivora-personal: 10000;
--precio-pizza-carnivora-pequena: 17000;
--precio-pizza-carnivora-mediana: 25000;
--precio-pizza-carnivora-grande: 31000;
--precio-pizza-carnivora-extragrande: 39000;
```

#### Pizza Detodito (Premium)
```css
--precio-pizza-detodito-personal: 11000;
--precio-pizza-detodito-pequena: 18000;
--precio-pizza-detodito-mediana: 26000;
--precio-pizza-detodito-grande: 33000;
--precio-pizza-detodito-extragrande: 42000;
```

### 🍝 Otros Productos

#### Lasañas
```css
--precio-lasana-pequena: 9000;
--precio-lasana-grande: 18000;
```

#### Pizza Pantalone
```css
--precio-pantalone-pequena: 9000;
--precio-pantalone-grande: 19000;
```

#### Desgranados
```css
--precio-desgranado-maiz: 9000;
--precio-desgranado-maduro: 9000;
```

### 🥤 Bebidas

#### Jugos Naturales
```css
--precio-jugo-agua: 5000;
--precio-jugo-leche: 6000;
```

#### Limonadas
```css
--precio-limonada: 8000;
```

#### Gaseosas
```css
--precio-gaseosa-personal: 3000;
--precio-gaseosa-1-5l: 6500;
```

### 🎉 Promociones
```css
--precio-combo-familiar: 55000;
```

## 🔧 Cómo Modificar Precios

### Paso 1: Abrir el archivo de precios
```bash
# Editar el archivo css/precios.css
```

### Paso 2: Modificar el valor deseado
```css
/* Ejemplo: Aumentar el precio de pizza personal especial */
--precio-pizza-especial-personal: 9500; /* Cambiar de 9000 a 9500 */
```

### Paso 3: Guardar y verificar
Los cambios se aplican automáticamente al recargar la página.

## 📱 Precios Responsive (Opcional)

Puedes definir precios diferentes para dispositivos móviles:

```css
@media (max-width: 600px) {
  :root {
    /* Precios reducidos para móviles */
    --precio-pizza-especial-personal: 8500;
    --precio-pizza-especial-pequena: 14000;
  }
}
```

## 🔄 Funciones JavaScript

### `obtenerPrecioCSS(variable)`
Obtiene el valor de una variable CSS específica.

### `obtenerPreciosDesdeCSS()`
Obtiene todos los precios de pizzas y productos desde las variables CSS.

### `obtenerBebidasDesdeCSS()`
Obtiene todos los precios de bebidas desde las variables CSS.

### `actualizarPreciosHTML()`
Actualiza dinámicamente los precios mostrados en el HTML.

### `actualizarPreciosDinamicos()`
Actualiza tanto el HTML como los datos JavaScript.

## 🚀 Ejemplos de Uso

### Aumentar todos los precios en un 10%
```css
/* Multiplicar cada precio por 1.1 */
--precio-pizza-especial-personal: 9900;  /* 9000 * 1.1 */
--precio-pizza-especial-pequena: 16500;  /* 15000 * 1.1 */
--precio-pizza-especial-mediana: 25300;  /* 23000 * 1.1 */
--precio-pizza-especial-grande: 31900;   /* 29000 * 1.1 */
--precio-pizza-especial-extragrande: 39600; /* 36000 * 1.1 */
```

### Crear una promoción temporal
```css
/* Reducir precios para promoción */
--precio-pizza-especial-personal: 8000;  /* 20% descuento */
--precio-pizza-especial-pequena: 12000;  /* 20% descuento */
```

### Ajustar precios por región
```css
/* Precios para diferentes ciudades */
@media (min-width: 1200px) {
  :root {
    --precio-pizza-especial-personal: 9500;  /* Precios más altos en ciudades grandes */
  }
}
```

## ⚠️ Consideraciones Importantes

1. **Formato de números**: Usar solo números enteros (sin puntos ni comas)
2. **Backup**: Hacer copia de seguridad antes de cambios masivos
3. **Pruebas**: Verificar que todos los precios se muestren correctamente
4. **Consistencia**: Mantener la lógica de precios (personal < pequeña < mediana, etc.)

## 🐛 Solución de Problemas

### Los precios no se actualizan
1. Verificar que el archivo `css/precios.css` esté enlazado en `index.html`
2. Recargar la página completamente (Ctrl+F5)
3. Verificar la consola del navegador para errores

### Precios se muestran como $0
1. Verificar que las variables CSS estén definidas correctamente
2. Verificar que no haya errores de sintaxis en el CSS
3. Verificar que los nombres de variables coincidan exactamente

### Precios no se formatean correctamente
1. Verificar que la función `actualizarPreciosHTML()` se ejecute
2. Verificar que los elementos tengan el atributo `data-precio` correcto

## 📞 Soporte

Para dudas o problemas con el sistema de precios, revisar:
1. La consola del navegador (F12)
2. Los logs de JavaScript
3. La documentación técnica del proyecto

---

**¡Con este sistema, modificar precios nunca fue tan fácil! 🎉** 