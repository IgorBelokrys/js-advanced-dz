'use strict';

const user = {
  name: 'Ann',
  birthday: '12/2/1996',
};

function isBirthday(obj) {
  let nowDate = new Date();
  let userDate = new Date(obj.birthday);

  if (
    nowDate.getMonth() == userDate.getMonth() &&
    nowDate.getDate() == userDate.getDate()
  ) {
    return true;
  }
  return false;
}

console.log(isBirthday(user));
