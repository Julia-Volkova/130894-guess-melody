const SERVER_URL = `https://es.dump.academy/guess-melody`;
const APP_ID = 90576384;
const toJSON = (res) => res.json();

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const checkStatusLoad = (response) => {
  if (response.ok) {
    return response;
  } else if (response.status === 404) {
    return [];
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};


export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
      .then(checkStatus)
      .then(toJSON);
  }

  static loadResults() {
    return fetch(`${SERVER_URL}/stats/${APP_ID}`)
      .then(checkStatus)
      .then(toJSON);
  }

  static saveResults(data) {
    const requestSettings = {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      }
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings)
      .then(checkStatusLoad);
  }
}
