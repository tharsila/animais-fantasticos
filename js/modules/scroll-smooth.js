export default class ScrollSmooth {
  constructor (links, options) {
    this.links = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {behavior:'smooth', block:'start',}
    } else {
      this.options = options
    }

    this.anchorActive =  this.anchorActive.bind(this);
  }

  anchorActive (event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options)
  }

  addLinkEvent () {
    this.links.forEach((link) => {
      link.addEventListener('click', this.anchorActive);
    })

  }

  init () {
    if (this.links.length) {
      this.addLinkEvent();
    }
    return this;
  }

}
