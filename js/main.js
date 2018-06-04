// const RIGHT_ARROW = 39;
// const LEFT_ARROW = 37;
//
// const app = document.querySelector(`.app`);
// const main = app.querySelector(`.main`);
// const templates = document.querySelector(`#templates`).content.cloneNode(true);
// const screens = templates.querySelectorAll(`section.main`);
// const screensArr = Array.from(screens);
// const navigationBtn = `<div class="arrows__wrap">
//   <style>
// .arrows__wrap {
//   position: absolute;
//   top: 135px;
//   left: 50%;
//   margin-left: -56px;
// }
// .arrows__btn {
//   background: none;
//   border: 2px solid black;
//   padding: 5px 20px;
// }
// </style>
// <button class="arrows__btn arrows__btn--prev"><-</button>
//   <button class="arrows__btn arrows__btn--next">-></button>
// </div>`;
// let arrowPrev;
// let arrowNext;
//
// const addNavigation = () => {
//   app.insertAdjacentHTML(`beforeEnd`, navigationBtn);
//   arrowPrev = app.querySelector(`.arrows__btn--prev`);
//   arrowNext = app.querySelector(`.arrows__btn--next`);
// };
//
// addNavigation();
//
// const showScreen = (index) => {
//   main.innerHTML = ``;
//   main.appendChild(index);
// };
//
// let currentScreen = 0;
// const switchScreen = (index) => {
//   index = index >= screensArr.length ? 0 : index;
//   index = index < 0 ? screensArr.length - 1 : index;
//   currentScreen = index;
//   showScreen(screensArr[currentScreen]);
// };
//
// switchScreen(currentScreen);

// document.addEventListener(`keydown`, (evt) => {
//   switch (evt.keyCode) {
//     case RIGHT_ARROW:
//       switchScreen(currentScreen + 1);
//       break;
//     case LEFT_ARROW:
//       switchScreen(currentScreen - 1);
//       break;
//   }
// });
//
// arrowPrev.addEventListener(`click`, () => {
//   switchScreen(currentScreen - 1);
// });
//
// arrowNext.addEventListener(`click`, () => {
//   switchScreen(currentScreen + 1);
// });

import {switchScreen} from "./util";
import {welcomeScreenElement} from "./welcomeScreen";
import {firstGameScreenElement} from "./firstGameScreen";
import {secondGameScreenElement} from "./secondGameScreen";

switchScreen(welcomeScreenElement);

// const playBtn = document.querySelector(`.main-play`);
// playBtn.addEventListener(`click`, () => {
//   switchScreen(firstGameScreenElement);
//   let answer = document.querySelectorAll(`.main-answer`);
//   let answerArr = Array.from(answer);
//
//   answerArr.forEach((el) => {
//     el.addEventListener(`click`, () => {
//       switchScreen(secondGameScreenElement);
//
//       const answerBtn = document.querySelector(`.genre-answer-send`);
//       answerBtn.setAttribute(`disabled`, `disabled`);
//
//       const check1 = document.querySelector(`#a-1`);
//       const check2 = document.querySelector(`#a-2`);
//       const check3 = document.querySelector(`#a-3`);
//       const check4 = document.querySelector(`#a-4`);
//
//       if (check1.checked || check2.checked || check3.checked || check4.checked) {
//         answerBtn.setAttribute(`disabled`, `disabled`);
//       } else {
//         answerBtn.removeAttribute(`disabled`);
//       }
//
//     });
//   });
// });
