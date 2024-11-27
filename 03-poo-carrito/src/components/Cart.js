import { Product } from "./Product";

export class Cart {
  constructor() {
    this.products = [];
  }

  /**
   *
   * @param {String} name
   * @param {Number} amount
   * @param {Number} price
   * @returns void
   */
  addProduct(name, amount, price) {
    this.products.push(new Product(name, amount, price));
    this.saveLocalStorage();
  }

  /**
   *
   * @param {Number} index
   * @returns void
   */
  deleteProduct(index) {
    this.products.splice(index, 1);
    this.saveLocalStorage();
  }

  /**
   *
   * @param {Number} index
   * @param {Number} amount
   * @returns void
   */
  editProductAmount(index, newAmount) {
    if (newAmount <= 0) {
      this.deleteProduct(index);
      return;
    }
    this.products[index].amount = newAmount;
    this.saveLocalStorage();
  }

  calculateTotalPrice() {
    return this.products.reduce(
      total,
      (product) => total + product.calculateTotal(),
      0
    );
  }

  saveLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.products));
  }

  loadLocalStorage() {
    if (localStorage.hasOwnProperty("cart")) {
      const dataCart = JSON.parse(localStorage.getItem("cart"));
      this.products = dataCart.map(
        (product) => new Product(product.name, product.amount, product.price)
      );
    }
  }
}
