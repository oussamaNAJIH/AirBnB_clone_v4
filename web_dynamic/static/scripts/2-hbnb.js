$(document).ready(function() {
    var checkedAmenities = [];
    function updateAmenitiesList() {
        $('div.amenities h4').empty();
        checkedAmenities.forEach(function(amenityId) {
            $('div.amenities h4').append('<span>' + amenityId + '</span>');
        });
    }
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');

        if ($(this).is(':checked')) {
            if (checkedAmenities.indexOf(amenityId) === -1) {
                checkedAmenities.push(amenityId);
            }
        } else {
            var index = checkedAmenities.indexOf(amenityId);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }
        updateAmenitiesList();
    });
});


const request = require('request');
const url = 'http://0.0.0.0:5001/api/v1/status/';

request(url, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  } else {
    console.error('Error:', error);
  }
});
