let cart = []; // Inicializa el carrito como un arreglo vacío

// Obtener referencias a elementos del DOM
const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.getElementById('cart-container');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Mostrar el contenedor del carrito al pasar el mouse sobre el ícono del carrito
cartIcon.addEventListener('mouseenter', () => {
  cartContainer.style.display = 'block';
});

// Ocultar el contenedor del carrito al salir de él
cartContainer.addEventListener('mouseleave', () => {
  cartContainer.style.display = 'none';
});

// Función para añadir un elemento al carrito
function añadircar(nombreElemento, precioElemento) {
  const item = { dormitorio: nombreElemento, precio: precioElemento };
  cart.push(item);
  actualizarCarrito(); // Actualiza el carrito en el DOM
  guardarCarritoEnLocalStorage(); // Guarda el carrito en localStorage después de cada cambio
}

// Función para eliminar un elemento del carrito
function eliminarcar(index) {
  cart.splice(index, 1);
  actualizarCarrito(); // Actualiza el carrito en el DOM
  guardarCarritoEnLocalStorage(); // Guarda el carrito en localStorage después de cada cambio
}

// Función para actualizar la visualización del carrito en el DOM
function actualizarCarrito() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.precio;
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <span>${item.dormitorio} - $${item.precio} CLP</span>
      <button class="btn btn-danger btn-sm remove-button">Eliminar</button>
    `;
    cartItems.appendChild(cartItem);

    // Añadir evento click al botón de eliminar
    const removeButton = cartItem.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      eliminarcar(index);
    });
  });

  cartTotal.innerHTML = `Total: $${total} CLP`;
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para cargar el carrito desde localStorage al cargar la página
function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem('cart');
  if (carritoGuardado) {
    cart = JSON.parse(carritoGuardado);
    actualizarCarrito(); // Actualiza el carrito en el DOM al cargar desde localStorage
  }
}

// Llamar a cargarCarritoDesdeLocalStorage al cargar la página para cargar el carrito previamente guardado
cargarCarritoDesdeLocalStorage();
