import drawWelcomeScreen from "./drawWelcomeScreen";
import {currentState} from "./gameData";
import calculateFinalResults from "./computeFinalResult";

drawWelcomeScreen(currentState);

calculateFinalResults();
