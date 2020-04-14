/* =============================================
				Preloader
============================================== */
$(window).on('load', function() {
	$('#status').fadeOut(); // Fades out the preloader gif when the window has loaded.
	/* Fades out the preloader page when the window has loaded. Includes a .35sec delay. */
	$('#preloader').delay(350).fadeOut('slow');
});

/* =============================================
				Team Section
============================================== */
/* Load the owl carousel slider on document.ready with custom functions */
$(function() {
	$("#team-members").owlCarousel({
		items: 2, /* Number of people to be displayed at a time. */
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true, /* Add left and right navigation buttons */
		dots: false, /* Hide the default dots navigation option */
		/* Left and right angle arrows */
		navText: ['<i class="fas fa-angle-left fa-2x"></i>', '<i class="fas fa-angle-right fa-2x"></i>']
	});
});