const renderPictures = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content;
  const template = templateFragment.querySelector('a');
  const pictureFragment = document.createDocumentFragment();

  photos.forEach(({ url, likes, comments }) => {
    const picturesElement = template.cloneNode(true);
    picturesElement.querySelector('.picture__img').src = url;
    picturesElement.querySelector('.picture__likes').textContent = likes;
    picturesElement.querySelector('.picture__comments').textContent = comments;
    pictureFragment.appendChild(picturesElement);
  });

  picturesContainer.appendChild(pictureFragment);
};
export {renderPictures};
