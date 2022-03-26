import Numbers from './numbers.js';

export default function initFetchAnimals () {

  function createAnimal (animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
  
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-number>${animal.total}</span>
    `
    return div;
  }

  async function fetchAnimals (url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numberGrid = document.querySelector('.number-grid');
    
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numberGrid.appendChild(divAnimal);
      });

      const numbers = new Numbers ('[data-number]','.numbers', 'active');
      numbers.init();

    }catch (erro) {
      console.log(erro)
    }
  }
  
  fetchAnimals('./animalsapi.json')
}
