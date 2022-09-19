import Swiper from "swiper";

const teamSlider = () => {

    const el = document.querySelector('.services-team__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            
            spaceBetween: 10,
            breakpoints: {
                1000: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 3
                },

                550: {
                    slidesPerView: 2,
                },
                
            }
        })
    }
}

export default teamSlider;