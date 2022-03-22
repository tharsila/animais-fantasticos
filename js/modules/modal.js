export default class Modal { 
  constructor (openModal, closeModal, modalContainer) {
    this.openModal = document.querySelector(openModal);
    this.closeModal = document.querySelector(closeModal);
    this.modalContainer = document.querySelector(modalContainer);

    // bind this ao callback para fazer referencia
    // ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.removeOutModal = this.removeOutModal.bind(this);
  }
  
  // abre ou fecha o modal
  toggleModal () {
    this.modalContainer.classList.toggle('active')
  }

  // add evento de toggle ao modal
  eventToggleModal (event) {
    event.preventDefault();
    this.toggleModal();
  }
  
  // fecha o modal quando clica fora
  removeOutModal (event) {
    if(event.target === this.modalContainer) {
      this.toggleModal ();
    }
  }

  addModalEvent () {
    this.openModal.addEventListener('click', this.eventToggleModal);
    this.closeModal.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.removeOutModal);
  }

  init () {
    if (this.openModal && this.closeModal && this.modalContainer) {
      this.addModalEvent()
    }
    return this;
  }


}
