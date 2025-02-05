
window.addEventListener('scroll', function () {
  const links = document.querySelector('.links');
  links.style.display = window.scrollY > 400 ? 'none' : 'flex';
});