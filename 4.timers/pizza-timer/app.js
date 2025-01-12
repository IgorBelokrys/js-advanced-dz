'use strict';

function pizzaTimer(time) {
  const options = {
    minute: 'numeric',
    second: 'numeric',
  };

  const interval = setInterval(() => {
    const timeFormat = new Intl.DateTimeFormat('ru-RU', options).format(
      time * 1000
    );
    console.log(timeFormat);
    time -= 1;

    if (time < 0) {
      clearInterval(interval);
      console.log('Пицца готова!🍕');
    }
  }, 1000);
}

pizzaTimer(3);
