'use strict';

// Функция для склонения слов
function declension(number, words) {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

function timeNewYear() {
  const timerDiv = document.querySelector('.timer');
  const newElem = document.createElement('p');
  newElem.classList.add('text');
  timerDiv.appendChild(newElem);

  const end = new Date('2025-12-31T00:00:00');

  const interval = setInterval(() => {
    const nowDate = new Date();
    const remainingTime = end - nowDate;
    if (remainingTime <= 0) {
      newElem.textContent = 'С Новым Годом!🎉';
      clearInterval(interval);
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const min = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const months = Math.floor(days / 30);

    const text =
      `${months} ${declension(months, ['месяц', 'месяца', 'месяцев'])}, ` +
      `${days} ${declension(days, ['день', 'дня', 'дней'])}, ` +
      `${hours} ${declension(hours, ['час', 'часа', 'часов'])}, ` +
      `${min} ${declension(min, ['минута', 'минуты', 'минут'])}, ` +
      `${seconds} ${declension(seconds, ['секунда', 'секунды', 'секунд'])}`;

    newElem.textContent = text;
  }, 1000);
}
timeNewYear();
