import switchScreen from "./util";
import firstGameScreen from "./firstGameScreen";

const templates = document.querySelector(`#templates`).content;
const welcomeScreen = templates.querySelector(`.main--welcome`).cloneNode(true);

const playBtn = welcomeScreen.querySelector(`.main-play`);
playBtn.addEventListener(`click`, () => {
  switchScreen(firstGameScreen);
});

export default welcomeScreen;


