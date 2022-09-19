import Swiper from "swiper";

const teamSlider = () => {

    const el = document.querySelector('.services-team__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 5,
            spaceBetween: 10
        })
    }
}

export default teamSlider;