import WelcomePresenter from "./welcomePresenter";
import PerformerPresenter from "./performerPresenter";
import GenrePresenter from "./genrePresenter";
import ResultLosePresenter from "./resultLosePresenter";
import ResultWinPresenter from "./resultWinPresenter";
import {statisticLose} from "./gameData";
import GameModel from "./gameModel";
import ErrorView from "./ErrorView";
import {showModal, switchScreen} from "./util";
import {adaptServerData} from "./dataAdapt.test";
import SplashScreen from "./splashScreen";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let gameData;

export default class Router {
  static start() {
    const splash = new SplashScreen();
    switchScreen(splash.element);
    window.fetch(`https://es.dump.academy/guess-melody/questions`)
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => {
        gameData = adaptServerData(data);
        return gameData;
      })
      .then(() => {
        Router.showWelcomeScreen();
      })
      .catch(Router.showError);
  }

  static showWelcomeScreen() {
    this.model = new GameModel(gameData);
    console.log(gameData);
    gameData.forEach((el, index) => {
      el.answers.forEach((item, i) => {
        if (item.correct === true) {
          console.log(`Уровень-${index + 1} = ${i + 1}`);
        }
      });
    });
    const welcomePresenter = new WelcomePresenter(this.model);
    welcomePresenter.init();
  }

  static showPerformerScreen() {
    const performerPresenter = new PerformerPresenter(this.model);
    performerPresenter.init();
  }

  static showGenreScreen() {
    const genrePresenter = new GenrePresenter(this.model);
    genrePresenter.init();
  }

  static showResultLoseLivesEndScreen() {
    const resultLosePresenter = new ResultLosePresenter(this.model, statisticLose.livesEnd);
    resultLosePresenter.init();
  }

  static showResultLoseTimesEndScreen() {
    const resultLosePresenter = new ResultLosePresenter(this.model, statisticLose.timeEnds);
    resultLosePresenter.init();
  }

  static showResultWinScreen() {
    const resultWinPresenter = new ResultWinPresenter(this.model, this.model.computeFinalResult());
    resultWinPresenter.init();
  }

  static showError(error) {
    const errorModal = new ErrorView(error);
    showModal(errorModal.element);
  }
}
