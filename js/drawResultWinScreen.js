import ResultWinView from "./resultWinView";
import {switchScreen, backToInitialState} from "./util";
import {currentState} from "./gameData";
import drawWelcomeScreen from "./drawWelcomeScreen";

export default (obj) => {
  const resultWinView = new ResultWinView(obj);

  switchScreen(resultWinView.element);

  resultWinView.onSwitch = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
  };

  resultWinView.onDrawWelcome = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
  };
};
