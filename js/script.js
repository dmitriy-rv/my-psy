var width = $('.afraid .item').width()/2 - 40;

$(document).on("click",".toJoin", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
 
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
         
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 2000);
});

$(document).on("click",".toMore", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
 
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
         
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
});

$('.more').click(function(event){
	$(event.target.offsetParent).addClass('show_more');
});

$('.close').click(function(event){
	$(event.target.parentElement.offsetParent).removeClass('show_more');
});

$('.afraid .item .preview').click(function(event){
	if (event.target.classList[0] == 'preview'){
		$(event.target.parentElement).toggleClass('show_more');
	} else{
		console.log(event);
		$(event.currentTarget.parentElement).toggleClass('show_more');
	}	
	$('.afraid .img').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
	$('.afraid .item.show_more .img').css('transform', 'matrix(1.5, 0, 0, 1.5, '+ width +', 0)');
});

$('.list .item').click(function(event){

	if (event.target.classList[0] == 'item'){
		$(event.target).toggleClass('show_more');
	} else{
		$(event.target.parentElement).toggleClass('show_more');
	}
});

		$('.can-wrap').slick({
			centerMode: true,
  			centerPadding: '60px',
		  	infinite: false,
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	variableWidth: true,
		  	dots: true,
		  	arrows: false,
		  	customPaging : function(slider, i) {
		        return '<span></span>';
		    },
		});

		(function() {
			// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
			if (!String.prototype.trim) {
				(function() {
					// Make sure we trim BOM and NBSP
					var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
					String.prototype.trim = function() {
						return this.replace(rtrim, '');
					};
				})();
			}

			[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
				// in case the input is already filled..
				if( inputEl.value.trim() !== '' ) {
					classie.add( inputEl.parentNode, 'input--filled' );
				}

				// events:
				inputEl.addEventListener( 'focus', onInputFocus );
				inputEl.addEventListener( 'blur', onInputBlur );
			} );

			function onInputFocus( ev ) {
				classie.add( ev.target.parentNode, 'input--filled' );
			}

			function onInputBlur( ev ) {
				if( ev.target.value.trim() === '' ) {
					classie.remove( ev.target.parentNode, 'input--filled' );
				}
			}
		})();

$('#send-sing_up').click(function(){
	$('.wrap_form_sucsess').show();
	$('.wrap_form_input').hide();

	$.ajax({
      type: "GET", //Метод отправки
      url: "/send.php", //путь до php фаила отправителя
      data: {
      	name:$('#name-sing_up').val(),
      	phone:$('#phone-sing_up').val()
      },
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения

		$('.wrap_form_sucsess').show();
		$('.wrap_form_input').hide();

		$('.change').html($('#select-profession').val());
        console.log("Ваше сообщение отпрвлено!");
      }
    });
});

$(window).scroll(function() {
	if ($('#list-3_1').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_1').addClass('show');
	}
	if ($('#list-3_2').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_2').addClass('show');
	}
	if ($('#list-3_3').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_3').addClass('show');
	}
	if ($('#list-3_4').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_4').addClass('show');
	}
	if ($('#list-3_5').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_5').addClass('show');
	}
	if ($('#list-3_6').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_6').addClass('show');
	}
});