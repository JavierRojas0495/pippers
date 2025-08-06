// ===== CONFIGURACIÓN DE LA APLICACIÓN =====

// Configuración general de la aplicación
export const APP_CONFIG = {
    // Información de la empresa
    company: {
        name: "Piper's Pizza",
        slogan: "Las mejores pizzas artesanales, con los ingredientes más frescos y deliciosos. ¡Haz tu pedido ahora!",
        welcome: "¡Bienvenido a Piper's Pizza!",
        mission: "Ofrecer las mejores pizzas artesanales con ingredientes frescos y de alta calidad, preparadas con pasión y dedicación. Nos comprometemos a brindar un servicio excepcional y crear momentos de felicidad a través de la gastronomía italiana auténtica.",
        vision: "Ser reconocidos como la pizzería líder en la región, destacando por la calidad artesanal de nuestras pizzas, la frescura de nuestros ingredientes y la excelencia en el servicio al cliente, creando experiencias gastronómicas únicas que deleiten a nuestros comensales.",
        phone: {
            full: "+57 320 718 2705",
            display: "320 718 2705"
        },
        email: "info@piperspizza.com",
        address: "Cl. 55A #47-08, Navarro, Cali, Valle del Cauca",
        whatsapp: {
            number: "573207182705",
            url: "https://wa.me/573207182705"
        },
        mapsUrl: "https://maps.app.goo.gl/dWiA2RXapeMZohcBA"
    },

    // Textos de la interfaz
    texts: {
        orderTitle: "¿Listo para ordenar?",
        orderDescription: "Explora nuestro menú y realiza tu pedido de las mejores pizzas artesanales",
        orderButton: "Ver Menú y Realizar Pedido",
        copyright: "© 2025 Piper's Pizza. Todos los derechos reservados."
    },

    // Textos del footer
    footer: {
        tiktok: {
            text: "TikTok: PIPER'S PIZZA"
        },
        instagram: {
            text: "Instagram: @PIPERSPIZZA01"
        },
        whatsapp: {
            text: "WhatsApp: 320 718 2705"
        }
    },

    // Configuración de la API y servicios
    api: {
        baseUrl: "https://api.piperspizza.com",
        timeout: 10000,
        retries: 3
    },

    // Configuración de carruseles
    carousel: {
        autoPlay: true,
        autoPlayDelay: 5000,
        transitionSpeed: 500,
        showIndicators: true,
        showControls: true,
        loop: true
    },

    // Configuración de formularios
    form: {
        validation: {
            required: true,
            email: true,
            phone: true,
            minLength: {
                name: 2,
                message: 10
            }
        },
        autoSave: true,
        autoSaveDelay: 2000
    },

    // Configuración de notificaciones
    notifications: {
        position: "top-right",
        duration: 5000,
        showProgress: true,
        closeOnClick: true
    },

    // Configuración de animaciones
    animations: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out"
    },

    // Configuración de localStorage
    storage: {
        prefix: "pipers_",
        cartKey: "shopping_cart",
        userKey: "user_preferences",
        themeKey: "theme_preference"
    },

    // Configuración de redes sociales
    social: {
        whatsapp: {
            number: "573207182705",
            message: "Estoy interesado en Piper's Pizza",
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
    },

    // Configuración de horarios
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
    },

    // Configuración de delivery
    delivery: {
        enabled: true,
        minimumOrder: 15000,
        deliveryFee: 3000,
        freeDeliveryThreshold: 25000,
        estimatedTime: "30-45 minutos",
        zones: [
            { name: "Zona 1", fee: 2000, time: "20-30 min" },
            { name: "Zona 2", fee: 3000, time: "30-45 min" },
            { name: "Zona 3", fee: 4000, time: "45-60 min" }
        ]
    },

    // Configuración de pagos
    payment: {
        methods: ["efectivo", "tarjeta", "transferencia"],
        cashOnly: false,
        cardAccepted: true,
        onlinePayment: false
    },

    // Configuración de promociones
    promotions: {
        enabled: true,
        autoApply: false,
        codes: {
            "BIENVENIDA": { discount: 10, type: "percentage", minOrder: 20000 },
            "FAMILIA": { discount: 15, type: "percentage", minOrder: 35000 },
            "DESCUENTO5": { discount: 5000, type: "fixed", minOrder: 25000 }
        }
    },

    // Configuración de analytics
    analytics: {
        enabled: true,
        trackingId: "GA-XXXXXXXXX",
        events: {
            addToCart: true,
            purchase: true,
            viewProduct: true,
            contact: true
        }
    },

    // Configuración de caché
    cache: {
        enabled: true,
        duration: 3600000, // 1 hora
        keys: ["menu", "promotions", "contact"]
    },

    // Configuración de errores
    errorHandling: {
        logErrors: true,
        showUserFriendly: true,
        retryOnError: true,
        maxRetries: 3
    },

    // Configuración de rendimiento
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        minifyAssets: true,
        preloadCritical: true
    }
};

// Configuración de breakpoints para responsive
export const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1200
};

// Configuración de temas
export const THEMES = {
    light: {
        primary: "#31428B",
        secondary: "#F4EFDD",
        accent: "#DC3545",
        background: "#FFFFFF",
        text: "#333333",
        textSecondary: "#666666"
    },
    dark: {
        primary: "#4A5BA8",
        secondary: "#2A2A2A",
        accent: "#FF6B6B",
        background: "#1A1A1A",
        text: "#FFFFFF",
        textSecondary: "#CCCCCC"
    }
};

// Configuración de idiomas
export const LANGUAGES = {
    es: {
        name: "Español",
        flag: "🇪🇸",
        default: true
    },
    en: {
        name: "English",
        flag: "🇺🇸",
        default: false
    }
};

// Configuración de moneda
export const CURRENCY = {
    code: "COP",
    symbol: "$",
    position: "before",
    decimals: 0,
    thousandsSeparator: ".",
    decimalSeparator: ","
};

// Configuración de validación
export const VALIDATION_RULES = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^(\+57)?[1-9]\d{9}$/,
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    address: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s#-]{10,100}$/
};

// Configuración de mensajes de error
export const ERROR_MESSAGES = {
    es: {
        required: "Este campo es obligatorio",
        email: "Ingresa un email válido",
        phone: "Ingresa un teléfono válido",
        minLength: "Mínimo {min} caracteres",
        maxLength: "Máximo {max} caracteres",
        invalidFormat: "Formato inválido",
        networkError: "Error de conexión. Intenta nuevamente.",
        serverError: "Error del servidor. Contacta soporte.",
        cartEmpty: "Tu carrito está vacío",
        orderFailed: "Error al procesar el pedido",
        paymentFailed: "Error en el pago"
    },
    en: {
        required: "This field is required",
        email: "Enter a valid email",
        phone: "Enter a valid phone number",
        minLength: "Minimum {min} characters",
        maxLength: "Maximum {max} characters",
        invalidFormat: "Invalid format",
        networkError: "Connection error. Try again.",
        serverError: "Server error. Contact support.",
        cartEmpty: "Your cart is empty",
        orderFailed: "Error processing order",
        paymentFailed: "Payment error"
    }
};

// Configuración de mensajes de éxito
export const SUCCESS_MESSAGES = {
    es: {
        orderPlaced: "¡Pedido realizado con éxito!",
        itemAdded: "Producto agregado al carrito",
        itemRemoved: "Producto removido del carrito",
        cartCleared: "Carrito vaciado",
        contactSent: "Mensaje enviado correctamente",
        profileUpdated: "Perfil actualizado",
        passwordChanged: "Contraseña cambiada"
    },
    en: {
        orderPlaced: "Order placed successfully!",
        itemAdded: "Item added to cart",
        itemRemoved: "Item removed from cart",
        cartCleared: "Cart cleared",
        contactSent: "Message sent successfully",
        profileUpdated: "Profile updated",
        passwordChanged: "Password changed"
    }
};

// Función para obtener configuración según el entorno
export function getConfig(environment = 'production') {
    const configs = {
        development: {
            ...APP_CONFIG,
            api: {
                ...APP_CONFIG.api,
                baseUrl: "http://localhost:3000/api"
            },
            debug: true,
            logLevel: "debug"
        },
        staging: {
            ...APP_CONFIG,
            api: {
                ...APP_CONFIG.api,
                baseUrl: "https://staging-api.piperspizza.com"
            },
            debug: true,
            logLevel: "info"
        },
        production: {
            ...APP_CONFIG,
            debug: false,
            logLevel: "error"
        }
    };

    return configs[environment] || configs.production;
}

// Función para validar configuración
export function validateConfig(config) {
    const required = ['company', 'api', 'carousel', 'form'];
    const missing = required.filter(key => !config[key]);
    
    if (missing.length > 0) {
        console.error('Configuración incompleta. Faltan:', missing);
        return false;
    }
    
    return true;
}

// Función para obtener configuración de tema
export function getThemeConfig(theme = 'light') {
    return THEMES[theme] || THEMES.light;
}

// Función para obtener mensajes según idioma
export function getMessages(language = 'es') {
    return {
        errors: ERROR_MESSAGES[language] || ERROR_MESSAGES.es,
        success: SUCCESS_MESSAGES[language] || SUCCESS_MESSAGES.es
    };
}

// Función para formatear moneda
export function formatCurrency(amount, currency = CURRENCY) {
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: currency.code,
        minimumFractionDigits: currency.decimals,
        maximumFractionDigits: currency.decimals
    });
    
    return formatter.format(amount);
}

// Función para validar según reglas
export function validateField(value, rule, params = {}) {
    const rules = {
        email: VALIDATION_RULES.email,
        phone: VALIDATION_RULES.phone,
        name: VALIDATION_RULES.name,
        address: VALIDATION_RULES.address,
        required: (val) => val && val.toString().trim().length > 0,
        minLength: (val, min) => val && val.toString().length >= min,
        maxLength: (val, max) => val && val.toString().length <= max
    };

    const validationRule = rules[rule];
    if (!validationRule) return true;

    if (typeof validationRule === 'function') {
        return validationRule(value, params);
    }

    return validationRule.test(value);
}

// Exportar configuración por defecto
export default APP_CONFIG; 