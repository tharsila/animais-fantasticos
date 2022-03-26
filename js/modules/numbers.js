export default class Numbers {
  constructor (numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget =  document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom e incrementa um numero de 0 ate o seu final
  static incrementNumber (number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
      
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
    
      if(start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    },25 * Math.random ());
  }

  // ativa incrementNumber para cada numero selecionado no dom
  numbersAnimation () {
    this.numbers.forEach (number => this.constructor.incrementNumber (number))
  }
  
  // Função que ocorre quando as mutações ocorrerem
  handleMutation (mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect ();
      this.numbersAnimation ();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quanto a classe ativo é adiciona ao element target
  addMutationObserver () {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {attributes: true});
  }

  init () {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver ();
    }
    return this;
  }
}  
