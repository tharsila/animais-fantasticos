import initNumbers from './numbers.js';

export default function initFetchAnimals () {
  async function fetchAnimals (url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numberGrid = document.querySelector('.number-grid');
    
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numberGrid.appendChild(divAnimal);
      });
    
      initNumbers();
      
    } catch (erro) {
      console.log(erro)
    }
  }
  
  function createAnimal (animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
  
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-number>${animal.total}</span>
    `
    return div;
  }
  
  fetchAnimals('./animalsapi.json')
}

