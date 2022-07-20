import Swiper from 'swiper';
export const aboutPageSlider = () => {
    const el = document.querySelector('.about-page__team_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {
                1000: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            }
        })
    }
}