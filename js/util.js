const main = document.querySelector(`.main`);

export default (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};
