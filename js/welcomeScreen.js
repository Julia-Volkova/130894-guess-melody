import {render, switchScreen, clearAndSwitchScreen} from "./util";
import {currentState, levels} from "./game-data";
import headerElement from "./header";
import performerElement from "./performerTemplate";

export default () => {
  const welcomeScreen = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

  const welcomeScreenElement = render(welcomeScreen);

  const playBtn = welcomeScreenElement.querySelector(`.main-play`);
  playBtn.addEventListener(`click`, () => {
    currentState.level++;
    clearAndSwitchScreen(headerElement(currentState));
    switchScreen(performerElement(levels[currentState.level]));
  });

  return welcomeScreenElement;
};
