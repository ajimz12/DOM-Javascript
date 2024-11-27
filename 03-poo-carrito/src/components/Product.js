export class Product {
  #price;

  constructor(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(price) {
    this.#price = price;
  }

  calculateTotal() {
    return this.amount * this.#price;
  }

  getAllInfo() {
    return `Producto: ${this.name}, Cantidad: ${
      this.amount
    }, Precio: ${this.getPrice()} , Total: ${this.calculateTotal()}`;
  }
}
