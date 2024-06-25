let items = document.querySelectorAll('.slider-slide .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.slider-slide .list .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider-slide .list .item.active');
    itemActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}



let slideIndex = 0;
let autoSlideInterval;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot-slider');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
        if (index === slideIndex) {
            dot.className += " active";
        }
    });
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
    showSlides();
}

// Start auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Auto slide every 3 seconds
}

// Stop auto slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.slider').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.slider').addEventListener('mouseout', startAutoSlide);

showSlides(); // Show first slide initially
startAutoSlide(); // Start auto slide




document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu-icon');
    var menuItems = document.getElementById('menu-items');

    menuIcon.addEventListener('click', function() {
        menuItems.classList.toggle('show-menu');
    });
});
