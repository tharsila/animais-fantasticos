/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor (list) {\r\n    this.accordionList = document.querySelectorAll(list)\r\n    this.activeList = 'active';\r\n  }\r\n  \r\n  toggleAccordion (item) {\r\n    item.classList.toggle(this.activeList);\r\n    item.nextElementSibling.classList.toggle(this.activeList);\r\n  }\r\n\r\n  // add eventos no accordion\r\n  addAccordionEvent () {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener('click', () => this.toggleAccordion(item));\r\n    })\r\n  }\r\n\r\n  // iniciar função\r\n  init () {\r\n    if(this.accordionList.length) {\r\n      // ativa primeiro item\r\n      this.toggleAccordion(this.accordionList[0])\r\n      this.addAccordionEvent();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initDropdownMenu () {\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n  \r\n  function handleClick (event) {\r\n    event.preventDefault();\r\n    this.classList.add('active');\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) (this, ['touchstart','click'], () => {\r\n      this.classList.remove('active');\r\n    })\r\n  }\r\n\r\n  dropdownMenus.forEach((menu) => {\r\n    ['touchstart','click'].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    })\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animals.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers.js */ \"./js/modules/numbers.js\");\n\r\n\r\nfunction initFetchAnimals () {\r\n\r\n  function createAnimal (animal) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('number-animal');\r\n  \r\n    div.innerHTML = `\r\n      <h3>${animal.specie}</h3>\r\n      <span data-number>${animal.total}</span>\r\n    `\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimals (url) {\r\n    try {\r\n      const animalsResponse = await fetch(url);\r\n      const animalsJSON = await animalsResponse.json();\r\n      const numberGrid = document.querySelector('.number-grid');\r\n    \r\n      animalsJSON.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numberGrid.appendChild(divAnimal);\r\n      });\r\n    \r\n      (0,_numbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      \r\n    }catch (erro) {\r\n      console.log(erro)\r\n    }\r\n  }\r\n  \r\n  fetchAnimals('./animalsapi.json')\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animals.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin () {\r\n  const url =  'https://blockchain.info/ticker'\r\n  \r\n  axios.get(url)\r\n  .then(response =>  {\r\n    const btcPreco = document.querySelector('.btc-preco');\r\n    btcPreco.innerHTML = (1000 / response.data.BRL.sell).toFixed(4);\r\n  }).catch(erro => {\r\n    console.log(erro)\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/hours.js":
/*!*****************************!*\
  !*** ./js/modules/hours.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHours)\n/* harmony export */ });\nfunction initHours () {\r\n  const bussinesHour = document.querySelector('[data-week]');\r\n  \r\n  const week = bussinesHour.dataset.week.split(',').map(Number);\r\n  const hours = bussinesHour.dataset.hours.split(',').map(Number);\r\n  \r\n  const today = new Date();\r\n  const dayToday = today.getDay();\r\n  const hoursNow = today.getHours();\r\n  \r\n  const openWeek = week.indexOf(dayToday) !== -1;\r\n  \r\n  const opening = (hoursNow > hours[0] && hoursNow < hours[1]);\r\n  \r\n  if(openWeek && opening) {\r\n    bussinesHour.classList.add('open')\r\n  }   \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/hours.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile () {\r\n  const buttonMobile = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const events = ['touchstart', 'click'];\r\n  \r\n  function openMenu () {\r\n    buttonMobile.classList.add('fa-times');\r\n    menuList.classList.add('active');\r\n  \r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\r\n  \r\n      buttonMobile.classList.remove('fa-times');\r\n      menuList.classList.remove('active');\r\n    })\r\n  }\r\n\r\n  if(buttonMobile) {\r\n    events.forEach((event) => {\r\n      buttonMobile.addEventListener(event, openMenu);\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal { \r\n  constructor (openModal, closeModal, modalContainer) {\r\n    this.openModal = document.querySelector(openModal);\r\n    this.closeModal = document.querySelector(closeModal);\r\n    this.modalContainer = document.querySelector(modalContainer);\r\n\r\n    // bind this ao callback para fazer referencia\r\n    // ao objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.removeOutModal = this.removeOutModal.bind(this);\r\n  }\r\n  \r\n  // abre ou fecha o modal\r\n  toggleModal () {\r\n    this.modalContainer.classList.toggle('active')\r\n  }\r\n\r\n  // add evento de toggle ao modal\r\n  eventToggleModal (event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n  \r\n  // fecha o modal quando clica fora\r\n  removeOutModal (event) {\r\n    if(event.target === this.modalContainer) {\r\n      this.toggleModal ();\r\n    }\r\n  }\r\n\r\n  addModalEvent () {\r\n    this.openModal.addEventListener('click', this.eventToggleModal);\r\n    this.closeModal.addEventListener('click', this.eventToggleModal);\r\n    this.modalContainer.addEventListener('click', this.removeOutModal);\r\n  }\r\n\r\n  init () {\r\n    if (this.openModal && this.closeModal && this.modalContainer) {\r\n      this.addModalEvent()\r\n    }\r\n    return this;\r\n  }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/numbers.js":
/*!*******************************!*\
  !*** ./js/modules/numbers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumbers)\n/* harmony export */ });\nfunction initNumbers () {\r\n  function numbersAnimation () {\r\n    const numbers = document.querySelectorAll('[data-number]');\r\n    \r\n    numbers.forEach((number) => {\r\n      const total = number.innerText;\r\n      const increment = Math.floor(total / 100);\r\n      let start = 0;\r\n      \r\n      const timer = setInterval(() => {\r\n    \r\n        start += increment;\r\n        number.innerText = start;\r\n    \r\n        if(start > total) {\r\n          number.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      },25 * Math.random())\r\n    })\r\n  }\r\n  \r\n  let observer;\r\n  function handleMutation (mutation) {\r\n    if (mutation[0].target.classList.contains('active')) {\r\n      observer.disconnect();\r\n      numbersAnimation();\r\n    }\r\n  }\r\n  const observerTarget = document.querySelector('.numbers');\r\n  observer = new MutationObserver(handleMutation);\r\n  \r\n  observer.observe(observerTarget, {attributes: true})\r\n}  \r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/numbers.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick (element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n  \r\n  function handleOutsideClick (event) {\r\n    if(!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      })\r\n      callback()\r\n    }\r\n  }\r\n\r\n  if(!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n     setTimeout(() => {\r\n      html.addEventListener(userEvent, handleOutsideClick);\r\n     }) \r\n    })\r\n    element.setAttribute(outside,'')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animation.js":
/*!****************************************!*\
  !*** ./js/modules/scroll-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation () {\r\n\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowHalf = window.innerHeight * 0.6;\r\n  \r\n  function scrollActive () {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const visibility = sectionTop -  windowHalf;\r\n  \r\n      if(visibility < 0) {\r\n        section.classList.add('active')\r\n\r\n      } else if (section.classList.contains('active')){\r\n        section.classList.remove('active')\r\n      } \r\n    })\r\n  }\r\n  \r\n  if (sections.length) {\r\n    scrollActive ()\r\n    window.addEventListener('scroll', scrollActive);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animation.js?");

/***/ }),

/***/ "./js/modules/scroll-smooth.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-smooth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSmooth)\n/* harmony export */ });\nclass ScrollSmooth {\r\n  constructor (links, options) {\r\n    this.links = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = {behavior:'smooth', block:'start',}\r\n    } else {\r\n      this.options = options\r\n    }\r\n\r\n    this.anchorActive =  this.anchorActive.bind(this);\r\n  }\r\n\r\n  anchorActive (event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView(this.options)\r\n  }\r\n\r\n  addLinkEvent () {\r\n    this.links.forEach((link) => {\r\n      link.addEventListener('click', this.anchorActive);\r\n    })\r\n\r\n  }\r\n\r\n  init () {\r\n    if (this.links.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-smooth.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.active = 'active';\r\n  }\r\n\r\n  activateTab(index) {\r\n    this.tabContent.forEach((item) => {\r\n      item.classList.remove(this.active);\r\n    });\r\n\r\n    const direction = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.active, direction);\r\n  }\r\n\r\n  addTabNavEvent () {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener('click', () => this.activateTab(index));\r\n    })\r\n  }\r\n\r\n  init () {\r\n    if(this.tabMenu.length && this.tabContent.length) {\r\n      // ativa primeiro item\r\n      this.activateTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inittoolTip)\n/* harmony export */ });\nfunction inittoolTip () {\r\n  const tooltip = document.querySelectorAll('[data-tooltip]');\r\n  \r\n  const onMouseMove = {\r\n    handleEvent (event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    handleEvent () {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener('mouseleave', onMouseLeave)\r\n      this.element.removeEventListener('mousemove', onMouseMove)\r\n    }\r\n  }\r\n  \r\n  function createTooltipBox (element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  function onMouseOver () {\r\n    const tooltipBox = createTooltipBox(this);\r\n    \r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener('mousemove', onMouseMove)\r\n  \r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener('mouseleave', onMouseLeave)\r\n  }\r\n  \r\n  tooltip.forEach((item) => {\r\n    item.addEventListener('mouseover', onMouseOver);\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ \"./js/modules/scroll-smooth.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_hours_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/hours.js */ \"./js/modules/hours.js\");\n/* harmony import */ var _modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animals.js */ \"./js/modules/fetch-animals.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-animation.js */ \"./js/modules/scroll-animation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSmooth = new _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"smooth\"] a[href^=\"#\"]');\r\nscrollSmooth.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] ('[data-modal =\"open\"]', '[data-modal =\"close\"]', \r\n'[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) ();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) ();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]) ();\r\n(0,_modules_hours_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) ();\r\n(0,_modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]) ()\r\n;(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]) ();\r\n(0,_modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]) ();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;