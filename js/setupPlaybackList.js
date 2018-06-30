export default (btnControl, audio, buttonsList) => {
  btnControl.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    buttonsList.forEach((elem) => {
      if (elem.classList.contains(`player-control--pause`)) {
        elem.previousElementSibling.pause();
        elem.classList.remove(`player-control--pause`);
        elem.classList.add(`player-control--play`);
      }
    });
    if (evt.target.classList.contains(`player-control--play`)) {
      audio.play();
      evt.target.classList.remove(`player-control--play`);
      evt.target.classList.add(`player-control--pause`);
    } else {
      audio.pause();
      evt.target.classList.remove(`player-control--pause`);
      evt.target.classList.add(`player-control--play`);
    }
  });
};
