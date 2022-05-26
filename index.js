const ask = require("./ask")

// const askQuestion = (question) => {
//   ask(question).then(result => {
//     console.log('Promise 1:', result.response)
//     .ask(question).then(result => {
//       console.log('Promise 2:', result.response)
//     })
//   })
// }

// askQuestion("Why is the sky blue?")

async function askQuestion(question) {
  await ask(question).then(result => {
    console.log('Promise 1:', result.response)
  }).ask(question).then(result => {
      console.log('Promise 2:', result.response)
  })
}

 askQuestion("Why is the sky blue?")