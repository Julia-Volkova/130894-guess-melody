import {render, clearAndSwitchScreen, backToInitialState} from "./util";
import welcomeScreenElement from "./welcomeScreen";

export default function renderResultTimeout() {
  const resultTimeout = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

  const resultTimeoutElement = render(resultTimeout);

  const replayBtn = resultTimeoutElement.querySelector(`.main-replay`);
  replayBtn.addEventListener(`click`, () => {
    clearAndSwitchScreen(welcomeScreenElement());
    backToInitialState();
  });

  return resultTimeoutElement;
}
