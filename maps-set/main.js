'use strict';

let a = { a: 1 };
let b = { b: 1 };
const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
console.log(map);
