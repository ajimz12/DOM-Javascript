export function Product(name, price, stock) {
  let _name = name;
  let _price = price;
  let _stock = stock;

  this.getName = function () {
    return _name;
  };

  this.getPrice = function () {
    return _price;
  };

  this.getStock = function () {
    return _stock;
  };

  this.setName = function (name) {
    _name = name;
  };

  this.setPrice = function (price) {
    _price = price;
  };

  this.setStock = function (stock) {
    _stock = stock;
  };

  // Actualizar Stock
  this.updateStock = function (quantity) {
    _stock += quantity;
    return `Stock actualizado a ${this.getStock()}`;
  };

  // Obtener info del prodducto
  this.getInfo = function () {
    return `Nombre: ${this.getName()}, Precio: ${this.getPrice()}, Stock: ${this.getStock()}`;
  };
}
