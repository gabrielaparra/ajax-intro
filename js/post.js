$(document).ready(() => {

  $('#postWalle').click((event) => {
    const walleInfo = {
      name: 'WALL-E',
      occupation: 'Waste Allocation Robot',
      weapon: 'Head Laser'
    };

    postCharacterInfo(walleInfo);
  });

  $('#postCharacterForm').submit((event) => {
    event.preventDefault();
    //to prevent the default of refreshing the page

    const characterInfo = {
      name: $('#postCharacterName').val(),
      weapon: $('#postCharacterOccupation').val(),
      occupation: $('#postCharacterWeapon').val(),
    };

    postCharacterInfo(characterInfo);
  });

  $('updateCharacterForm').submit((event) => {
    event.preventDefault();

    const updatedInfo = {
      name: $('#updateCharacterName').val(),
      weapon: $('#updateCharacterOccupation').val(),
      occupation: $('#updateCharacterWeapon').val(),
    };

    const characterId = $('#updateCharacterId').val();

    updateCharacter(characterId, updatedInfo);
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

function updateCharacter(id, newInfo) {
  $.ajax({
    url: 'https://ih-api.herokuapp.com/characters',
    method: 'PATCH',
    data: newInfo,
    success: (responseFromApi) => {
      console.log(responseFromApi);
    },
    error: (errorFromApi) => {
      console.log(errorFromApi);
    }
  });
}
