'use strict';

const options = {
  style: 'currency',
  currency: 'RUB',
  currencyDisplay: 'code',
};

console.log(
  new Intl.NumberFormat('ru-RU', {
    style: 'unit',
    unit: 'celsius',
  }).format(30)
);
