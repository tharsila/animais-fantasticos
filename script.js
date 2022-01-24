function initTabNav () {

  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if(tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('active');

    function activateTab(index) {

      tabContent.forEach((item) => {
        item.classList.remove('active');
      });

      tabContent[index].classList.add('active');
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

  const accordionList = document.querySelectorAll('.js-accordion dt')
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

