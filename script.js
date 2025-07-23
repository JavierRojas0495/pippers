// Navegación suave entre secciones
const links = document.querySelectorAll('nav a');
const secciones = ['inicio', 'menu', 'contacto'];

function mostrarSeccion(id) {
    secciones.forEach(sec => {
        const el = document.getElementById(sec);
        if (el) el.style.display = (sec === id) ? 'block' : 'none';
    });
    // Scroll al top al cambiar de sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('#', '');
        mostrarSeccion(targetId);
    });
});

// Mostrar solo la sección de inicio al cargar
window.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
});

// Datos del menú
const menuData = {
    clasicas: {
        nombre: 'Clásicas',
        sabores: [
            'Hawaiana', 'Jamón y Queso', 'Pollo y Champiñones', 'Pollo Maíz', 'Margarita',
            'Pollo Tocineta', 'Pollo Jamón', 'Maduro Cabano', 'Cabano Piña', 'Jamón Salami'
        ],
        precios: {
            personal: 9000,
            pequena: 15000,
            mediana: 23000,
            grande: 29000,
            extragrande: 36000
        },
        saboresPorTamano: {
            personal: 1,
            pequena: 1,
            mediana: 1,
            grande: 2,
            extragrande: 2
        }
    },
    especiales: {
        nombre: 'Especiales',
        sabores: [
            'Vegetariana sal', 'Vegetariana dulce', 'Petete', 'Zamba', 'Kaipirinha',
            'Mexicana', 'Ranchera', 'Tres carnes', 'Pollo BBQ', 'Criolla'
        ],
        precios: {
            personal: 10000,
            pequena: 17000,
            mediana: 25000,
            grande: 31000,
            extragrande: 39000
        },
        saboresPorTamano: {
            personal: 1,
            pequena: 2,
            mediana: 2,
            grande: 2,
            extragrande: 3
        }
    },
    premium: {
        nombre: 'Premium',
        sabores: [
            'Especial', 'La Carnívora', 'Detodito', 'Maíz', 'Maduro'
        ],
        precios: {
            personal: 11000,
            pequena: 18000,
            mediana: 26000,
            grande: 33000,
            extragrande: 42000
        },
        saboresPorTamano: {
            personal: 1,
            pequena: 2,
            mediana: 2,
            grande: 2,
            extragrande: 2
        }
    }
};

const tamanos = [
    { key: 'personal', label: 'Personal (4 porciones)' },
    { key: 'pequena', label: 'Pequeña (6 porciones)' },
    { key: 'mediana', label: 'Mediana (8 porciones)' },
    { key: 'grande', label: 'Grande (10 porciones)' },
    { key: 'extragrande', label: 'Extragrande (12 porciones)' }
];

// Reglas de selección de sabores por tamaño
const reglasSabores = {
    personal: { min: 1, max: 1 },
    pequena: { min: 1, max: 2 },
    mediana: { min: 1, max: 2 },
    grande: { min: 1, max: 2 },
    extragrande: { min: 1, max: 3 }
};

let pedido = [];

function renderMenu() {
    const menuDiv = document.getElementById('menu-dinamico');
    menuDiv.innerHTML = '';
    Object.entries(menuData).forEach(([catKey, cat]) => {
        const section = document.createElement('div');
        section.className = 'categoria-menu';
        section.innerHTML = `<h3>${cat.nombre}</h3>`;
        // Formulario para agregar pizza
        const form = document.createElement('form');
        form.className = 'form-pizza';
        form.innerHTML = `
            <label>Tamaño:
                <select name="tamano">
                    ${tamanos.map(t => `<option value="${t.key}">${t.label}</option>`).join('')}
                </select>
            </label>
            <label>Sabor(es):
                <select name="sabor" multiple size="${cat.sabores.length > 5 ? 5 : cat.sabores.length}">
                    ${cat.sabores.map(s => `<option value="${s}">${s}</option>`).join('')}
                </select>
            </label>
            <label>Cantidad:
                <input type="number" name="cantidad" min="1" value="1">
            </label>
            <span class="precio-pizza">Precio: $<span>0</span></span>
            <button type="submit">Agregar al pedido</button>
        `;
        // Actualizar precio al cambiar tamaño o cantidad
        const tamanoSelect = form.querySelector('select[name="tamano"]');
        const cantidadInput = form.querySelector('input[name="cantidad"]');
        const saborSelect = form.querySelector('select[name="sabor"]');
        const precioSpan = form.querySelector('.precio-pizza span');
        function updatePrecio() {
            const tamano = tamanoSelect.value;
            const cantidad = parseInt(cantidadInput.value) || 1;
            const precio = cat.precios[tamano] * cantidad;
            precioSpan.textContent = precio.toLocaleString();
        }
        tamanoSelect.addEventListener('change', function() {
            updatePrecio();
            // Limpiar selección de sabores al cambiar tamaño
            Array.from(saborSelect.options).forEach(opt => opt.selected = false);
        });
        cantidadInput.addEventListener('input', updatePrecio);
        updatePrecio();
        // Validar cantidad de sabores
        saborSelect.addEventListener('change', function() {
            const tamano = tamanoSelect.value;
            const regla = reglasSabores[tamano];
            if (saborSelect.selectedOptions.length > regla.max) {
                alert(`Solo puedes elegir hasta ${regla.max} sabor(es) para este tamaño.`);
                // Desmarcar el último seleccionado
                saborSelect.options[saborSelect.selectedIndex].selected = false;
            }
        });
        // Agregar al pedido
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const tamano = tamanoSelect.value;
            const cantidad = parseInt(cantidadInput.value) || 1;
            const sabores = Array.from(saborSelect.selectedOptions).map(opt => opt.value);
            const regla = reglasSabores[tamano];
            if (sabores.length < regla.min || sabores.length > regla.max) {
                alert(`Debes elegir entre ${regla.min} y ${regla.max} sabor(es) para este tamaño.`);
                return;
            }
            pedido.push({
                categoria: cat.nombre,
                tamano: tamanos.find(t => t.key === tamano).label,
                sabores,
                cantidad,
                precio: cat.precios[tamano] * cantidad
            });
            renderPedido();
            form.reset();
            updatePrecio();
        });
        section.appendChild(form);
        menuDiv.appendChild(section);
    });
    // Mostrar resumen del pedido
    const resumenDiv = document.createElement('div');
    resumenDiv.id = 'resumen-pedido';
    menuDiv.appendChild(resumenDiv);
    renderPedido();
}

function renderPedido() {
    const resumenDiv = document.getElementById('resumen-pedido');
    if (!resumenDiv) return;
    if (pedido.length === 0) {
        resumenDiv.innerHTML = '<p>No has agregado nada al pedido aún.</p>';
        return;
    }
    let html = '<h4>Tu pedido:</h4><ul>';
    pedido.forEach((item, idx) => {
        html += `<li>${item.cantidad} x ${item.categoria} - ${item.tamano} - Sabores: ${item.sabores.join(', ')} ($${item.precio.toLocaleString()}) <button data-idx="${idx}" class="btn-eliminar">Eliminar</button></li>`;
    });
    html += '</ul>';
    html += `<p><strong>Total: $${pedido.reduce((acc, item) => acc + item.precio, 0).toLocaleString()}</strong></p>`;
    resumenDiv.innerHTML = html;
    // Botones eliminar
    resumenDiv.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.getAttribute('data-idx'));
            pedido.splice(idx, 1);
            renderPedido();
        });
    });
}

renderMenu();

// Manejo del formulario de contacto/pedido
const form = document.getElementById('form-contacto');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (pedido.length === 0) {
        alert('Agrega al menos una pizza al pedido.');
        return;
    }
    const nombre = form.nombre.value.trim();
    const direccion = form.direccion.value.trim();
    const telefono = form.telefono.value.trim();
    if (!nombre || !direccion || !telefono) {
        alert('Por favor, completa todos los datos de contacto.');
        return;
    }
    let mensaje = `¡Hola! Quiero hacer un pedido:\n`;
    pedido.forEach(item => {
        mensaje += `- ${item.cantidad} x ${item.categoria} (${item.tamano}), Sabores: ${item.sabores.join(', ')} ($${item.precio.toLocaleString()})\n`;
    });
    mensaje += `Total: $${pedido.reduce((acc, item) => acc + item.precio, 0).toLocaleString()}\n`;
    mensaje += `\nDatos de entrega:\nNombre: ${nombre}\nDirección: ${direccion}\nTeléfono: ${telefono}`;
    // Número de WhatsApp de la pizzería (modificar por el real)
    const numero = '573001234567';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});

// Carruseles de imágenes en la sección de inicio (moderno)
function iniciarCarrusel(idCarrusel, idPrev, idNext) {
    const carrusel = document.getElementById(idCarrusel);
    if (!carrusel) return;
    const imagenes = carrusel.querySelectorAll('.foto-pizza');
    let actual = 0;
    // Crear indicadores
    let indicadores = document.createElement('div');
    indicadores.className = 'carrusel-indicadores';
    imagenes.forEach((img, i) => {
        let punto = document.createElement('div');
        punto.className = 'carrusel-indicador';
        if (i === 0) punto.classList.add('active');
        punto.addEventListener('click', () => {
            mostrarImagen(i);
            resetAutoplay();
        });
        indicadores.appendChild(punto);
    });
    carrusel.parentNode.insertBefore(indicadores, carrusel.nextSibling);
    // Nombre de la pizza sobre la imagen
    imagenes.forEach(img => {
        let nombre = document.createElement('div');
        nombre.className = 'nombre-pizza-carrusel';
        nombre.textContent = img.alt;
        img.parentNode.insertBefore(nombre, img.nextSibling);
    });
    function mostrarImagen(idx) {
        imagenes.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
            // Slide effect
            img.style.transform = `translateX(${(i-idx)*100}%)`;
            img.style.opacity = (i === idx) ? '1' : '0.5';
        });
        // Indicadores
        indicadores.querySelectorAll('.carrusel-indicador').forEach((p, i) => {
            p.classList.toggle('active', i === idx);
        });
        // Mostrar solo el nombre de la pizza activa
        carrusel.querySelectorAll('.nombre-pizza-carrusel').forEach((n, i) => {
            n.style.display = (i === idx) ? 'block' : 'none';
        });
    }
    mostrarImagen(actual);
    function next() {
        actual = (actual + 1) % imagenes.length;
        mostrarImagen(actual);
    }
    function prev() {
        actual = (actual - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(actual);
    }
    document.getElementById(idPrev).addEventListener('click', () => { prev(); resetAutoplay(); });
    document.getElementById(idNext).addEventListener('click', () => { next(); resetAutoplay(); });
    // Auto-play
    let autoplay = setInterval(next, 4000);
    function resetAutoplay() {
        clearInterval(autoplay);
        autoplay = setInterval(next, 4000);
    }
    carrusel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carrusel.addEventListener('mouseleave', () => resetAutoplay());
}
// Coverflow Carousel Logic para múltiples carruseles
function initCoverflowCarousels() {
  const containers = document.querySelectorAll('.coverflow-carousel-container');
  containers.forEach(container => {
    const carousel = container.querySelector('.coverflow-carousel');
    const slides = Array.from(carousel.querySelectorAll('.coverflow-slide'));
    const prevBtn = container.querySelector('.coverflow-btn-prev');
    const nextBtn = container.querySelector('.coverflow-btn-next');
    let current = 0;
    function updateSlides() {
      slides.forEach((slide, i) => {
        slide.classList.remove('active', 'left', 'right');
        if (i === current) {
          slide.classList.add('active');
        } else if (i === (current - 1 + slides.length) % slides.length) {
          slide.classList.add('left');
        } else if (i === (current + 1) % slides.length) {
          slide.classList.add('right');
        }
      });
    }
    function goTo(idx) {
      current = (idx + slides.length) % slides.length;
      updateSlides();
    }
    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    updateSlides();
  });
}
window.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
    iniciarCarrusel('carrusel-clasicas', 'prev-clasicas', 'next-clasicas');
    iniciarCarrusel('carrusel-especiales', 'prev-especiales', 'next-especiales');
    iniciarCarrusel('carrusel-premium', 'prev-premium', 'next-premium');
    initCoverflowCarousels();
}); 