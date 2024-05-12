// Lista para almacenar los productos en el carrito
const cartItems = [];

// Función para agregar un producto al carrito
function addToCart(productName) {
  cartItems.push(productName);
}

// Función para mostrar los productos en el modal del carrito
function showCart() {
  const cartModal = document.getElementById("cart-modal");
  const cartItemList = document.getElementById("cart-items");
  cartItemList.innerHTML = ""; // Limpiar la lista de elementos del carrito

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItemList.appendChild(li);
  });

  cartModal.style.display = "block"; // Mostrar el modal del carrito
}

// Capturar eventos de clic en los botones de "Comprar"
const buyButtons = document.querySelectorAll("button");
buyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const productName =
      this.parentNode.querySelector("p:first-child").textContent;
    addToCart(productName); // Añadir el producto al carrito
  });
});

// Evento de clic para ver el carrito
document.getElementById("header").addEventListener("click", function (event) {
  if (event.target.className === "carrito") {
    showCart();
  }
});

// Cerrar el modal del carrito al hacer clic en la X
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("cart-modal").style.display = "none";
});
