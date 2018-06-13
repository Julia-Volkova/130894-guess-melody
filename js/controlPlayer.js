export default (btnControl, audio) => {
  btnControl.addEventListener(`click`, (evt) => {
    evt.preventDefault();
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
