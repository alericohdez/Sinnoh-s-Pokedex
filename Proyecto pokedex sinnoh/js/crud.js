

const STORAGE_KEY = 'sinnoh_pokedex_v1';

const POKEDEX_LIST_ID = 'pokedex-list';
const POKEMON_CARD_CLASS = 'pokemon-card';
const CARD_ROLE = 'article';
const CARD_IMAGE_CLASS = 'card-image';
const CARD_BODY_CLASS = 'card-body';
const CARD_TITLE_CLASS = 'card-title';
const CARD_META_CLASS = 'card-meta';
const POKEMON_ADD_EVENT = 'pokemon:add';
const FORM_ID = 'pokemon-form';
const FORM_ERRORS_ID = 'form-errors';
const NAME_INPUT_ID = 'name-input';
const NUMBER_INPUT_ID = 'number-input';
const TYPE_INPUT_ID = 'type-input';
const IMAGE_INPUT_ID = 'image-input';
const EDIT_MODAL_ID = 'edit-modal';
const EDIT_FORM_ID = 'edit-form';
const EDIT_NAME_INPUT_ID = 'edit-name-input';
const EDIT_NUMBER_INPUT_ID = 'edit-number-input';
const EDIT_TYPE_INPUT_ID = 'edit-type-input';
const EDIT_IMAGE_INPUT_ID = 'edit-image-input';
const EDIT_ERRORS_ID = 'edit-errors';
const CURRENT_EDIT_ID = 'currentEditId';
const CARD_EDIT_BUTTON_CLASS = 'card-edit-btn';
const CARD_DELETE_BUTTON_CLASS = 'card-delete-btn';
const DETAIL_MODAL_ID = 'detail-modal';
const DETAIL_IMAGE_ID = 'detail-image';
const DETAIL_NAME_ID = 'detail-name';
const DETAIL_NUMBER_ID = 'detail-number';
const DETAIL_TYPE_ID = 'detail-type';
const DETAIL_EDIT_BTN_ID = 'detail-edit-btn';
const DETAIL_CLOSE_BTN_ID = 'detail-close-btn';
const DETAIL_ABILITIES_LIST_ID = 'detail-abilities-list';
const CURRENT_DETAIL_INDEX = 'currentDetailIndex';



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
    "type": "Bicho/Planta",
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
    "name": "Ambipom",
    "number": 424,
    "type": "Normal",
    "image": "images/ambipom.jpg"
  },
  {
    "name": "Drifloon",
    "number": 425,
    "type": "Fantasma/Volador",
    "image": "images/drifloon.jpg"
  },
  {
    "name": "Drifblim",
    "number": 426,
    "type": "Fantasma/Volador",
    "image": "images/drifblim.jpg"
  },
  {
    "name": "Buneary",
    "number": 427,
    "type": "Normal",
    "image": "images/buneary.jpg"
  },
  {
    "name": "Lopunny",
    "number": 428,
    "type": "Normal",
    "image": "images/lopunny.jpg"
  },
  {
    "name": "Mismagius",
    "number": 429,
    "type": "Fantasma",
    "image": "images/mismagius.jpg"
  },
  {
    "name": "Honchkrow",
    "number": 430,
    "type": "Siniestro/Volador",
    "image": "images/honchkrow.jpg"
  },
  {
    "name": "Glameow",
    "number": 431,
    "type": "Normal",
    "image": "images/glameow.jpg"
  },
  {
    "name": "Purugly",
    "number": 432,
    "type": "Normal",
    "image": "images/purugly.jpg"
  },
  {
    "name": "Chingling",
    "number": 433,
    "type": "Psíquico",
    "image": "images/chingling.jpg"
  },
  {
    "name": "Stunky",
    "number": 434,
    "type": "Veneno/Siniestro",
    "image": "images/stunky.jpg"
  },
  {
    "name": "Skuntank",
    "number": 435,
    "type": "Veneno/Siniestro",
    "image": "images/skuntank.jpg"
  },
  {
    "name": "Bronzor",
    "number": 436,
    "type": "Acero/Psíquico",
    "image": "images/bronzor.jpg"
  },
  {
    "name": "Bronzong",
    "number": 437,
    "type": "Acero/Psíquico",
    "image": "images/bronzong.jpg"
  },
  {
    "name": "Bonsly",
    "number": 438,
    "type": "Roca",
    "image": "images/bonsly.jpg"
  },
  {
    "name": "Mime Jr.",
    "number": 439,
    "type": "Psíquico/Hada",
    "image": "images/mimejr.jpg"
  },
  {
    "name": "Happiny",
    "number": 440,
    "type": "Normal",
    "image": "images/happiny.jpg"
  },
  {
    "name": "Chatot",
    "number": 441,
    "type": "Normal/Volador",
    "image": "images/chatot.jpg"
  },
  {
    "name": "Spiritomb",
    "number": 442,
    "type": "Fantasma/Siniestro",
    "image": "images/spiritomb.jpg"
  },
  {
    "name": "Gible",
    "number": 443,
    "type": "Dragón/Tierra",
    "image": "images/gible.jpg"
  },
  {
    "name": "Gabite",
    "number": 444,
    "type": "Dragón/Tierra",
    "image": "images/gabite.jpg"
  },
  {
    "name": "Garchomp",
    "number": 445,
    "type": "Dragón/Tierra",
    "image": "images/garchomp.jpg"
  },
  {
    "name": "Munchlax",
    "number": 446,
    "type": "Normal",
    "image": "images/munchlax.jpg"
  },
  {
    "name": "Riolu",
    "number": 447,
    "type": "Lucha",
    "image": "images/riolu.jpg"
  },
  {
    "name": "Lucario",
    "number": 448,
    "type": "Lucha/Acero",
    "image": "images/lucario.jpg"
  },
  {
    "name": "Hippopotas",
    "number": 449,
    "type": "Tierra",
    "image": "images/hippopotas.jpg"
  },
  {
    "name": "Hippowdon",
    "number": 450,
    "type": "Tierra",
    "image": "images/hippowdon.jpg"
  },
  {
    "name": "Skorupi",
    "number": 451,
    "type": "Veneno/Bicho",
    "image": "images/skorupi.jpg"
  },
  {
    "name": "Drapion",
    "number": 452,
    "type": "Veneno/Siniestro",
    "image": "images/drapion.jpg"
  },
  {
    "name": "Croagunk",
    "number": 453,
    "type": "Veneno/Lucha",
    "image": "images/croagunk.jpg"
  },
  {
    "name": "Toxicroak",
    "number": 454,
    "type": "Veneno/Lucha",
    "image": "images/toxicroak.jpg"
  },
  {
    "name": "Carnivine",
    "number": 455,
    "type": "Planta",
    "image": "images/carnivine.jpg"
  },
  {
    "name": "Finneon",
    "number": 456,
    "type": "Agua",
    "image": "images/finneon.jpg"
  },
  {
    "name": "Lumineon",
    "number": 457,
    "type": "Agua",
    "image": "images/lumineon.jpg"
  },
  {
    "name": "Mantyke",
    "number": 458,
    "type": "Agua/Volador",
    "image": "images/mantyke.jpg"
  },
  {
    "name": "Snover",
    "number": 459,
    "type": "Planta/Hielo",
    "image": "images/snover.jpg"
  },
  {
    "name": "Abomasnow",
    "number": 460,
    "type": "Planta/Hielo",
    "image": "images/abomasnow.jpg"
  },
  {
    "name": "Weavile",
    "number": 461,
    "type": "Siniestro/Hielo",
    "image": "images/weavile.jpg"
  },
  {
    "name": "Magnezone",
    "number": 462,
    "type": "Eléctrico/Acero",
    "image": "images/magnezone.jpg"
  },
  {
    "name": "Lickilicky",
    "number": 463,
    "type": "Normal",
    "image": "images/lickilicky.jpg"
  },
  {
    "name": "Rhyperior",
    "number": 464,
    "type": "Tierra/Roca",
    "image": "images/rhyperior.jpg"
  },
  {
    "name": "Tangrowth",
    "number": 465,
    "type": "Planta",
    "image": "images/tangrowth.jpg"
  },
  {
    "name": "Electivire",
    "number": 466,
    "type": "Eléctrico",
    "image": "images/electivire.jpg"
  },
  {
    "name": "Magmortar",
    "number": 467,
    "type": "Fuego",
    "image": "images/magmortar.jpg"
  },
  {
    "name": "Togekiss",
    "number": 468,
    "type": "Hada/Volador",
    "image": "images/togekiss.jpg"
  },
  {
    "name": "Yanmega",
    "number": 469,
    "type": "Bicho/Volador",
    "image": "images/yanmega.jpg"
  },
  {
    "name": "Leafeon",
    "number": 470,
    "type": "Planta",
    "image": "images/leafeon.jpg"
  },
  {
    "name": "Glaceon",
    "number": 471,
    "type": "Hielo",
    "image": "images/glaceon.jpg"
  },
  {
    "name": "Gliscor",
    "number": 472,
    "type": "Tierra/Volador",
    "image": "images/gliscor.jpg"
  },
  {
    "name": "Mamoswine",
    "number": 473,
    "type": "Hielo/Tierra",
    "image": "images/mamoswine.jpg"
  },
  {
    "name": "Porygon-Z",
    "number": 474,
    "type": "Normal",
    "image": "images/porygonz.jpg"
  },
  {
    "name": "Gallade",
    "number": 475,
    "type": "Psíquico/Lucha",
    "image": "images/gallade.jpg"
  },
  {
    "name": "Probopass",
    "number": 476,
    "type": "Roca/Acero",
    "image": "images/probopass.jpg"
  },
  {
    "name": "Dusknoir",
    "number": 477,
    "type": "Fantasma",
    "image": "images/dusknoir.jpg"
  },
  {
    "name": "Froslass",
    "number": 478,
    "type": "Hielo/Fantasma",
    "image": "images/froslass.jpg"
  },
  {
    "name": "Rotom",
    "number": 479,
    "type": "Eléctrico/Fantasma",
    "image": "images/rotom.jpg"
  },
  {
    "name": "Uxie",
    "number": 480,
    "type": "Psíquico",
    "image": "images/uxie.jpg"
  },
  {
    "name": "Mesprit",
    "number": 481,
    "type": "Psíquico",
    "image": "images/mesprit.jpg"
  },
  {
    "name": "Azelf",
    "number": 482,
    "type": "Psíquico",
    "image": "images/azelf.jpg"
  },
  {
    "name": "Dialga",
    "number": 483,
    "type": "Acero/Dragón",
    "image": "images/dialga.jpg"
  },
  {
    "name": "Palkia",
    "number": 484,
    "type": "Agua/Dragón",
    "image": "images/palkia.jpg"
  },
  {
    "name": "Heatran",
    "number": 485,
    "type": "Fuego/Acero",
    "image": "images/heatran.jpg"
  },
  {
    "name": "Regigigas",
    "number": 486,
    "type": "Normal",
    "image": "images/regigigas.jpg"
  },
  {
    "name": "Giratina",
    "number": 487,
    "type": "Fantasma/Dragón",
    "image": "images/giratina.jpg"
  },
  {
    "name": "Cresselia",
    "number": 488,
    "type": "Psíquico",
    "image": "images/cresselia.jpg"
  },
  {
    "name": "Phione",
    "number": 489,
    "type": "Agua",
    "image": "images/phione.jpg"
  },
  {
    "name": "Manaphy",
    "number": 490,
    "type": "Agua",
    "image": "images/manaphy.jpg"
  },
  {
    "name": "Darkrai",
    "number": 491,
    "type": "Siniestro",
    "image": "images/darkrai.jpg"
  },
  {
    "name": "Shaymin",
    "number": 492,
    "type": "Planta",
    "image": "images/shaymin.jpg"
  },
  {
    "name": "Arceus",
    "number": 493,
    "type": "Normal",
    "image": "images/arceus.jpg"
  }
];
  
  return defaultData.map(pokemon => ({
    ...pokemon,
    abilities: getDefaultAbilities(pokemon.name)
  }));
}function getStoredList() {
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

function getDefaultAbilities(pokemonName) {
  const abilities = {
    'Turtwig': ['Espesura', 'Caparazón'],
    'Grotle': ['Espesura', 'Caparazón'],
    'Torterra': ['Espesura', 'Caparazón'],
    'Chimchar': ['Mar llamas', 'Puño férreo'],
    'Monferno': ['Mar llamas', 'Puño férreo'],
    'Infernape': ['Mar llamas', 'Puño férreo'],
    'Piplup': ['Torrente', 'Competitivo'],
    'Prinplup': ['Torrente', 'Competitivo'],
    'Empoleon': ['Torrente', 'Tenacidad'],

    'Starly': ['Vista lince', 'Audaz'],
    'Staravia': ['Intimidación', 'Audaz'],
    'Staraptor': ['Intimidación', 'Audaz'],
    'Bidoof': ['Simple', 'Ignorante', 'Veleta'],
    'Bibarel': ['Simple', 'Ignorante', 'Veleta'],

    'Kricketot': ['Muda', 'Fuga'],
    'Kricketune': ['Enjambre', 'Experto'],
    'Shinx': ['Rivalidad', 'Intimidación', 'Agallas'],
    'Luxio': ['Rivalidad', 'Intimidación', 'Agallas'],
    'Luxray': ['Rivalidad', 'Intimidación', 'Agallas'],

    'Abra': ['Sincronía', 'Foco interno', 'Muro mágico'],
    'Kadabra': ['Sincronía', 'Foco interno', 'Muro mágico'],
    'Alakazam': ['Sincronía', 'Foco interno', 'Muro mágico'],

    'Magikarp': ['Nado rápido', 'Cobardía'],
    'Gyarados': ['Intimidación', 'Autoestima'],

    'Budew': ['Cura natural', 'Punto tóxico', 'Defensa hoja'],
    'Roselia': ['Cura natural', 'Punto tóxico', 'Defensa hoja'],
    'Roserade': ['Cura natural', 'Punto tóxico', 'Experto'],

    'Zubat': ['Foco interno', 'Allanamiento'],
    'Golbat': ['Foco interno', 'Allanamiento'],
    'Crobat': ['Foco interno', 'Allanamiento'],

    'Geodude': ['Cabeza roca', 'Robustez', 'Velo arena'],
    'Graveler': ['Cabeza roca', 'Robustez', 'Velo arena'],
    'Golem': ['Cabeza roca', 'Robustez', 'Velo arena'],
    'Onix': ['Cabeza roca', 'Robustez', 'Armadura frágil'],
    'Steelix': ['Cabeza roca', 'Robustez', 'Potencia bruta'],

    'Cranidos': ['Rompemoldes', 'Potencia bruta'],
    'Rampardos': ['Rompemoldes', 'Potencia bruta'],
    'Shieldon': ['Robustez', 'Insonorizar'],
    'Bastiodon': ['Robustez', 'Insonorizar'],

    'Machop': ['Agallas', 'Indefenso', 'Impasible'],
    'Machoke': ['Agallas', 'Indefenso', 'Impasible'],
    'Machamp': ['Agallas', 'Indefenso', 'Impasible'],

    'Psyduck': ['Humedad', 'Aclimatación', 'Nado rápido'],
    'Golduck': ['Humedad', 'Aclimatación', 'Nado rápido'],

    'Burmy': ['Muda', 'Funda'],
    'Wormadam': ['Anticipación', 'Funda'],
    'Mothim': ['Enjambre', 'Cromolente'],
    'Combee': ['Recogida miel', 'Entusiasmo'],
    'Vespiquen': ['Presión', 'Nerviosismo'],

    'Pachirisu': ['Fuga', 'Recogida', 'Absorbe electricidad'],
    'Buizel': ['Nado rápido', 'Velo agua'],
    'Floatzel': ['Nado rápido', 'Velo agua'],

    'Cherubi': ['Clorofila'],
    'Cherrim': ['Don floral'],

    'Shellos': ['Viscosidad', 'Colector', 'Poder arena'],
    'Gastrodon': ['Viscosidad', 'Colector', 'Poder arena'],

    'Heracross': ['Enjambre', 'Agallas', 'Autoestima'],
    'Aipom': ['Fuga', 'Recogida', 'Encadenado'],
    'Ambipom': ['Experto', 'Recogida', 'Encadenado'],

    'Drifloon': ['Resquicio', 'Liviano', 'Ímpetu ardiente'],
    'Drifblim': ['Resquicio', 'Liviano', 'Ímpetu ardiente'],

    'Buneary': ['Fuga', 'Zoquete', 'Flexibilidad'],
    'Lopunny': ['Gran encanto', 'Zoquete', 'Flexibilidad'],

    'Gastly': ['Levitación'],
    'Haunter': ['Levitación'],
    'Gengar': ['Cuerpo maldito'],
    'Misdreavus': ['Levitación'],
    'Mismagius': ['Levitación'],

    'Murkrow': ['Insomnio', 'Afortunado', 'Bromista'],
    'Honchkrow': ['Insomnio', 'Afortunado', 'Autoestima'],
    'Glameow': ['Flexibilidad', 'Ritmo propio', 'Vista lince'],
    'Purugly': ['Sebo', 'Ritmo propio', 'Competitivo'],

    'Goldeen': ['Nado rápido', 'Velo agua', 'Pararrayos'],
    'Seaking': ['Nado rápido', 'Velo agua', 'Pararrayos'],
    'Barboach': ['Despiste', 'Anticipación', 'Hidratación'],
    'Whiscash': ['Despiste', 'Anticipación', 'Hidratación'],

    'Chingling': ['Levitación'],
    'Chimecho': ['Levitación'],

    'Stunky': ['Hedor', 'Resquicio', 'Vista lince'],
    'Skuntank': ['Hedor', 'Resquicio', 'Vista lince'],

    'Meditite': ['Energía pura', 'Telepatía'],
    'Medicham': ['Energía pura', 'Telepatía'],

    'Bronzor': ['Levitación', 'Ignífugo', 'Metal pesado'],
    'Bronzong': ['Levitación', 'Ignífugo', 'Metal pesado'],

    'Ponyta': ['Fuga', 'Absorbe fuego', 'Cuerpo llama'],
    'Rapidash': ['Fuga', 'Absorbe fuego', 'Cuerpo llama'],

    'Bonsly': ['Cabeza roca', 'Robustez', 'Cobardía'],
    'Sudowoodo': ['Cabeza roca', 'Robustez', 'Cobardía'],
    'Mime Jr.': ['Insonorizar', 'Filtro', 'Experto'],
    'Mr. Mime': ['Insonorizar', 'Filtro', 'Experto'],

    'Happiny': ['Cura natural', 'Dicha', 'Compasión'],
    'Chansey': ['Cura natural', 'Dicha', 'Alma cura'],
    'Blissey': ['Cura natural', 'Dicha', 'Alma cura'],

    'Cleffa': ['Gran encanto', 'Muro mágico', 'Compasión'],
    'Clefairy': ['Gran encanto', 'Muro mágico', 'Compasión'],
    'Clefable': ['Gran encanto', 'Muro mágico', 'Ignorante'],

    'Chatot': ['Vista lince', 'Tumbos', 'Sacapecho'],

    'Pichu': ['Electricidad estática', 'Pararrayos'],
    'Pikachu': ['Electricidad estática', 'Pararrayos'],
    'Raichu': ['Electricidad estática', 'Pararrayos'],

    'Hoothoot': ['Insomnio', 'Vista lince', 'Cromolente'],
    'Noctowl': ['Insomnio', 'Vista lince', 'Cromolente'],

    'Spiritomb': ['Presión', 'Allanamiento'],

    'Gible': ['Velo arena', 'Piel tosca'],
    'Gabite': ['Velo arena', 'Piel tosca'],
    'Garchomp': ['Velo arena', 'Piel tosca'],

    'Munchlax': ['Recogida', 'Sebo', 'Glotonería'],
    'Snorlax': ['Inmunidad', 'Sebo', 'Glotonería'],

    'Unown': ['Levitación'],

    'Riolu': ['Impasible', 'Foco interno', 'Bromista'],
    'Lucario': ['Impasible', 'Foco interno', 'Justiciero'],

    'Wooper': ['Humedad', 'Absorbe agua', 'Ignorante'],
    'Quagsire': ['Humedad', 'Absorbe agua', 'Ignorante'],

    'Wingull': ['Vista lince', 'Hidratación', 'Cura lluvia'],
    'Pelipper': ['Vista lince', 'Llovizna', 'Cura lluvia'],

    // #117: Girafarig
    'Girafarig': ['Foco interno', 'Madrugar', 'Herbívoro'],

    // #118 - #119: Hippopotas
    'Hippopotas': ['Chorro arena', 'Poder arena'],
    'Hippowdon': ['Chorro arena', 'Poder arena'],

    // #120 - #122: Azurill
    'Azurill': ['Sebo', 'Potencia', 'Herbívoro'],
    'Marill': ['Sebo', 'Potencia', 'Herbívoro'],
    'Azumarill': ['Sebo', 'Potencia', 'Herbívoro'],

    // #123 - #124: Skorupi
    'Skorupi': ['Armadura batalla', 'Francotirador', 'Vista lince'],
    'Drapion': ['Armadura batalla', 'Francotirador', 'Vista lince'],

    // #125 - #126: Croagunk
    'Croagunk': ['Anticipación', 'Piel seca', 'Toque tóxico'],
    'Toxicroak': ['Anticipación', 'Piel seca', 'Toque tóxico'],

    // #127: Carnivine
    'Carnivine': ['Levitación'],

    // #128 - #129: Remoraid
    'Remoraid': ['Entusiasmo', 'Francotirador', 'Veleta'],
    'Octillery': ['Ventosas', 'Francotirador', 'Veleta'],

    // #130 - #131: Finneon
    'Finneon': ['Nado rápido', 'Colector', 'Velo agua'],
    'Lumineon': ['Nado rápido', 'Colector', 'Velo agua'],

    // #132 - #133: Tentacool
    'Tentacool': ['Cuerpo puro', 'Lodo líquido', 'Cura lluvia'],
    'Tentacruel': ['Cuerpo puro', 'Lodo líquido', 'Cura lluvia'],

    // #134 - #135: Feebas
    'Feebas': ['Nado rápido', 'Despiste', 'Adaptable'],
    'Milotic': ['Escama especial', 'Tenacidad', 'Gran encanto'],

    // #136 - #137: Mantyke
    'Mantyke': ['Nado rápido', 'Absorbe agua', 'Velo agua'],
    'Mantine': ['Nado rápido', 'Absorbe agua', 'Velo agua'],

    // #138 - #139: Snover
    'Snover': ['Nevada', 'Insonorizar'],
    'Abomasnow': ['Nevada', 'Insonorizar'],

    // #140 - #141: Sneasel
    'Sneasel': ['Foco interno', 'Vista lince', 'Hurto'],
    'Weavile': ['Presión', 'Hurto'],

    // #142 - #145: Trío del Lago y Dialga/Palkia
    'Uxie': ['Levitación'],
    'Mesprit': ['Levitación'],
    'Azelf': ['Levitación'],
    'Dialga': ['Presión', 'Telepatía'],
    'Palkia': ['Presión', 'Telepatía'],
    'Manaphy': ['Hidratación'], // #151 en Dex Sinnoh (Expansion)

    // #148: Rotom
    'Rotom': ['Levitación'],

    // #149 - #150: Gligar
    'Gligar': ['Corte fuerte', 'Velo arena', 'Inmunidad'],
    'Gliscor': ['Corte fuerte', 'Velo arena', 'Antídoto'],

    // #151 - #152: Nosepass
    'Nosepass': ['Robustez', 'Imán', 'Poder arena'],
    'Probopass': ['Robustez', 'Imán', 'Poder arena'],

    // #153 - #156: Línea Ralts
    'Ralts': ['Sincronía', 'Rastro', 'Telepatía'],
    'Kirlia': ['Sincronía', 'Rastro', 'Telepatía'],
    'Gardevoir': ['Sincronía', 'Rastro', 'Telepatía'],
    'Gallade': ['Impasible', 'Cortante', 'Justiciero'], // "Cortante" añadido en Gen 9

    // #157 - #158: Lickitung
    'Lickitung': ['Despiste', 'Ritmo propio', 'Aclimatación'],
    'Lickilicky': ['Despiste', 'Ritmo propio', 'Aclimatación'],

    // #159 - #166: Eevee y evoluciones
    'Eevee': ['Fuga', 'Adaptable', 'Anticipación'],
    'Vaporeon': ['Absorbe agua', 'Hidratación'],
    'Jolteon': ['Absorbe electricidad', 'Pies rápidos'],
    'Flareon': ['Absorbe fuego', 'Agallas'],
    'Espeon': ['Sincronía', 'Espejo mágico'],
    'Umbreon': ['Sincronía', 'Foco interno'],
    'Leafeon': ['Defensa hoja', 'Clorofila'],
    'Glaceon': ['Manto níveo', 'Gélido'],

    // #167 - #168: Swablu
    'Swablu': ['Cura natural', 'Aclimatación'],
    'Altaria': ['Cura natural', 'Aclimatación'],

    // #169 - #171: Togepi
    'Togepi': ['Entusiasmo', 'Dicha', 'Afortunado'],
    'Togetic': ['Entusiasmo', 'Dicha', 'Afortunado'],
    'Togekiss': ['Entusiasmo', 'Dicha', 'Afortunado'],

    // #172 - #173: Houndour
    'Houndour': ['Madrugar', 'Absorbe fuego', 'Nerviosismo'],
    'Houndoom': ['Madrugar', 'Absorbe fuego', 'Nerviosismo'],

    // #174 - #176: Magnemite
    'Magnemite': ['Imán', 'Robustez', 'Cálculo final'],
    'Magneton': ['Imán', 'Robustez', 'Cálculo final'],
    'Magnezone': ['Imán', 'Robustez', 'Cálculo final'],

    // #177 - #178: Tangela
    'Tangela': ['Clorofila', 'Defensa hoja', 'Regeneración'],
    'Tangrowth': ['Clorofila', 'Defensa hoja', 'Regeneración'],

    // #179 - #180: Yanma
    'Yanma': ['Impulso', 'Ojo compuesto', 'Cacheo'],
    'Yanmega': ['Impulso', 'Cromolente', 'Cacheo'],

    // #181: Tropius
    'Tropius': ['Clorofila', 'Poder solar', 'Cosecha'],

    // #182 - #184: Rhyhorn
    'Rhyhorn': ['Pararrayos', 'Cabeza roca', 'Audaz'],
    'Rhydon': ['Pararrayos', 'Cabeza roca', 'Audaz'],
    'Rhyperior': ['Pararrayos', 'Roca sólida', 'Audaz'],

    // #185 - #187: Duskull
    'Duskull': ['Levitación', 'Cacheo'],
    'Dusclops': ['Presión', 'Cacheo'],
    'Dusknoir': ['Presión', 'Cacheo'],

    // #188 - #190: Porygon
    'Porygon': ['Rastro', 'Descarga', 'Cálculo final'],
    'Porygon2': ['Rastro', 'Descarga', 'Cálculo final'],
    'Porygon-Z': ['Adaptable', 'Descarga', 'Cálculo final'],

    // #191 - #192: Scyther
    'Scyther': ['Enjambre', 'Experto', 'Impasible'],
    'Scizor': ['Enjambre', 'Experto', 'Metal liviano'],

    // #193 - #195: Elekid
    'Elekid': ['Electricidad estática', 'Espíritu vital'],
    'Electabuzz': ['Electricidad estática', 'Espíritu vital'],
    'Electivire': ['Electro motor', 'Espíritu vital'],

    // #196 - #198: Magby
    'Magby': ['Cuerpo llama', 'Espíritu vital'],
    'Magmar': ['Cuerpo llama', 'Espíritu vital'],
    'Magmortar': ['Cuerpo llama', 'Espíritu vital'],

    // #199 - #201: Swinub
    'Swinub': ['Despiste', 'Manto níveo', 'Sebo'],
    'Piloswine': ['Despiste', 'Manto níveo', 'Sebo'],
    'Mamoswine': ['Despiste', 'Manto níveo', 'Sebo'],

    // #202 - #204: Snorunt
    'Snorunt': ['Foco interno', 'Gélido', 'Veleta'],
    'Glalie': ['Foco interno', 'Gélido', 'Veleta'],
    'Froslass': ['Manto níveo', 'Cuerpo maldito'],

    // #205: Absol
    'Absol': ['Presión', 'Afortunado', 'Justiciero'],

    // #206: Giratina
    'Giratina': ['Presión','Levitación', 'Telepatía'], 

    // #207: Heatran
    'Heatran': ['Absorbe fuego', 'Cuerpo llama'],

    // #208: Regigigas
    'Regigigas': ['Inicio lento'],

    // #209: Cresselia
    'Cresselia': ['Levitación'],

    // #210: Phione
    'Phione': ['Hidratación'],
    'Arceus': ['Multitipo'],
    'Shaymin': ['Cura natural','Dicha'],
    'Darkrai': ['Mal sueño'],
};
  
  return abilities[pokemonName] || ['Habilidad desconocida'];
}

function ensureData() {
  let list = getStoredList();
  if (!list) {
    list = loadInitialData();
    saveStoredList(list);
  } else {
    list = list.map(pokemon => {
      if (!pokemon.abilities) {
        pokemon.abilities = getDefaultAbilities(pokemon.name);
      }
      return pokemon;
    });
    saveStoredList(list);
  }
  return list;
}


function renderList() {
  const list = ensureData();
  const container = document.getElementById(POKEDEX_LIST_ID);
  if (!container) return;

  container.innerHTML = '';

  list.forEach((entry, index) => {
    const card = document.createElement('article');
    card.className = POKEMON_CARD_CLASS;
    card.setAttribute('role', CARD_ROLE);

    card.dataset.name = entry.name;
    card.dataset.number = entry.number;
    card.dataset.index = index;

    const img = document.createElement('img');
    img.className = CARD_IMAGE_CLASS;
    img.src = entry.image;
    img.alt = `${entry.name} image`;

    const body = document.createElement('div');
    body.className = CARD_BODY_CLASS;

    const title = document.createElement('h4');
    title.className = CARD_TITLE_CLASS;
    title.textContent = `${entry.name}`;

    const meta = document.createElement('div');
    meta.className = CARD_META_CLASS;
    meta.textContent = `#${entry.number} • ${entry.type}`;

    const actions = document.createElement('div');
    actions.className = 'card-actions';
    actions.style.display = 'flex';
    actions.style.gap = '8px';
    actions.style.marginTop = '10px';

    const editBtn = document.createElement('button');
    editBtn.className = CARD_EDIT_BUTTON_CLASS;
    editBtn.textContent = '✏️ Editar';
    editBtn.style.flex = '1';
    editBtn.style.padding = '8px';
    editBtn.style.borderRadius = '4px';
    editBtn.style.border = 'none';
    editBtn.style.background = 'rgba(var(--color-primary), 0.6)';
    editBtn.style.color = '#fff';
    editBtn.style.cursor = 'pointer';
    editBtn.style.fontSize = '12px';
    editBtn.addEventListener('click', () => openEditModal(entry, index));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = CARD_DELETE_BUTTON_CLASS;
    deleteBtn.textContent = '🗑️ Borrar';
    deleteBtn.style.flex = '1';
    deleteBtn.style.padding = '8px';
    deleteBtn.style.borderRadius = '4px';
    deleteBtn.style.border = 'none';
    deleteBtn.style.background = 'rgba(255, 102, 102, 0.6)';
    deleteBtn.style.color = '#fff';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.fontSize = '12px';
    deleteBtn.addEventListener('click', () => {
      if (confirm(`¿Eliminar a ${entry.name}?`)) {
        deletePokemon(index);
      }
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    body.appendChild(title);
    body.appendChild(meta);
    body.appendChild(actions);
    card.appendChild(img);
    card.appendChild(body);

    card.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        openDetailModal(entry, index);
      }
    });
    card.style.cursor = 'pointer';

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

function validatePokemonForm(values) {
  const errors = [];

  // name: required, min 2 chars
  const name = (values.name || '').trim();
  if (!name) errors.push('El nombre es obligatorio.');
  else if (name.length < 2) errors.push('El nombre debe tener al menos 2 caracteres.');

  // number: required, integer >=1
  const number = Number(values.number);
  if (!values.number && values.number !== 0) errors.push('El número de Pokédex es obligatorio.');
  else if (!Number.isInteger(number) || number < 1) errors.push('El número debe ser un entero mayor o igual a 1.');

  // type: required
  const type = (values.type || '').trim();
  if (!type) errors.push('Selecciona un tipo.');

  // image: must be a valid URL (http/https)
  const image = (values.image || '').trim();
  try {
    const url = new URL(image);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      errors.push('La URL de la imagen debe usar http o https.');
    }
  } catch (e) {
    errors.push('Introduce una URL válida para la imagen.');
  }

  // duplicate check (number) — but exclude the current edit index
  const existing = ensureData().some((item, idx) => {
    const currentEditId = sessionStorage.getItem(CURRENT_EDIT_ID);
    return Number(item.number) === number && (!currentEditId || idx !== parseInt(currentEditId));
  });
  if (existing) errors.push('Ya existe un Pokémon con ese número de Pokédex.');

  return { valid: errors.length === 0, errors };
}

function updatePokemon(index, pokemon) {
  if (!pokemon || !pokemon.name) return false;
  const list = ensureData();

  if (index < 0 || index >= list.length) return false;

  list[index] = {
    name: pokemon.name.trim(),
    number: Number(pokemon.number),
    type: pokemon.type,
    image: pokemon.image
  };

  saveStoredList(list);
  renderList();
  return true;
}

function deletePokemon(index) {
  const list = ensureData();
  if (index < 0 || index >= list.length) return false;

  list.splice(index, 1);
  saveStoredList(list);
  renderList();
  return true;
}

function openEditModal(pokemon, index) {
  sessionStorage.setItem(CURRENT_EDIT_ID, index);
  
  const editModal = document.getElementById(EDIT_MODAL_ID);
  if (!editModal) return;
  
  document.getElementById(EDIT_NAME_INPUT_ID).value = pokemon.name;
  document.getElementById(EDIT_NUMBER_INPUT_ID).value = pokemon.number;
  document.getElementById(EDIT_TYPE_INPUT_ID).value = pokemon.type;
  document.getElementById(EDIT_IMAGE_INPUT_ID).value = pokemon.image;
  
  editModal.style.display = 'block';
  // Prevent background scrolling while modal is open
  document.body.classList.add('modal-open');
}

function openDetailModal(pokemon, index) {
  sessionStorage.setItem(CURRENT_DETAIL_INDEX, index);
  
  const detailModal = document.getElementById(DETAIL_MODAL_ID);
  if (!detailModal) return;
  
  document.getElementById(DETAIL_IMAGE_ID).src = pokemon.image;
  document.getElementById(DETAIL_IMAGE_ID).alt = `${pokemon.name} image`;
  document.getElementById(DETAIL_NAME_ID).textContent = pokemon.name;
  document.getElementById(DETAIL_NUMBER_ID).textContent = `#${pokemon.number} - Pokédex de Sinnoh`;
  document.getElementById(DETAIL_TYPE_ID).textContent = `Tipo: ${pokemon.type}`;
  
  // Display abilities
  const abilitiesList = document.getElementById(DETAIL_ABILITIES_LIST_ID);
  if (abilitiesList) {
    abilitiesList.innerHTML = '';
    const abilities = pokemon.abilities || getDefaultAbilities(pokemon.name);
    abilities.forEach(ability => {
      const li = document.createElement('li');
      li.textContent = ability;
      abilitiesList.appendChild(li);
    });
  }
  
  detailModal.style.display = 'block';
  // Prevent background scrolling while modal is open
  document.body.classList.add('modal-open');
}


(function initCrudModule() {

  document.addEventListener('DOMContentLoaded', () => {
    ensureData();
    renderList();
  });


  // Form handling + validation
  const form = document.getElementById(FORM_ID);
  const errorsEl = document.getElementById(FORM_ERRORS_ID);
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (errorsEl) errorsEl.innerHTML = '';

      const values = {
        name: document.getElementById(NAME_INPUT_ID)?.value,
        number: document.getElementById(NUMBER_INPUT_ID)?.value,
        type: document.getElementById(TYPE_INPUT_ID)?.value,
        image: document.getElementById(IMAGE_INPUT_ID)?.value
      };

      const result = validatePokemonForm(values);
      if (!result.valid) {
        if (errorsEl) {
          const ul = document.createElement('ul');
          result.errors.forEach(msg => {
            const li = document.createElement('li');
            li.textContent = msg;
            ul.appendChild(li);
          });
          errorsEl.appendChild(ul);
        } else {
          alert(result.errors.join('\n'));
        }
        return;
      }

      // If valid, add the pokemon and reset form
      const added = addNewPokemon({
        name: values.name,
        number: Number(values.number),
        type: values.type,
        image: values.image
      });

      if (added) {
        form.reset();
        if (errorsEl) errorsEl.innerHTML = '';
      }
    });
  }

  
  window.addEventListener(POKEMON_ADD_EVENT, (e) => {
    addNewPokemon(e.detail);
  });

  
  const modal = document.getElementById(EDIT_MODAL_ID);
  const editForm = document.getElementById(EDIT_FORM_ID);
  const modalClose = modal ? modal.querySelector('.modal-close') : null;
  const modalCancelBtn = modal ? modal.querySelector('.modal-cancel-button') : null;
  const editErrorsEl = document.getElementById(EDIT_ERRORS_ID);

  function closeEditModal() {
    if (modal) modal.style.display = 'none';
    sessionStorage.removeItem(CURRENT_EDIT_ID);
    // Restore background scrolling
    document.body.classList.remove('modal-open');
  }

  
  if (modalClose) {
    modalClose.addEventListener('click', closeEditModal);
  }

  
  if (modalCancelBtn) {
    modalCancelBtn.addEventListener('click', closeEditModal);
  }

  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeEditModal();
      }
    });
  }

  
  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (editErrorsEl) editErrorsEl.innerHTML = '';

      const currentEditId = sessionStorage.getItem(CURRENT_EDIT_ID);
      if (currentEditId === null) {
        alert('Error: no Pokémon selected for editing');
        return;
      }

      const values = {
        name: document.getElementById(EDIT_NAME_INPUT_ID)?.value,
        number: document.getElementById(EDIT_NUMBER_INPUT_ID)?.value,
        type: document.getElementById(EDIT_TYPE_INPUT_ID)?.value,
        image: document.getElementById(EDIT_IMAGE_INPUT_ID)?.value
      };

      const result = validatePokemonForm(values);
      if (!result.valid) {
        if (editErrorsEl) {
          const ul = document.createElement('ul');
          result.errors.forEach(msg => {
            const li = document.createElement('li');
            li.textContent = msg;
            ul.appendChild(li);
          });
          editErrorsEl.appendChild(ul);
        } else {
          alert(result.errors.join('\n'));
        }
        return;
      }

      
      const success = updatePokemon(parseInt(currentEditId), {
        name: values.name,
        number: Number(values.number),
        type: values.type,
        image: values.image
      });

      if (success) {
        closeEditModal();
        editForm.reset();
        if (editErrorsEl) editErrorsEl.innerHTML = '';
      } else {
        alert('Error updating Pokémon');
      }
    });
  }

  
  const detailModal = document.getElementById(DETAIL_MODAL_ID);
  const detailEditBtn = document.getElementById(DETAIL_EDIT_BTN_ID);
  const detailCloseBtn = document.getElementById(DETAIL_CLOSE_BTN_ID);
  const detailModalClose = detailModal ? detailModal.querySelector('.modal-close') : null;

  function closeDetailModal() {
    if (detailModal) detailModal.style.display = 'none';
    sessionStorage.removeItem(CURRENT_DETAIL_INDEX);
    // Restore background scrolling
    document.body.classList.remove('modal-open');
  }

  
  if (detailModalClose) {
    detailModalClose.addEventListener('click', closeDetailModal);
  }

  
  if (detailCloseBtn) {
    detailCloseBtn.addEventListener('click', closeDetailModal);
  }

 
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) {
        closeDetailModal();
      }
    });
  }

  
  if (detailEditBtn) {
    detailEditBtn.addEventListener('click', () => {
      const currentDetailIndex = sessionStorage.getItem(CURRENT_DETAIL_INDEX);
      if (currentDetailIndex !== null) {
        const list = ensureData();
        const pokemon = list[parseInt(currentDetailIndex)];
        if (pokemon) {
          closeDetailModal();
          openEditModal(pokemon, parseInt(currentDetailIndex));
        }
      }
    });
  }
})();