'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const APP = document.querySelector(`.app`);
const MAIN = APP.querySelector(`.main`);
const TEMPLATES = document.querySelector(`#templates`).content.cloneNode(true);
const SCREENS = TEMPLATES.querySelectorAll(`section.main`);
const SCREENS_ARR = Array.from(SCREENS);
const NAVIGATION_BTN = `<div class="arrows__wrap">
  <style>
.arrows__wrap {
  position: absolute;
  top: 135px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}
</style>
<button class="arrows__btn arrows__btn--prev"><-</button>
  <button class="arrows__btn arrows__btn--next">-></button>
</div>`;
let ARROW_PREV;
let ARROW_NEXT;


const addNavigation = () => {
  APP.insertAdjacentHTML(`beforeEnd`, NAVIGATION_BTN);
  ARROW_PREV = APP.querySelector(`.arrows__btn--prev`);
  ARROW_NEXT = APP.querySelector(`.arrows__btn--next`);
};

addNavigation();


const showScreen = (index) => {
  MAIN.innerHTML = ``;
  MAIN.appendChild(index);
};

let currentScreen = 0;
const switchScreen = (index) => {
  index = index >= SCREENS_ARR.length ? 0 : index;
  index = index < 0 ? SCREENS_ARR.length - 1 : index;
  currentScreen = index;
  showScreen(SCREENS_ARR[currentScreen]);
};

switchScreen(currentScreen);

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      switchScreen(currentScreen + 1);
      break;
    case LEFT_ARROW:
      switchScreen(currentScreen - 1);
      break;
  }
});

ARROW_PREV.addEventListener(`click`, () => {
  switchScreen(currentScreen - 1);
});

ARROW_NEXT.addEventListener(`click`, () => {
  switchScreen(currentScreen + 1);
});

