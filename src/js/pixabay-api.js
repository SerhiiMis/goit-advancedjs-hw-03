const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/?';
const QUERY_KEY = 'q';

const searchParams = new URLSearchParams({
  key: API_KEY,
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: true,
  per_page: 12, // Set the number of results per page
});

export function fetchImages(query, page = 1) {
  const refactoredQuery = prepareQuery(query);
  searchParams.set(QUERY_KEY, refactoredQuery);
  searchParams.set('page', page); // Set the page number

  const url = BASE_URL + searchParams.toString();
  console.log('API URL:', url);
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(
        `Error fetching images with status ${response.status} and response ${response.statusText}`
      );
    }
    return response.json();
  });
}

// Query may not exceed 100 characters
function prepareQuery(query) {
  const words = query.split(/\s+/);
  let refactoredQuery = '';
  for (const word of words) {
    if ((refactoredQuery + '+' + word).length > 100) break;
    refactoredQuery += (refactoredQuery ? '+' : '') + word;
  }
  return refactoredQuery;
}
