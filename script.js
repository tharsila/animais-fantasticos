function initTabNav () {

  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  if(tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('active');

    function activateTab(index) {

      tabContent.forEach((item) => {
        item.classList.remove('active');
      });

      const direction = tabContent[index].dataset.anime;

      tabContent[index].classList.add('active', direction);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        
        activateTab(index);
      })
    })
  }
}

initTabNav ()

function initAccordion () {

  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  const activeList = 'active';

  if(accordionList.length) {

    accordionList[0].nextElementSibling.classList.add(activeList);

    function activeAccordion () {
      this.classList.toggle(activeList)
      this.nextElementSibling.classList.toggle(activeList);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion ()

function initScrollSmooth () {

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

initScrollSmooth ()

function initAnimationScroll () {

  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
  
    const windowHalf = window.innerHeight * 0.6;
    
    function scrollActive () {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const visibility = sectionTop -  windowHalf;
    
        if(visibility < 0) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        } 
        
      })
    }
    
    scrollActive ()
    
    window.addEventListener('scroll', scrollActive);
  }

}

initAnimationScroll ()
