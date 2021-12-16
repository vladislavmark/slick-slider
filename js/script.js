$(document).ready(function () {
	$('.slider').slick({
		centerMode: true,
		centerPadding: '10px',
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			}
		]
	});

	$('.slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1
	});

	// $('.slider').slick({
	// 	arrows:true,
	// 	dots:true,
	// 	slidesToShow:4,
	// 	autoplay:true,
	// 	speed:1000,
	// 	autoplaySpeed:800,
	// 	responsive:[
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow:2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 550,
	// 			settings: {
	// 				slidesToShow:1,
	// 				centerMode: true,
	// 				centerPadding: '10px'
	// 			}
	// 		}
	// 	]
	// });

});

