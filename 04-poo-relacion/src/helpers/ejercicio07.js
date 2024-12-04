// Ejercicio 7: Gestión de Usuarios desde una API

const urlApi = import.meta.env.VITE_URL;

// Funciones constructoras
export function Usuario(id, nombre, email, rol) {
  this.id = id;
  this.nombre = nombre;
  this.email = email;
  this.rol = rol;
}

export function GestionUsuarios() {
  this.usuarios = [];
}

Usuario.prototype.getInfo = function () {
  console.log(
    `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}`
  );
};

GestionUsuarios.prototype.fetchUsuarios = async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Error al conectar con la API");
    }

    const data = await response.json();

    this.usuarios = data.map(({ id, name, email }) => {
      return new Usuario(id, name, email, "usuario");
    });

    console.log(this.usuarios);
    return this.usuarios;
  } catch (error) {
    throw new Error("Error al cargar usuarios:", error);
  }
};

GestionUsuarios.prototype.guardarLocalStorage = function () {
  localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
};

GestionUsuarios.prototype.cargarLocalStorage = function () {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  if (!usuarios) {
    throw new Error("No se encuentran usuarios");
  }
  this.usuarios = usuarios.map(
    (usuario) =>
      new Usuario(usuario.id, usuario.nombre, usuario.email, usuario.rol)
  );
};

// Clases
export class UsuarioClase {
  constructor(id, nombre, email, rol) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
  }
  getInfo() {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}`;
  }
}

export class GestionUsuariosClase {
  constructor() {
    this.usuarios = [];
  }

  async fetchUsuarios() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Error al conectar con la API");
      }

      const data = await response.json();
      this.usuarios = data.map(({ id, name, email }) => {
        return new UsuarioClase(id, name, email, "usuario");
      });
      return this.usuarios;
    } catch (error) {
      throw new Error("Error al obtener usuarios de la API");
    }
  }

  guardarLocalStorage() {
    localStorage.setItem("usuariosClase", JSON.stringify(this.usuarios));
  }

  cargarLocalStorage() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (!usuarios) {
      throw new Error("No se encuentran usuarios");
    }
    this.usuarios = usuarios.map(
      (usuario) =>
        new UsuarioClase(usuario.id, usuario.nombre, usuario.email, usuario.rol)
    );
  }
}
