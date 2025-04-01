

let pokemons = 
[
    {
      thumbnail: '001.png',
      id:'001' ,
      name: 'bulbasaur',
      type: ['plant', 'poison'],
    },
    {
      thumbnail: '002.png',
      id:'002',
      name: 'charmander',
      type: ['fire'],
    },
    {
      thumbnail: '003.png',
      id:'003',
      name: 'caterpie',
      type: ['bug'],
    },
    {
      thumbnail: '004.png',
      id:'004',
      name: 'kakuna',
      type: ['bug', 'poison'],
    },
    {
      thumbnail: '005.png',
      id:'005',
      name: 'rattata',
      type: ['plant'],
    },
    {
      thumbnail: '006.png',
      id:'006',
      name: 'pikachu',
      type: ['normal'],
    },
    {
      thumbnail: '007.png',
      id:'007',
      name: 'vulpix',
      type: ['fire', 'plant'],
    },
    {
      thumbnail: '008.png',
      id:'008',
      name: 'jigglypuff',
      type: ['normal', 'fairy'],
    },
    {
      thumbnail: '009.png',
      id:'009',
      name: 'mew',
      type: ['phychic'],
    },
    {
      thumbnail: '010.png',
      id:'010',
      name: 'ponyta',
      type: ['fire'],
    },
    {
      thumbnail: '011.png',
      id:'011',
      name: 'cloyster',
      type: ['ice', 'water'],
    },
    {
      thumbnail: '012.png',
      id:'012',
      name: 'groundor',
      type: ['ground'],
    },
    {
      thumbnail: '013.png',
      id:'013',
      name: 'cubone',
      type: ['ground'],
    },
    {
      thumbnail: '014.png',
      id:'014',
      name: 'tentacruel',
      type: ['poison', 'water'],
    },
    {
      thumbnail: '015.png',
      id:'015',
      name: 'darkrai',
      type: ['dark'],
    },
    {
      thumbnail: '016.png',
      id:'016',
      name: 'diglett',
      type: ['ground'],
    }
  ]  
;



for (let i = 0; i < pokemons.length; i++){
  let pokemon= pokemons[i];
  let pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  pokemonCard.classList.add(pokemon.name);
  let pokemonImage = document.createElement('img');
  pokemonImage.src = 'styles/images/' + pokemon.thumbnail;

  pokemonImage.classList.add(pokemon.id);
  pokemonCard.appendChild(pokemonImage);
  let pokeCards = document.getElementById("poke-cards");



let pokeNumberElement = document.createElement('p');
pokeNumberElement.classList.add('pokemon-number');
pokeNumberElement.textContent= pokemon.id;
pokemonCard.appendChild(pokeNumberElement);


let pokeNameElement = document.createElement('p');
pokeNameElement.classList.add('pokemon-name');
pokeNameElement.textContent = pokemon.name;
pokemonCard.appendChild(pokeNameElement);





  for (let k = 0 ; k < pokemon.type.length; k++){
    let pokemonType = pokemon.type[k];
    let pokemontypeelement = document.createElement('span');
    pokemontypeelement.classList.add('pokemon-type', pokemonType);
    pokemonCard.appendChild(pokemontypeelement);
    pokemontypeelement.textContent = pokemonType;


  }

  
  pokeCards.appendChild(pokemonCard);


};

