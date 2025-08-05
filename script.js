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

// Función para cargar el pedido desde localStorage
function cargarPedido() {
  const pedidoGuardado = localStorage.getItem('pippersPedido');
  return pedidoGuardado ? JSON.parse(pedidoGuardado) : [];
}

// Función para guardar el pedido en localStorage
function guardarPedido() {
  localStorage.setItem('pippersPedido', JSON.stringify(pedido));
}

let pedido = cargarPedido();

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
    <div class="form-pizza-moderno">
      <div class="selector-header">
        <div class="selector-icono">🍕</div>
        <h3 class="selector-titulo">¿Qué tipo de producto deseas?</h3>
        <p class="selector-subtitulo">Elige tu opción favorita para comenzar tu pedido</p>
      </div>
      
      <div class="selector-tipo-producto-moderno">
        ${tiposProducto.map(producto => `
          <div class="producto-card" data-tipo="${producto.tipo}">
            <div class="producto-card-content">
              <div class="producto-icono-grande">${producto.icono}</div>
              <div class="producto-info">
                <h4 class="producto-nombre-moderno">${producto.nombre}</h4>
                <div class="producto-descripcion">${getProductoDescripcion(producto.tipo)}</div>
              </div>
              <div class="producto-arrow">→</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.querySelectorAll('.producto-card').forEach(card => {
    card.onclick = () => {
      pedidoActual = { 
        producto: card.getAttribute('data-tipo'), 
        detalles: {}, 
        bebida: null 
      };
      renderSelectorTamanoProducto();
    };
  });
}

// Función auxiliar para obtener descripciones de productos
function getProductoDescripcion(tipo) {
  const descripciones = {
    clasica: 'Pizzas tradicionales con sabores clásicos',
    especial: 'Pizzas gourmet con ingredientes especiales',
    premium: 'Nuestras pizzas más exclusivas y premium',
    lasagna: 'Deliciosas lasañas caseras',
    pantalone: 'Pizzas estilo pantalone únicas',
    granizado_maiz: 'Granizados refrescantes de maíz',
    granizado_maduro: 'Granizados dulces de maduro',
    bebidas: 'Bebidas naturales y gaseosas'
  };
  return descripciones[tipo] || 'Producto delicioso';
}

// Función auxiliar para obtener iconos de bebidas
function getBebidaIcono(tipo) {
  const iconos = {
    jugos: '🧃',
    limonadas: '🍋',
    gaseosa: '🥤',
    simple: '🥤'
  };
  return iconos[tipo] || '🥤';
}

// Función auxiliar para obtener descripciones de bebidas
function getBebidaDescripcion(tipo) {
  const descripciones = {
    jugos: 'Jugos naturales frescos',
    limonadas: 'Limonadas refrescantes',
    gaseosa: 'Bebidas gaseosas',
    simple: 'Bebida refrescante'
  };
  return descripciones[tipo] || 'Bebida deliciosa';
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
      { key: 'pequena', label: 'Pequeña', icono: '🍽️', descripcion: 'Porción individual perfecta' },
      { key: 'grande', label: 'Grande', icono: '🍽️', descripcion: 'Porción familiar abundante' }
    ];
  } else if (tipo === 'granizado_maiz' || tipo === 'granizado_maduro') {
    tamanosDisponibles = [
      { key: 'unica', label: 'Única', icono: '🥤', descripcion: 'Tamaño estándar refrescante' }
    ];
  } else {
    tamanosDisponibles = [
      { key: 'personal', label: 'Personal', icono: '🍕', descripcion: '4 porciones - Ideal para uno' },
      { key: 'pequena', label: 'Pequeña', icono: '🍕', descripcion: '6 porciones - Para compartir' },
      { key: 'mediana', label: 'Mediana', icono: '🍕', descripcion: '8 porciones - Familia pequeña' },
      { key: 'grande', label: 'Grande', icono: '🍕', descripcion: '10 porciones - Familia completa' },
      { key: 'extragrande', label: 'Extragrande', icono: '🍕', descripcion: '12 porciones - Fiesta' }
    ];
  }
  
  menuDinamico.innerHTML = `
    <div class="form-pizza-moderno">
      <div class="selector-header">
        <div class="selector-icono">📏</div>
        <h3 class="selector-titulo">¿Qué tamaño prefieres?</h3>
        <p class="selector-subtitulo">Elige el tamaño perfecto para tu pedido</p>
      </div>
      
      <div class="selector-tamano-moderno">
        ${tamanosDisponibles.map(tamano => `
          <div class="tamano-card" data-tamano="${tamano.key}">
            <div class="tamano-card-content">
              <div class="tamano-icono-grande">${tamano.icono}</div>
              <div class="tamano-info">
                <h4 class="tamano-nombre-moderno">${tamano.label}</h4>
                <div class="tamano-descripcion">${tamano.descripcion}</div>
                <div class="tamano-precio-moderno">$${preciosPorTipo[tipo][tamano.key].toLocaleString()}</div>
              </div>
              <div class="tamano-arrow">→</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="selector-botones">
        <button id="btn-volver-tipo" class="btn-secundario">
          <span>←</span>
          Volver
        </button>
      </div>
    </div>
  `;
  
  document.querySelectorAll('.tamano-card').forEach(card => {
    card.onclick = () => {
      pedidoActual.detalles.tamano = card.getAttribute('data-tamano');
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
    <div class="form-pizza-moderno">
      <div class="selector-header">
        <div class="selector-icono">🍕</div>
        <h3 class="selector-titulo">Elige tus sabores favoritos</h3>
        <p class="selector-subtitulo">Selecciona de ${regla.min} a ${regla.max} sabores para tu pizza</p>
      </div>
      
      <div class="selector-sabores-pizza-moderno">
        ${sabores.map((sabor, i) => `
          <div class="sabor-pizza-card" data-sabor="${sabor}">
            <div class="sabor-pizza-card-content">
              <div class="sabor-pizza-checkbox">
                <input type="checkbox" class="chk-ingrediente" value="${sabor}" data-index="${i}">
                <span class="checkbox-custom-pizza"></span>
              </div>
              <div class="sabor-pizza-icono">🍕</div>
              <div class="sabor-pizza-info">
                <h4 class="sabor-pizza-nombre">${sabor}</h4>
                <div class="sabor-pizza-descripcion">Sabor delicioso y fresco</div>
              </div>
              <div class="sabor-pizza-arrow">→</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="sabor-pizza-cantidad-container">
        <label class="cantidad-label">Cantidad:</label>
        <div class="cantidad-input-container">
          <input type="number" id="cantidad-pizza" min="1" value="1" class="cantidad-input-moderno">
        </div>
      </div>
      
      <div class="selector-botones">
        <button id="btn-continuar-ingredientes" class="btn-principal">
          <span>✓</span>
          Continuar
        </button>
        <button id="btn-volver-tamano" class="btn-secundario">
          <span>←</span>
          Volver
        </button>
      </div>
      
      <div id="msg-error-ingredientes" class="mensaje-estado"></div>
    </div>
  `;
  
  const checkboxes = document.querySelectorAll('.chk-ingrediente');
  const saborCards = document.querySelectorAll('.sabor-pizza-card');
  
  function actualizarEstadoCheckboxes() {
    const seleccionados = document.querySelectorAll('.chk-ingrediente:checked');
    const cantidadSeleccionados = seleccionados.length;
    
    checkboxes.forEach((cb, index) => {
      const card = cb.closest('.sabor-pizza-card');
      const customCheckbox = cb.nextElementSibling;
      
      if (cb.checked) {
        // Los seleccionados siempre están habilitados
        cb.disabled = false;
        card.classList.remove('disabled');
        customCheckbox.style.backgroundColor = 'var(--azul-pipers)';
        customCheckbox.style.borderColor = 'var(--azul-pipers)';
      } else {
        // Los no seleccionados se deshabilitan si ya se alcanzó el máximo
        if (cantidadSeleccionados >= regla.max) {
          cb.disabled = true;
          card.classList.add('disabled');
          customCheckbox.style.backgroundColor = '#e9ecef';
          customCheckbox.style.borderColor = '#dee2e6';
        } else {
          cb.disabled = false;
          card.classList.remove('disabled');
          customCheckbox.style.backgroundColor = '#fff';
          customCheckbox.style.borderColor = '#dee2e6';
        }
      }
    });
    
    // Actualizar mensaje de estado
    const msgElement = document.getElementById('msg-error-ingredientes');
    if (cantidadSeleccionados < regla.min) {
      msgElement.textContent = `Selecciona al menos ${regla.min} sabor${regla.min > 1 ? 'es' : ''} (${cantidadSeleccionados}/${regla.max})`;
      msgElement.className = 'mensaje-estado mensaje-advertencia';
    } else if (cantidadSeleccionados > regla.max) {
      msgElement.textContent = `Máximo ${regla.max} sabores permitidos (${cantidadSeleccionados}/${regla.max})`;
      msgElement.className = 'mensaje-estado mensaje-error';
    } else {
      msgElement.textContent = `¡Perfecto! ${cantidadSeleccionados} sabor${cantidadSeleccionados > 1 ? 'es' : ''} seleccionado${cantidadSeleccionados > 1 ? 's' : ''} (${cantidadSeleccionados}/${regla.max})`;
      msgElement.className = 'mensaje-estado mensaje-exito';
    }
  }
  
  // Event listeners para las tarjetas de sabores
  saborCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // No activar si se hace clic en el checkbox directamente
      if (e.target.type === 'checkbox') {
        return;
      }
      
      const checkbox = this.querySelector('.chk-ingrediente');
      const seleccionados = document.querySelectorAll('.chk-ingrediente:checked');
      const cantidadSeleccionados = seleccionados.length;
      
      // Si intenta seleccionar más del máximo, no permitir
      if (!checkbox.checked && cantidadSeleccionados >= regla.max) {
        return;
      }
      
      checkbox.checked = !checkbox.checked;
      
      // Disparar el evento change del checkbox
      const event = new Event('change');
      checkbox.dispatchEvent(event);
    });
  });
  
  // Event listeners para los checkboxes
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const seleccionados = document.querySelectorAll('.chk-ingrediente:checked');
      const cantidadSeleccionados = seleccionados.length;
      
      // Si intenta seleccionar más del máximo, no permitir
      if (!cb.checked && cantidadSeleccionados >= regla.max) {
        cb.checked = false;
        return;
      }
      
      // Actualizar el estado de todos los checkboxes
      actualizarEstadoCheckboxes();
    });
  });
  
  // Inicializar el estado
  actualizarEstadoCheckboxes();
  
  document.getElementById('btn-continuar-ingredientes').onclick = () => {
    const seleccionados = Array.from(document.querySelectorAll('.chk-ingrediente:checked')).map(cb => cb.value);
    if (seleccionados.length < regla.min) {
      const msgElement = document.getElementById('msg-error-ingredientes');
      msgElement.textContent = `Debes seleccionar al menos ${regla.min} sabor${regla.min > 1 ? 'es' : ''}.`;
      msgElement.className = 'mensaje-estado mensaje-error';
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
    <div class="form-pizza-moderno">
      <div class="selector-header">
        <div class="selector-icono">🥤</div>
        <h3 class="selector-titulo">Selecciona tus bebidas</h3>
        <p class="selector-subtitulo">Elige las bebidas que acompañarán tu pedido</p>
      </div>
      
      <div class="selector-bebidas-moderno">
        ${bebidasDisponibles.map((b, i) => `
          <div class="bebida-card" data-index="${i}">
            <div class="bebida-card-content">
              <div class="bebida-checkbox">
                <input type="checkbox" class="chk-bebida" value="${b.nombre}" data-tipo="${b.tipo || 'simple'}" data-index="${i}">
                <div class="checkbox-custom"></div>
              </div>
              <div class="bebida-icono-grande">${getBebidaIcono(b.tipo)}</div>
              <div class="bebida-info">
                <h4 class="bebida-nombre-moderno">${b.nombre}</h4>
                <div class="bebida-descripcion">${getBebidaDescripcion(b.tipo)}</div>
                <div class="bebida-precio-moderno">
                  ${b.tipo === 'jugos' ? `$${b.tipos[0].precio.toLocaleString()} - $${b.tipos[1].precio.toLocaleString()}` : 
                    b.tipo === 'limonadas' ? `$${b.precio.toLocaleString()}` :
                    `$${b.precio.toLocaleString()}`}
                </div>
              </div>
              <div class="bebida-arrow">→</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="bebidas-cantidad-container">
        <label class="cantidad-label">Cantidad de bebidas:</label>
        <div class="cantidad-input-container">
          <input type="number" id="cantidad-bebidas" min="1" value="1" class="cantidad-input-moderno">
        </div>
      </div>
      
      <div class="selector-botones">
        <button id="btn-volver-bebidas" class="btn-secundario">
          <span>←</span>
          Volver
        </button>
        <button id="btn-continuar-bebidas" class="btn-principal">
          <span>🥤</span>
          Continuar
        </button>
      </div>
    </div>
  `;
  
  // Event listeners para checkboxes principales
  document.querySelectorAll('.chk-bebida').forEach(cb => {
    cb.addEventListener('change', function() {
      const tipo = this.getAttribute('data-tipo');
      const index = parseInt(this.getAttribute('data-index'));
      
      console.log('Checkbox principal change event - tipo:', tipo, 'index:', index, 'checked:', this.checked);
      
      if (this.checked && (tipo === 'jugos' || tipo === 'limonadas')) {
        console.log('Mostrando selector de sabores para:', tipo);
        mostrarSelectorSabores(tipo, index);
      } else if (!this.checked && (tipo === 'jugos' || tipo === 'limonadas')) {
        console.log('Limpiando selector de sabores para:', tipo);
        limpiarSaboresSeleccionados(tipo, index);
      }
      
      // Actualizar la apariencia visual del checkbox custom
      const bebidaCard = this.closest('.bebida-card');
      const checkboxCustom = bebidaCard.querySelector('.checkbox-custom');
      if (checkboxCustom) {
        if (this.checked) {
          checkboxCustom.style.backgroundColor = 'var(--dorado-pipers)';
          checkboxCustom.style.borderColor = 'var(--dorado-pipers)';
        } else {
          checkboxCustom.style.backgroundColor = '#ffffff';
          checkboxCustom.style.borderColor = 'var(--azul-pipers)';
        }
      }
    });
  });
  
  // Event listeners para las tarjetas de bebidas
  document.querySelectorAll('.bebida-card').forEach(card => {
    card.addEventListener('click', function(e) {
      console.log('Bebida card clickeada, target:', e.target.tagName, 'class:', e.target.className);
      
      // No activar si se hace clic en el checkbox directamente o en elementos dentro del selector de sabores
      if (e.target.type === 'checkbox' || e.target.closest('.selector-sabores-moderno') || e.target.classList.contains('selector-sabores-moderno')) {
        console.log('Click ignorado - checkbox o selector de sabores');
        return;
      }
      
      // Solo verificar si el click está dentro del área del selector de sabores
      // No bloquear el click si está en el área principal de la tarjeta
      const selectorSabores = this.querySelector('.selector-sabores-moderno');
      if (selectorSabores && e.target.closest('.selector-sabores-moderno')) {
        console.log('Click ignorado - dentro del selector de sabores');
        return;
      }
      
      const checkbox = this.querySelector('.chk-bebida');
      const wasChecked = checkbox.checked;
      checkbox.checked = !wasChecked;
      
      console.log('Checkbox principal cambiado de', wasChecked, 'a', checkbox.checked);
      
      // Si se está deseleccionando, limpiar inmediatamente
      if (!checkbox.checked) {
        const tipo = checkbox.getAttribute('data-tipo');
        const index = parseInt(checkbox.getAttribute('data-index'));
        if (tipo === 'jugos' || tipo === 'limonadas') {
          console.log('Deselección detectada, limpiando sabores inmediatamente');
          limpiarSaboresSeleccionados(tipo, index);
        }
      }
      
      // Disparar el evento change del checkbox
      const event = new Event('change');
      checkbox.dispatchEvent(event);
    });
  });
  
  document.getElementById('btn-continuar-bebidas').onclick = () => {
    const bebidasMarcadas = document.querySelectorAll('.chk-bebida:checked');
    
    if (bebidasMarcadas.length === 0) {
      alert('Por favor selecciona al menos una bebida.');
      return;
    }
    
    const seleccionadas = [];
    let hayError = false;
    
    console.log('Bebidas marcadas:', bebidasMarcadas.length);
    
    bebidasMarcadas.forEach(cb => {
      if (hayError) return;
      
      const tipo = cb.getAttribute('data-tipo');
      const index = parseInt(cb.getAttribute('data-index'));
      const bebida = bebidasDisponibles[index];
      
      if (tipo === 'jugos') {
        const bebidaCard = cb.closest('.bebida-card');
        const selectorSabores = bebidaCard.querySelector('.selector-sabores-moderno');
        
        if (selectorSabores) {
          console.log('Procesando selector de sabores para jugos');
          const todosSabores = selectorSabores.querySelectorAll('.chk-sabor-jugo');
          const todosTipos = selectorSabores.querySelectorAll('.chk-tipo-jugo');
          console.log('Total de checkboxes de sabores encontrados:', todosSabores.length);
          console.log('Total de checkboxes de tipos encontrados:', todosTipos.length);
          
          const saboresSeleccionados = Array.from(selectorSabores.querySelectorAll('.chk-sabor-jugo:checked')).map(s => s.value);
          const tiposSeleccionados = Array.from(selectorSabores.querySelectorAll('.chk-tipo-jugo:checked')).map(t => t.value);
          
          console.log('Sabores seleccionados:', saboresSeleccionados);
          console.log('Tipos seleccionados:', tiposSeleccionados);
          
          if (saboresSeleccionados.length === 0 || tiposSeleccionados.length === 0) {
            alert('Por favor selecciona al menos un sabor y un tipo para los jugos.');
            hayError = true;
            return;
          }
          
          console.log('Jugos seleccionados - Sabores:', saboresSeleccionados, 'Tipos:', tiposSeleccionados);
          
          seleccionadas.push({
            nombre: bebida.nombre,
            tipo: 'jugos',
            sabores: saboresSeleccionados,
            tipos: tiposSeleccionados,
            bebida: bebida
          });
        }
      } else if (tipo === 'limonadas') {
        const bebidaCard = cb.closest('.bebida-card');
        const selectorSabores = bebidaCard.querySelector('.selector-sabores-moderno');
        
        if (selectorSabores) {
          console.log('Procesando selector de sabores para limonadas');
          const todosSabores = selectorSabores.querySelectorAll('.chk-sabor-limonada');
          console.log('Total de checkboxes de sabores de limonada encontrados:', todosSabores.length);
          
          const saboresSeleccionados = Array.from(selectorSabores.querySelectorAll('.chk-sabor-limonada:checked')).map(s => s.value);
          
          console.log('Sabores de limonada seleccionados:', saboresSeleccionados);
          
          if (saboresSeleccionados.length === 0) {
            alert('Por favor selecciona al menos un sabor para las limonadas.');
            hayError = true;
            return;
          }
          
          console.log('Limonadas seleccionadas - Sabores:', saboresSeleccionados);
          
          seleccionadas.push({
            nombre: bebida.nombre,
            tipo: 'limonadas',
            sabores: saboresSeleccionados,
            precio: bebida.precio,
            bebida: bebida
          });
        }
      } else {
        seleccionadas.push({
          nombre: bebida.nombre,
          tipo: 'simple',
          precio: bebida.precio,
          bebida: bebida
        });
      }
    });
    
    if (hayError || seleccionadas.length === 0) {
      return;
    }
    
    console.log('Seleccionadas finales:', seleccionadas);
    
    pedidoActual.detalles.bebidas = seleccionadas;
    pedidoActual.detalles.cantidad = document.getElementById('cantidad-bebidas').value;
    agregarAlPedido();
  };
  
  document.getElementById('btn-volver-bebidas').onclick = renderSelectorTipoProducto;
}

function mostrarSelectorSabores(tipo, index) {
  const bebida = bebidasDisponibles[index];
  const checkbox = document.querySelector(`.chk-bebida[data-tipo="${tipo}"][data-index="${index}"]`);
  const bebidaCard = checkbox.closest('.bebida-card');
  
  let contenidoSabores = '';
  
  if (tipo === 'jugos') {
    contenidoSabores = `
      <div class="selector-sabores-moderno" data-bebida-index="${index}">
        <div class="sabores-header">
          <h4>Sabores disponibles:</h4>
          <button class="btn-limpiar-seleccion" onclick="limpiarSeleccionBebida('${tipo}', ${index})">
            ✕ Limpiar selección
          </button>
        </div>
        <div class="sabores-grid">
          <div class="sabores-columna">
            <h5>Sabores:</h5>
            ${bebida.sabores.map(sabor => `
              <label class="sabor-checkbox-moderno">
                <input type="checkbox" class="chk-sabor-jugo" data-bebida-index="${index}" value="${sabor}">
                <span class="checkbox-custom-sabor"></span>
                <span class="sabor-texto">${sabor}</span>
              </label>
            `).join('')}
          </div>
          <div class="sabores-columna">
            <h5>Tipo:</h5>
            ${bebida.tipos.map(tipo => `
              <label class="sabor-checkbox-moderno">
                <input type="checkbox" class="chk-tipo-jugo" data-bebida-index="${index}" value="${tipo.nombre}" data-precio="${tipo.precio}">
                <span class="checkbox-custom-sabor"></span>
                <span class="sabor-texto">${tipo.nombre} ($${tipo.precio.toLocaleString()})</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (tipo === 'limonadas') {
    contenidoSabores = `
      <div class="selector-sabores-moderno" data-bebida-index="${index}">
        <div class="sabores-header">
          <h4>Sabores disponibles:</h4>
          <button class="btn-limpiar-seleccion" onclick="limpiarSeleccionBebida('${tipo}', ${index})">
            ✕ Limpiar selección
          </button>
        </div>
        <div class="sabores-grid">
          <div class="sabores-columna">
            ${bebida.sabores.map(sabor => `
              <label class="sabor-checkbox-moderno">
                <input type="checkbox" class="chk-sabor-limonada" data-bebida-index="${index}" value="${sabor}">
                <span class="checkbox-custom-sabor"></span>
                <span class="sabor-texto">${sabor}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  // Remover selector anterior si existe
  const selectorAnterior = bebidaCard.querySelector('.selector-sabores-moderno');
  if (selectorAnterior) {
    console.log('Removiendo selector anterior antes de crear uno nuevo');
    // Remover todos los event listeners antes de eliminar
    const newSelector = selectorAnterior.cloneNode(true);
    selectorAnterior.parentNode.replaceChild(newSelector, selectorAnterior);
    newSelector.remove();
  }
  
  // Agregar nuevo selector
  bebidaCard.insertAdjacentHTML('beforeend', contenidoSabores);
  console.log('Selector de sabores agregado al DOM');
  console.log('Contenido HTML generado:', contenidoSabores);
  
  // Agregar event listeners para los checkboxes de sabores
  const selectorSabores = bebidaCard.querySelector('.selector-sabores-moderno');
  console.log('Selector de sabores encontrado:', selectorSabores);
  if (selectorSabores) {
    console.log('HTML del selector de sabores:', selectorSabores.outerHTML);
  }
  if (selectorSabores) {
    // Marcar el selector como activo
    selectorSabores.setAttribute('data-active', 'true');
    
    // Prevenir que los clicks en el selector se propaguen al bebida-card
    selectorSabores.addEventListener('click', function(e) {
      e.stopPropagation();
      console.log('Click en selector de sabores - propagación detenida');
    });
    
    // Event listeners específicos para los checkboxes de sabores
    const checkboxesSabores = selectorSabores.querySelectorAll('input[type="checkbox"]');
    console.log('Checkboxes de sabores encontrados:', checkboxesSabores.length);
    
    checkboxesSabores.forEach((checkbox, index) => {
      console.log(`Configurando checkbox ${index}:`, checkbox.value, checkbox.className);
      
      // Event listener para el checkbox oculto
      checkbox.addEventListener('change', function(e) {
        e.stopPropagation();
        console.log('Checkbox de sabor cambiado:', this.value, 'checked:', this.checked, 'class:', this.className);
      });
      
      // Event listener para el label completo (área clickeable)
      const label = checkbox.closest('.sabor-checkbox-moderno');
      if (label) {
        console.log(`Configurando label para checkbox ${index}:`, label);
        
        label.addEventListener('click', function(e) {
          console.log('Click en label detectado:', checkbox.value);
          e.stopPropagation();
          e.preventDefault();
          
          // Toggle el checkbox manualmente
          const nuevoEstado = !checkbox.checked;
          checkbox.checked = nuevoEstado;
          
          // Actualizar la apariencia visual inmediatamente
          const checkboxCustom = label.querySelector('.checkbox-custom-sabor');
          if (checkboxCustom) {
            if (nuevoEstado) {
              checkboxCustom.style.backgroundColor = 'var(--dorado-pipers)';
              checkboxCustom.style.borderColor = 'var(--dorado-pipers)';
            } else {
              checkboxCustom.style.backgroundColor = '#ffffff';
              checkboxCustom.style.borderColor = 'var(--azul-pipers)';
            }
          }
          
          // Disparar el evento change
          const changeEvent = new Event('change', { bubbles: true });
          checkbox.dispatchEvent(changeEvent);
          
          console.log('Label de sabor clickeado:', checkbox.value, 'nuevo estado:', checkbox.checked);
        });
        
        // Event listener específico para el checkbox custom (área visual)
        const checkboxCustom = label.querySelector('.checkbox-custom-sabor');
        if (checkboxCustom) {
          console.log(`Configurando checkbox custom para checkbox ${index}:`, checkboxCustom);
          
          checkboxCustom.addEventListener('click', function(e) {
            console.log('Click en checkbox custom detectado:', checkbox.value);
            e.stopPropagation();
            e.preventDefault();
            
            // Toggle el checkbox manualmente
            const nuevoEstado = !checkbox.checked;
            checkbox.checked = nuevoEstado;
            
            // Actualizar la apariencia visual inmediatamente
            if (nuevoEstado) {
              checkboxCustom.style.backgroundColor = 'var(--dorado-pipers)';
              checkboxCustom.style.borderColor = 'var(--dorado-pipers)';
            } else {
              checkboxCustom.style.backgroundColor = '#ffffff';
              checkboxCustom.style.borderColor = 'var(--azul-pipers)';
            }
            
            // Disparar el evento change
            const changeEvent = new Event('change', { bubbles: true });
            checkbox.dispatchEvent(changeEvent);
            
            console.log('Checkbox custom clickeado:', checkbox.value, 'nuevo estado:', checkbox.checked);
          });
        } else {
          console.log(`No se encontró checkbox custom para checkbox ${index}`);
        }
      } else {
        console.log(`No se encontró label para checkbox ${index}`);
      }
    });
    
    // Event listener para toda el área del selector
    const saboresGrid = selectorSabores.querySelector('.sabores-grid');
    if (saboresGrid) {
      saboresGrid.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Click en grid de sabores - propagación detenida');
      });
    }
  }
}

// Función global para limpiar selección de bebida (llamada desde el botón)
function limpiarSeleccionBebida(tipo, index) {
  console.log('Función global limpiarSeleccionBebida llamada para:', tipo, 'index:', index);
  
  // Desmarcar el checkbox principal
  const checkbox = document.querySelector(`.chk-bebida[data-tipo="${tipo}"][data-index="${index}"]`);
  if (checkbox) {
    checkbox.checked = false;
    console.log('Checkbox principal desmarcado desde función global');
  }
  
  // Limpiar los sabores seleccionados
  limpiarSaboresSeleccionados(tipo, index);
}

function limpiarSaboresSeleccionados(tipo, index) {
  const checkbox = document.querySelector(`.chk-bebida[data-tipo="${tipo}"][data-index="${index}"]`);
  const bebidaCard = checkbox.closest('.bebida-card');
  
  console.log('Limpiando sabores seleccionados para:', tipo, 'index:', index);
  
  // Remover el selector de sabores
  const selectorSabores = bebidaCard.querySelector('.selector-sabores-moderno');
  if (selectorSabores) {
    console.log('Removiendo selector de sabores existente');
    // Remover todos los event listeners antes de eliminar
    const newSelector = selectorSabores.cloneNode(true);
    selectorSabores.parentNode.replaceChild(newSelector, selectorSabores);
    newSelector.remove();
  } else {
    console.log('No se encontró selector de sabores para remover');
  }
  
  // Asegurar que el checkbox principal esté desmarcado
  if (checkbox) {
    checkbox.checked = false;
    console.log('Checkbox principal desmarcado');
  }
  
  // Resetear cualquier estado interno que pueda estar causando el "congelamiento"
  setTimeout(() => {
    console.log('Reseteando estado interno después de limpiar sabores');
    // Forzar un re-render del estado visual
    const checkboxCustom = bebidaCard.querySelector('.checkbox-custom');
    if (checkboxCustom) {
      checkboxCustom.style.backgroundColor = '#ffffff';
      checkboxCustom.style.borderColor = 'var(--azul-pipers)';
    }
  }, 100);
}

function agregarAlPedido() {
  const tipo = pedidoActual.producto;
  
  if (tipo === 'bebidas') {
    // Manejo especial para bebidas
    const bebidas = pedidoActual.detalles.bebidas;
    const cantidad = parseInt(pedidoActual.detalles.cantidad) || 1;
    
    console.log('Procesando bebidas en agregarAlPedido:', bebidas);
    
    bebidas.forEach(bebida => {
      if (bebida.tipo === 'jugos') {
        // Para jugos, crear un ítem por cada combinación de sabor y tipo SELECCIONADOS
        // bebida.sabores y bebida.tipos ya contienen solo los seleccionados
        bebida.sabores.forEach(sabor => {
          bebida.tipos.forEach(tipoSeleccionado => {
            const tipoBebida = bebida.bebida.tipos.find(t => t.nombre === tipoSeleccionado);
            if (tipoBebida) {
              pedido.push({
                categoria: 'Bebidas',
                tamano: 'unidad',
                descripcion: `Jugo de ${sabor} ${tipoSeleccionado}`,
                cantidad: cantidad,
                cantidadOriginal: cantidad,
                precio: tipoBebida.precio,
                bebidas: []
              });
            }
          });
        });
      } else if (bebida.tipo === 'limonadas') {
        // Para limonadas, crear un ítem por cada sabor SELECCIONADO
        // bebida.sabores ya contiene solo los seleccionados
        bebida.sabores.forEach(sabor => {
          pedido.push({
            categoria: 'Bebidas',
            tamano: 'unidad',
            descripcion: `Limonada de ${sabor}`,
            cantidad: cantidad,
            cantidadOriginal: cantidad,
            precio: bebida.precio,
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
          cantidadOriginal: cantidad,
          precio: bebida.precio,
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
      cantidadOriginal: cantidad,
      precio: precioUnitario,
      bebidas: pedidoActual.bebida || []
    });
  }
  
  guardarPedido(); // Guardar el pedido en localStorage
  renderResumenPedido();
}

function renderResumenPedido() {
  const total = pedido.reduce((acc, item) => {
    let itemTotal = item.precio * item.cantidad;
    if (item.bebidas) {
      itemTotal += item.bebidas.reduce((bebidaAcc, bebida) => bebidaAcc + bebida.precio, 0);
    }
    return acc + itemTotal;
  }, 0);

  let resumen = `
    <div class="resumen-pedido-mejorado">
      <div class="resumen-header">
        <div class="resumen-icono">🛒</div>
        <h3>Resumen de tu Pedido</h3>
        <p>Revisa los productos que has seleccionado</p>
      </div>
      
      <div class="resumen-content">
        ${pedido.length === 0 ? `
          <div class="resumen-vacio">
            <div class="vacio-icono">🍕</div>
            <h4>Tu carrito está vacío</h4>
            <p>Agrega algunos productos deliciosos para comenzar tu pedido</p>
          </div>
        ` : `
          <div class="resumen-items">
            ${pedido.map((item, idx) => {
              let descripcion = `${item.descripcion}`;
              let precio = `$${(item.precio * item.cantidad).toLocaleString()}`;
              let bebidas = '';
              if (item.bebidas && item.bebidas.length > 0) {
                bebidas = `<div class="item-bebidas">🥤 ${item.bebidas.map(b => b.nombre).join(', ')}</div>`;
              }
                             return `
                 <div class="resumen-item">
                   <div class="item-info">
                     <div class="item-descripcion">${item.descripcion}</div>
                     ${bebidas}
                   </div>
                   <div class="item-actions">
                     <div class="item-cantidad-controls">
                       <button data-idx="${idx}" class="btn-cantidad btn-restar" ${item.cantidad <= 1 ? 'disabled' : ''}>
                         <span>➖</span>
                       </button>
                       <span class="cantidad-display">${item.cantidad}</span>
                       <button data-idx="${idx}" class="btn-cantidad btn-sumar">
                         <span>➕</span>
                       </button>
                     </div>
                     <div class="item-precio">${precio}</div>
                     <button data-idx="${idx}" class="btn-eliminar-mejorado">
                       <span>🗑️</span>
                     </button>
                   </div>
                 </div>
               `;
            }).join('')}
          </div>
          
          <div class="resumen-total">
            <div class="total-label">Total a pagar:</div>
            <div class="total-valor">$${total.toLocaleString()}</div>
          </div>
        `}
      </div>
      
      <div class="resumen-botones">
        <button id="btn-nuevo-pedido" class="btn-secundario">
          <span>➕</span>
          Agregar más productos
        </button>
        ${pedido.length > 0 ? `
          <button id="btn-enviar-pedido-final" class="btn-principal">
            <span>📱</span>
            Enviar pedido por WhatsApp
          </button>
        ` : ''}
      </div>
    </div>
  `;
  
  menuDinamico.innerHTML = resumen;
  
  // Event listeners
  document.getElementById('btn-nuevo-pedido').onclick = renderSelectorTipoProducto;
  
  if (pedido.length > 0) {
    document.getElementById('btn-enviar-pedido-final').onclick = enviarPedidoWhatsApp;
    
    // Botones eliminar
    document.querySelectorAll('.btn-eliminar-mejorado').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        pedido.splice(idx, 1);
        guardarPedido(); // Guardar el pedido en localStorage
        renderResumenPedido();
      };
    });
    
    // Controles de cantidad
    document.querySelectorAll('.btn-cantidad').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        const item = pedido[idx];
        
        if (btn.classList.contains('btn-sumar')) {
          item.cantidad++;
        } else if (btn.classList.contains('btn-restar') && item.cantidad > 1) {
          item.cantidad--;
        }
        
        // Guardar cantidad original si no existe
        if (!item.cantidadOriginal) {
          item.cantidadOriginal = item.cantidad;
        }
        
        guardarPedido(); // Guardar el pedido en localStorage
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
  const total = pedido.reduce((acc, item) => {
    let itemTotal = item.precio;
    if (item.bebidas) {
      itemTotal += item.bebidas.reduce((bebidaAcc, bebida) => bebidaAcc + bebida.precio, 0);
    }
    return acc + itemTotal;
  }, 0);

  menuDiv.innerHTML = `
    <div class="formulario-pedido-mejorado">
      <div class="formulario-header">
        <div class="formulario-icono">📋</div>
        <h3>Datos de Entrega</h3>
        <p>Completa tus datos para recibir tu pedido</p>
      </div>
      
      <div class="formulario-container">
        <div class="formulario-datos">
          <form id="form-contacto-pedido">
            <div class="form-group-mejorado">
              <label for="nombre-pedido">
                <span class="label-icon">👤</span>
                Nombre completo
              </label>
              <input type="text" id="nombre-pedido" name="nombre" required placeholder="Tu nombre completo">
            </div>
            
            <div class="form-group-mejorado">
              <label for="direccion-pedido">
                <span class="label-icon">📍</span>
                Dirección de entrega
              </label>
              <input type="text" id="direccion-pedido" name="direccion" required placeholder="Dirección completa para la entrega">
            </div>
            
            <div class="form-group-mejorado">
              <label for="telefono-pedido">
                <span class="label-icon">📞</span>
                Teléfono
              </label>
              <input type="tel" id="telefono-pedido" name="telefono" required placeholder="Tu número de teléfono">
            </div>
          </form>
        </div>
        
        <div class="resumen-pedido-mejorado">
          <div class="resumen-header">
            <div class="resumen-icono">🛒</div>
            <h4>Resumen del Pedido</h4>
          </div>
          
          <div class="resumen-items">
            ${pedido.map(item => {
              let descripcion = `${item.cantidad} x ${item.descripcion}`;
              let precio = `$${item.precio.toLocaleString()}`;
              let bebidas = '';
              if (item.bebidas && item.bebidas.length > 0) {
                bebidas = `<div class="item-bebidas">🥤 ${item.bebidas.map(b => b.nombre).join(', ')}</div>`;
              }
              return `
                <div class="resumen-item">
                  <div class="item-info">
                    <div class="item-descripcion">${descripcion}</div>
                    ${bebidas}
                  </div>
                  <div class="item-precio">${precio}</div>
                </div>
              `;
            }).join('')}
          </div>
          
          <div class="resumen-total">
            <div class="total-label">Total a pagar:</div>
            <div class="total-valor">$${total.toLocaleString()}</div>
          </div>
        </div>
      </div>
      
      <div class="formulario-botones">
        <button type="button" id="btn-volver-menu" class="btn-secundario">
          <span>⬅️</span>
          Volver al menú
        </button>
        <button type="submit" form="form-contacto-pedido" class="btn-principal">
          <span>📱</span>
          Enviar por WhatsApp
        </button>
      </div>
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
    mensaje += `  Precio: $${(item.precio * item.cantidad).toLocaleString()}\n`;
    if (item.bebidas && item.bebidas.length > 0) {
      mensaje += `  Bebidas: ${item.bebidas.map(b => b.nombre).join(', ')}\n`;
    }
    mensaje += `\n`;
  });
  
  const total = pedido.reduce((acc, item) => {
    let itemTotal = item.precio * item.cantidad;
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
  
  // Número de WhatsApp de la pizzería
  const numero = '573207182705';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  
  // Limpiar pedido después de enviar
  pedido = [];
  localStorage.removeItem('pippersPedido'); // Limpiar localStorage
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

// Navegación suave entre secciones
const links = document.querySelectorAll('nav a');
const secciones = ['inicio', 'menu', 'contacto'];

function mostrarSeccion(id) {
    secciones.forEach(sec => {
        const el = document.getElementById(sec);
        if (el) el.style.display = (sec === id) ? 'block' : 'none';
    });
    // Ya no hace scroll automático
}

// Aplicar la navegación a cualquier enlace con href="#menu" o href="#inicio" o href="#contacto"
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
            guardarPedido(); // Guardar el pedido en localStorage
            renderResumenPedido();
            mostrarSeccion('menu');
        });
    }
});

// Botón flotante para volver arriba
window.addEventListener('DOMContentLoaded', () => {
    const btnScrollTop = document.getElementById('btn-scroll-top');
    if (!btnScrollTop) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            btnScrollTop.style.display = 'flex';
        } else {
            btnScrollTop.style.display = 'none';
        }
    });
    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Inicializar menú dinámico
renderSelectorTipoProducto();

// Evento del carrito de compras
document.addEventListener('DOMContentLoaded', () => {
  const navbarCart = document.querySelector('.navbar-cart');
  if (navbarCart) {
    navbarCart.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Si hay productos en el pedido, mostrar el resumen
      if (pedido.length > 0) {
        mostrarSeccion('menu');
        renderResumenPedido();
      } else {
        // Si no hay productos, ir al menú normal
        mostrarSeccion('menu');
        renderSelectorTipoProducto();
      }
    });
  }
  
  // Evento para el botón "Realizar Pedido"
  const realizarPedidoBtn = document.getElementById('realizar-pedido');
  if (realizarPedidoBtn) {
    realizarPedidoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      mostrarSeccion('menu');
      renderSelectorTipoProducto();
    });
  }
}); 