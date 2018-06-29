import WelcomePresenter from "./welcomePresenter";
import PerformerPresenter from "./performerPresenter";
import GenrePresenter from "./genrePresenter";
import ResultLosePresenter from "./resultLosePresenter";
import ResultWinPresenter from "./resultWinPresenter";
import {statisticLose} from "./gameData";
import GameModel from "./gameModel";
import ErrorView from "./ErrorView";
import {showModal, switchScreen} from "./util";
import {adaptServerData} from "./dataAdapt";
import SplashScreen from "./splashScreen";
import ConfirmationPresenter from "./confirmationPresenter";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Router {
  static start() {
    this.gameDataFromServer = ``;
    const splash = new SplashScreen();
    switchScreen(splash.element);
    window.fetch(`https://es.dump.academy/guess-melody/questions`)
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => {
        this.gameDataFromServer = adaptServerData(data);
        return this.gameDataFromServer;
      })
      .then(() => {
        Router.showWelcomeScreen();
      })
      .catch(Router.showError);
  }

  static showWelcomeScreen() {
    this.model = new GameModel(this.gameDataFromServer);
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

  static showModalConfirmation() {
    const confirmation = new ConfirmationPresenter();
    confirmation.init();
  }
}
