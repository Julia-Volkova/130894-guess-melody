import ResultLoseView from "./resultLoseView";
import {switchScreen, backToInitialState} from "./util";
import {currentState} from "./gameData";
import drawWelcomeScreen from "./drawWelcomeScreen";

export default (type) => {
  const resultLoseView = new ResultLoseView(type);

  switchScreen(resultLoseView.element);

  resultLoseView.onSwitch = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
  };

  resultLoseView.onDrawWelcome = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
  };
};
