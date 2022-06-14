// Opens and closes the menu when the "hamburger icon" and "x" icon are clicked
const headerNav = document.querySelector('#header nav')
const toggleMenu = document.querySelectorAll('nav .toggle')

for (const elements of toggleMenu) {
  elements.addEventListener('click', function () {
    headerNav.classList.toggle('show')
  })
}

// Hides the menu when a menu item is clicked
const menuA = document.querySelectorAll('nav ul li a')
for (const elements of menuA) {
  elements.addEventListener('click', function () {
    headerNav.classList.remove('show')
  })
}

// Testimonials carousel, swiper (https://swiperjs.com/)
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// ScrollReveal (https://scrollrevealjs.org/)
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '1.875rem',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, { interval: 100 })

// "#header" shadow & "back to top button"
function scrollManageClass(tag, sizeTag, tagClass) {
  if (window.scrollY >= sizeTag.offsetHeight) {
    tag.classList.add(tagClass)

  } else {
    tag.classList.remove(tagClass)
  }
}

const header = document.querySelector('#header')

const bTT = document.querySelector('.back-to-top')
const aboutImage = document.querySelector('#about .image')

// SCROLL SECTIONS ACTIVE LINK (PABLO)
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`nav .menu a[href="#${sectionId}"]`).classList.add('active-link')

    } else {
      document.querySelector(`nav .menu a[href="#${sectionId}"]`).classList.remove('active-link')

    }
  })
}

// When scroll
window.addEventListener('scroll', function () {
  scrollManageClass(header, header, 'scroll')
  scrollManageClass(bTT, aboutImage, 'show')
  scrollActive()
})