// 타이핑 효과 적용
const textElement = document.getElementById('typing-text');
const text =
  "저는 IT's your life의 15회차 전공반을 수강하고 있는 강병현입니다.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});

// 프로필 이미지에 마우스 효과 추가
const profileImage = document.querySelector('.profile-img');
profileImage.addEventListener('mouseenter', () => {
  profileImage.style.transform = 'scale(1.1)';
  profileImage.style.transition = '0.3s';
});

profileImage.addEventListener('mouseleave', () => {
  profileImage.style.transform = 'scale(1)';
});
