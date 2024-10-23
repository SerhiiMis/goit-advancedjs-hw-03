const API_KEY = VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/?';
const QUERY_KEY = 'q';

const searchParams = new URLSearchParams({
  key: API_KEY,
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: true,
});

export function fetchImages(query) {
  const refactoredQuery = prepareQuery(query);
  searchParams.set(QUERY_KEY, refactoredQuery);

  const url = BASE_URL + searchParams.toString();
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(
        `Error fetching images with status ${response.status} and response ${response.statusText}`
      );
    }
    return response.json();
  });
}

//query may not exceed 100 characters
function prepareQuery(query) {
  const words = query.split(/\s+/);
  let refactoredQuery = '';
  for (const word of words) {
    if ((refactoredQuery + '+' + word).length > 100) break;
    refactoredQuery += (refactoredQuery ? '+' : '') + word;
  }
  return refactoredQuery;
}
