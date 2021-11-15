const MAX_COMMENT_LENGTH = 10;
const commentUploadImg = document.querySelector('.text__description');
const buttonSubmit = document.querySelector('.img-upload__submit');

const commentValidity = () =>{
  commentUploadImg.addEventListener('input', () =>{
    const commentLength = commentUploadImg.value.length;
    if(commentLength > MAX_COMMENT_LENGTH){
      commentUploadImg.setCustomValidity(`Удалите лишние ${commentLength - MAX_COMMENT_LENGTH} симв.`);
      buttonSubmit.disabled = true;
    }else{
      commentUploadImg.setCustomValidity('');
      buttonSubmit.disabled = false;
    }
    commentUploadImg.reportValidity();
  });
};
export {commentValidity};
