import Swiper from 'swiper';

export const aboutSlider = () => {
    const el = document.querySelector('.about__body_slider_el');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 15,
            breakpoints: {
                768: {
                    spaceBetween: 25,
                }
            }
        })
    }
}