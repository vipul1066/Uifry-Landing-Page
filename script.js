document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navOptions = document.querySelector(".nav-bar-options");

  hamburgerMenu.addEventListener("click", function () {
    navOptions.classList.toggle("active");
  });
});

const download = document.getElementById("downloadBTn");

document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const body = document.body;
  const button = document.querySelectorAll('.btn')
  
  // Set initial theme to light theme
  body.classList.add('light-theme');

  themeToggleBtn.addEventListener('click', function() {
      body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
   
    button.forEach(element => {
      element.classList.toggle('btn')
      element.classList.toggle('btnDark')
    });
  });
});
