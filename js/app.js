$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    })
    $('html').on('keydown', function(e) {
		console.log(e.keyCode)
		if(e.keyCode == "88"){
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
    $('html').on('keyup', function(e) {
		console.log(e.keyCode)
		if(e.keyCode == "88"){
			$('.ryu-ready').show();
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').hide();
		}
	})
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}