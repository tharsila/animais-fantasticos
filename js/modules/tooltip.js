export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
  
    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove (event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;

    if(event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }
  
  onMouseLeave ({currentTarget}) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }
  
    // cria a tooltip e coloca no body
  createTooltipBox (element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver ({currentTarget}) {
      // cria a tooltip e coloca em uma propriedade
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove)
    currentTarget.addEventListener('mouseleave', this.onMouseLeave)
  }

  addTooltipEvent () {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    })
  }

  init () {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
  
}
