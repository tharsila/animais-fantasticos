export default function initScrollAnimation () {

  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
  
    const windowHalf = window.innerHeight * 0.6;
    
    function scrollActive () {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const visibility = sectionTop -  windowHalf;
    
        if(visibility < 0) {
          section.classList.add('active')

        } else if (section.classList.contains('active')){
          section.classList.remove('active')
        } 
        
      })
    }
    
    scrollActive ()
    
    window.addEventListener('scroll', scrollActive);
  }

}
