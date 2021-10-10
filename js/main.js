//Фунция Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = (min, max) => {
  if (min < max) { return Math.floor(Math.random() * (max - min + 1) + min); }
  else { return Math.floor(Math.random() * (min - max + 1) + max); }
};

//https://html5css.ru/js/js_random.php

//Функция для проверки максимальной длины строки
const getCompareStrings = (myString, resonString) => {
  if (myString.length === resonString || myString.length < resonString) { return true; }
  else { return false; }
};


const DESCRIPTION = ['как-то так', 'ни то ни се', 'не понятно',];
const MESSAGE = ['Всё отлично!', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!']


const USER_NAME = ['Иван', 'Лина', 'Потап', 'Ирэн', 'Михон', 'Кузмич', 'Димон']

const fotoNumb = getRandomNumber(1, 25);
const avaNumb = getRandomNumber(1, 6);

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)]
};
const generatePhoto = (id) => {
  return {
    id: '',
    url: 'photos/fotoNumb.jpg,',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomNumber(15, 250),
    comments: generateComment,
  };
};
const generatePhotos = () => {
  const photos = getRandomNumber(1, 25);
  for (let i = 1; i <= photos; i++) {
    photos.push(generatePhoto(i));
  };
};

const generateComment = (id) => {
  return {
    id: '',
    avatar: 'img/avatar-avaNumb.svg',
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(USER_NAME),
  };
};
const generateComments = () => {
  const comments = getRandomNumber(0, 25);
  for (let i = 1; i <= comments; i++) {
    comments.push(generateComment(i));
  }
  return comments;
};
const publicPhoto = generateComment;
