$(function() {
    $('.hamburger-box').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).children('#hamburger-icon').addClass('active');
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
            $(this).children('#hamburger-icon').removeClass('active');
        }
    });



    $('.products-btns a').click(function() {
        $('.products-btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.products-box').find('.products-box__item').hide();
        $('#' + $(this).data('switch')).show();
    });

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    $('.form-callback').submit(function() {
        var ele = $(".tel").val();
        var eleLen = $(".tel").val().length;
        var elem = ele.match(/\_/g).length;
        console.log(elem);
        console.log(eleLen);


        if (elem !== null) {
            $(".tel").addClass('error');
            valid = false;
            return valid;
        }
    });




});

ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map('map', {
            center: [51.709612, 39.152347],
            zoom: 17,
            scrollZoom: false,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([51.709773, 39.154419], {
            hintContent: 'ООО ГК "АГРО-ЛИДЕР"',
            balloonContent: 'ООО ГК "АГРО-ЛИДЕР"'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/gps.svg',
            iconImageSize: [47, 68],
            cursor: 'pointer',
            iconImageOffset: [-20, -70],
            balloonclose: true
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)

}

// $(window).on('load', function() {
//     if ($(window).width() < 746) {
//         myMap.setCenter([51.709773, 39.154419]);
//     }
// });


function inputKeyUp() {
    $('.tel').removeClass('error');
}

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '641') {
        $('div[data-img-mobile').each(function() {
            var bgDesc = $(this).attr('style');
            var bgMob = $(this).attr('data-img-mobile');
            $(this).attr('style', bgMob);
        })
    }

    if (width > '640') {
        $('div[data-img-desc').each(function() {
            var bgDataDesc = $(this).attr('data-img-desc');
            $(this).attr('style', bgDataDesc);
        })
    }

    if (width < '992') {
        $('.mobile-menu').addClass('anim-menu');
    }

    if (width > '991') {
        $('.mobile-menu').removeClass('anim-menu');
    }

    if (width < '746') {
        $('.map-contacts').prependTo($('.map-wrap'));

    }

    if (width > '745') {
        $('.map-contacts').prependTo($('#map .container'));
    }


});