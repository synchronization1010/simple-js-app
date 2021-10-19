let pokemonList = [
    {name:'Bulbasaur', height:0.7, type: ['grass', 'poison']},
    {name:'Ivysaur', height:1, type: ['grass', 'poison']},
    {name:'Venusaur', height:2, type: ['grass', 'poison']},
    {name:'Charmander', height:0.6, type: ['fire']},
    {name:'Charmeleon', height:1.1, type: ['fire']},
    {name:'Charizard', height:1.7, type: ['fire', 'flying']}
    ];

document.write("Here are the pokemon in your pokedex: <br>");

for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height < 1) {
        document.write("Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + " Size: small) <br>")
    } else if (pokemonList[i].height > 1.5) {
        document.write("Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + " Size: large) <br>")
    } else {
        document.write("Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + " Size: average) <br>")
    }
}

