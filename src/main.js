import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { showWarning } from './js/toast';

const form = document.querySelector('.action-form');
const loader = document.querySelector('.loader');
export const gallery = document.querySelector('.gallery');

let currentQuery = '';

form.addEventListener('submit', handleSearchSubmit);

function handleSearchSubmit(event) {
  event.preventDefault();
  currentQuery = form.elements.query.value.trim();
  if (currentQuery === '') {
    return showWarning('Please enter a valid query!');
  }
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  fetchImages(currentQuery)
    .then(data => {
      if (data.hits.length > 0) {
        renderImages(data.hits);
      } else {
        showWarning('No results found for your search.');
      }
      loader.classList.add('is-hidden');
      form.reset();
      galleryLightbox.refresh();
    })
    .catch(error => {
      loader.classList.add('is-hidden');
      showWarning('Sorry, something went wrong. Please try again!');
    });
}

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
