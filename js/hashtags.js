const hashTagsInput = document.querySelector('.text__hashtags');
const MIN_HASHTAGES_LENGTH = 2;
const MAX_HASHTAGES_LENGTH = 20;
const buttonSubmit = document.querySelector('.img-upload__submit');

hashTagsInput.addEventListener('input', (evt) => {
  const regexp = /^#[\w\d]+$/g;
  const hashtags = evt.target.value.split(' ');

  for (const hashTag of hashtags) {


    if (!hashTag.startsWith('#')) {
      hashTagsInput.setCustomValidity('ХэшТэг должен начинаться с #');
      buttonSubmit.disabled = true;
    } else if (hashTag.startsWith('##')) {
      hashTagsInput.setCustomValidity('Удалите второй символ #');
      buttonSubmit.disabled = true;
    } else if (hashTag.length < MIN_HASHTAGES_LENGTH) {
      hashTagsInput.setCustomValidity(`Ещё ${MIN_HASHTAGES_LENGTH - hashTag.length} симв.`);
      buttonSubmit.disabled = true;
    } else if (hashTag.length > MAX_HASHTAGES_LENGTH) {
      hashTagsInput.setCustomValidity(`Удалите лишние ${hashTag.length - MAX_HASHTAGES_LENGTH} симв.`);
      buttonSubmit.disabled = true;

    }else if (new Set(hashtags).size !== hashtags.length){

      hashTagsInput.setCustomValidity('ХэшТэги не должны повторяться');
      buttonSubmit.disabled = true;
    }
    else if(!regexp.test(hashTag)) {
      hashTagsInput.setCustomValidity('ХэшТэг не может содержать спецсимволы');
      buttonSubmit.disabled = true;
    }
    else {
      hashTagsInput.setCustomValidity('');

      buttonSubmit.disabled = false;
    }
    hashTagsInput.reportValidity();
  }
});


