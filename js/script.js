import ScrollSmooth from './modules/scroll-smooth.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHours from './modules/hours.js'
import initFetchAnimals from './modules/fetch-animals.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initScrollAnimation from './modules/scroll-animation.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion ('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal ('[data-modal ="open"]', '[data-modal ="close"]', 
'[data-modal="container"]');
modal.init();

const tooltip = new Tooltip ('[data-tooltip]');
tooltip.init();

initDropdownMenu ();
initMenuMobile ();
initHours ();
initFetchAnimals ()
initFetchBitcoin ();
initScrollAnimation ();
