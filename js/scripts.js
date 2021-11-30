let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon
      ) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name.toUpperCase();
    button.classList.add('button-class');
    button.setAttribute('data-toggle','modal')
    button.setAttribute('data-target','#modal-container')
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  let modalContainer = document.querySelector('#modal-container');
  function showModal(pokemon) {
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
  
    // Clear existing modal content
    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';
  
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Add Close Button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
  
    // Add pokemon name, image, height, weight
    let pokemonName = document.createElement('h1'); //name
    pokemonName.innerText = pokemon.name.toUpperCase();
    let pokemonImg = document.createElement('img');  //img
    pokemonImg.src = pokemon.imageUrl;
    let PokemonHeight = document.createElement('p'); //height
    PokemonHeight.innerText = 'Height: ' + pokemon.height;
    let PokemonWeight = document.createElement('p'); //weight
    PokemonWeight.innerText = 'Weight: ' + pokemon.weight;
  
    //Add created Elements
    modal.appendChild(closeButtonElement);
    modalTitle.appendChild(pokemonName);
    modalBody.append(pokemonImg);
    modalBody.appendChild(PokemonHeight);
    modalBody.appendChild(PokemonWeight);
    modalContainer.appendChild(modal);
  
  }
  
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  //Press 'e' escaped modal
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });

  //Allows clicking outside modal to close modal
  modalContainer.addEventListener('click', (e) => { 
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});



