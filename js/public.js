/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {

    window.setTimeout(function() {
        $('.loading_page').hide();
    }, 12000);

    window.setInterval(function() {
        $('.arrow-right').click();
    }, 2000);

    $('.loading_page_btn').on('click', function() {
        $('.loading_page').hide();
    })

    $('.arrow-right').on('click',function() {
        var count = $('.loading_page_content').children().length
        var index = $('.loading_page_content').find('.show').index();
        if((index + 1) == count) {
            index = -1;
        }
        $('.loading_page_content').find('p').removeClass('show');
        $('.loading_page_content').find('p').eq(++index).addClass('show');

        
    })

    $('.arrow-left').on('click',function() {
        var count = $('.loading_page_content').children().length
        var index = $('.loading_page_content').find('.show').index();
        console.log(count)
        console.log(index)
        if((index - 1) < 0) {
            index = count;
        }

        $('.loading_page_content').find('p').removeClass('show');
        $('.loading_page_content').find('p').eq(--index).addClass('show');

        
    })

    $('ul#time-line li').each(function () {
        var stop = $(window).scrollTop() + $(window).height() / 1.2;
        var litop = $(this).offset().top;
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
            var stop = $(window).scrollTop() + $(window).height() / 1.2;
            var litop = $(this).offset().top;
            if (stop > litop) {
                $(this).addClass('visibility');
            } else {
                $(this).removeClass('visibility');
            };
        });
    });
});