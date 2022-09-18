import { aboutPageSlider } from './modules/aboutPageSlider.js';
import { aboutSlider } from './modules/aboutSlider.js';
import { atmSlider } from './modules/atmSlider.js';
import { burgerMenu } from './modules/burgerMenu.js';
import { clientSlider } from './modules/clientSlider.js';
import * as flsFuncs from './modules/functions.js';
import { gallery } from './modules/gallery.js';
import { heroSlider } from './modules/heroSlider.js';
import { onlineSlider } from './modules/onlineSlider.js';
import servAcc from './modules/servAcc.js';
import { servSlider } from './modules/servSlider.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    heroSlider();
    aboutSlider();
    servSlider();
    clientSlider();
    onlineSlider();
    burgerMenu();
    aboutPageSlider();
    atmSlider();
    gallery();
    servAcc()
})