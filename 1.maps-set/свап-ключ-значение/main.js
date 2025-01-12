'use strict';

let weatherMap = new Map([
  ['london', 22],
  ['paris', 31],
  ['moscow', 10],
]);

// мой вариант

// const enteries = [...weatherMap];
// weatherMap.clear();

// enteries.forEach(([key, value]) => weatherMap.set(value, key));

// console.log(weatherMap);

weatherMap = new Map([...weatherMap].map((el) => el.reverse()));

console.log(weatherMap);
