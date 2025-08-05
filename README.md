# 🍕 Piper's Pizza - Sitio Web Optimizado

Sitio web moderno y optimizado para Piper's Pizza, una pizzería artesanal con las mejores pizzas de la región.

## 📁 Estructura del Proyecto

```
Pizzeria/
├── 📁 css/                    # Estilos CSS modularizados
│   ├── variables.css         # Variables CSS globales
│   ├── base.css             # Estilos base y reset
│   ├── main.css             # Archivo principal que importa todos los módulos
│   ├── header.css           # Estilos del header/navegación
│   ├── hero.css             # Estilos de la sección hero
│   ├── menu.css             # Estilos del menú y productos
│   ├── carousel.css         # Estilos de carruseles
│   ├── forms.css            # Estilos de formularios
│   ├── buttons.css          # Estilos de botones
│   ├── footer.css           # Estilos del footer
│   └── responsive.css       # Media queries y responsive design
├── 📁 js/                    # JavaScript modularizado
│   ├── main.js              # Archivo principal de la aplicación
│   ├── utils.js             # Utilidades y funciones helper
│   ├── carousel.js          # Módulo de carruseles
│   └── orders.js            # Sistema de pedidos y carrito
├── 📁 data/                  # Datos del sitio
│   └── menu.js              # Datos del menú y productos
├── 📁 components/            # Componentes reutilizables
├── 📁 assets/                # Assets optimizados
├── 📁 img/                   # Imágenes del sitio
├── index.html               # Página principal
├── styles.css               # CSS original (legacy)
├── script.js                # JavaScript original (legacy)
└── README.md                # Documentación
```

## 🚀 Características

### ✨ Optimizaciones Implementadas

1. **Modularización CSS**
   - Variables CSS centralizadas
   - Estilos organizados por componentes
   - Sistema de utilidades CSS
   - Responsive design mejorado

2. **JavaScript Modular**
   - Arquitectura orientada a objetos
   - Separación de responsabilidades
   - Sistema de carrito de compras mejorado
   - Carruseles optimizados con touch support

3. **Datos Centralizados**
   - Menú y productos en archivo separado
   - Fácil mantenimiento y actualización
   - Estructura de datos consistente

4. **Performance**
   - Código optimizado y minificado
   - Lazy loading de imágenes
   - Debounce y throttle en eventos
   - Manejo eficiente del DOM

### 🎯 Funcionalidades Principales

- **Menú Interactivo**: Sistema de pedidos con personalización
- **Carruseles**: Promociones y galerías de imágenes
- **Carrito de Compras**: Gestión de pedidos con localStorage
- **WhatsApp Integration**: Envío directo de pedidos
- **Responsive Design**: Optimizado para todos los dispositivos
- **Navegación Suave**: Transiciones fluidas entre secciones

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones
- **JavaScript ES6+**: Módulos, Clases, Arrow Functions
- **LocalStorage**: Persistencia de datos del carrito
- **Intersection Observer**: Navegación activa automática

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Móviles**: 320px - 600px
- 📱 **Tablets**: 601px - 900px
- 💻 **Desktop**: 901px+

## 🎨 Sistema de Diseño

### Colores
- **Azul Principal**: #31428B
- **Beige**: #F4EFDD
- **Dorado**: #ffd700
- **Negro**: #010001

### Tipografía
- **Títulos**: Baloo 2 (Google Fonts)
- **Cuerpo**: Segoe UI, Arial, sans-serif

### Espaciado
- Sistema de espaciado consistente (4px, 8px, 16px, 24px, 32px, 48px)

## 🔧 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd Pizzeria
   ```

2. **Abrir en el navegador**
   ```bash
   # Usar un servidor local para desarrollo
   python -m http.server 8000
   # o
   npx serve .
   ```

3. **Acceder al sitio**
   ```
   http://localhost:8000
   ```

## 📝 Mantenimiento

### Actualizar Menú
Editar `data/menu.js` para modificar:
- Precios
- Sabores
- Productos
- Información de contacto

### Agregar Estilos
1. Crear nuevo archivo en `css/`
2. Importar en `css/main.css`
3. Usar variables CSS para consistencia

### Agregar Funcionalidad
1. Crear módulo en `js/`
2. Importar en `js/main.js`
3. Seguir patrones establecidos

## 🚀 Optimizaciones Futuras

- [ ] **PWA**: Progressive Web App
- [ ] **Service Worker**: Caché offline
- [ ] **Lazy Loading**: Carga diferida de imágenes
- [ ] **Compresión**: Minificación automática
- [ ] **CDN**: Distribución de contenido
- [ ] **Analytics**: Métricas de usuario
- [ ] **SEO**: Optimización para motores de búsqueda

## 📞 Contacto

- **WhatsApp**: 320 718 2705
- **Instagram**: @piperspizza01
- **TikTok**: @pipers.pizza3
- **Dirección**: Cl. 55A #47-08, Navarro, Cali

## 📄 Licencia

© 2025 Piper's Pizza. Todos los derechos reservados.

---

**Desarrollado con ❤️ para las mejores pizzas artesanales** 