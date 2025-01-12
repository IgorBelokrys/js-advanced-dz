'use strict';

const date = new Date();
let loc = navigator.language;

const options = {
  hour: 'numeric',
  minute: 'numeric',
};

console.log(new Intl.DateTimeFormat(loc).format(date));
