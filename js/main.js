import { generatePhotos } from './data.js';
import { renderPictures } from './pictures.js';
import {addOpenHandler} from './popup.js';

const photos = generatePhotos();
renderPictures(photos);
addOpenHandler(photos);

