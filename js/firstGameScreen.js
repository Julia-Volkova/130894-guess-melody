import switchScreen from "./util";
import secondGameScreen from './secondGameScreen';
import welcomeScreen from "./welcomeScreen";

const templates = document.querySelector(`#templates`).content;
const firstGameScreen = templates.querySelector(`.main--level-artist`).cloneNode(true);

const answers = firstGameScreen.querySelectorAll(`.main-answer`);
const answersArr = Array.from(answers);

answersArr.forEach((el) => {
  el.addEventListener(`click`, () => {
    switchScreen(secondGameScreenElement);
  });
});

const playAgainLink = firstGameScreen.querySelector(`.play-again__wrap`);
playAgainLink.addEventListener(`click`, () => {
  switchScreen(welcomeScreenElement);
});

export default firstGameScreenElement;
