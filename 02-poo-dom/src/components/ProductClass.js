export class Product {
  #name;
  #price;
  #stock;

  constructor(name, price, stock) {
    this.#name = name;
    this.#price = price;
    this.#stock = stock;
  }

  // Getters
  getName() {
    return this.#name;
  }
  getPrice() {
    return this.#price;
  }
  getStock() {
    return this.#stock;
  }

  // Setters
  setName(name) {
    this.#name = name;
  }
  setPrice(price) {
    this.#price = price;
  }
  setStock(stock) {
    this.#stock = stock;
  }

  // Actualizar Stock
  updateStock(quantity) {
    this.#stock += quantity;
    return `Stock actualizado a ${this.#stock}`;
  }

  // Obtener info
  getInfo() {
    return `Producto: ${this.#name}, Precio: ${this.#price}, Stock: ${
      this.#stock
    }`;
  }
}
