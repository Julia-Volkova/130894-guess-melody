import switchScreen from "./util";
import welcomeScreen from "./welcomeScreen";

const templates = document.querySelector(`#templates`).content;
const results = templates.querySelectorAll(`.main--result`);
const resultsArr = Array.from(results);
const resultExpireChance = resultsArr[2];

const replayBtn = resultExpireChance.querySelector(`.main-replay`);
replayBtn.addEventListener(`click`, () => {
  switchScreen(welcomeScreen);
});

export default resultExpireChance;
