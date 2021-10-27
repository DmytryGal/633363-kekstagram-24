
import {isEscapeKey} from './utils.js';
const bigPicture = document.querySelector('.big-picture');
const picture = document.querySelector('.pictures');
const closeBigPicture = document.querySelector('.big-picture__cancel');


picture.addEventListener('click', () =>{

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

});


closeBigPicture.addEventListener('click', (evt) =>{
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.addEventListener('keydown', () => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
});

document.removeEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
