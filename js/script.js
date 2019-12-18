$('.row img').click( function(e) {
	// console.log(e);
	let urlImg = e.target.alt;
	// console.log(urlImg);
	showImage(urlImg);
} );



$('.row select').change( function(e) {
	// console.log(e);
	let urlImg = $('.row select').val();
	// console.log(urlImg);
	showImage(urlImg);
});

function showImage(urlImg) {
	$(".display img").attr("src", urlImg);
}

$('.display img').mouseover( function() {
	// $('.display img').addClass('transform');
	$('.display img').css('transform', 'scale(1.25)')
							.css('transform-origin', 'center center')
							.css('transition-property', 'transform')
							.css('transition-duration', '1000ms');
})

$('.display img').mouseout( function() {
	// $('.display img').removeClass('transform');
	$('.display img').css('transform', 'scale(1)')
							.css('transform-origin', 'center center')
							.css('transition-property', 'transform')
							.css('transition-duration', '1000ms');
})

//добавить ввод с клавиатуры

// $(".keyboard").keypress( function(e) {
// 	console.log(e);
// 	console.log(e.wich);
// 	switch(e.wich) {
// 		// case("49"):
// 		case("49"):
// 			showImage("img/01.jpg");
// 			break;
// 		case(50):
// 			showImage("img/02.jpg");
// 			break;
// 		case(51):
// 			showImage("img/03.jpg");
// 			break;
// 		case(52):
// 			showImage("img/04.jpg");
// 			break;
// 		case(53):
// 			showImage("img/05.jpg");
// 			break;
// 		case(54):
// 			showImage("img/06.jpg");
// 			break;
// 		case(55):
// 			showImage("img/07.jpg");
// 			break;
// 		case(56):
// 			showImage("img/08.jpg");
// 			break;
// 		case(57):
// 			showImage("img/09.jpg");
// 			break;
// 		case(48):
// 			showImage("img/10.jpg");
// 			break;
// 		case(189):
// 			showImage("img/11.jpg");
// 			break;
// 		case(187):
// 			showImage("img/12.jpg");
// 			break;

// 		case(81):
// 			showImage("img/13.jpg");
// 			break;
// 		case(87):
// 			showImage("img/14.jpg");
// 			break;
// 		case(69):
// 			showImage("img/15.jpg");
// 			break;
// 		case(82):
// 			showImage("img/16.jpg");
// 			break;
// 		case(84):
// 			showImage("img/17.jpg");
// 			break;
// 		case(89):
// 			showImage("img/18.jpg");
// 			break;
// 		case(85):
// 			showImage("img/9.jpg");
// 			break;
// 		case(73):
// 			showImage("img/20.jpg");
// 			break;
// 		case(79):
// 			showImage("img/21.jpg");
// 			break;
// 		case(80):
// 			showImage("img/22.jpg");
// 			break;
// 		case(219):
// 			showImage("img/23.jpg");
// 			break;
// 		case(221):
// 			showImage("img/24.jpg");
// 			break;


// 		case(65):
// 			showImage("img/25.jpg");
// 			break;
// 		case(83):
// 			showImage("img/26.jpg");
// 			break;
// 		case(68):
// 			showImage("img/27.jpg");
// 			break;
// 		case(70):
// 			showImage("img/28.jpg");
// 			break;
// 		case(71):
// 			showImage("img/29.jpg");
// 			break;
// 		case(72):
// 			showImage("img/30.jpg");
// 			break;
// 		case(74):
// 			showImage("img/31.jpg");
// 			break;
// 		case(75):
// 			showImage("img/32jpg");
// 			break;
// 		case(76):
// 			showImage("img/33.jpg");
// 			break;
// 		case(186):
// 			showImage("img/34.jpg");
// 			break;
// 		case(222):
// 			showImage("img/35.jpg");
// 			break;


// 		case(90):
// 			showImage("img/36.jpg");
// 			break;
// 		case(88):
// 			showImage("img/37.jpg");
// 			break;
// 		case(67):
// 			showImage("img/38.jpg");
// 			break;
// 		case(86):
// 			showImage("img/39.jpg");
// 			break;
// 		case(66):
// 			showImage("img/40.jpg");
// 			break;
// 		case(78):
// 			showImage("img/41.jpg");
// 			break;
// 		case(77):
// 			showImage("img/42.jpg");
// 			break;
// 		case(188):
// 			showImage("img/43.jpg");
// 			break;
// 		case(190):
// 			showImage("img/44.jpg");
// 			break;
// 		case(191):
// 			showImage("img/45.jpg");
// 			break;
// 	};
// } )