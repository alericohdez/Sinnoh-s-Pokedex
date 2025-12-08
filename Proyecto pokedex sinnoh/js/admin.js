const STORAGE_KEY = 'sinnoh_pokedex_v1';

const ADMIN_FORM_ID = 'admin-form';
const ADMIN_LIST_ID = 'admin-list';
const ADMIN_ERRORS_ID = 'admin-errors';

let currentEditIndex = null;

function getStoredList() {
  const RAW = localStorage.getItem(STORAGE_KEY);
  if (!RAW) return [];
  try {
    return JSON.parse(RAW);
  } catch (ERROR) {
    console.error('Invalid JSON in storage, resetting', ERROR);
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function saveStoredList(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function validatePokemon(values) {
  const ERRORS = [];
  const NAME = (values.name || '').trim();
  if (!NAME) ERRORS.push('Name is required.');
  else if (NAME.length < 2) ERRORS.push('Name must have at least 2 characters.');

  const NUMBER = Number(values.number);
  if (!values.number && values.number !== 0) ERRORS.push('Pokedex number is required.');
  else if (!Number.isInteger(NUMBER) || NUMBER < 1) ERRORS.push('Number must be an integer >= 1.');

  const TYPE = (values.type || '').trim();
  if (!TYPE) ERRORS.push('Type is required.');

  const IMAGE = (values.image || '').trim();
  try {
    const URL_OBJ = new URL(IMAGE);
    if (URL_OBJ.protocol !== 'http:' && URL_OBJ.protocol !== 'https:') {
      ERRORS.push('Image URL must use http or https.');
    }
  } catch (ERROR) {
    ERRORS.push('Enter a valid image URL.');
  }

  // duplicate number check (ignore current edit index)
  const LIST = getStoredList();
  const DUPLICATE = LIST.some((item, idx) => Number(item.number) === NUMBER && (currentEditIndex === null || idx !== currentEditIndex));
  if (DUPLICATE) ERRORS.push('An entry with that Pokedex number already exists.');

  return { valid: ERRORS.length === 0, errors: ERRORS };
}

function renderAdminList() {
  const CONTAINER = document.getElementById(ADMIN_LIST_ID);
  if (!CONTAINER) return;
  const LIST = getStoredList();
  CONTAINER.innerHTML = '';

  LIST.forEach((ENTRY, INDEX) => {
    const CARD = document.createElement('article');
    CARD.className = 'pokemon-card';

    const IMG = document.createElement('img');
    IMG.className = 'card-image';
    IMG.src = ENTRY.image;
    IMG.alt = `${ENTRY.name} image`;

    const BODY = document.createElement('div');
    BODY.className = 'card-body';

    const TITLE = document.createElement('h4');
    TITLE.className = 'card-title';
    TITLE.textContent = ENTRY.name;

    const META = document.createElement('div');
    META.className = 'card-meta';
    META.textContent = `#${ENTRY.number} • ${ENTRY.type}`;

    const ACTIONS = document.createElement('div');
    ACTIONS.style.display = 'flex';
    ACTIONS.style.gap = '8px';
    ACTIONS.style.marginTop = '10px';

    const EDIT_BTN = document.createElement('button');
    EDIT_BTN.textContent = 'Edit';
    EDIT_BTN.className = 'card-edit-btn';
    EDIT_BTN.addEventListener('click', () => startEdit(INDEX));

    const DEL_BTN = document.createElement('button');
    DEL_BTN.textContent = 'Delete';
    DEL_BTN.className = 'card-delete-btn';
    DEL_BTN.addEventListener('click', () => deleteEntry(INDEX));

    ACTIONS.appendChild(EDIT_BTN);
    ACTIONS.appendChild(DEL_BTN);

    BODY.appendChild(TITLE);
    BODY.appendChild(META);
    BODY.appendChild(ACTIONS);

    CARD.appendChild(IMG);
    CARD.appendChild(BODY);

    CONTAINER.appendChild(CARD);
  });
}

function startEdit(index) {
  const LIST = getStoredList();
  const ITEM = LIST[index];
  if (!ITEM) return;
  currentEditIndex = index;
  document.getElementById('admin-name').value = ITEM.name;
  document.getElementById('admin-number').value = ITEM.number;
  document.getElementById('admin-type').value = ITEM.type;
  document.getElementById('admin-image').value = ITEM.image;
  document.getElementById('admin-save').textContent = 'Update';
}

function deleteEntry(index) {
  if (!confirm('Delete this entry?')) return;
  const LIST = getStoredList();
  LIST.splice(index, 1);
  saveStoredList(LIST);
  renderAdminList();
  if (currentEditIndex === index) resetForm();
}

function resetForm() {
  currentEditIndex = null;
  document.getElementById(ADMIN_FORM_ID).reset();
  document.getElementById('admin-save').textContent = 'Save';
  const ERRORS_EL = document.getElementById(ADMIN_ERRORS_ID);
  if (ERRORS_EL) ERRORS_EL.innerHTML = '';
}

function handleFormSubmit(e) {
  e.preventDefault();
  const VALUES = {
    name: document.getElementById('admin-name')?.value,
    number: document.getElementById('admin-number')?.value,
    type: document.getElementById('admin-type')?.value,
    image: document.getElementById('admin-image')?.value
  };

  const RESULT = validatePokemon(VALUES);
  const ERRORS_EL = document.getElementById(ADMIN_ERRORS_ID);
  if (ERRORS_EL) ERRORS_EL.innerHTML = '';

  if (!RESULT.valid) {
    if (ERRORS_EL) {
      const UL = document.createElement('ul');
      RESULT.errors.forEach(MSG => {
        const LI = document.createElement('li');
        LI.textContent = MSG;
        UL.appendChild(LI);
      });
      ERRORS_EL.appendChild(UL);
    }
    return;
  }

  const LIST = getStoredList();
  const NEW_ENTRY = {
    name: VALUES.name.trim(),
    number: Number(VALUES.number),
    type: VALUES.type,
    image: VALUES.image
  };

  if (currentEditIndex === null) {
    LIST.unshift(NEW_ENTRY);
  } else {
    LIST[currentEditIndex] = NEW_ENTRY;
  }

  saveStoredList(LIST);
  renderAdminList();
  resetForm();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAdminList();

  const FORM = document.getElementById(ADMIN_FORM_ID);
  if (FORM) FORM.addEventListener('submit', handleFormSubmit);

  const CANCEL_BTN = document.getElementById('admin-cancel');
  if (CANCEL_BTN) CANCEL_BTN.addEventListener('click', resetForm);
});
