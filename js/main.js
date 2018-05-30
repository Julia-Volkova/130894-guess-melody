'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const app = document.querySelector(`.app`);
const main = app.querySelector(`.main`);
const templates = document.querySelector(`#templates`).content.cloneNode(true);
const screens = templates.querySelectorAll(`section.main`);
const screensArr = Array.from(screens);
const navigationBtn = `<div class="arrows__wrap">
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
let arrowPrev;
let arrowNext;


const addNavigation = () => {
  app.insertAdjacentHTML(`beforeEnd`, navigationBtn);
  arrowPrev = app.querySelector(`.arrows__btn--prev`);
  arrowNext = app.querySelector(`.arrows__btn--next`);
};

addNavigation();


const showScreen = (index) => {
  main.innerHTML = ``;
  main.appendChild(index);
};

let currentScreen = 0;
const switchScreen = (index) => {
  index = index >= screensArr.length ? 0 : index;
  index = index < 0 ? screensArr.length - 1 : index;
  currentScreen = index;
  showScreen(screensArr[currentScreen]);
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

arrowPrev.addEventListener(`click`, () => {
  switchScreen(currentScreen - 1);
});

arrowNext.addEventListener(`click`, () => {
  switchScreen(currentScreen + 1);
});

