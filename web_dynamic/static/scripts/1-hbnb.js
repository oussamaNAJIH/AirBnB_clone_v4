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
