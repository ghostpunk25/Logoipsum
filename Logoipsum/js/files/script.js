// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const menuSerch = document.querySelector('.menu__serch');
const menuSee = document.querySelector('.menu__serch-input');
if (menuSerch) {
   menuSerch.addEventListener("click", function (e) {
      if (menuSee)
         menuSee.classList.toggle('serchSee');
   });
}

const videBlock = document.querySelector('.video-block');
const videoBlockTitle = document.querySelector('.video-block__title');
if (videBlock) {
   videBlock.addEventListener("click", function (e) {
      if (videoBlockTitle)
         videoBlockTitle.classList.add('hidden');
   });
}

const exploreLinks = document.querySelector('.footer__button');
const othersHidden = document.querySelector('.footer__others');
if (exploreLinks) {
   exploreLinks.addEventListener("click", function (e) {
      if (othersHidden)
         othersHidden.classList.toggle('activeOne');
   });
}

const contact = document.querySelector('.footer__btn');
const itemsHidden = document.querySelector('.footer__items');
if (contact) {
   contact.addEventListener("click", function (e) {
      if (itemsHidden)
         itemsHidden.classList.toggle('activeHidden');
   });
}