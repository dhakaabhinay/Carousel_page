let currentIndex = 0
const totalSlides = document.querySelectorAll('.carousel-card').length

function updateCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper')
  const cardWidth = document.querySelector('.carousel-card').offsetWidth
  const direction =
    document.querySelector('.carousel-container').dir === 'rtl' ? -1 : 1

  wrapper.style.transform = `translateX(${
    -currentIndex * cardWidth * direction
  }px)`
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides
  updateCarousel()
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
  updateCarousel()
}
