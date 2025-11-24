

const STORAGE_KEY = 'sinnoh_pokedex_v1';


function loadInitialData() {
  let defaultData = [
    {
      "name": "Turtwig",
      "number": 387,
      "type": "Planta",
      "image": "images/turtwig.jpg"
    },
    {
      "name": "Grotle",
      "number": 388,
      "type": "Planta",
      "image": "images/grotle.jpg"
    },
    {
      "name": "Torterra",
      "number": 389,
      "type": "Planta/Tierra",
      "image": "images/torterra.jpg"
    },
    {
      "name": "Chimchar",
      "number": 390,
      "type": "Fuego",
      "image": "images/chimchar.jpg"
    },
    {
      "name": "Monferno",
      "number": 391,
      "type": "Fuego/Lucha",
      "image": "images/monferno.jpg"
    },
    {
      "name": "Infernape",
      "number": 392,
      "type": "Fuego/Lucha",
      "image": "images/infernape.jpg"
    },
    {
      "name": "Piplup",
      "number": 393,
      "type": "Agua",
      "image": "images/piplup.jpg"
    },
    {
      "name": "Prinplup",
      "number": 394,
      "type": "Agua",
      "image": "images/prinplup.jpg"
    },
    {
      "name": "Empoleon",
      "number": 395,
      "type": "Agua/Acero",
      "image": "images/empoleon.jpg"
    },
    {
      "name": "Starly",
      "number": 396,
      "type": "Normal/Volador",
      "image": "images/starly.jpg"
    },
    {
      "name": "Staravia",
      "number": 397,
      "type": "Normal/Volador",
      "image": "images/staravia.jpg"
    },
    {
      "name": "Staraptor",
      "number": 398,
      "type": "Normal/Volador",
      "image": "images/staraptor.jpg"
    },
    {
      "name": "Bidoof",
      "number": 399,
      "type": "Normal",
      "image": "images/bidoof.jpg"
    },
    {
      "name": "Bibarel",
      "number": 400,
      "type": "Normal/Agua",
      "image": "images/bibarel.jpg"
    },
    {
      "name": "Kricketot",
      "number": 401,
      "type": "Bicho",
      "image": "images/kricketot.jpg"
    },
    {
      "name": "Kricketune",
      "number": 402,
      "type": "Bicho",
      "image": "images/kricketune.jpg"
    },
    {
      "name": "Shinx",
      "number": 403,
      "type": "Eléctrico",
      "image": "images/shinx.jpg"
    },
    {
      "name": "Luxio",
      "number": 404,
      "type": "Eléctrico",
      "image": "images/luxio.jpg"
    },
    {
      "name": "Luxray",
      "number": 405,
      "type": "Eléctrico",
      "image": "images/luxray.jpg"
    },
    {
      "name": "Budew",
      "number": 406,
      "type": "Planta/Veneno",
      "image": "images/budew.jpg"
    },
    {
      "name": "Roserade",
      "number": 407,
      "type": "Planta/Veneno",
      "image": "images/roserade.jpg"
    },
    {
      "name": "Cranidos",
      "number": 408,
      "type": "Roca",
      "image": "images/cranidos.jpg"
    },
    {
      "name": "Rampardos",
      "number": 409,
      "type": "Roca",
      "image": "images/rampardos.jpg"
    },
    {
      "name": "Shieldon",
      "number": 410,
      "type": "Roca/Acero",
      "image": "images/shieldon.jpg"
    },
    {
      "name": "Bastiodon",
      "number": 411,
      "type": "Roca/Acero",
      "image": "images/bastiodon.jpg"
    },
    {
      "name": "Burmy",
      "number": 412,
      "type": "Bicho",
      "image": "images/burmy.jpg"
    },
    {
      "name": "Wormadam",
      "number": 413,
      "type": "Bicho/Planta", // The type can vary (Grass, Ground, Steel)
      "image": "images/wormadam.jpg"
    },
    {
      "name": "Mothim",
      "number": 414,
      "type": "Bicho/Volador",
      "image": "images/mothim.jpg"
    },
    {
      "name": "Combee",
      "number": 415,
      "type": "Bicho/Volador",
      "image": "images/combee.jpg"
    },
    {
      "name": "Vespiquen",
      "number": 416,
      "type": "Bicho/Volador",
      "image": "images/vespiquen.jpg"
    },
    {
      "name": "Pachirisu",
      "number": 417,
      "type": "Eléctrico",
      "image": "images/pachirisu.jpg"
    },
    {
      "name": "Buizel",
      "number": 418,
      "type": "Agua",
      "image": "images/buizel.jpg"
    },
    {
      "name": "Floatzel",
      "number": 419,
      "type": "Agua",
      "image": "images/floatzel.jpg"
    },
    {
      "name": "Cherubi",
      "number": 420,
      "type": "Planta",
      "image": "images/cherubi.jpg"
    },
    {
      "name": "Cherrim",
      "number": 421,
      "type": "Planta",
      "image": "images/cherrim.jpg"
    },
    {
      "name": "Shellos",
      "number": 422,
      "type": "Agua",
      "image": "images/shellos.jpg"
    },
    {
      "name": "Gastrodon",
      "number": 423,
      "type": "Agua/Tierra",
      "image": "images/gastrodon.jpg"
    },
    {
      "name": "Aipom",
      "number": 424,
      "type": "Normal",
      "image": "images/aipom.jpg"
    },
    {
      "name": "Ambipom",
      "number": 425,
      "type": "Normal",
      "image": "images/ambipom.jpg"
    },
    {
      "name": "Drifloon",
      "number": 426,
      "type": "Fantasma/Volador",
      "image": "images/drifloon.jpg"
    },
    {
      "name": "Drifblim",
      "number": 427,
      "type": "Fantasma/Volador",
      "image": "images/drifblim.jpg"
    },
    {
      "name": "Buneary",
      "number": 428,
      "type": "Normal",
      "image": "images/buneary.jpg"
    },
    {
      "name": "Lopunny",
      "number": 429,
      "type": "Normal",
      "image": "images/lopunny.jpg"
    },
    {
      "name": "Mismagius",
      "number": 430,
      "type": "Fantasma",
      "image": "images/mismagius.jpg"
    },
    {
      "name": "Honchkrow",
      "number": 431,
      "type": "Siniestro/Volador",
      "image": "images/honchkrow.jpg"
    },
    {
      "name": "Glameow",
      "number": 432,
      "type": "Normal",
      "image": "images/glameow.jpg"
    },
    {
      "name": "Purugly",
      "number": 433,
      "type": "Normal",
      "image": "images/purugly.jpg"
    },
    {
      "name": "Chingling",
      "number": 434,
      "type": "Psíquico",
      "image": "images/chingling.jpg"
    },
    {
      "name": "Stunky",
      "number": 435,
      "type": "Veneno/Siniestro",
      "image": "images/stunky.jpg"
    },
    {
      "name": "Skuntank",
      "number": 436,
      "type": "Veneno/Siniestro",
      "image": "images/skuntank.jpg"
    },
    {
      "name": "Bronzor",
      "number": 437,
      "type": "Acero/Psíquico",
      "image": "images/bronzor.jpg"
    },
    {
      "name": "Bronzong",
      "number": 438,
      "type": "Acero/Psíquico",
      "image": "images/bronzong.jpg"
    },
    {
      "name": "Bonsly",
      "number": 439,
      "type": "Roca",
      "image": "images/bonsly.jpg"
    },
    {
      "name": "Mime Jr.",
      "number": 440,
      "type": "Psíquico/Hada",
      "image": "images/mimejr.jpg"
    },
    {
      "name": "Happiny",
      "number": 441,
      "type": "Normal",
      "image": "images/happiny.jpg"
    },
    {
      "name": "Chatot",
      "number": 442,
      "type": "Normal/Volador",
      "image": "images/chatot.jpg"
    },
    {
      "name": "Spiritomb",
      "number": 443,
      "type": "Fantasma/Siniestro",
      "image": "images/spiritomb.jpg"
    },
    {
      "name": "Gible",
      "number": 444,
      "type": "Dragón/Tierra",
      "image": "images/gible.jpg"
    },
    {
      "name": "Gabite",
      "number": 445,
      "type": "Dragón/Tierra",
      "image": "images/gabite.jpg"
    },
    {
      "name": "Garchomp",
      "number": 446,
      "type": "Dragón/Tierra",
      "image": "images/garchomp.jpg"
    },
    {
      "name": "Munchlax",
      "number": 447,
      "type": "Normal",
      "image": "images/munchlax.jpg"
    },
    {
      "name": "Riolu",
      "number": 448,
      "type": "Lucha",
      "image": "images/riolu.jpg"
    },
    {
      "name": "Lucario",
      "number": 449,
      "type": "Lucha/Acero",
      "image": "images/lucario.jpg"
    },
    {
      "name": "Hippopotas",
      "number": 450,
      "type": "Tierra",
      "image": "images/hippopotas.jpg"
    },
    {
      "name": "Hippowdon",
      "number": 451,
      "type": "Tierra",
      "image": "images/hippowdon.jpg"
    },
    {
      "name": "Skorupi",
      "number": 452,
      "type": "Veneno/Bicho",
      "image": "images/skorupi.jpg"
    },
    {
      "name": "Drapion",
      "number": 453,
      "type": "Veneno/Siniestro",
      "image": "images/drapion.jpg"
    },
    {
      "name": "Croagunk",
      "number": 454,
      "type": "Veneno/Lucha",
      "image": "images/croagunk.jpg"
    },
    {
      "name": "Toxicroak",
      "number": 455,
      "type": "Veneno/Lucha",
      "image": "images/toxicroak.jpg"
    },
    {
      "name": "Carnivine",
      "number": 456,
      "type": "Planta",
      "image": "images/carnivine.jpg"
    },
    {
      "name": "Finneon",
      "number": 457,
      "type": "Agua",
      "image": "images/finneon.jpg"
    },
    {
      "name": "Lumineon",
      "number": 458,
      "type": "Agua",
      "image": "images/lumineon.jpg"
    },
    {
      "name": "Mantyke",
      "number": 459,
      "type": "Agua/Volador",
      "image": "images/mantyke.jpg"
    },
    {
      "name": "Snover",
      "number": 460,
      "type": "Planta/Hielo",
      "image": "images/snover.jpg"
    },
    {
      "name": "Abomasnow",
      "number": 461,
      "type": "Planta/Hielo",
      "image": "images/abomasnow.jpg"
    },
    {
      "name": "Weavile",
      "number": 462,
      "type": "Siniestro/Hielo",
      "image": "images/weavile.jpg"
    },
    {
      "name": "Magmortar",
      "number": 463,
      "type": "Fuego",
      "image": "images/magmortar.jpg"
    },
    {
      "name": "Electivire",
      "number": 464,
      "type": "Eléctrico",
      "image": "images/electivire.jpg"
    },
    {
      "name": "Togekiss",
      "number": 465,
      "type": "Hada/Volador", // In Generation IV it was Normal/Flying
      "image": "images/togekiss.jpg"
    },
    {
      "name": "Yanmega",
      "number": 466,
      "type": "Bicho/Volador",
      "image": "images/yanmega.jpg"
    },
    {
      "name": "Leafeon",
      "number": 467,
      "type": "Planta",
      "image": "images/leafeon.jpg"
    },
    {
      "name": "Glaceon",
      "number": 468,
      "type": "Hielo",
      "image": "images/glaceon.jpg"
    },
    {
      "name": "Gliscor",
      "number": 469,
      "type": "Tierra/Volador",
      "image": "images/gliscor.jpg"
    },
    {
      "name": "Mamoswine",
      "number": 470,
      "type": "Hielo/Tierra",
      "image": "images/mamoswine.jpg"
    },
    {
      "name": "Porygon-Z",
      "number": 471,
      "type": "Normal",
      "image": "images/porygonz.jpg"
    },
    {
      "name": "Gallade",
      "number": 472,
      "type": "Psíquico/Lucha",
      "image": "images/gallade.jpg"
    },
    {
      "name": "Probopass",
      "number": 473,
      "type": "Roca/Acero",
      "image": "images/probopass.jpg"
    },
    {
      "name": "Dusknoir",
      "number": 474,
      "type": "Fantasma",
      "image": "images/dusknoir.jpg"
    },
    {
      "name": "Froslass",
      "number": 475,
      "type": "Hielo/Fantasma",
      "image": "images/froslass.jpg"
    },
    {
      "name": "Rotom",
      "number": 476,
      "type": "Eléctrico/Fantasma",
      "image": "images/rotom.jpg"
    },
    {
      "name": "Uxie",
      "number": 477,
      "type": "Psíquico",
      "image": "images/uxie.jpg"
    },
    {
      "name": "Mesprit",
      "number": 478,
      "type": "Psíquico",
      "image": "images/mesprit.jpg"
    },
    {
      "name": "Azelf",
      "number": 479,
      "type": "Psíquico",
      "image": "images/azelf.jpg"
    },
    {
      "name": "Dialga",
      "number": 480,
      "type": "Acero/Dragón",
      "image": "images/dialga.jpg"
    },
    {
      "name": "Palkia",
      "number": 481,
      "type": "Agua/Dragón",
      "image": "images/palkia.jpg"
    },
    {
      "name": "Heatran",
      "number": 482,
      "type": "Fuego/Acero",
      "image": "images/heatran.jpg"
    },
    {
      "name": "Regigigas",
      "number": 483,
      "type": "Normal",
      "image": "images/regigigas.jpg"
    },
    {
      "name": "Giratina",
      "number": 484,
      "type": "Fantasma/Dragón",
      "image": "images/giratina.jpg"
    },
    {
      "name": "Cresselia",
      "number": 485,
      "type": "Psíquico",
      "image": "images/cresselia.jpg"
    },
    {
      "name": "Phione",
      "number": 486,
      "type": "Agua",
      "image": "images/phione.jpg"
    },
    {
      "name": "Manaphy",
      "number": 487,
      "type": "Agua",
      "image": "images/manaphy.jpg"
    },
    {
      "name": "Darkrai",
      "number": 488,
      "type": "Siniestro",
      "image": "images/darkrai.jpg"
    },
    {
      "name": "Shaymin",
      "number": 489,
      "type": "Planta",
      "image": "images/shaymin.jpg"
    },
    {
      "name": "Arceus",
      "number": 490,
      "type": "Normal", // The type can vary depending on the table, but the base is Normal
      "image": "images/arceus.jpg"
    }
  ];
  return defaultData;
}

function getStoredList() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error('Invalid JSON in storage; resetting', e);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function saveStoredList(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function ensureData() {
  let list = getStoredList();
  if (!list) {
    list = loadInitialData();
    saveStoredList(list);
  }
  return list;
}


function renderList() {
  const list = ensureData();
  const container = document.getElementById('pokedex-list');
  if (!container) return;

  container.innerHTML = '';

  list.forEach((entry, index) => {
    const card = document.createElement('article');
    card.className = 'pokemon-card';
    card.setAttribute('role', 'article');

    card.dataset.name = entry.name;
    card.dataset.number = entry.number;

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = entry.image;
    img.alt = `${entry.name} image`;

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h4');
    title.className = 'card-title';
    title.textContent = `${entry.name}`;

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    meta.textContent = `#${entry.number} • ${entry.type}`;

    body.appendChild(title);
    body.appendChild(meta);
    card.appendChild(img);
    card.appendChild(body);

    container.appendChild(card);
  });
}


function addNewPokemon(pokemon) {
  if (!pokemon || !pokemon.name) return false;
  const list = ensureData();

  const exists = list.some(item => Number(item.number) === Number(pokemon.number));
  if (exists) {
    alert('A Pokémon with that Pokédex number already exists.');
    return false;
  }


  const newEntry = {
    name: pokemon.name.trim(),
    number: Number(pokemon.number),
    type: pokemon.type,
    image: pokemon.image
  };

  list.unshift(newEntry);
  saveStoredList(list);
  renderList();
  return true;
}


(function initCrudModule() {

  document.addEventListener('DOMContentLoaded', () => {
    ensureData();
    renderList();
  });


  window.addEventListener('pokemon:add', (e) => {
    addNewPokemon(e.detail);
  });
})();