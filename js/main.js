// import {switchScreen} from "./util";
// import welcomeScreenElement from "./welcomeScreen";
import {performerElement} from "./performerTemplate";
import {initialState} from "./game-data";
import {switchScreen} from "./util";
import {headerTemplate} from "./header";
import {genreElement} from "./genreTemplate";

switchScreen(performerElement);
switchScreen(genreElement);

const render = (str) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = str.trim();
  return wrapper;
};

switchScreen(render(headerTemplate(initialState)));


