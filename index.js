const searchInput = document.querySelector('.search-container input');
const searchResults = document.querySelector('.search-results');

const artists = ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4', 'Artist 5', 'Artist 6'];

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredArtists = artists.filter(artist => artist.toLowerCase().includes(searchTerm));
  displayResults(filteredArtists);
});

function displayResults(results) {
  searchResults.innerHTML = '';
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });
}
