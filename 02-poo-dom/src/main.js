// 1. Sistema de usuarios que puedan iniciar, cerrar sesion y actualizar perfil

import { Product } from "./components/Product";

// SOLUCION CONSTRUCTORAS

// function User(name, email, password) {
//   this.name = name;
//   this.email = email;
//   let _password = password; // Privada

//   // Metodos publicos
//   this.login = function (email, password) {
//     if (this.email === email && _password === password) {
//       return `Bienvenido ${name}`;
//     }
//     return "Login incorrecto";
//   };

//   this.updateEmail = function (newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${newEmail}`;
//   };
// }

// // Crear usuario
// const user1 = new User("Juan", "juan@example.com", "123456");

// // Mostrarlo en DOM
// const app = document.getElementById("app");

// function renderUser() {
//   app.innerHTML = `
//   <h2>Usuario ${user1.name}</h2>
//   <p>Email: ${user1.email}</p>
//   <button id="btnLogin">Iniciar Sesión</button>`;

//   const btnLogin = document.getElementById("btnLogin");
//   btnLogin.addEventListener("click", () => {
//     alert(user1.login("user1@example.com", "123456"));
//   });
// }

// // SOLUCION CLASES

// class User {
//   // Variables
//   #password; // Privada
//   nombre;
//   email;

//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.#password = password; // Privada
//   }

//   login(email, password) {
//     if (this.email === email && this.#password === password) {
//       return `Bienvenido ${this.name}`;
//     }
//     return "Login incorrecto";
//   }

//   updateEmail(newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${newEmail}`;
//   }
// }

// const userClass = new User("UsuarioClase", "user2@gmail.com", "123456");

// Implementar un modelo de producto con funciones constructoras y clases que permita obtener informacion del producto, actualizar stock, debiendo registrar nombre, precio y stock.

// --- PRODUCTO ---

const products = [
  new Product("producto1", 100, 10),
  new Product("producto2", 200, 5),
  new Product("producto3", 300, 15),
];

// Renderizar Productos
const app = document.getElementById("app");

function renderProducts() {
  app.innerHTML = `
  <h2>Productos</h2>
  ${products
    .map((product, index) => {
      return `<li>${product.getInfo()} <button class="btn-actualizar" data-index="${index}"
      })">Actualizar Stock</button></li>
      `;
    })
    .join("")}
  `;
}

document.querySelectorAll(".btn-actualizar").forEach((btn) => {
  btn.addEventListener("click", () => {
    // product.updateStock(newStock);
    alert("Actualizar Stock");
  });
});

renderProducts();
