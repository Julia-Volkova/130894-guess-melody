import {render, switchScreen} from "./util";
import {welcomeScreenElement} from "./welcomeScreen";

const resultTimeout = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const resultTimeoutElement = render(resultTimeout);
switchScreen(resultTimeoutElement);

const replayBtn = document.querySelector(`.main-replay`);
replayBtn.addEventListener(`click`, () => {
  switchScreen(welcomeScreenElement);
});

export {resultTimeoutElement};

