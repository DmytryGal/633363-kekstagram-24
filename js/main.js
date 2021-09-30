/* Функция, возвращающая случайное целое число из переданного диапазона включительно*/

const getRandomInteger = (min, max) => {
  if (min < 0) {
    throw new Error('value min cannot be less than zero');
  }
  if (max < 0) {
    throw new Error('value max cannot be less than zero');
  }
  if (max <= min) {
    throw new Error('value max cannot be less or equal than min');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);

};
getRandomInteger(0, 15);

/*https://html5css.ru/js/js_random.php*/

/*Функция для проверки максимальной длины строки*/
const checkMaxStringleLength = (value, maxLength) => value.length <= maxLength;
checkMaxStringleLength('', 5);
