const main = document.querySelector(`.main`);

export const render = (str) => {
  const template = document.createElement(`template`);
  template.innerHTML = str.trim();
  return template.content;
};

export const switchScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

// export const backToInitialState = () => {
//   currentState.points = 0;
//   currentState.lives = 3;
//   currentState.time = 300;
//   currentState.level = 0;
//   results.splice(0);
// };

