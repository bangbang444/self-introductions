let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const slider = document.querySelector('.slider');

function updateSlide() {
  slider.style.transform = `translateX(${-currentIndex * 500}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // 처음으로 돌아가기
  }
  updateSlide();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // 마지막으로 이동
  }
  updateSlide();
}
