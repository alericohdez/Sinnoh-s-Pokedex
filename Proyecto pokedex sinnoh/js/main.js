const STORAGE_KEY = 'sinnoh_pokedex_v1';

const MENU_BUTTON_SELECTOR = '.menu-button';
const SITE_NAV_SELECTOR = '.site-nav';
const ARIA_EXPANDED_ATTR = 'aria-expanded';
const MENU_OPEN_CLASS = 'open';
const SEARCH_BUTTON_ID = 'search-button';
const SEARCH_INPUT_ID = 'search-input';
const POKEDEX_LIST_ID = 'pokedex-list';
const POKEMON_CARD_SELECTOR = '.pokemon-card';

(function () {
  const menuButton = document.querySelector(MENU_BUTTON_SELECTOR);
  const siteNav = document.querySelector(SITE_NAV_SELECTOR);

  if (!menuButton || !siteNav) return;

  // Inicializar aria-expanded para accesibilidad
  menuButton.setAttribute(ARIA_EXPANDED_ATTR, 'false');

  // Toggle principal del botón
  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = siteNav.classList.toggle(MENU_OPEN_CLASS);
    menuButton.setAttribute(ARIA_EXPANDED_ATTR, isOpen ? 'true' : 'false');
  });

  // Cerrar menú al hacer clic en cualquiera de los enlaces (útil en móvil)
  siteNav.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A') {
      siteNav.classList.remove(MENU_OPEN_CLASS);
      menuButton.setAttribute(ARIA_EXPANDED_ATTR, 'false');
    }
  });

  // Cerrar menú al hacer clic fuera del nav o del botón
  document.addEventListener('click', (e) => {
    if (!siteNav.classList.contains(MENU_OPEN_CLASS)) return;
    const clickInsideNav = siteNav.contains(e.target) || menuButton.contains(e.target);
    if (!clickInsideNav) {
      siteNav.classList.remove(MENU_OPEN_CLASS);
      menuButton.setAttribute(ARIA_EXPANDED_ATTR, 'false');
    }
  });

  // Cerrar con Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteNav.classList.contains(MENU_OPEN_CLASS)) {
      siteNav.classList.remove(MENU_OPEN_CLASS);
      menuButton.setAttribute(ARIA_EXPANDED_ATTR, 'false');
      menuButton.focus();
    }
  });
})();


(function () {
  const searchButton = document.getElementById(SEARCH_BUTTON_ID);
  const searchInput = document.getElementById(SEARCH_INPUT_ID);

  function performSearch() {
    const query = (searchInput.value || '').trim().toLowerCase();
    const list = document.getElementById(POKEDEX_LIST_ID);
    if (!list) return;

    const cards = list.querySelectorAll(POKEMON_CARD_SELECTOR);
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