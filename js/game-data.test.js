import {assert} from 'chai';
import {calcScores, showResultScreen, timeCount} from "./game-data";

describe(`Calcul scores`, () => {
  it(`should calc scores gamer`, () => {
    assert.equal(calcScores([{right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}], 3), 10);
    assert.equal(calcScores([{right: true, time: 5}, {right: true, time: 18}, {right: true, time: 20}, {right: true, time: 30}, {right: false, time: 10}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 20}, {right: true, time: 30}], 2), 11);
    assert.equal(calcScores([{right: true, time: 5}, {right: false, time: 18}, {right: true, time: 20}, {right: true, time: 30}, {right: false, time: 10}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 30}, {right: true, time: 20}, {right: true, time: 30}], 1), 7);
    assert.equal(calcScores([{right: true, time: 5}, {right: false, time: 18}, {right: true, time: 20}, {right: true, time: 10}, {right: false, time: 10}, {right: true, time: 18}, {right: true, time: 14}, {right: true, time: 35}, {right: false, time: 20}], 0), 5);
  });
  it(`should return -1, if game culminate earlier`, () => {
    assert.equal(calcScores([{right: true, time: 30}, {right: true, time: 15}, {right: true, time: 30}, {right: false, time: 25}, {right: true, time: 10}, {right: true, time: 33}, {right: true, time: 30}], 2), -1);
  });
  it(`should return 0, if scores are negative`, () => {
    assert.equal(calcScores([{right: true, time: 30}, {right: false, time: 30}, {right: false, time: 30}, {right: false, time: 15}], 0), 0);
  });
});


describe(`Show result window`, () => {
  it(`should return positive result and place`, () => {
    assert.equal(showResultScreen([1, 17, 3, 6, 19, 15, 4, 2], {points: 18, lives: 2, time: 100}), `Вы заняли 2 место из 9 игроков. Это лучше, чем у 78% игроков`);
    assert.equal(showResultScreen([1, 17, 3, 14], {points: 20, lives: 3, time: 70}), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
    assert.equal(showResultScreen([1, 17, 3, 14, 13, 4, 20, 11, 2, 18, 6, 19], {points: 5, lives: 1, time: 10}), `Вы заняли 9 место из 13 игроков. Это лучше, чем у 31% игроков`);
  });
  it(`should say, that time out`, () => {
    assert.equal(showResultScreen([1, 18, 3, 6, 19, 15, 4, 2], {points: 14, lives: 2, time: 0}), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should say, that end lives`, () => {
    assert.equal(showResultScreen([1, 14, 18, 3], {points: 6, lives: 0, time: 23}), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});

describe(`Timer`, () => {
  it(`should return count reduced by one`, () => {
    assert.equal(timeCount(300).tick(), 299);
    assert.equal(timeCount(768).tick(), 767);
    assert.equal(timeCount(99).tick(), 98);
  });
});

