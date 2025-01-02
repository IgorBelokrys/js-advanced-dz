'use strict';

function convert(sum, initialCurency, currencyConvert) {
  const allCurrency = [
    { name: 'USD', mult: 1 },
    { name: 'RUB', mult: 1 / 60 },
    { name: 'EUR', mult: 1.1 },
  ];

  const fromCurrency = allCurrency.find((item) => item.name === initialCurency);
  if (!fromCurrency) {
    return null;
  }
  const toCurrency = allCurrency.find((item) => item.name === currencyConvert);
  if (!toCurrency) {
    return null;
  }
  const result = (sum * fromCurrency.mult) / toCurrency.mult;
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currencyConvert,
  }).format(result);
}

console.log(convert(100, 'USD', 'RUB'));
