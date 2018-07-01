export default (btnControl, audio, buttonsList) => {
  btnControl.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    buttonsList.forEach((elem) => {
      if (elem !== evt.target && elem.classList.contains(`player-control--pause`)) {
        elem.previousElementSibling.pause();
        elem.classList.remove(`player-control--pause`);
        elem.classList.add(`player-control--play`);
      }
    });

    if (evt.target.classList.contains(`player-control--play`)) {
      evt.target.previousElementSibling.play();
      evt.target.classList.remove(`player-control--play`);
      evt.target.classList.add(`player-control--pause`);
    } else {
      evt.target.previousElementSibling.pause();
      evt.target.classList.remove(`player-control--pause`);
      evt.target.classList.add(`player-control--play`);
    }
  });
};
