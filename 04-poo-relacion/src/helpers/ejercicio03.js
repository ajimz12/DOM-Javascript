// Ejercicio 3: Sistema de Empleados y Nóminas

// Funciones constructoras

export function Empleado(nombre, edad, puesto) {
  this.nombre = nombre;
  this.edad = edad;
  this.puesto = puesto;

  Empleado.prototype.calcularSalario = function () {
    const salario = {
      junior: 1500,
      "semi-senior": 2000,
      senior: 3000,
    };

    return salario[this.puesto] || 0;
  };

  Empleado.prototype.getInfo = function () {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Puesto: ${
        this.puesto
      }, Salario: ${this.calcularSalario()}`
    );
  };
}

export function EmpleadoFreeLance(nombre, edad, tarifaHora) {
  Empleado.call(this, nombre, edad, "freelance");
  this.tarifaHora = tarifaHora;

  // Metodo compartido
  EmpleadoFreeLance.prototype = Object.create(Empleado.prototype);
  EmpleadoFreeLance.prototype.constructor = EmpleadoFreeLance;
}

EmpleadoFreeLance.prototype.calcularSalario = function (horas) {
  return horas * this.tarifaHora;
};

EmpleadoFreeLance.prototype.getInfo = function () {
  console.log(
    `Nombre: ${this.nombre}, Edad: ${this.edad}, Puesto: ${
      this.puesto
    }, Tarifa por hora: ${this.tarifaHora}, Salario: ${this.calcularSalario(
      this.tarifaHora
    )}`
  );
};

export class EmpleadoClase {
  constructor(nombre, edad, puesto) {
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
  }

  calcularSalario() {
    const salario = {
      junior: 1500,
      "semi-senior": 2000,
      senior: 3000,
    };
    return salario[this.puesto] || 0;
  }

  getInfo() {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Puesto: ${
        this.puesto
      }, Salario: ${this.calcularSalario()}`
    );
  }
}

export class EmpleadoFreeLanceClase extends EmpleadoClase {
  constructor(nombre, edad, tarifaHora) {
    super(nombre, edad, "freelance");
    this.tarifaHora = tarifaHora;
  }

  calcularSalario(horas) {
    return horas * this.tarifaHora;
  }

  getInfo() {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Puesto: ${
        this.puesto
      }, Tarifa por hora: ${this.tarifaHora}, Salario: ${this.calcularSalario(
        this.tarifaHora
      )}`
    );
  }
}
