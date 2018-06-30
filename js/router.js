import WelcomePresenter from "./welcomePresenter";
import PerformerPresenter from "./performerPresenter";
import GenrePresenter from "./genrePresenter";
import ResultLosePresenter from "./resultLosePresenter";
import ResultWinPresenter from "./resultWinPresenter";
import {statisticLose} from "./gameData";
import GameModel from "./gameModel";
import ErrorView from "./ErrorView";
import {showModal, switchScreen} from "./util";
import {adaptServerData} from "./adaptServerData";
import SplashScreen from "./splashScreen";
import ConfirmationPresenter from "./confirmationPresenter";
import LoadFinalResultPresenter from "./loadFinalResultPresenter";
import Loader from "./loader";

export default class Router {
  static start() {
    this.gameDataFromServer = ``;
    const splash = new SplashScreen();
    switchScreen(splash.element);
    Loader.loadData()
      .then((data) => {
        this.gameDataFromServer = adaptServerData(data);
        return this.gameDataFromServer;
      })
      .then(() => {
        Router.showWelcomeScreen();
      })
      .catch(Router.showError)
      .then(() => splash.wrap.parentNode && splash.wrap.parentNode.removeChild(splash.wrap));
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

  static showResultWinScreen(data) {
    const resultWinPresenter = new ResultWinPresenter(this.model, this.model.computeFinalResult(data));
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

  static showStatisticScreen() {
    this.allResults = [];
    const loadFinalResult = new LoadFinalResultPresenter(this.model);
    loadFinalResult.init();
    this.model.calcScores();
    Loader.saveResults({score: this.model.state.points})
      .catch(Router.showError);
    Loader.loadResults()
      .then((data) => {
        data.forEach((elem) => {
          this.allResults.push(elem.score);
        });
        Router.showResultWinScreen(this.allResults);
      })
      .catch(Router.showError);
  }
}
