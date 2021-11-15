import {isEscapeKey} from './utils.js';
const editForms = document.querySelector('.img-upload__overlay');
const closeEditForms = document.querySelector('#upload-cancel');
const imgUploadFile = document.querySelector('.img-upload__input ');


let closeHandler = undefined;


const closeModal = () =>{
  editForms.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeHandler);
};

closeHandler = (evt) => {
  if (isEscapeKey(evt)) {

    evt.preventDefault();
    closeModal();

  }
};
const openModalEdit = () =>{
  imgUploadFile.addEventListener('click', ()=>{
    editForms.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', closeHandler);
    closeEditForms.addEventListener('click', () =>{
      closeModal();
    });
  });
};


export {openModalEdit};
