export const burgerMenu = () => {
    const btn = document.querySelector('.header__burger');
    const menu = document.querySelector('.menu');
    if(btn && menu) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    }


    const menuItems = document.querySelectorAll('.menu__part_item');

    if(menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', (event) => {
                if(event.target.classList.contains('menu__part_item_arrow')) {
                    event.target.classList.toggle('active');
                }
                if(event.target.classList.contains('menu__part_item_arrow') && !item.classList.contains('active')) {
                    
                    setTimeout(() => {
                        item.classList.add('active');
                    }, 200)
                    let submenu = item.querySelector('.menu__part_submenu');
                    submenu.style.cssText = `height: ${submenu.scrollHeight}px`;
                }
                if(event.target.classList.contains('menu__part_item_arrow') && item.classList.contains('active')) {
                    setTimeout(() => {
                        item.classList.remove('active');
                    }, 200)
                    let submenu = item.querySelector('.menu__part_submenu');
                    submenu.style.cssText = `height: 0px`;
                }
            })
        })
    }
}