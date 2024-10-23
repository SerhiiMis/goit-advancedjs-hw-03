import { gallery } from './constants';
import { showError } from './toast';

export function renderImages(images) {
  if (images.length === 0) {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }
  gallery.innerHTML = createGalleryMarkup(images);
}

const createGalleryMarkup = images =>
  images
    .map(
      image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      data-likes = "${image.likes}"
      data-views = "${image.views}"
      data-comments = "${image.comments}"
      data-downloads = "${image.downloads}"
      alt="${image.tags}"
    />
  </a>
  <ul class="stats">
  <li class="stats-item">
  <p  class="stats-item-header">Likes</p>
  <p class="stats-item-value">${image.likes}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Views</p>
  <p class="stats-item-value">${image.views}</p>
  </li>
    <li class="stats-item">
  <p class="stats-item-header">Comments</p>
  <p class="stats-item-value">${image.comments}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Downloads</p>
  <p class="stats-item-value">${image.downloads}</p>
  </li>
  </ul>
</li>
`
    )
    .join('');
