// https://raw.githubusercontent.com/john-smilga/node-express-course/main/02-express-tutorial/navbar-app/logo.svg
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});