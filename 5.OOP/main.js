'use strict';

const Books = {
  book: 'heroes',
  sale: false,
  price: 1000,
};

const heroes = Object.create(Books);

console.log(heroes.sale);
