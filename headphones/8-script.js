const menuBtn = document.getElementById('menu-btn');
const headerNav = document.getElementById('header-nav');

menuBtn.addEventListener('click', () => {
    if (headerNav.style.display === 'block') {
        headerNav.style.display = 'none';
    } else {
        headerNav.style.display = 'block';
    }
});
