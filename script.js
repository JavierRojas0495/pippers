// Navegación suave entre secciones
const links = document.querySelectorAll('nav a');
const secciones = ['inicio', 'menu', 'contacto'];

function mostrarSeccion(id) {
    secciones.forEach(sec => {
        const el = document.getElementById(sec);
        if (el) el.style.display = (sec === id) ? 'block' : 'none';
    });
    // Hacer scroll suave a la sección correspondiente
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
    }
}

// También aplicar la navegación a cualquier enlace con href="#menu" o href="#inicio" o href="#contacto"
document.querySelectorAll('a[href="#menu"], a[href="#inicio"], a[href="#contacto"], .logo-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('#', '');
        mostrarSeccion(targetId);
    });
});

// Mostrar solo la sección de inicio al cargar
window.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
    initCoverflowCarousels();
    // Evento para la promo
    const promoBtn = document.querySelector('.promo-btn');
    if (promoBtn) {
        promoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Agregar la promo al pedido
            pedido.push({
                cantidad: 1,
                descripcion: 'Combo familiar: 2 Pizzas grandes + 1 gaseosa 1.5L',
                precio: 55000,
                bebidas: [{ nombre: 'Gaseosa 1.5L', precio: 0 }]
            });
            renderResumenPedido();
            mostrarSeccion('menu');
        });
    }
});

// Carrusel de promociones
window.addEventListener('DOMContentLoaded', () => {
  // Carrusel de promociones
  const promoSlides = document.querySelectorAll('.promo-carrusel .promo-slide');
  const prevBtn = document.querySelector('.promo-carrusel-btn-prev');
  const nextBtn = document.querySelector('.promo-carrusel-btn-next');
  let promoIndex = 0;

  function showPromoSlide(idx) {
    promoSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }

  function nextPromo() {
    promoIndex = (promoIndex + 1) % promoSlides.length;
    showPromoSlide(promoIndex);
  }

  function prevPromo() {
    promoIndex = (promoIndex - 1 + promoSlides.length) % promoSlides.length;
    showPromoSlide(promoIndex);
  }

  if (promoSlides.length > 1) {
    prevBtn.style.display = '';
    nextBtn.style.display = '';
    prevBtn.addEventListener('click', prevPromo);
    nextBtn.addEventListener('click', nextPromo);
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }
  showPromoSlide(promoIndex);
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

// Datos para el menú dinámico
const tiposProducto = [
  { tipo: 'clasica', nombre: 'Pizza Clásica', icono: '🍕' },
  { tipo: 'especial', nombre: 'Pizza Especial', icono: '🥗' },
  { tipo: 'premium', nombre: 'Pizza Premium', icono: '👑' },
  { tipo: 'lasagna', nombre: 'Lasaña', icono: '🍝' },
  { tipo: 'pantalone', nombre: 'Pizza Pantalone', icono: '🍕' },
  { tipo: 'granizado_maiz', nombre: 'Granizado de Maíz', icono: '🌽' },
  { tipo: 'granizado_maduro', nombre: 'Granizado de Maduro', icono: '🍌' },
  { tipo: 'bebidas', nombre: 'Bebidas', icono: '🥤' }
];

const bebidasDisponibles = [
  { 
    nombre: 'Jugos Naturales', 
    tipo: 'jugos',
    sabores: ['mora', 'mango', 'lulo', 'maracuyá', 'fresa', 'uva', 'guanábana'],
    tipos: [
      { nombre: 'en agua', precio: 5000 },
      { nombre: 'en leche', precio: 6000 }
    ]
  },
  { 
    nombre: 'Limonadas', 
    tipo: 'limonadas',
    sabores: ['cerezada', 'coco'],
    precio: 8000
  },
  { nombre: 'Gaseosa Personal (400ml)', tipo: 'gaseosa', precio: 3000 },
  { nombre: 'Gaseosa 1.5L', tipo: 'gaseosa', precio: 6500 }
];

// --- MENÚ DINÁMICO ---

const menuDinamico = document.getElementById('menu-dinamico');

// Listas de sabores/ingredientes por tipo
const saboresPorTipo = {
  clasica: [
    'Hawaiana', 'Jamón y Queso', 'Pollo y Champiñones', 'Pollo Maíz', 'Margarita', 'Pollo Tocineta', 'Pollo Jamón', 'Maduro Cabano', 'Cabano Piña', 'Jamón Salami'
  ],
  especial: [
    'Vegetariana sal', 'Vegetariana dulce', 'Petete', 'Zamba', 'Kaipirinha', 'Mexicana', 'Ranchera', 'Tres carnes', 'Pollo BBQ', 'Criolla'
  ],
  premium: [
    'Especial', 'La Carnívora', 'Detodito', 'Maíz', 'Maduro'
  ]
};

// Precios por tipo y tamaño
const preciosPorTipo = {
  clasica: {
    personal: 9000,
    pequena: 15000,
    mediana: 23000,
    grande: 29000,
    extragrande: 36000
  },
  especial: {
    personal: 10000,
    pequena: 17000,
    mediana: 25000,
    grande: 31000,
    extragrande: 39000
  },
  premium: {
    personal: 11000,
    pequena: 18000,
    mediana: 26000,
    grande: 33000,
    extragrande: 42000
  },
  lasagna: {
    pequena: 9000,
    grande: 18000
  },
  pantalone: {
    pequena: 9000,
    grande: 19000
  },
  granizado_maiz: {
    unica: 9000
  },
  granizado_maduro: {
    unica: 9000
  },
  bebidas: {
    unidad: 5000
  }
};

// Reglas de cantidad de ingredientes por tamaño
const reglasIngredientes = {
  personal: { min: 1, max: 1 },
  pequena: { min: 1, max: 2 },
  mediana: { min: 1, max: 2 },
  grande: { min: 1, max: 2 },
  extragrande: { min: 1, max: 3 }
};

let pedidoActual = {
  producto: null,
  detalles: {},
  bebida: null
};

// Paso 1: Selección de tipo de producto
function renderSelectorTipoProducto() {
  menuDinamico.innerHTML = `
    <div class="form-pizza">
      <h3>¿Qué tipo de producto deseas?</h3>
      <div class="selector-tipo-producto">
        ${tiposProducto.map(producto => `
          <button class="btn-tipo-pizza" data-tipo="${producto.tipo}">
            <span class="producto-icono">${producto.icono}</span>
            <span class="producto-nombre">${producto.nombre}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  
  document.querySelectorAll('.btn-tipo-pizza').forEach(btn => {
    btn.onclick = () => {
      pedidoActual = { 
        producto: btn.getAttribute('data-tipo'), 
        detalles: {}, 
        bebida: null 
      };
      renderSelectorTamanoProducto();
    };
  });
}

// Paso 2: Selección de tamaño
function renderSelectorTamanoProducto() {
  const tipo = pedidoActual.producto;
  let tamanosDisponibles = [];
  
  if (tipo === 'bebidas') {
    // Para bebidas, ir directamente a la selección de bebidas
    renderSelectorBebidas();
    return;
  }
  
  if (tipo === 'lasagna' || tipo === 'pantalone') {
    tamanosDisponibles = [
      { key: 'pequena', label: 'Pequeña' },
      { key: 'grande', label: 'Grande' }
    ];
  } else if (tipo === 'granizado_maiz' || tipo === 'granizado_maduro') {
    tamanosDisponibles = [
      { key: 'unica', label: 'Única' }
    ];
  } else {
    tamanosDisponibles = [
      { key: 'personal', label: 'Personal (4 porciones)' },
      { key: 'pequena', label: 'Pequeña (6 porciones)' },
      { key: 'mediana', label: 'Mediana (8 porciones)' },
      { key: 'grande', label: 'Grande (10 porciones)' },
      { key: 'extragrande', label: 'Extragrande (12 porciones)' }
    ];
  }
  
  menuDinamico.innerHTML = `
    <div class="form-pizza">
      <h3>¿Qué tamaño?</h3>
      <div class="selector-tamano-pizza">
        ${tamanosDisponibles.map(tamano => `
          <button class="btn-tamano-pizza" data-tamano="${tamano.key}">
            ${tamano.label}
            <span class="precio-tamano">$${preciosPorTipo[tipo][tamano.key].toLocaleString()}</span>
          </button>
        `).join('')}
      </div>
      <button id="btn-volver-tipo" class="btn-volver">← Volver</button>
    </div>
  `;
  
  document.querySelectorAll('.btn-tamano-pizza').forEach(btn => {
    btn.onclick = () => {
      pedidoActual.detalles.tamano = btn.getAttribute('data-tamano');
      if (tipo === 'lasagna' || tipo === 'pantalone' || tipo === 'granizado_maiz' || tipo === 'granizado_maduro') {
        renderSelectorCantidadProducto();
      } else {
        renderSelectorIngredientesPizza();
      }
    };
  });
  
  document.getElementById('btn-volver-tipo').onclick = renderSelectorTipoProducto;
}

// Paso 3: Selección de ingredientes/sabores (solo para pizzas)
function renderSelectorIngredientesPizza() {
  const tipo = pedidoActual.producto;
  const tamano = pedidoActual.detalles.tamano;
  const sabores = saboresPorTipo[tipo];
  const regla = reglasIngredientes[tamano] || reglasIngredientes.personal;
  
  menuDinamico.innerHTML = `
    <div class="form-pizza">
      <h3>Elige de ${regla.min} a ${regla.max} ingredientes/sabores</h3>
      <div class="selector-ingredientes">
        ${sabores.map((s, i) => `
          <label class="ingrediente-checkbox">
            <input type="checkbox" class="chk-ingrediente" value="${s}">
            <span class="ingrediente-texto">${s}</span>
          </label>
        `).join('')}
      </div>
      <label>Cantidad:
        <input type="number" id="cantidad-pizza" min="1" value="1">
      </label>
      
      <button id="btn-continuar-ingredientes" style="margin-top: 20px; padding: 12px 24px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Continuar</button>
      <button id="btn-volver-tamano" class="btn-volver">← Volver</button>
      <div id="msg-error-ingredientes" style="color:#e74c3c;margin-top:8px;"></div>
    </div>
  `;
  
  const checkboxes = document.querySelectorAll('.chk-ingrediente');
  
  function actualizarEstadoCheckboxes() {
    const seleccionados = document.querySelectorAll('.chk-ingrediente:checked');
    const cantidadSeleccionados = seleccionados.length;
    
    checkboxes.forEach(cb => {
      const label = cb.parentElement;
      if (cb.checked) {
        // Los seleccionados siempre están habilitados
        cb.disabled = false;
        label.classList.remove('disabled');
      } else {
        // Los no seleccionados se deshabilitan si ya se alcanzó el máximo
        if (cantidadSeleccionados >= regla.max) {
          cb.disabled = true;
          label.classList.add('disabled');
        } else {
          cb.disabled = false;
          label.classList.remove('disabled');
        }
      }
    });
    
    // Actualizar mensaje de estado
    const msgElement = document.getElementById('msg-error-ingredientes');
    if (cantidadSeleccionados < regla.min) {
      msgElement.textContent = `Selecciona al menos ${regla.min} ingrediente${regla.min > 1 ? 's' : ''} (${cantidadSeleccionados}/${regla.max})`;
      msgElement.style.color = '#f39c12';
    } else if (cantidadSeleccionados > regla.max) {
      msgElement.textContent = `Máximo ${regla.max} ingredientes permitidos (${cantidadSeleccionados}/${regla.max})`;
      msgElement.style.color = '#e74c3c';
    } else {
      msgElement.textContent = `Perfecto! ${cantidadSeleccionados} ingrediente${cantidadSeleccionados > 1 ? 's' : ''} seleccionado${cantidadSeleccionados > 1 ? 's' : ''} (${cantidadSeleccionados}/${regla.max})`;
      msgElement.style.color = '#27ae60';
    }
  }
  
  checkboxes.forEach(cb => {
    cb.onchange = () => {
      const seleccionados = document.querySelectorAll('.chk-ingrediente:checked');
      const cantidadSeleccionados = seleccionados.length;
      
      // Si intenta seleccionar más del máximo, no permitir
      if (!cb.checked && cantidadSeleccionados >= regla.max) {
        cb.checked = false;
        return;
      }
      
      // Actualizar el estado de todos los checkboxes
      actualizarEstadoCheckboxes();
    };
  });
  
  // Inicializar el estado
  actualizarEstadoCheckboxes();
  
  document.getElementById('btn-continuar-ingredientes').onclick = () => {
    const seleccionados = Array.from(document.querySelectorAll('.chk-ingrediente:checked')).map(cb => cb.value);
    if (seleccionados.length < regla.min) {
      document.getElementById('msg-error-ingredientes').textContent = `Debes seleccionar al menos ${regla.min} ingrediente${regla.min > 1 ? 's' : ''}.`;
      return;
    }
    pedidoActual.detalles.ingredientes = seleccionados;
    pedidoActual.detalles.cantidad = document.getElementById('cantidad-pizza').value;
    agregarAlPedido();
  };
  
  document.getElementById('btn-volver-tamano').onclick = renderSelectorTamanoProducto;
}

// Paso 3b: Selección de cantidad (para lasañas y pantalone)
function renderSelectorCantidadProducto() {
  const tipo = pedidoActual.producto;
  const tamano = pedidoActual.detalles.tamano;
  
  menuDinamico.innerHTML = `
    <div class="form-pizza">
      <h3>¿Cuántas ${tiposProducto.find(t => t.tipo === tipo)?.nombre} quieres?</h3>
      <label>Cantidad:
        <input type="number" id="cantidad-producto" min="1" value="1">
      </label>
      <p class="precio-total">Precio: $<span id="precio-total">${preciosPorTipo[tipo][tamano].toLocaleString()}</span></p>
      
      <button id="btn-continuar-cantidad" style="margin-top: 20px; padding: 12px 24px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Continuar</button>
      <button id="btn-volver-tamano-2" class="btn-volver">← Volver</button>
    </div>
  `;
  
  const cantidadInput = document.getElementById('cantidad-producto');
  const precioSpan = document.getElementById('precio-total');
  
  cantidadInput.addEventListener('input', () => {
    const cantidad = parseInt(cantidadInput.value) || 1;
    const precio = preciosPorTipo[tipo][tamano] * cantidad;
    precioSpan.textContent = precio.toLocaleString();
  });
  
  document.getElementById('btn-continuar-cantidad').onclick = () => {
    pedidoActual.detalles.cantidad = cantidadInput.value;
    agregarAlPedido();
  };
  
  document.getElementById('btn-volver-tamano-2').onclick = renderSelectorTamanoProducto;
}




function renderSelectorBebidas() {
  menuDinamico.innerHTML = `
    <div class="form-pizza">
      <h3>Selecciona tus bebidas</h3>
      <div class="selector-bebidas">
        ${bebidasDisponibles.map((b, i) => `
          <label style="display:block;margin-bottom:15px;padding:10px;border:1px solid #ddd;border-radius:5px;">
            <input type="checkbox" class="chk-bebida" value="${b.nombre}" data-tipo="${b.tipo || 'simple'}" data-index="${i}"> 
            <strong>${b.nombre}</strong>
            ${b.tipo === 'jugos' ? `<span class="precio">$${b.tipos[0].precio.toLocaleString()} - $${b.tipos[1].precio.toLocaleString()}</span>` : 
              b.tipo === 'limonadas' ? `<span class="precio">$${b.precio.toLocaleString()}</span>` :
              `<span class="precio">$${b.precio.toLocaleString()}</span>`}
          </label>
        `).join('')}
      </div>
      <label>Cantidad:
        <input type="number" id="cantidad-bebidas" min="1" value="1">
      </label>
      <button id="btn-continuar-bebidas" style="margin-top: 20px; padding: 12px 24px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Continuar</button>
      <button id="btn-volver-bebidas" class="btn-volver">← Volver</button>
    </div>
  `;
  
  // Event listeners para checkboxes
  document.querySelectorAll('.chk-bebida').forEach(cb => {
    cb.addEventListener('change', function() {
      const tipo = this.getAttribute('data-tipo');
      const index = parseInt(this.getAttribute('data-index'));
      
      if (this.checked && (tipo === 'jugos' || tipo === 'limonadas')) {
        // Mostrar selector de sabores
        mostrarSelectorSabores(tipo, index);
      } else if (!this.checked && (tipo === 'jugos' || tipo === 'limonadas')) {
        // Limpiar todos los sabores y tipos seleccionados cuando se desmarca
        limpiarSaboresSeleccionados(tipo, index);
      }
    });
  });
  
  document.getElementById('btn-continuar-bebidas').onclick = () => {
    const bebidasMarcadas = document.querySelectorAll('.chk-bebida:checked');
    
    if (bebidasMarcadas.length === 0) {
      alert('Por favor selecciona al menos una bebida.');
      return;
    }
    
    const seleccionadas = [];
    
    bebidasMarcadas.forEach(cb => {
      const tipo = cb.getAttribute('data-tipo');
      const index = parseInt(cb.getAttribute('data-index'));
      const bebida = bebidasDisponibles[index];
      
      if (tipo === 'jugos') {
        // Buscar el contenedor específico de esta bebida
        const label = cb.parentElement;
        const selectorSabores = label.querySelector('.selector-sabores');
        
        if (selectorSabores) {
          const saboresSeleccionados = Array.from(selectorSabores.querySelectorAll('.chk-sabor-jugo:checked')).map(s => s.value);
          const tiposSeleccionados = Array.from(selectorSabores.querySelectorAll('.chk-tipo-jugo:checked')).map(t => t.value);
          
          if (saboresSeleccionados.length === 0 || tiposSeleccionados.length === 0) {
            alert('Por favor selecciona al menos un sabor y un tipo para los jugos.');
            return;
          }
          
          seleccionadas.push({
            nombre: bebida.nombre,
            tipo: 'jugos',
            sabores: saboresSeleccionados,
            tipos: tiposSeleccionados,
            bebida: bebida
          });
        }
      } else if (tipo === 'limonadas') {
        // Buscar el contenedor específico de esta bebida
        const label = cb.parentElement;
        const selectorSabores = label.querySelector('.selector-sabores');
        
        if (selectorSabores) {
          const saboresSeleccionados = Array.from(selectorSabores.querySelectorAll('.chk-sabor-limonada:checked')).map(s => s.value);
          
          if (saboresSeleccionados.length === 0) {
            alert('Por favor selecciona al menos un sabor para las limonadas.');
            return;
          }
          
          seleccionadas.push({
            nombre: bebida.nombre,
            tipo: 'limonadas',
            sabores: saboresSeleccionados,
            precio: bebida.precio,
            bebida: bebida
          });
        }
      } else {
        // Bebidas simples (gaseosas)
        seleccionadas.push({
          nombre: bebida.nombre,
          tipo: 'simple',
          precio: bebida.precio,
          bebida: bebida
        });
      }
    });
    
    if (seleccionadas.length === 0) {
      return; // Ya se mostró un error específico arriba
    }
    
    pedidoActual.detalles.bebidas = seleccionadas;
    pedidoActual.detalles.cantidad = document.getElementById('cantidad-bebidas').value;
    agregarAlPedido();
  };
  
  document.getElementById('btn-volver-bebidas').onclick = renderSelectorTipoProducto;
}

function mostrarSelectorSabores(tipo, index) {
  const bebida = bebidasDisponibles[index];
  const checkbox = document.querySelector(`[data-tipo="${tipo}"][data-index="${index}"]`);
  const label = checkbox.parentElement;
  
  let contenidoSabores = '';
  
  if (tipo === 'jugos') {
    contenidoSabores = `
      <div class="selector-sabores" data-bebida-index="${index}" style="margin-top:10px;padding:10px;background:#f9f9f9;border-radius:5px;">
        <h4>Sabores disponibles:</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div>
            <strong>Sabores:</strong><br>
            ${bebida.sabores.map(sabor => `
              <label style="display:block;margin:5px 0;">
                <input type="checkbox" class="chk-sabor-jugo" data-bebida-index="${index}" value="${sabor}"> ${sabor}
              </label>
            `).join('')}
          </div>
          <div>
            <strong>Tipo:</strong><br>
            ${bebida.tipos.map(tipo => `
              <label style="display:block;margin:5px 0;">
                <input type="checkbox" class="chk-tipo-jugo" data-bebida-index="${index}" value="${tipo.nombre}" data-precio="${tipo.precio}"> ${tipo.nombre} ($${tipo.precio.toLocaleString()})
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (tipo === 'limonadas') {
    contenidoSabores = `
      <div class="selector-sabores" data-bebida-index="${index}" style="margin-top:10px;padding:10px;background:#f9f9f9;border-radius:5px;">
        <h4>Sabores disponibles:</h4>
        ${bebida.sabores.map(sabor => `
          <label style="display:block;margin:5px 0;">
            <input type="checkbox" class="chk-sabor-limonada" data-bebida-index="${index}" value="${sabor}"> ${sabor}
          </label>
        `).join('')}
      </div>
    `;
  }
  
  // Remover selector anterior si existe
  const selectorAnterior = label.querySelector('.selector-sabores');
  if (selectorAnterior) {
    selectorAnterior.remove();
  }
  
  // Agregar nuevo selector
  label.insertAdjacentHTML('beforeend', contenidoSabores);
}

function limpiarSaboresSeleccionados(tipo, index) {
  const checkbox = document.querySelector(`[data-tipo="${tipo}"][data-index="${index}"]`);
  const label = checkbox.parentElement;
  
  // Remover el selector de sabores
  const selectorSabores = label.querySelector('.selector-sabores');
  if (selectorSabores) {
    selectorSabores.remove();
  }
}

function agregarAlPedido() {
  const tipo = pedidoActual.producto;
  
  if (tipo === 'bebidas') {
    // Manejo especial para bebidas
    const bebidas = pedidoActual.detalles.bebidas;
    const cantidad = parseInt(pedidoActual.detalles.cantidad) || 1;
    
    bebidas.forEach(bebida => {
      if (bebida.tipo === 'jugos') {
        // Para jugos, crear un ítem por cada combinación de sabor y tipo
        bebida.sabores.forEach(sabor => {
          bebida.tipos.forEach(tipoSeleccionado => {
            const tipoBebida = bebida.bebida.tipos.find(t => t.nombre === tipoSeleccionado);
            pedido.push({
              categoria: 'Bebidas',
              tamano: 'unidad',
              descripcion: `Jugo de ${sabor} ${tipoSeleccionado}`,
              cantidad: cantidad,
              precio: tipoBebida.precio * cantidad,
              bebidas: []
            });
          });
        });
      } else if (bebida.tipo === 'limonadas') {
        // Para limonadas, crear un ítem por cada sabor
        bebida.sabores.forEach(sabor => {
          pedido.push({
            categoria: 'Bebidas',
            tamano: 'unidad',
            descripcion: `Limonada de ${sabor}`,
            cantidad: cantidad,
            precio: bebida.precio * cantidad,
            bebidas: []
          });
        });
      } else {
        // Para bebidas simples (gaseosas)
        pedido.push({
          categoria: 'Bebidas',
          tamano: 'unidad',
          descripcion: bebida.nombre,
          cantidad: cantidad,
          precio: bebida.precio * cantidad,
          bebidas: []
        });
      }
    });
  } else {
    // Manejo normal para otros productos
    const tamano = pedidoActual.detalles.tamano;
    const cantidad = parseInt(pedidoActual.detalles.cantidad) || 1;
    const precioUnitario = preciosPorTipo[tipo][tamano];
    const precioTotal = precioUnitario * cantidad;
    
    let descripcion = '';
    if (tipo === 'lasagna' || tipo === 'pantalone') {
      descripcion = `${tiposProducto.find(t => t.tipo === tipo)?.nombre} ${tamano}`;
    } else if (tipo === 'granizado_maiz' || tipo === 'granizado_maduro') {
      descripcion = `${tiposProducto.find(t => t.tipo === tipo)?.nombre}`;
    } else {
      descripcion = `${tiposProducto.find(t => t.tipo === tipo)?.nombre} ${tamano} - Sabores: ${pedidoActual.detalles.ingredientes.join(', ')}`;
    }
    
    pedido.push({
      categoria: tiposProducto.find(t => t.tipo === tipo)?.nombre || '',
      tamano: tamano,
      descripcion: descripcion,
      cantidad: cantidad,
      precio: precioTotal,
      bebidas: pedidoActual.bebida || []
    });
  }
  
  renderResumenPedido();
}

function renderResumenPedido() {
  let resumen = `<div class="form-pizza"><h3>Resumen de tu pedido</h3>`;
  
  if (pedido.length === 0) {
    resumen += `<p>No has agregado nada al pedido aún.</p>`;
  } else {
    resumen += `<ul class="lista-pedido">`;
    pedido.forEach((item, idx) => {
      resumen += `<li>${item.cantidad} x ${item.descripcion} ($${item.precio.toLocaleString()})`;
      if (item.bebidas && item.bebidas.length > 0) {
        resumen += `<br><small>Bebidas: ${item.bebidas.map(b => b.nombre).join(', ')}</small>`;
      }
      resumen += ` <button data-idx="${idx}" class="btn-eliminar">Eliminar</button></li>`;
    });
    resumen += `</ul>`;
    
    const total = pedido.reduce((acc, item) => {
      let itemTotal = item.precio;
      if (item.bebidas) {
        itemTotal += item.bebidas.reduce((bebidaAcc, bebida) => bebidaAcc + bebida.precio, 0);
      }
      return acc + itemTotal;
    }, 0);
    
    resumen += `<p class="total-pedido"><strong>Total: $${total.toLocaleString()}</strong></p>`;
  }
  
  resumen += `
    <div class="botones-pedido">
      <button id="btn-nuevo-pedido">Agregar más productos</button>
      ${pedido.length > 0 ? '<button id="btn-enviar-pedido-final" class="btn-enviar">Enviar pedido por WhatsApp</button>' : ''}
    </div>
  </div>`;
  
  menuDinamico.innerHTML = resumen;
  
  // Event listeners
  document.getElementById('btn-nuevo-pedido').onclick = renderSelectorTipoProducto;
  
  if (pedido.length > 0) {
    document.getElementById('btn-enviar-pedido-final').onclick = enviarPedidoWhatsApp;
    
    // Botones eliminar
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        pedido.splice(idx, 1);
        renderResumenPedido();
      };
    });
  }
}

function enviarPedidoWhatsApp() {
  if (pedido.length === 0) {
    alert('Agrega al menos un producto al pedido.');
    return;
  }
  
  // Mostrar formulario de contacto
  mostrarFormularioContacto();
}

function mostrarFormularioContacto() {
  const menuDiv = document.getElementById('menu-dinamico');
  menuDiv.innerHTML = `
    <div class="form-pizza">
      <h3>Datos de entrega</h3>
      <form id="form-contacto-pedido">
        <label for="nombre-pedido">Nombre:</label>
        <input type="text" id="nombre-pedido" name="nombre" required>
        
        <label for="direccion-pedido">Dirección:</label>
        <input type="text" id="direccion-pedido" name="direccion" required>
        
        <label for="telefono-pedido">Teléfono:</label>
        <input type="text" id="telefono-pedido" name="telefono" required>
        
        <div class="resumen-pedido-final">
          <h4>Resumen del pedido:</h4>
          <ul>
            ${pedido.map(item => {
              let descripcion = `${item.cantidad} x ${item.descripcion} ($${item.precio.toLocaleString()})`;
              if (item.bebidas && item.bebidas.length > 0) {
                descripcion += `<br><small>Bebidas: ${item.bebidas.map(b => b.nombre).join(', ')}</small>`;
              }
              return `<li>${descripcion}</li>`;
            }).join('')}
          </ul>
          <p><strong>Total: $${pedido.reduce((acc, item) => {
            let itemTotal = item.precio;
            if (item.bebidas) {
              itemTotal += item.bebidas.reduce((bebidaAcc, bebida) => bebidaAcc + bebida.precio, 0);
            }
            return acc + itemTotal;
          }, 0).toLocaleString()}</strong></p>
        </div>
        
        <button type="submit">Enviar pedido por WhatsApp</button>
        <button type="button" id="btn-volver-menu">Volver al menú</button>
      </form>
    </div>
  `;
  
  // Event listeners
  document.getElementById('form-contacto-pedido').addEventListener('submit', function(e) {
    e.preventDefault();
    procesarEnvioWhatsApp();
  });
  
  document.getElementById('btn-volver-menu').addEventListener('click', function() {
    renderResumenPedido();
  });
}

function procesarEnvioWhatsApp() {
  const nombre = document.getElementById('nombre-pedido').value.trim();
  const direccion = document.getElementById('direccion-pedido').value.trim();
  const telefono = document.getElementById('telefono-pedido').value.trim();
  
  if (!nombre || !direccion || !telefono) {
    alert('Por favor, completa todos los datos de contacto.');
    return;
  }
  
  let mensaje = `¡Hola! Quiero hacer un pedido:\n\n`;
  pedido.forEach(item => {
    mensaje += `• ${item.cantidad} x ${item.descripcion}\n`;
    mensaje += `  Precio: $${item.precio.toLocaleString()}\n`;
    if (item.bebidas && item.bebidas.length > 0) {
      mensaje += `  Bebidas: ${item.bebidas.map(b => b.nombre).join(', ')}\n`;
    }
    mensaje += `\n`;
  });
  
  const total = pedido.reduce((acc, item) => {
    let itemTotal = item.precio;
    if (item.bebidas) {
      itemTotal += item.bebidas.reduce((bebidaAcc, bebida) => bebidaAcc + bebida.precio, 0);
    }
    return acc + itemTotal;
  }, 0);
  
  mensaje += `💰 Total: $${total.toLocaleString()}\n\n`;
  mensaje += `📋 Datos de entrega:\n`;
  mensaje += `👤 Nombre: ${nombre}\n`;
  mensaje += `📍 Dirección: ${direccion}\n`;
  mensaje += `📞 Teléfono: ${telefono}`;
  
  // Número de WhatsApp de la pizzería (modificar por el real)
  const numero = '573001234567';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  
  // Limpiar pedido después de enviar
  pedido = [];
  alert('¡Pedido enviado! Gracias por tu compra.');
  renderSelectorTipoProducto();
}

// Manejo del formulario de contacto/pedido original
const form = document.getElementById('form-contacto');
if (form) {
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
}

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

// Coverflow Carousel Logic para múltiples carruseles con auto-play
function initCoverflowCarousels() {
  const containers = document.querySelectorAll('.coverflow-carousel-container');
  containers.forEach(container => {
    const carousel = container.querySelector('.coverflow-carousel');
    const slides = Array.from(carousel.querySelectorAll('.coverflow-slide'));
    const prevBtn = container.querySelector('.coverflow-btn-prev');
    const nextBtn = container.querySelector('.coverflow-btn-next');
    
    if (!carousel || slides.length === 0) return;
    
    let current = 0;
    let autoplay = null;
    
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
    
    function next() {
      goTo(current + 1);
    }
    
    function prev() {
      goTo(current - 1);
    }
    
    function startAutoplay() {
      if (autoplay) clearInterval(autoplay);
      autoplay = setInterval(next, 3500);
    }
    
    function stopAutoplay() {
      if (autoplay) clearInterval(autoplay);
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => { 
        prev(); 
        startAutoplay(); 
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => { 
        next(); 
        startAutoplay(); 
      });
    }
    
    // Pausar autoplay al pasar el mouse (solo en desktop)
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    updateSlides();
    startAutoplay();
  });
}

// Inicializar menú dinámico
renderSelectorTipoProducto(); 