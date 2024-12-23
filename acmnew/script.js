const menu = document.querySelector('.menu');
const navList = document.querySelector('.navlist');

menu.addEventListener('click', () => {
    navList.classList.toggle('show');
});
