export default function initScrollSmooth () {

  const navMenu = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');

  function anchorActive (event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior:'smooth',
      block:'start',
    })
  }

  navMenu.forEach((item) => {
    item.addEventListener('click', anchorActive);
  })
}
