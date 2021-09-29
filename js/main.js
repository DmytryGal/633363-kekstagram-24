//Фунция Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = (min,max) => {
    if(min<max){return Math.floor(Math.random()*(max - min + 1) + min);} 
  else{return Math.floor(Math.random()*(min - max + 1) + max);}};
getRandomNumber(0,10);
//https://html5css.ru/js/js_random.php

//Функция для проверки максимальной длины строки
const getCompareStrings = (myString,resonString) =>{
  if(myString.length===resonString || myString.length<resonString){return true;}
  else {return false;}
};
getCompareStrings('',5);
