import Swiper from 'swiper';

export const onlineSlider = () => {
    const el = document.querySelector('.online__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        })
    }
}