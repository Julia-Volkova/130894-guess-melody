import ResultLoseView from "./resultLoseView";
import {switchScreen, backToInitialState} from "./util";
import {currentState} from "./gameData";
import renderHeaderTemplate from "./header";
import drawWelcomeScreen from "./drawWelcomeScreen";

export default (type) => {
  const resultLoseView = new ResultLoseView(type);

  switchScreen(resultLoseView.element, renderHeaderTemplate(currentState));

  resultLoseView.onSwitch = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
  };
};
