import {generatePhotos} from './data.js';
import {renderPictures} from './pictures.js';

const publicPhotos = generatePhotos();
const photos = publicPhotos;
renderPictures(photos);
