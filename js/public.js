/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

/*jslint browser: true*/
/*global $, window*/
$(function () {
	'use strict';
	/* loading page start */
    window.setTimeout(function () {
        $('.loading_page').fadeOut(1000);
    }, 18000);

    window.setInterval(function () {
        $('.arrow-right').click();
    }, 3000);

    $('.loading_page_btn').on('click', function () {
        $('.loading_page').fadeOut(1000);
    });

    $('.arrow-right').on('click', function () {
        var count = $('.loading_page_content').children().length,
			index = $('.loading_page_content').find('.show').index();
		
        if ((index + 1) === count) {
            index = -1;
        }
        $('.loading_page_content').find('p').removeClass('show');
        $('.loading_page_content').find('p').eq((index + 1)).addClass('show');

        
    });

    $('.arrow-left').on('click', function () {
        var count = $('.loading_page_content').children().length,
			index = $('.loading_page_content').find('.show').index();
        
        if ((index - 1) < 0) {
            index = count;
        }

        $('.loading_page_content').find('p').removeClass('show');
        $('.loading_page_content').find('p').eq(index - 1).addClass('show');

        
    });
	
	/* loading page end */
	
	/* aside r-p start */
	
	var banner = $('#banner').offset().top,
		sea = $('#sea').offset().top,
		history = $('#history').offset().top;
	
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > banner && scrollTop < sea) {
			$('.r-p').find('a').removeClass('active');
			$('.r-p').find('a[href="#banner"]').addClass('active');
		} else if (scrollTop > sea && scrollTop < history) {
			$('.r-p').find('a').removeClass('active');
			$('.r-p').find('a[href="#sea"]').addClass('active');
		} else if (scrollTop > history) {
			$('.r-p').find('a').removeClass('active');
			$('.r-p').find('a[href="#history"]').addClass('active');
		}
	});
	/* aside r-p end */
	
	/* banner map start */
	$('.map-icon.hover').mouseenter(function () {
		var index = $(this).index(),
			active = $('.map-icon.active').index();
		if (index !== active) {
			$(this).find('img').attr('src', '../img/map_icon02.png');
		}
	});
	
	$('.map-icon.hover').mouseleave(function () {
		var index = $(this).index(),
			active = $('.map-icon.active').index();
		if (index !== active) {
			$(this).find('img').attr('src', '../img/map_icon01.png');
		}
		
	});
	
	$('.map-icon').on('click', function () {
		$('.map-icon').removeClass('active');
		$('.map-icon').find('img').attr('src', '../img/map_icon01.png');
		$(this).addClass('active');
		$(this).find('img').attr('src', '../img/map_icon03.png');
		
		var id = $(this).attr('data-id');
		$('.banner-text').find('.text-box').removeClass('active');
		$('.banner-text').find('[data-id=' + id + ']').addClass('active');
	});
	
	$('.map-icon').eq(0).click();
	/* banner map end */
    $('ul#time-line li').each(function () {
        var stop = $(window).scrollTop() + $(window).height() / 1.2,
			litop = $(this).offset().top;
        if (stop > litop) {
            $(this).addClass('visibility');
        }
    });

    // 光箱
    $(function () {
        // $('.showModel').click(function () {
        //     $('#myModel').addClass('showModel')

        //     $('#myModel .model_boxs.box_' + $(this).data('id')).addClass('show').siblings().removeClass('show')
        // })

        // $('.btn_close, .close').click(function () {
        //     $('#myModel').removeClass('showModel')
        // })

    });

    $(".history-content").scroll(function () {
        $('ul#time-line li').each(function () {
            var stop = $(window).scrollTop() + $(window).height() / 1.2,
				litop = $(this).offset().top;
            if (stop > litop) {
                $(this).addClass('visibility');
            } else {
                $(this).removeClass('visibility');
            }
        });
    });
});