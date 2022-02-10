export default function initNumbers () {
  function numbersAnimation () {
    const numbers = document.querySelectorAll('[data-number]');
    
    numbers.forEach((number) => {
      const total = number.innerText;
      let increment = Math.floor(total / 100);
      let start = 0;
      
      const timer = setInterval(() => {
    
        start = start + increment;
        number.innerText = start;
    
        if(start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      },25 * Math.random())
    })
  }
  
  function handleMutation (mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      numbersAnimation();
    }
  }
  
  const observerTarget = document.querySelector('.numbers');
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, {attributes: true})
}  

