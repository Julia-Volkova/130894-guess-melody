import {render, backToInitialState, switchScreen} from "./util";
import welcomeScreenElement from "./welcomeScreen";

export default function renderResultExpireChance() {
  const resultExpireChance = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

  const resultExpireChanceElement = render(resultExpireChance);

  const replayBtn = resultExpireChanceElement.querySelector(`.main-replay`);
  replayBtn.addEventListener(`click`, () => {
    switchScreen(welcomeScreenElement());
    backToInitialState();
  });

  return resultExpireChanceElement;
}

