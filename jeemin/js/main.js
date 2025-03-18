const snbBtn = document.querySelector('#snb .btn_menu');
const subMenu = document.querySelector('#snb .sub_menu');

snbBtn.addEventListener('click', function () {
  if (subMenu.classList.contains('hide')) {
    subMenu.classList.remove('hide');
  } else {
    subMenu.classList.add('hide');
  }
});
