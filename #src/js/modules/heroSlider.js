import Swiper, {Navigation, Pagination, EffectFade, Autoplay} from 'swiper';

export const heroSlider = () => {
    const el = document.querySelector('.hero__slider');

    if(el) {
        const slider = new Swiper(el, {
            modules:[Navigation, Pagination, EffectFade, Autoplay],
            autoplay: {
                delay: 4000,
            },
            speed: 2700,
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
            loop: true,
            // effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },
        })
    }
    
}