import ResultWinView from "./resultWinView";
import {switchScreen, backToInitialState} from "./util";
import {currentState} from "./gameData";
import renderHeaderTemplate from "./header";
import drawWelcomeScreen from "./drawWelcomeScreen";

export default (obj) => {
  const resultWinView = new ResultWinView(obj);

  switchScreen(resultWinView.element, renderHeaderTemplate(currentState));

  resultWinView.onSwitch = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
  };
};
