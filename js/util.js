const main = document.querySelector(`.main`);

export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const switchScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};
