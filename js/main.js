import WelcomePresenter from "./welcomePresenter";
import {currentState} from "./gameData";
import GameModel from "./gameModel";


const welcomePresenter = new WelcomePresenter(new GameModel(currentState));
welcomePresenter.init();
