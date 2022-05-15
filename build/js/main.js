const iconoMenu = document.getElementById('#menu-button')
const body = document.body;
iconoMenu.addEventListener('click', () => {
    const menuMobile = document.getElementById('#mobile-menu');
    return menuMobile.classList.length > 1 ? close( menuMobile ) : open( menuMobile );
})

const open = (menuMobile) => {
    menuMobile.style.display = 'flex';
    menuMobile.classList.add('opened');
    body.style.overflow = 'hidden';
};
const close = (menuMobile) => {
    menuMobile.style.display = 'none';
    menuMobile.classList.remove('opened');
    body.style.overflow = 'visible';
};