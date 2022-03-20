export default class Accordion {
  constructor (list) {
    this.accordionList = document.querySelectorAll(list)
    this.activeList = 'active';
  }
  
  toggleAccordion (item) {
    item.classList.toggle(this.activeList);
    item.nextElementSibling.classList.toggle(this.activeList);
  }

  // add eventos no accordion
  addAccordionEvent () {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    })
  }

  // iniciar função
  init () {
    if(this.accordionList.length) {
      // ativa primeiro item
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent();
    }
  }
}
