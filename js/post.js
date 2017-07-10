$(document).ready(() => {

  $('#postWalle').click((event) => {
    const walleInfo = {
      name: 'WALL-E',
      occupation: 'Waste Allocation Robot',
      weapon: 'Head Laser'
    };

    postCharacterInfo(walleInfo);
  });

});

function postCharacterInfo(newCharacterDetails) {
  $.ajax({
    url: 'https://ih-api.herokuapp.com/characters',
    method: 'POST',
    //'data' is only used when we need to send the API
    //extra information
    // data: {
    //   name: '',
    //   weapon: '',
    //   occupation: ''
    // },
    data: newCharacterDetails,
    //we can use this because newCharacterDetails is an object
    //that already contains the data we want to post to the API
    success: (responseFromApi) => {
      $('#characterList').append(`
        <li>
          <h3> ${responseFromApi.name} </h3>
          <p> id: ${responseFromApi.id} </p>
        </li>
      `);
    },
    error: (errorFromApi) => {
      alert('Sorry, character POST error.');
      console.log(errorFromApi);
    }
  });
}
