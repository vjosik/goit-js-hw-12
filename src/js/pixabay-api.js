import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54662784-b388709a9b98f0fcdc7213397';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
