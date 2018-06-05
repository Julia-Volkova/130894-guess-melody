import switchScreen from "./util";
import resultExpireChance from "./resultExpireChance";
import welcomeScreen from "./welcomeScreen";

const templates = document.querySelector(`#templates`).content;
const secondGameScreen = templates.querySelector(`.main--level-genre`).cloneNode(true);

const answerBtn = secondGameScreen.querySelector(`.genre-answer-send`);
answerBtn.setAttribute(`disabled`, `disabled`);
const checkboxes = secondGameScreen.querySelectorAll(`input[type="checkbox"]`);
const checkboxesArr = Array.from(checkboxes);
let checkState = [];
let checkOne;

checkboxesArr.forEach((elem) => {
  elem.addEventListener(`click`, () => {
    checkState = [];
    checkboxesArr.forEach((el) => {
      if (el.checked) {
        checkState.push(true);
      } else {
        checkState.push(false);
      }
    });

    checkOne = checkState.some((el) => {
      return el === true;
    });

    if (checkOne) {
      answerBtn.removeAttribute(`disabled`);
    } else {
      answerBtn.setAttribute(`disabled`, `disabled`);
    }
  });
});

answerBtn.addEventListener(`click`, () => {
  switchScreen(resultExpireChance);
});

const playAgainLink = secondGameScreen.querySelector(`.play-again__wrap`);
playAgainLink.addEventListener(`click`, () => {
  switchScreen(welcomeScreen);
});

export default secondGameScreen;
