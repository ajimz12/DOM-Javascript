import {
  Empleado,
  EmpleadoClase,
  EmpleadoFreeLanceClase,
} from "./helpers/ejercicio03";
import { UsuarioClase, GestionUsuariosClase } from "./helpers/ejercicio07";

// Ejercicio 3
// console.log("Ejercicio 3: ");

// // Funciones constructoras
// console.log("Funciones contructoras");
// const empleado1 = new Empleado("Pepe", 30, "senior");
// empleado1.getInfo();

// // const empleado3 = new EmpleadoFreeLance("AAAA", 40, 50);
// // const empleado4 = new EmpleadoFreeLance("AAAA", 5, 100);
// // empleado4.getInfo();

// // Clases
// console.log("Clases: ");
// const empleadoClass = new EmpleadoClase("paco", 20, "junior");
// empleadoClass.getInfo();

// const empleadoClaseFree = new EmpleadoFreeLanceClase("jorgito", 40, 30);
// empleadoClaseFree.getInfo();

// Ejercicio 7
console.log("Ejercicio 7");

(async function () {
  const gestorUsuarios = new GestionUsuariosClase();
  const usuarios = await gestorUsuarios.fetchUsuarios();

  const app = document.getElementById("app");
  const h1element = document.createElement("h1");
  h1element.textContent = "Gestión de usuarios";
  app.appendChild(h1element);
  const divBuscarUsuarios = document.createElement("div");
  divBuscarUsuarios.id = "buscar-usuarios";
  app.appendChild(divBuscarUsuarios);
  divBuscarUsuarios.innerHTML = `
  <form id="form-usuarios">
  <input id="nombre-buscar" type="text" placeholder="Buscar usuario" />
  <button class="btn-buscar"id="btn-buscar">Buscar</button>
  </form>`;

  const divListUsuarios = document.createElement("div");
  divListUsuarios.id = "lista-usuarios";
  app.appendChild(divListUsuarios);
  divListUsuarios.innerHTML = gestorUsuarios.usuarios
    .map((usuario, index) => {
      return `
      <li data-id=${index}>
      ${usuario.getInfo()}
      <button class="btn-eliminar" data-id=${index}>Eliminar</button>
      </li>
      `;
    })
    .join("");

  document
    .getElementById("lista-usuarios")
    .addEventListener("click", handlerEliminar);

  document
    .querySelector(".btn-buscar")
    .addEventListener("submit", handlerBuscar);

  function handlerEliminar(event) {
    if (event.target.classList.contains("btn-eliminar")) {
      event.preventDefault();
      const index = event.target.dataset.id;
      gestorUsuarios.usuarios.splice(index, 1);

      divListUsuarios.innerHTML = gestorUsuarios.usuarios
        .map((usuario, index) => {
          return `
      <li data-id=${index}>
      ${usuario.getInfo()}
      <button class="btn-eliminar" data-id=${index}>Eliminar</button>
      </li>
      `;
        })
        .join("");
    }
  }

  function handlerBuscar(event) {
    event.preventDefault();
    alert("Buscar usuario");
  }
})();

// Renderizar en el DOM un formulario que permita a traves de un input y el boton de buscar, buscar por nombre los usuarios de mi clase gestorUsuariosClase. Ademas, pintaremos en un DIV llamado 'listaUsuarios' a traves de <li> la data de todos los usuarios (menos ID), junto con el boton de borrar (icono papelera).
