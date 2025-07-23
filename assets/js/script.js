// ========== Show Menu ==========
const navMenu = document.getElementById('nav_menu'),
navToggle = document.getElementById('nav_toggle')
navClose = document.getElementById('nav_close')

// Menu Show | Validate if constants exist
if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show_menu')
        })
    }

// Menu Hidden | Validate if constants exist
if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show_menu')
        })
    }

// ========== Change Background Header ==========
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// ========== Home Swiper ==========
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
});

// ========== Services Tab ==========
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach(tabContents => {
        tabContents.classList.remove('services_active');
    })
    target.classList.add('services_active');

    tabs.forEach(tab => {
        tab.classList.remove('services_active');
    })
    tab.classList.add('services_active');
    })
})