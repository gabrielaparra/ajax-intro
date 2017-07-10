$(document).ready(() => {

  // When #pokeButton is clicked
  $('#pokeButton').click(() => {
    getPokemonInfo(42);
    // Pokemon #42 is Golbat
  });

  $('#pokemonSearch').submit((event) => {
    // The 1st arg of any event callback (click, submit, scroll, etc.)
    // is an 'Event' object.

    // use the 'Event' objec to prevent the normal
    // form submission page refresh
    event.preventDefault();

    //retrieve what the user typed in the form
    const pokemonNumber = $('#pokemonId').val();

    //call 'getPokemonInfo()' with the user's inputted number
    getPokemonInfo(pokemonNumber);
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
    success: (responseFromApi) => {
    // if successful, display some of the data on the screen
    // (DOM manipulation)

    //add the info to the <p> tag with the #pokeInfo id
      $('#pokeInfo').html(`
        ${responseFromApi.name}
        <img src='${responseFromApi.sprites.front_default}'>
      `);
      //backticks use for string interpolation
    },

    error: (errorFromApi) => {
      alert('Sorry, Pokemon data error.');
      console.log(errorFromApi);
    }
  });

  // if there's an error, show error feedback (DOM manipulation)
}
