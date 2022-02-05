export default function initModal () {
  const openModal = document.querySelector('[data-modal ="open"]');
  const closeModal = document.querySelector('[data-modal ="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]')
  
  if (openModal && closeModal && modalContainer) { 
  
    function toggleModal (event) {
      event.preventDefault();
      modalContainer.classList.toggle('active')
    }
    
    function removeOutModal (event) {
      if(event.target === modalContainer) {
        toggleModal (event);
      }
    }
    
    openModal.addEventListener('click', toggleModal);
    closeModal.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', removeOutModal);
  
  }
}
