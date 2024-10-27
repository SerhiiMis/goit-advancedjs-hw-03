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

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSearchSubmit);

function handleSearchSubmit(event) {
  event.preventDefault();
  currentQuery = form.elements.query.value.trim();

  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  if (currentQuery === '') {
    loader.classList.add('is-hidden');
    return showWarning('Please enter a valid query!');
  }

  fetchImages(currentQuery)
    .then(data => {
      if (data.hits.length === 0) {
        showWarning('No results found. Please try another search term.');
      } else {
        renderImages(data.hits);
        galleryLightbox.refresh();
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      showWarning('Sorry, something went wrong. Please try again!');
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });

  form.reset();
}
