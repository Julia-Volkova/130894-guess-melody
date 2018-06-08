import {assert} from 'chai';
import {calcScores, showResultScreen, timeCount} from "./game-data";

const gameResultTestOne = [
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  }
];

const gameResultTestTwo = [
  {
    correct: true,
    time: 5
  },
  {
    correct: true,
    time: 18
  },
  {
    correct: true,
    time: 20
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: false,
    time: 10
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 20
  },
  {
    correct: true,
    time: 30
  }
];

const gameResultTestThree = [
  {
    correct: true,
    time: 5
  },
  {
    correct: false,
    time: 18
  },
  {
    correct: true,
    time: 20
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: false,
    time: 10
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 20
  },
  {
    correct: true,
    time: 30
  }
];

const gameResultTestFour = [
  {
    correct: true,
    time: 5
  },
  {
    correct: false,
    time: 18
  },
  {
    correct: true,
    time: 20
  },
  {
    correct: true,
    time: 10
  },
  {
    correct: false,
    time: 10
  },
  {
    correct: true,
    time: 18
  },
  {
    correct: true,
    time: 14
  },
  {
    correct: true,
    time: 35
  },
  {
    correct: false,
    time: 20
  }
];

const gameResultTestFive = [
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 15
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: false,
    time: 25
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 33
  },
  {
    correct: true,
    time: 30
  }
];

const finalResultsOne = {
  points: 18,
  lives: 2,
  time: 100
};

const finalResultsTwo = {
  points: 20,
  lives: 3,
  time: 70
};

const finalResultsThree = {
  points: 5,
  lives: 1,
  time: 10
};

const finalResultsFour = {
  points: 14,
  lives: 2,
  time: 0
};

const finalResultsFive = {
  points: 6,
  lives: 0,
  time: 23
};

describe(`Calcul scores`, () => {
  it(`should calc scores gamer`, () => {
    assert.equal(calcScores(gameResultTestOne, 3), 10);
    assert.equal(calcScores(gameResultTestTwo, 2), 11);
    assert.equal(calcScores(gameResultTestThree, 1), 7);
  });
  it(`should return -1, if game culminate earlier or lives end`, () => {
    assert.equal(calcScores(gameResultTestFive, 2), -1);
    assert.equal(calcScores(gameResultTestFour, 0), -1);
  });
});


describe(`Show result window`, () => {
  it(`should return positive result and place`, () => {
    assert.equal(showResultScreen(
        [1, 17, 3, 6, 19, 15, 4, 2],
        finalResultsOne
    ),
    `Вы заняли 2 место из 9 игроков. Это лучше, чем у 78% игроков`
    );
    assert.equal(showResultScreen(
        [1, 17, 3, 14],
        finalResultsTwo
    ),
    `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`
    );
    assert.equal(showResultScreen(
        [1, 17, 3, 14, 13, 4, 20, 11, 2, 18, 6, 19],
        finalResultsThree
    ),
    `Вы заняли 9 место из 13 игроков. Это лучше, чем у 31% игроков`
    );
  });
  it(`should say, that time out`, () => {
    assert.equal(showResultScreen(
        [1, 18, 3, 6, 19, 15, 4, 2],
        finalResultsFour
    ),
    `Время вышло! Вы не успели отгадать все мелодии`
    );
  });
  it(`should say, that end lives`, () => {
    assert.equal(showResultScreen(
        [1, 14, 18, 3],
        finalResultsFive
    ),
    `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
    );
  });
});

describe(`Timer`, () => {
  it(`should return count reduced by one`, () => {
    assert.equal(timeCount(300).tick(), 299);
    assert.equal(timeCount(768).tick(), 767);
    assert.equal(timeCount(99).tick(), 98);
  });
  it(`should return on first call start time`, () => {
    assert.equal(timeCount(50).remainingTime, 50);
    assert.equal(timeCount(330).remainingTime, 330);
    assert.equal(timeCount(840).remainingTime, 840);
    assert.equal(timeCount(160).remainingTime, 160);
    assert.equal(timeCount(1).remainingTime, 1);
  });
  it(`timer stop when time out`, () => {
    assert.equal(timeCount(0).isTimeout, true);
  });
});

