let pokemonRepository = (function () {
    let pokemonList = [
        {name:'Bulbasaur', height:0.7, type: ['grass', 'poison']},
        {name:'Ivysaur', height:1, type: ['grass', 'poison']},
        {name:'Venusaur', height:2, type: ['grass', 'poison']},
        {name:'Charmander', height:0.6, type: ['fire']},
        {name:'Charmeleon', height:1.1, type: ['fire']},
        {name:'Charizard', height:1.7, type: ['fire', 'flying']}
        ];
        
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
    
    return {
        add: add,
        getAll: getAll()
    };
})()


document.write("Here are the pokemon in your pokedex: <br>");

pokemonRepository.getAll.forEach(function(pokemon){
    if (pokemon.height < 1) {
        document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + " Size: small) <br>")
    } else if (pokemon.height > 1.5) {
        document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + " Size: large) <br>")
    } else {
        document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + " Size: average) <br>")
    }
})