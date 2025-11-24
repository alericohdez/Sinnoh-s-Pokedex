const STORAGE_KEY = 'sinnoh_pokedex_v1';


(function () {
  const menuButton = document.querySelector('.menu-button');
  const siteNav = document.querySelector('.site-nav');

  if (menuButton && siteNav) {
    menuButton.addEventListener('click', () => {
      siteNav.classList.toggle('open');

      const expanded = siteNav.classList.contains('open');
      menuButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }
})();


(function () {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');

  function performSearch() {
    const query = (searchInput.value || '').trim().toLowerCase();
    const list = document.getElementById('pokedex-list');
    if (!list) return;

    const cards = list.querySelectorAll('.pokemon-card');
    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const number = String(card.dataset.number);
      const match = name.includes(query) || number.includes(query);
      card.style.display = match ? '' : 'none';
    });
  }

  if (searchButton && searchInput) {
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }
})();