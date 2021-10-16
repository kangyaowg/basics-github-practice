//Random Number Function for 1-3
var randNum = function () {
  x = Math.floor(Math.random() * 3 + 1);
  return x;
};

var correctCounter = 0;
var rounds = 1;
var timesToWin = randNum() + 1; //give a number from 2 to 4
console.log("rounds", rounds);
console.log(timesToWin);
console.log("global variable line12");

var main = function (guess) {
  console.log("main function runs line14");
  if (guess != "banana" && guess != "chisel" && guess != "faucet") {
    return "Please input banana chisel or faucet";
  } else {
    var randomNum = randNum(); //create random number 1 , 2 , 3
    if (randomNum == 1) {
      var secretWord = "banana";
    } else if (randomNum == 2) {
      var secretWord = "chisel";
    } else if (randomNum == 3) {
      var secretWord = "faucet";
    }

    if (guess == secretWord) {
      correctCounter = correctCounter + 1;
      console.log("correctCounter", correctCounter);
    } else {
      correctCounter = 0;
    }
  }
  x = timesToWin - correctCounter;
  var myOutputValue =
    "Your Guess is " +
    guess +
    "<br> The Secret Word is " +
    secretWord +
    "<br> You need " +
    x +
    " correct guesses";
  if (correctCounter == timesToWin) {
    rounds = rounds + 1;
    timesToWin = randNum() + 1; //give a number from 2 to 4
    myOutputValue =
      "<br>Round ended, next round need " +
      timesToWin +
      "correct guesses in a row";
  }
  return myOutputValue;
};
