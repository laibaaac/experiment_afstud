const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  const isChecked = menuToggle.checked;
  menu.classList.toggle('show');
  if (isChecked) {
    closeBtn.focus(); // Move focus to the close button when menu is opened
  }
});
