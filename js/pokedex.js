
document.getElementById("mybtn").onclick = function () { createPokedex() };
function readPokedex(functionToRun, element) {
    $.getJSON("resources/json/pokedex.json", function (json) {
        functionToRun(json, element);
    });
}


function createPokedex() {
    var rowElement = document.createElement('div')
    rowElement.classList.add('row')

    rowElement.id = 'pokedex'
    container = document.querySelector('.container-fluid')
    container.appendChild(rowElement)

    var pokemonSideBar = createPokedexSideBar()
    rowElement.appendChild(pokemonSideBar)

    createPokemonEntries()

}

function createPokedexSideBar() {
    var sidebar = document.createElement('div')
    sidebar.classList.add('col-xl-3', 'col-lg-4', 'col-md-5', 'col-sm-6', 'col-12')
    sidebar.id = 'pokedex-entries'
    return sidebar

}

function createSideBarSelections() {

    // readPokedex()

    // console.log(jsonData)
}

function createStatSheet() {

}

function createPokemonMoves(json) {

}

function createPokemonEntries() {
    $.getJSON("resources/json/pokedex.json", function (json) {
        for (const pokemon in json) {
            createPokemonEntry(json[pokemon], pokemon)
        }
    });
}

function createPokemonEntry(pokemon, pokemonName) {
    let Type1 = pokemon['Type 1'].toLowerCase()
    let Type2 = pokemon['Type 2'].toLowerCase()

    let pokemonDiv = document.createElement('div')
    pokemonDiv.classList.add('pokemon')
    pokemonDiv.id = pokemonName

    let namePElement = document.createElement('P')
    namePElement.innerHTML = pokemonName
    pokemonDiv.appendChild(namePElement)

    let type1Span = document.createElement('span')
    type1Span.classList.add('type')
    type1Span.classList.add(Type1)
    pokemonDiv.appendChild(type1Span)

    if (Type2 != "") {
        let type2Span = document.createElement('span')
        type2Span.classList.add('type')
        type2Span.classList.add(Type2)
        pokemonDiv.appendChild(type2Span)
    }

    let seperator = document.createElement('hr')
    pokemonDiv.appendChild(seperator)

    let pokedexEntries = document.querySelector('#pokedex-entries')
    pokedexEntries.appendChild(pokemonDiv)
}
