const getRandomNumber = (min, max) => {
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

const addZero = (num) => {
  if (num < 10) {
    num = `0${num}`;
  }
  return num;
};
//Функция для проверки максимальной длины строки
const getCompareStrings = (myString, resonString) => {
  if (myString.length === resonString || myString.length < resonString) {
    return true;
  }
  else {
    return false;
  }
};

export{getRandomNumber, addZero, getCompareStrings};
