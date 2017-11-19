$(function() {
	
    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");
	
	//anchor links
	
	$(".navbar-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	$('nav li a').click(function () {
		$('nav li').removeClass('active');
		$(this).parent().addClass('active');
		return true;
	});
	
	//Scroll Top
	
	$('#scrollUp').mouseover(function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click(function(e){
		e.preventDefault();
		$('body,html').animate({ scrollTop: 1 }, 1000);
	});
    
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('.manager-block').addClass('fixed');
        }
        else if ($(this).scrollTop()<200){
            $('.manager-block').removeClass('fixed');
        }
    });
	
	//modal
	
	$('.feedback').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#feedback-form').css('display', 'block');
			$('#feedback-form').animate({opacity: 1, top: '20%'}, 200);
		});
	});
	
	$('.form-close').click( function(){
		$('#feedback-form').animate({opacity: 0, top: '45%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			}
		);
	});


    $('.entry').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400, function(){
            $('#entry-form').css('display', 'block');
            $('#entry-form').animate({opacity: 1, top: '20%'}, 200);
        });
    });

    $('.form-close').click( function(){
        $('#entry-form').animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });



    $('.manager-block-mobile').click( function(event){
        event.preventDefault();
            $('.mobile-group').animate({opacity: 1, top: '200px', right:'0'}, 200);
    });

    $('.clear').click( function(){
        $('.mobile-group').animate({opacity: 1, top: '200px', right: '-265px'}, 200);

        return false;
    });


	//slider

    $('.slider-2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slick-responsive').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 0,
        speed: 5000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slick-responsive-2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true
    });

    //plus/minus

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 1 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });

    var tabs2 = $('#tabs-mini');
    $('.tabs-content > div', tabs2).each(function(i){
        if ( i != 1 ) $(this).hide(0);
    });
    tabs2.on('click', '.tabs a', function(e){
        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.tabs a',tabs2).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.tabs-content > div', tabs2).hide(0);
        $(tabId).show();
    });
    

    $("#phone").mask("+38 (999) 999-99-99");

    $('.view a').click(function () {
        $('.view a').removeClass('active');
        $(this).addClass('active');
        return true;
    });


    //ion.rangeslider

    var $range = $(".range_slider"),
        $min = $(".min-price"),
        $max = $(".max-price"),
        ionValues = function(data) {
            $min.text(data.from);
            $max.text(data.to);
        };

    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 25000,
        from: 200,
        to: 20000,
        hide_from_to: true,
        onStart: ionValues,
        onChange: ionValues
    });

    $('select').styler();

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
	$("#feadback-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#feadback-form')[0].reset(
				setTimeout(function () {}, 1000)
			);
			
			$('#popUpMessage').removeClass('hiddenDiv');
			setTimeout(function () {
				$('#popUpMessage').addClass('hiddenDiv');
			}, 2000);
		});
		return false;
	});
});

(function($) {
    //$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p, .drop');

        $(this).closest('.accordion').find('p, .drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });


    $('.accordion-mini a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.accordion-mini').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion-mini').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

(function($) {
    //$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion-mobile a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.accordion-mobile').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion-mobile').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

(function($) {

    //mobile-menu

    $.fn.extend({

        // Define the threeBarToggle function by extending the jQuery object
        threeBarToggle: function(options){

            // Set the default options
            var defaults = {
                color: '#3e3e3e',
                width: 37,
                height: 25,
                speed: 400,
                animate: true
            };
            var options = $.extend(defaults, options);

            return this.each(function(){

                $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
                $(this).addClass('tb-menu-toggle');
                $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
                    event.preventDefault();
                    $(this).toggleClass('tb-active-toggle');
                    if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
                    $('.tb-mobile-menu').slideToggle(options.speed);
                });
                $(this).children().css('background', options.color);
            });
        },

        // Define the accordionMenu() function that adds the sliding functionality
        accordionMenu: function(options){

            // Set the default options
            var defaults = {
                speed: 400
            };
            var options =  $.extend(defaults, options);

            return this.each(function(){

                $(this).addClass('tb-mobile-menu');
                var menuItems = $(this).children('li');
                menuItems.find('.sub-menu').parent().addClass('tb-parent');
                $('.tb-parent ul').hide();
                $('.tb-parent > a').on('click', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $(this).siblings().slideToggle(options.speed);
                });

            });
        }
    });

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
    $('#menu-toggle').threeBarToggle({color: '#3e3e3e', width: 37, height: 25});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
    $('#menu').accordionMenu();


    $('#menu li > a').on('click', function(event) {
        event.preventDefault();

        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });


    $('#menu > li.has-sub > a').append('<span class="holder"></span>');

})(jQuery);