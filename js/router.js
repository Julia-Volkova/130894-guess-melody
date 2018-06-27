import WelcomePresenter from "./welcomePresenter";
import PerformerPresenter from "./performerPresenter";
import GenrePresenter from "./genrePresenter";
import ResultLosePresenter from "./resultLosePresenter";
import ResultWinPresenter from "./resultWinPresenter";
import {statisticLose} from "./gameData";
import GameModel from "./gameModel";
import ErrorView from "./ErrorView";
import {showModal} from "./util";
import {adaptServerData} from "./dataAdapt.test";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let questData;

export default class Router {
  static showWelcomeScreen() {
    this.model = new GameModel();
    const welcomePresenter = new WelcomePresenter(this.model);
    welcomePresenter.startInitialisation();

    window.fetch(`https://es.dump.academy/guess-melody/questions`)
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => {
        questData = adaptServerData(data);
      })
      .then(() => welcomePresenter.init())
      .catch(Router.showError)
      .then(() => welcomePresenter.stopInitialisation());
  }

  static showPerformerScreen() {
    console.log(questData);
    this.modelAfterInit = new GameModel(questData);
    const performerPresenter = new PerformerPresenter(this.modelAfterInit);
    performerPresenter.init();
  }

  static showGenreScreen() {
    const genrePresenter = new GenrePresenter(this.modelAfterInit);
    genrePresenter.init();
  }

  static showResultLoseLivesEndScreen() {
    const resultLosePresenter = new ResultLosePresenter(this.modelAfterInit, statisticLose.livesEnd);
    resultLosePresenter.init();
  }

  static showResultLoseTimesEndScreen() {
    const resultLosePresenter = new ResultLosePresenter(this.modelAfterInit, statisticLose.timeEnds);
    resultLosePresenter.init();
  }

  static showResultWinScreen() {
    const resultWinPresenter = new ResultWinPresenter(this.modelAfterInit, this.modelAfterInit.computeFinalResult());
    resultWinPresenter.init();
  }

  static showError(error) {
    const errorModal = new ErrorView(error);
    showModal(errorModal.element);
  }
}
