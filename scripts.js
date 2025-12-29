let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].className += " active";
}


const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});




const touchArea = document.getElementById('touch-area');
let touchStartX = 0;
let touchEndX = 0;

// Minimum distance for a swipe to be recognized (prevents accidental taps)
const swipeThreshold = 50; 

touchArea.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

touchArea.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const diff = touchStartX - touchEndX;

    // Swipe Left (Next Project)
    if (diff > swipeThreshold) {
        plusSlides(1);
    } 
    // Swipe Right (Previous Project)
    else if (diff < -swipeThreshold) {
        plusSlides(-1);
    }
}



function applyLiquidGlow() {
    const activeSlide = document.querySelector(".mySlides.active img");
    const activeDot = document.querySelector(".dot.active");
    if (activeSlide && activeDot) {
      activeDot.style.boxShadow = `0 0 15px var(--accent)`;
    }
  }
