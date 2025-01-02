'use strict';

function age(date) {
  let nowDate = new Date();
  let userDate = new Date(date);
  let userAge = nowDate.getFullYear() - userDate.getFullYear();

  if (userDate.getFullYear() > nowDate.getFullYear()) {
    return false;
  }

  if (userAge < 14) {
    return false;
  }
  return true;
}

console.log(age('2010/4/13'));
