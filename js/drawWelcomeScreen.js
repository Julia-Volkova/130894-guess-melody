import WelcomeView from "./welcomeView";
import {switchScreen} from "./util";
import drawPerformerScreen from "./drawPerformerScreen";
import {startTimer} from "./gameData";

export default (state) => {
  const welcomeView = new WelcomeView();

  switchScreen(welcomeView.element);

  welcomeView.onSwitch = () => {
    state.level++;
    startTimer();
    drawPerformerScreen(state);
  };
};
