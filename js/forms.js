import {isEscapeKey} from './utils.js';
const overlayElement = document.querySelector('.img-upload__overlay');
const cancelButtonElement = document.querySelector('#upload-cancel');
const imgUploadFileElement = document.querySelector('.img-upload__input ');


let closeHandler = undefined;


const closeModal = () =>{
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeHandler);
};

closeHandler = (evt) => {
  if (isEscapeKey(evt)&&evt.target.tagName!=='INPUT'&&evt.target.tagName!=='TEXTAREA') {

    evt.preventDefault();
    closeModal();

  }
};
const openModalEdit = () =>{
  imgUploadFileElement.addEventListener('input', ()=>{
    overlayElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', closeHandler);
    cancelButtonElement.addEventListener('click', () =>{
      closeModal();
    });
  });
};


export {openModalEdit};
