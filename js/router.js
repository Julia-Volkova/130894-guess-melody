import GameModel from "./gameModel";
import WelcomePresenter from "./welcomePresenter";
import PerformerPresenter from "./performerPresenter";
import GenrePresenter from "./genrePresenter";
import ResultLosePresenter from "./resultLosePresenter";
import ResultWinPresenter from "./resultWinPresenter";
import {currentState, statisticLose} from "./gameData";

export default class Router {
  static showWelcomeScreen() {
    const model = new GameModel(currentState);
    const welcomePresenter = new WelcomePresenter(model);
    welcomePresenter.init();
  }

  static showPerformerScreen() {
    const model = new GameModel(currentState);
    const performerPresenter = new PerformerPresenter(model);
    performerPresenter.init();
  }

  static showGenreScreen() {
    const model = new GameModel(currentState);
    const genrePresenter = new GenrePresenter(model);
    genrePresenter.init();
  }

  static showResultLoseLivesEndScreen() {
    const model = new GameModel(currentState);
    const resultLosePresenter = new ResultLosePresenter(model, statisticLose.livesEnd);
    resultLosePresenter.init();
  }

  static showResultLoseTimesEndScreen() {
    const model = new GameModel(currentState);
    const resultLosePresenter = new ResultLosePresenter(model, statisticLose.timeEnds);
    resultLosePresenter.init();
  }

  static showResultWinScreen() {
    const model = new GameModel(currentState);
    const resultWinPresenter = new ResultWinPresenter(model, model.computeFinalResult());
    resultWinPresenter.init();
  }
}
