$(document).ready(function() {
	
     $(window).scroll(function(){
     	 var ventana = $(window).width();

     	 if (ventana > 800) {
             var scroll = $(window).scrollTop();

             $('header .textos').css({
             	'transform': 'translate(0px, ' + scroll / 2.5 + '%)'
             });

             $('.acerca-de article').css({
             	'transform': 'translate(0px, -' + scroll / 3.5 + '%)'
             });
     	 }
     });

     $(window).resize(function() {
     	var ventana = $(window).width();

     	if (ventana < 800) {
     		$('.acerca-de article').css({
             	'transform': 'translate(0px, 0px)'
            });
     	}
     });

});