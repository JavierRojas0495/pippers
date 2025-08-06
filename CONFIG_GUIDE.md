# 📋 Guía de Configuración Global - Piper's Pizza

## 🎯 ¿Qué es el sistema de configuración global?

Este sistema permite centralizar toda la información de contacto, horarios, redes sociales y otros datos importantes en un solo archivo, facilitando las actualizaciones sin necesidad de modificar múltiples archivos HTML.

## 📁 Archivos principales

### 1. `js/config.js` - Archivo de configuración principal
Contiene todas las variables globales organizadas por categorías.

### 2. `script.js` - Cargador de configuración
Se encarga de cargar las variables y aplicarlas dinámicamente al HTML.

## ⚙️ Cómo funciona

1. **Carga automática**: Al cargar la página, el sistema importa la configuración desde `js/config.js`
2. **Aplicación dinámica**: Actualiza automáticamente todos los elementos del HTML con los datos configurados
3. **Fallback**: Si no puede cargar la configuración, usa valores por defecto

## 🔧 Variables principales que puedes modificar

### 📞 Información de contacto
```javascript
company: {
    name: "Piper's Pizza",
    phone: "+57 320 718 2705",
    address: "Cl. 55A #47-08, Navarro, Cali, Valle del Cauca",
    whatsapp: "573207182705",
    mapsUrl: "https://maps.app.goo.gl/dWiA2RXapeMZohcBA"
}
```

### 🌐 Redes sociales
```javascript
social: {
    whatsapp: {
        number: "573207182705",
        url: "https://wa.me/573207182705"
    },
    instagram: {
        username: "@piperspizza01",
        url: "https://www.instagram.com/piperspizza01"
    },
    tiktok: {
        username: "@pipers.pizza3",
        url: "https://www.tiktok.com/@pipers.pizza3"
    }
}
```

### 🕒 Horarios
```javascript
hours: {
    weekdays: {
        days: "Lunes a Viernes",
        open: "06:00 PM",
        close: "10:30 PM"
    },
    weekends: {
        days: "Sábado, Domingo y Festivos",
        open: "06:00 PM",
        close: "11:30 PM"
    }
}
```

## 🚀 Cómo actualizar información

### ✅ Método recomendado (usando variables):
1. Abre el archivo `js/config.js`
2. Modifica los valores que necesites cambiar
3. Guarda el archivo
4. Los cambios se aplicarán automáticamente en toda la página

### ❌ Método anterior (manual):
Antes tenías que buscar y modificar cada instancia en el HTML:
- Buscar todos los enlaces de WhatsApp
- Actualizar todos los enlaces de redes sociales
- Modificar horarios en múltiples lugares
- Cambiar información de contacto en varias secciones

## 📋 Ejemplos de uso común

### Cambiar número de WhatsApp:
```javascript
// En js/config.js
company: {
    whatsapp: "573001234567"  // ← Cambia solo este número
}

social: {
    whatsapp: {
        number: "573001234567"  // ← Y este también
    }
}
```

### Actualizar horarios:
```javascript
// En js/config.js
hours: {
    weekdays: {
        days: "Lunes a Viernes",
        open: "05:00 PM",      // ← Nuevo horario de apertura
        close: "11:00 PM"      // ← Nuevo horario de cierre
    }
}
```

### Cambiar usuario de Instagram:
```javascript
// En js/config.js
social: {
    instagram: {
        username: "@nuevousuario",                    // ← Nuevo username
        url: "https://www.instagram.com/nuevousuario" // ← Nueva URL
    }
}
```

## 🔄 Elementos que se actualizan automáticamente

- ✅ Todos los enlaces de WhatsApp
- ✅ Todos los enlaces de redes sociales
- ✅ Información de contacto en el header y footer
- ✅ Horarios de atención
- ✅ Dirección y enlace a Google Maps
- ✅ Enlaces en el footer

## 🛡️ Sistema de respaldo

Si el archivo de configuración no se puede cargar, el sistema usa valores por defecto para que la página siempre funcione correctamente.

## 💡 Beneficios

1. **Mantenimiento fácil**: Un solo lugar para cambiar toda la información
2. **Consistencia**: Garantiza que todos los datos sean iguales en toda la página
3. **Escalabilidad**: Fácil agregar nuevas variables y funcionalidades
4. **Confiabilidad**: Sistema de respaldo incluido

---

## 🆘 ¿Necesitas ayuda?

Si necesitas modificar algo específico o agregar nuevas variables, consulta el archivo `js/config.js` o contacta al desarrollador.