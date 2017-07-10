$(document).ready(() => {

  // When #pokeButton is clicked
  $('#pokeButton').click(() => {
    getPokemonInfo(42);
    // Pokemon #42 is Golbat
  });

});

function getPokemonInfo (pokemonId) {
  // fetch the data from the pokeapi
  $.ajax({
    //1st arg -> giant settings object
    //minimum 4 settings (the following ones):
    url: 'http://pokeapi.co/api/v2/pokemon/' + pokemonId,
    method: 'GET',
    //url and method define which API we'll be using
    success: () => {},
    error: () => {}
  });
  // if successful, display some of the data on the screen
  // (DOM manipulation)

  // if there's an error, show error feedback (DOM manipulation)
}
