const main = document.querySelector(`.main`);
const app = document.querySelector(`.app`);

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
