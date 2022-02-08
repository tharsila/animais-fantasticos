import outsideClick from "./outsideclick.js";

export default function initMenuMobile () {
  const buttonMobile = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['touchstart', 'click'];

  if(buttonMobile) {
    function openMenu () {
      buttonMobile.classList.add('fa-times');
      menuList.classList.add('active');
    
      outsideClick(menuList, events, () => {
    
        buttonMobile.classList.remove('fa-times');
        menuList.classList.remove('active');
      })
    }
    
    events.forEach((event) => {
      buttonMobile.addEventListener(event, openMenu);
    })
  }
  
}


