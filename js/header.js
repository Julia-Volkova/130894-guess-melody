import {render, switchScreen} from "./util";
import WelcomeView from "./welcome-view";
import {backToInitialState} from "./util";

export default function renderHeaderTemplate(state) {
  const headerTemplate =
    `<a class="play-again play-again__wrap" href="#">
      <img class="play-again__img" src="/img/melody-logo-ginger.png" alt="logo" width="177" height="76">
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
    ${new Array(3 - state.lives).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div>
`;

  const headerElement = render(headerTemplate);

  const btnPlayAgain = headerElement.querySelector(`.play-again__wrap`);
  const welcomeView = new WelcomeView();

  btnPlayAgain.addEventListener(`click`, () => {
    switchScreen(welcomeView.element);
    backToInitialState();
  });

  return headerElement;
}
