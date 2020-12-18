'use strict';

var userName = prompt('Hello! What is your name?');
alert(`Hi, ${userName}, thanks for coming to my page!`);

function questionOne() {
  var myName = prompt('My full name is Anthony Johnson, do people call me AJ for short?').toLowerCase();
  // console.log(name)

  if (myName === 'yes' || myName === 'y') {
    alert('yes indeed');
  } else {
    alert('Actually, my nickname IS AJ');
  }

}
console.log(questionOne());

function questionTwo() {
  var homeTown = prompt('I am from NYC, Staten island to be exact, do people call it the forgotten borough?').toLowerCase();
  // console.log(homeTown)

  if (homeTown === 'yes' || homeTown === 'y') {
    alert('yes, but I call it home!');
  } else {
    alert('Sadly, it IS the forgotten borough, but I still love it!');
  }

}
console.log(questionTwo());

function questionThree() {
  var military = prompt('I served in the military, but spent a good portion of my time on water, was I in the navy?').toLowerCase();
  // console.log(military)

  if (military === 'yes' || military === 'y') {
    alert('correct! Haze gray and underway!');
  } else {
    alert ('I am in fact a squid lol, miss the Navy!');
  }

}
console.log(questionThree());

function questionFour() {
  var education = prompt('I went to college in New Orleans, is this also where mardi gras happens?').toLowerCase();
  // console.log(education)

  if (education === 'yes' || education === 'y') {
    alert('yeah it is!  One of the best parades I have been to!');
  } else {
    alert('Yes it is! If you havent been, youre missing out!');
  }

}
console.log(questionFour());

function questionFive() {
  var dreamJob = prompt('Of all the places I have in mind for work, the islands are my DREAM!').toLowerCase();
  // console.log(dreamJob)

  if (dreamJob === 'yes' || dreamJob === 'y') {
    alert('You bet! Can you say paradise?');
  } else {
    alert('Oh, I defintely would love to work in the islands!')
  }

}
console.log(questionFive());

function questionSix() {
  for (var i = 0; i < 4; i++) {
    var age = parseInt(prompt('despite my babyface, I have crows feet... how old am I? Guess between 25 and 50!'));
    console.log(age);
    console.log(typeof age);

    if (age === 41) {
      alert('Well done! I am 41 years young!');
      break;
    }

    else if (age >= 25 && age < 37) {
      alert('Guess higher, but thank you!');
    }

    else if (age >= 37 && age < 41) {
      alert('Really close, but a bit higher.');
    }

    else if (age > 44 && age <= 50) {
      alert('wow, I look THAT old? Guess lower.');
    }

    else if (age > 41 && age <= 44) {
      alert('REALLY close, but just a bit lower');
    }
    if (i === 3) {
      alert('oh no! You are out of guesses, I am 41.');
    }
  }

}
console.log(questionSix());

function questionSeven() {
  var faveColor = prompt('Choosing from Red, Blue, Black, White and Green, which of these are my favorite colors? There are three correct answers.').toLowerCase();
  if (faveColor === 'black' || faveColor ==='white' || faveColor ==='red'){
    alert('Thats right!');
  } else {
    alert('no, thats not one of my favorites');
  }
}

questionSeven();

alert('Thanks for learning a bit about me ' + userName + ', hope you have fun!');

