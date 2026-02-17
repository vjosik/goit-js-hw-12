import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const divLoader = document.querySelector('.loader-container');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGallery(images = []) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
            <a class="gallery-item-link" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" title=""></a>
                <ul class="info-list">
                        <li class="info-item">
                            <p class="info-title">Likes</p>
                            <p class="info-value">${likes}</p>
                        </li>

                        <li class="info-item">
                            <p class="info-title">Views</p>
                            <p class="info-value">${views}</p>
                        </li>

                        <li class="info-item">
                            <p class="info-title">Comments</p>
                            <p class="info-value">${comments}</p>
                        </li>

                        <li class="info-item">
                            <p class="info-title">Downloads</p>
                            <p class="info-value">${downloads}</p>
                        </li>
                </ul>
        </li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  if (divLoader.classList.contains('hidden')) {
    divLoader.classList.remove('hidden');
  }
}
export function hideLoader() {
  if (!divLoader.classList.contains('hidden')) {
    divLoader.classList.add('hidden');
  }
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
