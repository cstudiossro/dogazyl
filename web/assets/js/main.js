$(document).ready(function() {

    var swiper = new Swiper(".news-swiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
            el: ".news-swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + ' w-5 h-5 flex flex-row items-center justify-center bg-primary">' + (index + 1) + "</span>";
            },
        },
        breakpoints: {
            640: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 40,
                slidesPerView: 4,
            }
        }
    });

});