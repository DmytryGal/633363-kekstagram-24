
import {isEscapeKey} from './utils.js';
const COMMENTS_PER_STEP = 5;
const bigPicture = document.querySelector('.big-picture');
const picturesList = document.querySelector('.pictures');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const commentsContainer = bigPicture.querySelector('.social__comments');

let closeHandler = undefined;

const closeModal = () =>{
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeHandler);
};

closeHandler = (evt) => {
  if (isEscapeKey(evt)&&evt.target.tagName!=='INPUT') {
    evt.preventDefault();
    closeModal();
  }
};
const createCommentElement = (comment) =>{
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
  return liElement;
};
const showComments = (comments) => {
  for (const comment of comments) {

    commentsContainer.appendChild(createCommentElement(comment));
  }
};
const renderComments = (comments) =>{
  const totalCommentCount = comments.length;
  commentsContainer.innerHTML = '';
  const showMoreButtonElement =  bigPicture.querySelector('.comments-loader');
  showMoreButtonElement.classList.remove('hidden');
  let commentCount = 0;
  const commentCountElement = bigPicture.querySelector('.social__comment-count') ;
  const showNextComments = () => {
    const commentsForShow = comments.splice(0, COMMENTS_PER_STEP);
    if(commentsForShow.length > 0){
      showComments(commentsForShow);
      commentCount += commentsForShow.length;


    }
    if(comments.length === 0){
      showMoreButtonElement.removeEventListener('click', showNextComments);
      showMoreButtonElement.classList.add('hidden');
    }
    commentCountElement.innerHTML = `${commentCount} из <span class="comments-count">${totalCommentCount}</span> комментариев`;
  };

  showMoreButtonElement.addEventListener('click', showNextComments);
  showNextComments();
};
const renderBigPicturePreview = (pictureData) => {


  bigPicture.querySelector('.big-picture__img > img').src = pictureData.url;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;


  renderComments(pictureData.comments);


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
