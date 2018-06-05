import switchScreen from "./util";
import welcomeScreen from "./welcomeScreen";

const templates = document.querySelector(`#templates`).content;
const results = templates.querySelectorAll(`.main--result`);
const resultsArr = Array.from(results);
const resultWin = resultsArr[0];

const replayBtn = resultWin.querySelector(`.main-replay`);
replayBtn.addEventListener(`click`, () => {
  switchScreen(welcomeScreen);
});

export default resultWin;
