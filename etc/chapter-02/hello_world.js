console.log('hello world!');

const path = require('path');
console.log(path.basename(__filename));

var giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke(function (joke) {
  console.log(joke);
})
