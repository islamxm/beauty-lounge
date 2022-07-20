import Swiper from 'swiper';
export const atmSlider = () => {
    const el = document.querySelector('.about-page__atm_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },

                620: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
            }
        })
    }
}