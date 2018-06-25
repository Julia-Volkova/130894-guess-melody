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
