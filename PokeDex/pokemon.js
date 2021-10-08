const NAME = document.querySelector('.name');
const PokeIMG = document.querySelector('.img');
const ID = document.querySelector('.id');
const HEIGHT = document.querySelector('.height');
const WEIGHT = document.querySelector('.weight');
const ABILITIES = document.querySelector('.abilities');
const STATS = document.querySelector('.stats');

const findPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { abilities, id, height, weight, name } = data;
    PokeIMG.setAttribute('src', sprite);
    getPokemonAbilities(abilities);
    getPokemonID(id);
    getPokemonWeight(weight);
    getPokemonHeight(height);
    getPokemonName(name);
    
}
const getPokemonName = name => {
    NAME.innerHTML = '';
    const nameElement = document.createElement("div");
    const namePokeElement = document.createElement("div");
    namePokeElement.textContent = 'Name: '+name;
    nameElement.appendChild(namePokeElement);
    NAME.appendChild(nameElement);
}

const getPokemonHeight = height => {
    HEIGHT.innerHTML = '';
    const idElement = document.createElement("div");
    const idNumberElement = document.createElement("div");
    idNumberElement.textContent = 'Height: '+height;
    idElement.appendChild(idNumberElement);
    ID.appendChild(idElement);
}

const getPokemonWeight = weight => {
    WEIGHT.innerHTML = '';
    const idElement = document.createElement("div");
    const idNumberElement = document.createElement("div");
    idNumberElement.textContent = 'Weight: '+weight;
    idElement.appendChild(idNumberElement);
    ID.appendChild(idElement);
}

const getPokemonID = id => {
    ID.innerHTML = '';
    const idElement = document.createElement("div");
    const idNumberElement = document.createElement("div");
    idNumberElement.textContent = "Id: "+id;
    idElement.appendChild(idNumberElement);
    ID.appendChild(idElement);
}


const getPokemonAbilities = abilities => {
    ABILITIES.innerHTML = '';
    const abilitieElement = document.createElement("div");
    const abilitieName = document.createElement("div");
    abilitieName.textContent = 'Abilities:';
    abilitieElement.appendChild(abilitieName);
    abilities.forEach(abilities => {
        const abilitiesTextElement = document.createElement("div");
        abilitiesTextElement.textContent = abilities.ability.name;
        abilitieElement.appendChild(abilitiesTextElement);
        ABILITIES.appendChild(abilitieElement);
    });
}


const renderNotFound = () => {
    NAME.textContent = 'Pokemón no encontrado';
    PokeIMG.setAttribute('src', '');
    ABILITIES.innerHTML = '';
    WEIGHT.innerHTML = '';
    HEIGHT.innerHTML = '';
    ID.textContent = '';
}
