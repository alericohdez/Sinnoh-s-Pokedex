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
  const MENU_BUTTON_EL = document.querySelector(MENU_BUTTON_SELECTOR);
  const SITE_NAV_EL = document.querySelector(SITE_NAV_SELECTOR);

  if (!MENU_BUTTON_EL || !SITE_NAV_EL) return;

  MENU_BUTTON_EL.setAttribute(ARIA_EXPANDED_ATTR, 'false');

  MENU_BUTTON_EL.addEventListener('click', (e) => {
    e.stopPropagation();
    const IS_OPEN = SITE_NAV_EL.classList.toggle(MENU_OPEN_CLASS);
    MENU_BUTTON_EL.setAttribute(ARIA_EXPANDED_ATTR, IS_OPEN ? 'true' : 'false');
  });

  SITE_NAV_EL.addEventListener('click', (e) => {
    const TARGET = e.target;
    if (TARGET.tagName === 'A') {
      SITE_NAV_EL.classList.remove(MENU_OPEN_CLASS);
      MENU_BUTTON_EL.setAttribute(ARIA_EXPANDED_ATTR, 'false');
    }
  });

  document.addEventListener('click', (e) => {
    if (!SITE_NAV_EL.classList.contains(MENU_OPEN_CLASS)) return;
    const CLICK_INSIDE_NAV = SITE_NAV_EL.contains(e.target) || MENU_BUTTON_EL.contains(e.target);
    if (!CLICK_INSIDE_NAV) {
      SITE_NAV_EL.classList.remove(MENU_OPEN_CLASS);
      MENU_BUTTON_EL.setAttribute(ARIA_EXPANDED_ATTR, 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && SITE_NAV_EL.classList.contains(MENU_OPEN_CLASS)) {
      SITE_NAV_EL.classList.remove(MENU_OPEN_CLASS);
      MENU_BUTTON_EL.setAttribute(ARIA_EXPANDED_ATTR, 'false');
      MENU_BUTTON_EL.focus();
    }
  });
})();


(function () {
  const SEARCH_BUTTON_EL = document.getElementById(SEARCH_BUTTON_ID);
  const SEARCH_INPUT_EL = document.getElementById(SEARCH_INPUT_ID);

  function PERFORM_SEARCH() {
    const RAW_QUERY = (SEARCH_INPUT_EL.value || '').trim().toLowerCase();
    const NUM_QUERY = RAW_QUERY.replace(/^#/, '').trim();
    const LIST_EL = document.getElementById(POKEDEX_LIST_ID);
    if (!LIST_EL) return;

    const CARDS = LIST_EL.querySelectorAll(POKEMON_CARD_SELECTOR);
    console.log('[PERFORM_SEARCH] query=', RAW_QUERY, 'cardsFound=', CARDS.length);
    CARDS.forEach(card => {
      const NAME = (card.dataset.name || '').toLowerCase();
      const NUMBER = String(card.dataset.number || '');
      const MATCH = RAW_QUERY === '' ? true : (NAME.includes(RAW_QUERY) || NUMBER.includes(NUM_QUERY));
      card.style.display = MATCH ? '' : 'none';
    });

    if (RAW_QUERY.length > 0) {
      const VISIBLE = Array.from(CARDS).filter(c => c.style.display !== 'none');
      console.log('[PERFORM_SEARCH] visible=', VISIBLE.length);
      if (VISIBLE.length === 1) {
        const MATCH_CARD = VISIBLE[0];
        try {
          MATCH_CARD.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch (e) {
        }
        const IDX = MATCH_CARD.dataset.index;
        setTimeout(() => {
          console.log('[PERFORM_SEARCH] attempting open for index=', IDX, 'openDetailModalPresent=', typeof window.openDetailModal === 'function');
          if (IDX !== undefined && IDX !== null && typeof window.getStoredList === 'function' && typeof window.openDetailModal === 'function') {
            const LIST = window.getStoredList();
            const POKEMON = LIST && LIST[Number(IDX)];
            if (POKEMON) {
              try {
                window.openDetailModal(POKEMON, Number(IDX));
                return;
              } catch (err) {
                console.warn('[PERFORM_SEARCH] direct openDetailModal call failed', err);
              }
            }
          }
          MATCH_CARD.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        }, 120);
      }
    }
  }

  if (SEARCH_BUTTON_EL && SEARCH_INPUT_EL) {
    SEARCH_BUTTON_EL.addEventListener('click', PERFORM_SEARCH);
    SEARCH_INPUT_EL.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') PERFORM_SEARCH();
    });
  }
})();

