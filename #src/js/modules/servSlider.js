import Swiper, {Scrollbar} from 'swiper';

export const servSlider = () => {
    const el = document.querySelector('.serv__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Scrollbar],
            slidesPerView: 1,
            spaceBetween: 15,
            scrollbar: {
                el: '.serv__body_slider_scrollbar_el',
                draggable: true,
            },
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