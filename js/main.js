/* Функция, возвращающая случайное целое число из переданного диапазона включительно*/
const getRandomInteger = (min,max) => {
  if (min < max && min >= 0) {
    return Math.floor(Math.random()*(max - min + 1) + min);
  }
  else{
    throw new Error ('Значение min не должно быть меньше нуля');
  }
};
getRandomInteger(0,10);
/*https://html5css.ru/js/js_random.php*/

/*Функция для проверки максимальной длины строки*/
const checkMaxStringleLength = (value,maxString) =>{
  if(value.length <= maxString ){
    return true;
  }
  else {
    return false;
  }
};
checkMaxStringleLength('',5);
