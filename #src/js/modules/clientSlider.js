import Swiper from 'swiper';


export const clientSlider = () => {
    const el = document.querySelector('.client__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 20,
            slidesPerView: 4,
        })
    }
}