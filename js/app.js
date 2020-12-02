'use strict'

var userName = prompt('Hello! What is your name?')
alert('Hi,' + userName + ', thanks for coming to my page!')

var name = prompt('My full name is Anthony Johnson, do people call me AJ for short?').toLowerCase();
// console.log(name)

if (name === 'yes' || name === 'y'){
  alert('yes indeed')
}

var homeTown = prompt('I am from NYC, Staten island to be exact, do people call it the forgotten borough?').toLowerCase();
// console.log(homeTown)

if (name === 'yes' || name === 'y'){
  alert('yes, but I call it home!')
}

var military = prompt('I served in the military, but spent a good portion of my time on water, was I in the navy?').toLowerCase();
// console.log(military)

if (name === 'yes' || name === 'y'){
  alert('correct! Haze gray and underway!')
}

var education = prompt('I went to college in New Orleans, is this also where mardi gras happens?').toLowerCase();
// console.log(education)

if (name === 'yes' || name === 'y'){
  alert('yeah it is!  One of the best parades I have been to!')
}

var dreamJob = prompt('Of all the places I have in mind for work, the islands are my DREAM!').toLowerCase();
// console.log(dreamJob)

if (name === 'yes' || name === 'y'){
  alert('You bet! Can you say paradise?')
}

alert('Thanks for learning a bit about me ' + userName + ', hope you have fun!')

