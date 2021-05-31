const accordionContent = document.querySelectorAll('.facts__item')
const accordionBtns = document.querySelectorAll('.facts__item-btn')

if (accordionBtns) {
  accordionBtns.forEach((button, ind) => {
    button.addEventListener('click', () => {
      accordionContent[ind].classList.toggle('facts__item--open')
    })
  })
}


const menuBtn = document.querySelector('.header__btn')
const menu = document.querySelector('.header__wrapper')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__btn--active')
  menu.classList.toggle('header__wrapper--open')
})


// popup feedback

const coverWrapper = document.querySelector('.cover')
const feedbakcBtn = document.querySelector('.testimonials__btn')
const formFeedback = document.getElementById('form-feedback')
const sendBtn = document.querySelector('.form-feedback__button')

const nameField = document.getElementById('name')
const emailField = document.getElementById('mail')
const textAreaField = document.getElementById('review')

const validate = () => {
  if(nameField.validity.valid && emailField.validity.valid && textAreaField.validity.valid) {
    sendBtn.disabled = false
  } else {
    sendBtn.disabled = true
  }
  
}

if (feedbakcBtn) {
  feedbakcBtn.addEventListener('click', (e) => {
    coverWrapper.classList.remove('hidden')
    document.body.classList.add('hidden')
    formFeedback.classList.remove('hidden')
  })

  coverWrapper.addEventListener('click', () => {
    coverWrapper.classList.add('hidden')
    document.body.classList.remove('hidden')
    formFeedback.classList.add('hidden')
  })

  sendBtn.addEventListener('click', () => {
    coverWrapper.classList.add('hidden')
    document.body.classList.remove('hidden')
    formFeedback.classList.add('hidden')
  })

  nameField.addEventListener('input', () => {
    validate()
  })

  emailField.addEventListener('input', () => {
    validate()
  })

  textAreaField.addEventListener('input', () => {
    validate()
  })

  formFeedback.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}

// carousel 

const gap = 16;

const carousel = document.querySelector(".carousel__wrapper"),
  content = document.querySelector(".carousel__content"),
  next = document.querySelector(".slider__button--next"),
  prev = document.querySelector(".slider__button--prev");

  if (carousel) {
    next.addEventListener("click", e => {
      carousel.scrollBy(width + gap, 0);
      if (content.scrollWidth - width - gap < carousel.scrollLeft + width) {
        carousel.scrollBy(-(width + gap)*4, 0);
      }
    });
    prev.addEventListener("click", e => {
      carousel.scrollBy(-(width + gap), 0);
      if (carousel.scrollLeft - width - gap <= 0) {
        carousel.scrollBy(width + gap, 0);
      }
    });
    
    let width = carousel.offsetWidth;
    window.addEventListener("resize", e => (width = carousel.offsetWidth));
  }


// carousel-auto

const carouselAuto = document.querySelector(".carousel-auto__wrapper"),
  contentAuto = document.querySelector(".carousel-auto__content"),
  prevAuto = document.querySelector(".testimonials__slider-btn--prev"),
  nextAuto = document.querySelector(".testimonials__slider-btn--next");

  if (carouselAuto) {
    nextAuto.addEventListener("click", e => {
      carouselAuto.scrollBy(width + gap, 0);
      if (contentAuto.scrollWidth - width - gap < carouselAuto.scrollLeft + width) {
        carouselAuto.scrollBy(-(width + gap)*4, 0);
      }
    });
    prevAuto.addEventListener("click", e => {
      carouselAuto.scrollBy(-(width + gap), 0);
      if (carouselAuto.scrollLeft - width - gap <= 0) {
        carouselAuto.scrollBy(width + gap, 0);
      }
    });
    
    let width = carouselAuto.offsetWidth;
    window.addEventListener("resize", e => (width = carouselAuto.offsetWidth));
  }

  

// let autoSlideInterva = setInterval(() => {
//   carousel.scrollBy(width + gap, 0);
//   if (content.scrollWidth - width - gap < carousel.scrollLeft + width) {
//     carousel.scrollBy(-(width + gap)*4, 0);
//   }
// }, 3000)
