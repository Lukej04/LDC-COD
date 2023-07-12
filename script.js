$(document).ready(function() {
  // Google Sheet API endpoint
  const url = 'https://sheets.googleapis.com/v4/spreadsheets/LDC Spreadsheet/values/Sheet1!A9:H9:append?valueInputOption=RAW';

  // Google Sheet API access token
  const accessToken = 'ya29.a0AbVbY6OXfEjCq45wOHbmiH6BTityUj9lz-N9lYCTdtG9J9sx6DbOBzC1Mk2SW0Jv_Mzi7_1jEOsvGmFGX6iE1WX9rjoZDNwGKOhUHNGGRBBpqlQZA4Obt3CJDSAN5C0Z9cl6Fefo1sURC5_qL4THtfNe3aK-aCgYKAYASARASFQFWKvPlJ33Q_yFobTMWmV_WNeURaA0163';

  // Handle form submission
  $('#myForm').submit(function(event) {
    event.preventDefault();

    // Get form data
    const date = $('#date').val();
    const player = $('#player').val();
    const season = $('#season').val();
    const mode = $('#mode').val();
    const map = $('#map').val();
    const result = $('#result').val();
    const kills = $('#kills').val();
    const deaths = $('#deaths').val();

    // Prepare the data to be sent to the Google Sheet
    const data = {
      values: [[date, player, season, mode, map, result, kills, deaths]]
    };

    // Send a POST request to the Google Sheet API
    $.ajax({
      url: url,
      type: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      success: function(response) {
        // Show a popup message on successful submission
        alert('Form submitted successfully!');
      },
      error: function(error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
      }
    });
  });
});
