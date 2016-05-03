$(document).ready(function(){
	$('#menuToggle').click(function(event){
		$(this).toggleClass('toggled');
		// $('header nav').toggleClass('toggled');
		$('header nav').slideToggle('slow');
		$('body#home main h1').toggleClass('blur');
		$('body#home').toggleClass('blur');
	});
});