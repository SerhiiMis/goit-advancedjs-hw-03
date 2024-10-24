import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { showWarning } from './js/toast';

const form = document.querySelector('.action-form');
const loader = document.querySelector('.loader');
export const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSearchSubmit);

function handleSearchSubmit(event) {
  event.preventDefault();
  const query = form.elements.query.value.trim();
  if (query === '') {
    return showWarning('Please enter a valid query!');
  }
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  fetchImages(query)
    .then(data => {
      renderImages(data.hits);
      form.reset();
      loader.classList.add('is-hidden');
      galleryLightbox.refresh();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      loader.classList.add('is-hidden');
      showWarning('Sorry, something went wrong. Please try again!');
    });
  form.reset();
}

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryLightbox.on('show.simplelightbox', function () {});

galleryLightbox.on('close.simplelightbox', function () {});
