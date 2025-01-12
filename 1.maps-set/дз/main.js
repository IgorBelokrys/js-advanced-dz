'use strict';

let arr = [
  { id: 1, name: 'Ann' },
  { id: 2, name: 'John' },
  { id: 1, name: 'Ann' },
];

// let set = new Set(arr.map((item) => JSON.stringify(item)));
// let setObj = new Set([...set].map((item) => JSON.parse(item)));
// console.log(setObj);

let set = new Set();

let newArr = arr.map((elem) => {
  if (![...set].find((item) => item.id === elem.id)) {
    set.add(elem);
    return elem;
  } else {
    return false;
  }
});

console.log(set);
