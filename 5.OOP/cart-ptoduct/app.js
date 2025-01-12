'use strict';

const product1 = { id: 1, name: 'bread', count: 1 };
const product2 = { id: 2, name: 'kola', count: 2 };

const Cart = function () {
  this.products = [];
};

const name = 'John';

function makeGreeting(name) {
  let count = 0;
  return function (greet) {
    count++;
    console.log(greet + ' ' + name + ' ' + count);
  };
}

Cart.prototype.addProduct = function (product) {
  let productIsHere = this.products.find((elem) => elem.id === product.id);
  if (productIsHere) {
    return;
  }
  this.products.push(product);
};

Cart.prototype.increaseAmount = function (id) {
  let product = this.products.find((elem) => elem.id === id);
  if (product) {
    product.count++;
  }
};

Cart.prototype.decreaseAmount = function (id) {
  let product = this.products.find((elem) => elem.id === id);
  if (product) {
    product.count--;
    if (product.count === 0) {
      let index = this.products.indexOf(product);
      this.products.splice(index, 1);
    }
  }
};
const cart = new Cart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.decreaseAmount(1);
cart.increaseAmount(2);
console.log(cart);
