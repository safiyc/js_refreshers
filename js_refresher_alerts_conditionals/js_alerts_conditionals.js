// prompt and console.log
// var firstName = prompt("What is the first name of your favorite villian?");
// var lastName = prompt("How about the last name?");
// var age = prompt("Can you give a guess of the age of the villian?");
// console.log("Great! Your villian's name is " + firstName + " " + lastName + ".");
// console.log("And you think the villian's age is " + age + ". Nice!");


// age in days
// var years = prompt("How long have you been alive in human years?");
// 365.25 to account for leapyear every 4 years
// var days = 365.25 * years;
// alert("You are " + days + " days old.");


// if age is negative, print error message
// if age is 21, print "happy 21th bday!"
// if age is odd, print "your age is odd!"
// if age is perfect square, print "perfect square!"
// var age = parseInt(prompt("How old are you?"));
// if (age < 0) {
//   alert("You have to enter a positive number.");
// } else if (age == 21) {
//   alert("Happy 21th birthday!!");
// } else if ((age % 2 !== 0) && (Number.isNaN(age) == false)) {
//     if (age % Math.sqrt(age) === 0) {
//       alert("Your age is a perfect square");
//     } else {
//       alert("Your age is an odd number.");
//     }
// } else if (Number.isNaN(age) == false) {
//   alert("Your age is " + age + "!");
// } else {
//   alert("You didnt enter a number.")
// }


// user guesses the secret number
// 'Number' grabs string prompt and converts to a number; if letters, then NaN
// var secretNumber = 5;
// var userNumber = Number(prompt("Guess a number."));
//
// if (isNaN(userNumber)) {
//   alert("Hey buddy, don't get smart with me. Enter a number.");
// } else if (userNumber === secretNumber) {
//   alert("Wow, you got the number right! You must be a psychic.");
// } else if (userNumber >= secretNumber) {
//   alert("Sorry, your number is too high.");
// } else {
//   alert("Bummer, your number is too low.");
// }
