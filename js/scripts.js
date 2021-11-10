let pokemonRepository = (function () {
  let repository = [
    {name:'Bulbasaur', height:0.7, type: ['grass', 'poison']},
    {name:'Ivysaur', height:1, type: ['grass', 'poison']},
    {name:'Venusaur', height:2, type: ['grass', 'poison']},
    {name:'Charmander', height:0.6, type: ['fire']},
    {name:'Charmeleon', height:1.1, type: ['fire']},
    {name:'Charizard', height:1.7, type: ['fire', 'flying']}
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add(
  {name: "Pikachu", height: 0.3, types: ["electric"]}
);

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

/* --OLD FUNCTION FOR REFERENCE--
pokemonRepository.getAll.forEach(function(pokemon){
    if (pokemon.height < 1) {
        document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + " Size: small) <br>")
    } else if (pokemon.height > 1.5) {
        document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + " Size: large) <br>")
    } else {
        document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + " Size: average) <br>")
    }
})
*/
