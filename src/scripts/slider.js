let swiper = new Swiper('.about__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.about__pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
})