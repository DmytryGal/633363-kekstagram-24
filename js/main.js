import { generatePhotos } from './data.js';
import { renderPictures } from './pictures.js';
import {addOpenHandler} from './popup.js';
import { openModalEdit } from './forms.js';
import  {addHashTagsValidation} from './hashtags.js';
import { addCommentValidation } from './comments-upload.js';

const photos = generatePhotos();
renderPictures(photos);
addOpenHandler(photos);
openModalEdit();
addCommentValidation();
addHashTagsValidation();
