import {currentState} from "./game-data";

const main = document.querySelector(`.main`);

export const render = (str) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = str.trim();
  // return wrapper.firstChild;
  return wrapper;
};

export const switchScreen = (element) => {
  let collection = element.children;
  [...collection].map((el) => {
    main.appendChild(el);
  });
};

export const clearAndSwitchScreen = (element) => {
  main.innerHTML = ``;
  let collection = element.children;
  [...collection].map((el) => {
    main.appendChild(el);
  });
};

export const backToInitialState = () => {
  currentState.points = 0;
  currentState.lives = 3;
  currentState.time = 300;
  currentState.level = 0;
};

