const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.sidebar');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('sidebar--active');
}

hamburger.addEventListener('click', handleClick);