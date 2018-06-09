const main = document.querySelector(`.main`);

export const render = (str) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = str.trim();
  return wrapper.firstChild;
};

export const switchScreen = (element) => {
  // main.innerHTML = ``;
  main.appendChild(element);
};
