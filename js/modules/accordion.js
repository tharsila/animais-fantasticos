export default function initAccordion () {

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

