function toggleMenu() {
    let toggle = document.querySelector('#nav-mobi-btn');
    let navigation = document.querySelector('#nav-mobi');
    let close = document.querySelector('#nav-mobi-close');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    close.classList.toggle('active');
}