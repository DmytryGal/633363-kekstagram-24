import {generatePhotos} from './data.js';
const picturesConteiner = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');
const PictureFragment = document.createDocumentFragment();

const renderPictures = generatePhotos();

renderPictures.forEach(({ url, likes, comments }) => {
  const picturesElement = template.cloneNode(true);
  picturesElement.querySelector('.picture__img').src = url;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesElement.querySelector('.picture__comments').textContent = comments;
  PictureFragment.appendChild(picturesElement);
});

picturesConteiner.appendChild(PictureFragment);
