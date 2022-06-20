function toggleMenu() {
    let toggle = document.querySelector('.nav_toggle');
    let navigation = document.querySelector('.nav_mobi');
    let close = document.querySelector('.nav_close');
    let brand = document.querySelector('.nav_brand');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    brand.classList.toggle('active');
    close.classList.toggle('active');
}