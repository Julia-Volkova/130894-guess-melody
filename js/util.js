const main = document.querySelector(`.main`);
const app = document.querySelector(`.app`);

const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;

export const render = (str) => {
  const template = document.createElement(`template`);
  template.innerHTML = str.trim();
  return template.content;
};

export const switchScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export const showModal = (element) => {
  app.insertBefore(element, main);
};

export const removeElementFromDom = (element) => {
  app.removeChild(element);
};

export const calculateLevelTime = (start) => {
  const end = new Date();
  return Math.ceil((end - start) / MILLISECONDS_IN_SECOND);
};

export const getMinutesAndSeconds = (sec) => {
  const minutes = Math.floor(sec / SECONDS_IN_MINUTE);
  return {
    minutes,
    seconds: sec - (minutes * SECONDS_IN_MINUTE)
  };
};

export const getNoun = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};
