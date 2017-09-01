$(document).ready(function() {

$('#tweet-controls').hide();


$('#tweet-content .tweet-compose').on('click', function () {
    $('#tweet-controls').fadeToggle('fast', 'linear');
    $(this).css('height', '65px');
});


$('#tweet-content .tweet-compose').on('input', updateCount);

function updateCount() {
    var cs = [140 - $(this).val().length];
    $('#char-count').text(cs);
    if (cs <= 10) {
        $('#char-count').css('color', 'red');
    } else $('#char-count').css('color', 'black');
    if (cs <= 0) {
        $('#tweet-submit').prop('disabled', true);
    } else $('#tweet-submit').prop('disabled', false);
};


$('#tweet-submit').on('click', function() {
    var tweet = $('.tweet-compose').val();
    var $tweet = $('.tweet').first().clone();
    $tweet.find('.tweet-text').text(tweet);
    $tweet.find('.fullname').text('Savy Parchman');
    $tweet.find('.username').text('@savyfay');
    $tweet.find('.avatar').first().attr('src', './js/Avatar_Baby.png');
    $('#stream').prepend($tweet);
});

$('.tweet-actions').hide();

$('.tweet').hover(function() {
    $(this).find('.tweet-actions').show();
},
    function() {
        $('.tweet-actions').hide();
    });

$('.stats, .reply').hide();

$('.tweet').on('click', function() {
    $(this).find('.stats, .reply').slideDown("slow");
})
});
