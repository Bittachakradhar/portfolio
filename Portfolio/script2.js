// Skills Carousel Navigation - Improved Version
const skillsCarousel = document.querySelector('.skills-carousel');
const skillItems = document.querySelectorAll('.skill-item');
const skillItemWidth = skillItems[0].offsetWidth + 20; // width + gap
const rightArrow = document.querySelector('.skills-carousel-container .right-arrow');
const leftArrow = document.querySelector('.skills-carousel-container .left-arrow');

// Initialize arrow states
updateArrowStates();

// Right arrow click
rightArrow.addEventListener('click', () => {
    const maxScroll = skillsCarousel.scrollWidth - skillsCarousel.clientWidth;
    const newScrollPos = Math.min(skillsCarousel.scrollLeft + skillItemWidth, maxScroll);
    
    skillsCarousel.scrollTo({
        left: newScrollPos,
        behavior: 'smooth'
    });
});

// Left arrow click
leftArrow.addEventListener('click', () => {
    const newScrollPos = Math.max(skillsCarousel.scrollLeft - skillItemWidth, 0);
    
    skillsCarousel.scrollTo({
        left: newScrollPos,
        behavior: 'smooth'
    });
});

// Update arrow states based on scroll position
skillsCarousel.addEventListener('scroll', updateArrowStates);

function updateArrowStates() {
    // Left arrow
    leftArrow.disabled = skillsCarousel.scrollLeft <= 0;
    
    // Right arrow
    const maxScroll = skillsCarousel.scrollWidth - skillsCarousel.clientWidth;
    rightArrow.disabled = skillsCarousel.scrollLeft >= maxScroll - 5; // 5px tolerance
    
    // Visual feedback
    leftArrow.style.opacity = leftArrow.disabled ? '0.5' : '1';
    rightArrow.style.opacity = rightArrow.disabled ? '0.5' : '1';
}

// Keep the existing touch/mouse drag implementation
let isDraggingSkills = false;
let startXSkills;
let scrollLeftSkills;

skillsCarousel.addEventListener('mousedown', (e) => {
    isDraggingSkills = true;
    startXSkills = e.pageX - skillsCarousel.offsetLeft;
    scrollLeftSkills = skillsCarousel.scrollLeft;
    skillsCarousel.style.cursor = 'grabbing';
});

skillsCarousel.addEventListener('mouseleave', () => {
    isDraggingSkills = false;
    skillsCarousel.style.cursor = 'grab';
});

skillsCarousel.addEventListener('mouseup', () => {
    isDraggingSkills = false;
    skillsCarousel.style.cursor = 'grab';
});

skillsCarousel.addEventListener('mousemove', (e) => {
    if(!isDraggingSkills) return;
    e.preventDefault();
    const x = e.pageX - skillsCarousel.offsetLeft;
    const walk = (x - startXSkills) * 2;
    skillsCarousel.scrollLeft = scrollLeftSkills - walk;
});

// Touch events
skillsCarousel.addEventListener('touchstart', (e) => {
    isDraggingSkills = true;
    startXSkills = e.touches[0].pageX - skillsCarousel.offsetLeft;
    scrollLeftSkills = skillsCarousel.scrollLeft;
});

skillsCarousel.addEventListener('touchend', () => {
    isDraggingSkills = false;
});

skillsCarousel.addEventListener('touchmove', (e) => {
    if(!isDraggingSkills) return;
    e.preventDefault();
    const x = e.touches[0].pageX - skillsCarousel.offsetLeft;
    const walk = (x - startXSkills) * 2;
    skillsCarousel.scrollLeft = scrollLeftSkills - walk;
});
// Certificates Carousel Navigation - Fixed Version
const certificatesCarousel = document.querySelector('.certificates-grid');
const certItems = document.querySelectorAll('.certificate-item');
const certRightArrow = document.querySelector('.certificates-carousel-container .right-arrow');
const certLeftArrow = document.querySelector('.certificates-carousel-container .left-arrow');

// Calculate item width including margins
function getCertItemWidth() {
  if (certItems.length === 0) return 0;
  const style = window.getComputedStyle(certItems[0]);
  return certItems[0].offsetWidth + 
         parseInt(style.marginRight) + 
         parseInt(style.marginLeft);
}

// Initialize arrow states
updateCertArrows();

// Right arrow click
certRightArrow.addEventListener('click', () => {
  const itemWidth = getCertItemWidth();
  const visibleItems = Math.floor(certificatesCarousel.clientWidth / itemWidth);
  const scrollAmount = itemWidth * visibleItems;
  
  certificatesCarousel.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

// Left arrow click
certLeftArrow.addEventListener('click', () => {
  const itemWidth = getCertItemWidth();
  const visibleItems = Math.floor(certificatesCarousel.clientWidth / itemWidth);
  const scrollAmount = itemWidth * visibleItems;
  
  certificatesCarousel.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

// Update arrow states
function updateCertArrows() {
  const maxScroll = certificatesCarousel.scrollWidth - certificatesCarousel.clientWidth;
  
  certLeftArrow.disabled = certificatesCarousel.scrollLeft <= 0;
  certRightArrow.disabled = certificatesCarousel.scrollLeft >= maxScroll - 5;
  
  certLeftArrow.style.opacity = certLeftArrow.disabled ? '0.5' : '1';
  certRightArrow.style.opacity = certRightArrow.disabled ? '0.5' : '1';
}

// Update on scroll
certificatesCarousel.addEventListener('scroll', updateCertArrows);

// Drag functionality
let isDraggingCert = false;
let startXCert;
let scrollLeftCert;

certificatesCarousel.addEventListener('mousedown', (e) => {
  isDraggingCert = true;
  startXCert = e.pageX - certificatesCarousel.offsetLeft;
  scrollLeftCert = certificatesCarousel.scrollLeft;
  certificatesCarousel.style.cursor = 'grabbing';
  e.preventDefault();
});

certificatesCarousel.addEventListener('mouseleave', () => {
  isDraggingCert = false;
  certificatesCarousel.style.cursor = 'grab';
});

certificatesCarousel.addEventListener('mouseup', () => {
  isDraggingCert = false;
  certificatesCarousel.style.cursor = 'grab';
});

certificatesCarousel.addEventListener('mousemove', (e) => {
  if (!isDraggingCert) return;
  e.preventDefault();
  const x = e.pageX - certificatesCarousel.offsetLeft;
  const walk = (x - startXCert) * 2;
  certificatesCarousel.scrollLeft = scrollLeftCert - walk;
});

// Touch events
certificatesCarousel.addEventListener('touchstart', (e) => {
  isDraggingCert = true;
  startXCert = e.touches[0].pageX - certificatesCarousel.offsetLeft;
  scrollLeftCert = certificatesCarousel.scrollLeft;
});

certificatesCarousel.addEventListener('touchend', () => {
  isDraggingCert = false;
});

certificatesCarousel.addEventListener('touchmove', (e) => {
  if (!isDraggingCert) return;
  e.preventDefault();
  const x = e.touches[0].pageX - certificatesCarousel.offsetLeft;
  const walk = (x - startXCert) * 2;
  certificatesCarousel.scrollLeft = scrollLeftCert - walk;
});