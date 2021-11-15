import { generatePhotos } from './data.js';
import { renderPictures } from './pictures.js';
import {addOpenHandler} from './popup.js';
import { openModalEdit } from './forms.js';
import  './hashtags.js';
import { commentValidity } from './comments-upload.js';

const photos = generatePhotos();
renderPictures(photos);
addOpenHandler(photos);
openModalEdit();
commentValidity();
