$(document).ready(() => {

  // When #pokeButton is clicked
  $('#pokeButton').click(() => {
    getPokemonInfo(42);
    // Pokemon #42 is Golbat
  });

});

function getPokemonInfo (id) {
  // fetch the data from the pokeapi

  // if successful, display some of the data on the screen
  // (DOM manipulation)

  // if there's an error, show error feedback (DOM manipulation)
}
