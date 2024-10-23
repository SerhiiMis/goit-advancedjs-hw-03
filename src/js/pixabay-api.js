// Access the API key using import.meta.env
const API_KEY = import.meta.env.VITE_API_KEY;
console.log('API Key:', API_KEY); // Check if the API key is correctly loaded
console.log('All Environment Variables:', import.meta.env); // Log all environment variables

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
