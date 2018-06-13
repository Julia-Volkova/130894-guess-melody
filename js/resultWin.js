import {render, clearAndSwitchScreen, backToInitialState} from "./util";
import welcomeScreenElement from "./welcomeScreen";

export default function (obj) {
  const resultWin = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${obj.points} баллов (${obj.fastAnswers} быстрых)
      <br>совершив ${3 - obj.lives} ошибки</div>
    <span class="main-comparison">${obj.statistics}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const resultWinElement = render(resultWin);

  const replayBtn = resultWinElement.querySelector(`.main-replay`);
  replayBtn.addEventListener(`click`, () => {
    clearAndSwitchScreen(welcomeScreenElement());
    backToInitialState();
  });

  return resultWinElement;
}
