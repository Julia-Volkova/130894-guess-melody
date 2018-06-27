// import {assert} from 'chai';

export const adaptServerData = (data) => {
  for (const level of Object.values(data)) {
    if (level.type === `artist`) {
      level.type = `performer`;
      level.audio = level.src;
      delete level.src;
      level.answers.map((answer) => {
        answer.pic = answer.image.url;
        delete answer.image;
        answer.artist = answer.title;
        delete answer.title;
        answer.correct = answer.isCorrect;
        delete answer.isCorrect;
      });
    } else {
      level.answers.map((answer) => {
        answer.correct = answer.genre === level.genre;
        answer.audio = answer.src;
        delete answer.src;
      });
    }
  }
  return data;
};

// const performerServer = [
//   {
//     type: `artist`,
//     src: `https://freemusicarchive.org/music/listen/bb81461e6e941e2528d3b4582f003e34ed0686bc`,
//     question: `Кто исполняет эту песню?`,
//     answers: [
//       {
//         image: {
//           url: `https://freemusicarchive.org/file/images/artists/B…Math_-_20100122151057551.jpg?width=300&height=300`,
//           width: 300,
//           height: 300
//         },
//         isCorrect: false,
//         title: `Black Math`
//       }
//     ]
//   }
// ];
//
// const performerLocal = [
//   {
//     type: `performer`,
//     audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
//     question: `Кто исполняет эту песню?`,
//     answers: [
//       {
//         pic: `https://f4.bcbits.com/img/0004181452_10.jpg`,
//         artist: `Gunnar Olsen`,
//         correct: true
//       },
//       {
//         pic: `https://i.vimeocdn.com/portrait/992615_300x300`,
//         artist: `Jingle Punks`,
//         correct: false
//       },
//       {
//         pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
//         artist: `Riot`,
//         correct: false
//       }
//     ]
//   }
// ];

// describe(`Adapt server data`, () => {
//   it(`should have several format server and local data`, () => {
//     assert.deepEqual(performerLocal, adaptServerData(performerServer));
//   });
// });
