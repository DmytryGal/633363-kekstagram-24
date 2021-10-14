import {getRandomNumber, addZero} from './utils.js';

const PHOTOS_COUNT = 25;
const DESCRIPTIONS = ['как-то так', 'ни то ни се', 'не понятно'];
const MESSAGES = ['Всё отлично!', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
const USER_NAMES = ['Иван', 'Лина', 'Потап', 'Ирэн', 'Михон', 'Кузмич', 'Димон'];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const generateComment =(id) => {
  const avaNumb = getRandomNumber(1, 6);
  return {
    id,
    avatar: `img/avatar-${addZero(avaNumb)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(USER_NAMES),
  };
};

const generateComments = () => {
  const comments = [];
  for (let index = 1; index <= PHOTOS_COUNT; index++) {
    comments.push(generateComment(index));
  }
  return comments;
};
const generatePhoto = (id) => {
  const fotoNumb = getRandomNumber(1, 25);
  return {
    id,
    url: `photos/${addZero(fotoNumb)}.jpg,`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 250),
    comments: generateComments(),
  };
};
const generatePhotos = () => {
  const photos = [];
  for (let index = 1; index <= PHOTOS_COUNT; index++) {
    photos.push(generatePhoto(index));
    return photos;
  }
};

export {generatePhotos};
