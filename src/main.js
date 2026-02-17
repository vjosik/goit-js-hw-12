import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions'; // Додано всі необхідні імпорти

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

const form = document.querySelector('.form');
const queryInput = document.querySelector('.form-input');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', async event => {
  event.preventDefault();

  currentQuery = queryInput.value.trim();
  if (!currentQuery) return;

  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);

    if (totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Try again!',
    });
    hideLoadMoreButton(); // Сховати кнопку у разі помилки
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const totalLoaded = currentPage * 15;

    if (totalLoaded >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }

    // Плавний скрол тільки якщо картка існує
    const card = document.querySelector('.gallery-item');
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Try again!',
    });
    hideLoadMoreButton(); // Сховати кнопку у разі помилки
  } finally {
    hideLoader();
  }
});