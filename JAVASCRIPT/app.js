$('#expand_data').css('cursor', 'pointer');
$('#expand_data').click(function () {
    $('.collapse').removeClass('show');
    $('.collapse').toggleClass('show');
})

$('#collapse_data').css('cursor', 'pointer');
$('#collapse_data').click(function () {
    $('.show').removeClass('show');
})
