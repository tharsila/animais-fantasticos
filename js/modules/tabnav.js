export default function initTabNav () {

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
