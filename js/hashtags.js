const hashTagsInput = document.querySelector('.text__hashtags');
const MIN_HASHTAGES_LENGTH = 2;
const MAX_HASHTAGES_LENGTH = 20;
const buttonSubmit = document.querySelector('.img-upload__submit');

const addHashTagsValidation = () => {
  hashTagsInput.addEventListener('input', (evt) => {
    const hashtags = evt.target.value.toLowerCase().split(' ');

    const errors = [];
    if (new Set(hashtags).size !== hashtags.length) {
      errors.push('ХэшТэги не должны повторяться');
    }

    for (const hashTag of hashtags) {
      if (!hashTag.startsWith('#')) {
        errors.push('ХэшТэг должен начинаться с #');
      }

      if (hashTag.startsWith('##')) {
        errors.push('Удалите второй символ #');
      }

      if (hashTag.length < MIN_HASHTAGES_LENGTH) {
        errors.push(`Ещё ${MIN_HASHTAGES_LENGTH - hashTag.length} симв.`);
      }

      if (hashTag.length > MAX_HASHTAGES_LENGTH) {
        errors.push(`Удалите лишние ${hashTag.length - MAX_HASHTAGES_LENGTH} симв.`);
      }

      if (errors.length === 0 && !/^#[\w\dЁёА-я]+$/g.test(hashTag)) {
        errors.push('ХэшТэг не может содержать спецсимволы');
      }

      if (errors.length > 0) {
        break;
      }
    }

    if (errors.length > 0) {
      hashTagsInput.setCustomValidity(errors.join('\r\n'));
      buttonSubmit.disabled = true;
    } else {
      hashTagsInput.setCustomValidity('');
      buttonSubmit.disabled = false;
    }

    hashTagsInput.reportValidity();
  });
};

export { addHashTagsValidation };
