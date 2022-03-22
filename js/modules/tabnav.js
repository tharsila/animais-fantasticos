export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.active = 'active';
  }

  activateTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.active);
    });

    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.active, direction);
  }

  addTabNavEvent () {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activateTab(index));
    })
  }

  init () {
    if(this.tabMenu.length && this.tabContent.length) {
      // ativa primeiro item
      this.activateTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
