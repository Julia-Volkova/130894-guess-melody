import WelcomePresenter from "./welcomePresenter";
import PerformerPresenter from "./performerPresenter";
import GenrePresenter from "./genrePresenter";
import ResultLosePresenter from "./resultLosePresenter";
import ResultWinPresenter from "./resultWinPresenter";
import {statisticLose} from "./gameData";
import GameModel from "./gameModel";

export class Router {
  constructor() {
    this.model = new GameModel();
  }

  static showWelcomeScreen() {
    const welcomePresenter = new WelcomePresenter(router.model);
    welcomePresenter.init();
  }

  static showPerformerScreen() {
    const performerPresenter = new PerformerPresenter(router.model);
    performerPresenter.init();
  }

  static showGenreScreen() {
    const genrePresenter = new GenrePresenter(router.model);
    genrePresenter.init();
  }

  static showResultLoseLivesEndScreen() {
    const resultLosePresenter = new ResultLosePresenter(router.model, statisticLose.livesEnd);
    resultLosePresenter.init();
  }

  static showResultLoseTimesEndScreen() {
    const resultLosePresenter = new ResultLosePresenter(router.model, statisticLose.timeEnds);
    resultLosePresenter.init();
  }

  static showResultWinScreen() {
    const resultWinPresenter = new ResultWinPresenter(router.model, router.model.computeFinalResult());
    resultWinPresenter.init();
  }
}

export const router = new Router();
