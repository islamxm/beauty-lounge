import {Fancybox} from '@fancyapps/ui';

export const gallery = () => {
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: false,
        Toolbar: false,
        Image: {
            zoom: false,
            click: false,
            wheel: 'slide'
        }
    })
}