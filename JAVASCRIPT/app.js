//JavaScript added to allow tabs to be clickable on iPhone
$('#expand_data').css('cursor', 'pointer');

//Function to expand all data fields
$('#expand_data').click(function () {
    $('.collapse').removeClass('show');
    $('.collapse').toggleClass('show');
})

//JavaScript added to allow tabs to be clickable on iPhone
$('#collapse_data').css('cursor', 'pointer');

//Function to collapse all data fields
$('#collapse_data').click(function () {
    $('.show').removeClass('show');
})
