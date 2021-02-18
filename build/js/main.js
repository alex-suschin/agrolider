$(function() {
    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
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

function inputKeyUp() {
    $('.tel').removeClass('error');
}

$(window).on('load resize scroll', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

    if (width > '700') {

    }

    if (width < '700') {

    }

});
//# sourceMappingURL=../sourcemaps/main.js.map
