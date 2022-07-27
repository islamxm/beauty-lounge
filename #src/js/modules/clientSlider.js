import Swiper from 'swiper';


export const clientSlider = () => {
    const el = document.querySelector('.client__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                1000: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                
            }
        })
    }
}