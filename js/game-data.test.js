import {assert} from 'chai';
import {calcScores} from "./game-data";

suite(`Calcul scores`, () => {
  test(`should calc scores gamer`, () => {
    assert.equal(calcScores([{text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}], 2), 10);
    assert.equal(calcScores([{text: true, time: 5}, {text: true, time: 18}, {text: true, time: 20}, {text: true, time: 30}, {text: false, time: 10}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 30}, {text: true, time: 20}, {text: true, time: 30}], 1), 11);
    assert.equal(calcScores([{text: true, time: 15}, {text: false, time: 15}, {text: true, time: 10}, {text: true, time: 25}, {text: false, time: 10}], 0), 2);
  });
  test(`should return -1, if game culminate earlier`, () => {
    assert.equal(calcScores([{text: true, time: 30}, {text: true, time: 15}, {text: true, time: 30}, {text: true, time: 25}, {text: true, time: 10}, {text: true, time: 33}, {text: true, time: 30}], 2), -1);
  });
  test(`should return 0, if scores are negative`, () => {
    assert.equal(calcScores([{text: false, time: 30}, {text: false, time: 15}], 0), 0);
  });
});
