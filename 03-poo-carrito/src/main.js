// Gestion dinamica de carrito de la compra con POO y funciones contructoras

// OBJETIVOS
// - Agregar productos al carrito guardando nombre, cantidad y precio
// - Editar productos permitiendo cambiar la cantidad
// - Eliminar productos del carrito
// - Actualizar total a pagar dinamicamente

import { Cart } from "./components/Cart";

const cart = new Cart();
cart.loadLocalStorage();

function renderCart() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = `
    ${cart.products
      .map((product, index) => {
        return `<li data-id="${index}">${product.getAllInfo()}
          <button class="btn-edit" data-id="${index}">Editar</button>
          <button class="btn-delete" data-id="${index}">Eliminar</button>
        </li>`;
      })
      .join("")}`;
}

const handlerSubmit = (event) => {
  event.preventDefault();
  const productName = document.getElementById("product-name").value.trim();
  const productPrice = Number(document.querySelector("#product-price").value);
  const productAmount = Number(document.querySelector("#product-amount").value);
  // Validaciones
  if (!productName || productPrice < 0 || productAmount < 0) {
    alert("Debe completar todos los campos correctamente");
    return;
  }
  // Añadir producto al carrito
  cart.addProduct(productName, productAmount, productPrice);
  renderCart();
  event.target.reset();
};

const productOptions = (event) => {
  const index = Number(event.target.dataset.id);
  if (event.target.classList.contains("btn-delete")) {
    cart.deleteProduct(index);
    renderCart();
  }

  if (event.target.classList.contains("btn-edit")) {
    const newAmount = prompt(
      "Introduce la nueva canidad",
      cart.products[index].amount
    );
    if (newAmount && Number(newAmount) < 0) {
      alert("La cantidad introducida no es valida");
      return;
    }
    cart.editProductAmount(index, Number(newAmount));
    renderCart();
  }
};

function renderInterface() {
  const app = document.getElementById("app");

  app.innerHTML = `
  <h1>Carrito de Compra</h1>
  <form id="product-form">
  <input id="product-name" type="text" name="productName" placeholder="Nombre de producto">
  <input id="product-price" type="number" name="productPrice" placeholder="Precio">
  <input id="product-amount" type="number" name="productAmount" placeholder="Cantidad">
  <button type="submit">Agregar Producto</button>
  </form><br/>
  
  <div id="product-list"></div>
  `;

  document
    .getElementById("product-form")
    .addEventListener("submit", handlerSubmit);

  document
    .getElementById("product-list")
    .addEventListener("click", productOptions);

  renderCart();
}

// ------ INICIO APLICACION

renderInterface();
