import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { showWarning } from './js/toast';

const form = document.querySelector('.action-form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.getElementById('load-more');
export const gallery = document.querySelector('.gallery');

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', handleSearchSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);

function handleSearchSubmit(event) {
  event.preventDefault();
  currentQuery = form.elements.query.value.trim();
  currentPage = 1; // Reset to the first page for a new search
  if (currentQuery === '') {
    return showWarning('Please enter a valid query!');
  }
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  fetchImages(currentQuery, currentPage)
    .then(data => {
      renderImages(data.hits);
      form.reset();
      loader.classList.add('is-hidden');
      loadMoreBtn.style.display = 'block';
      galleryLightbox.refresh();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      loader.classList.add('is-hidden');
      showWarning('Sorry, something went wrong. Please try again!');
    });
}

function loadMoreImages() {
  currentPage += 1;
  loader.classList.remove('is-hidden');

  fetchImages(currentQuery, currentPage)
    .then(data => {
      renderImages(data.hits, true); // Pass true to append images
      loader.classList.add('is-hidden');
      galleryLightbox.refresh();
    })
    .catch(error => {
      console.error('Error loading more images:', error);
      loader.classList.add('is-hidden');
      showWarning('Unable to load more images. Please try again later.');
    });
}

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
