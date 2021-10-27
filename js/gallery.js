/* eslint-disable no-console */
import {isEscapeKey} from './utils.js';
const bigPicture = document.querySelector('.big-picture');
const picture = document.querySelector('.pictures');
const closeBigPicture = document.querySelector('.big-picture__cancel');

const myFunction = () => {console.log('gkLDFJLSKDFJLSKF');};
document.addEventListener('click', myFunction);


const onBigPictures = (evt) => {
  console.log(evt.target);
  if (evt.target.closest('.pictures')){
    bigPicture.classList.remove('hidden');
    document.body.classList.remove('modal-open');
    const img = document.getElementById('image');
    console.log(img);
  }
  document.addEventListener('keydown', () => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
};
picture.addEventListener('click', onBigPictures);

closeBigPicture.addEventListener('click', () =>{
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.removeEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
