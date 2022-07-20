import Swiper, {Navigation, Pagination, EffectFade} from 'swiper';

export const heroSlider = () => {
    const el = document.querySelector('.hero__slider');

    const slider = new Swiper(el, {
        modules:[Navigation, Pagination, EffectFade],
        navigation: {
            prevEl: ".hero__slider_nav-prev",
            nextEl: ".hero__slider_nav-next"
        },
        pagination: {
            el: '.hero__slider_pag_el',
            type: 'bullets',
            clickable: true,
            bulletClass: 'hero__slider_pag_el_item',
            bulletActiveClass: 'active'
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })
}