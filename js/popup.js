
import {isEscapeKey} from './utils.js';
const bigPicture = document.querySelector('.big-picture');
const picturesList = document.querySelector('.pictures');
const closeBigPicture = document.querySelector('.big-picture__cancel');

let closeHandler = undefined;

const closeModal = () =>{
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeHandler);
};

closeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const renderBigPicturePreview = (pictureData) => {

  bigPicture.querySelector('.big-picture__img > img').src = pictureData.url;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  const commentsContainer = bigPicture.querySelector('.social__comments');
  commentsContainer.innerHTML = '';

  for (const comment of pictureData.comments) {
    const liElement = document.createElement('li');
    liElement.classList.add('social__comment');
    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.width=35;
    img.height=35;
    img.src = comment.avatar;
    img.alt = comment.name;
    liElement.appendChild(img);
    const pElement = document.createElement('p');
    pElement.classList.add('social__text');
    pElement.textContent = comment.message;
    liElement.appendChild(pElement);
    commentsContainer.appendChild(liElement);
  }

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeHandler);
};

const addOpenHandler = (picturesData) => {
  picturesList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const id = parseInt(evt.target.dataset.id, 10);
      const pictureData = picturesData.find((it) => it.id === id);
      if (pictureData) {
        renderBigPicturePreview(pictureData);
      }
    }
  });
};


closeBigPicture.addEventListener('click', () =>{
  closeModal();

});

export {addOpenHandler};
