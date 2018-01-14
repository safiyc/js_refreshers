// 'while' loop:

// should loop 5 times until 'num' equals 10
// var num = 2;
// while(num <= 10) {
//   console.log(num);
//   num += 2;
// }
//
// // numbers 4, 8, 12, 16, 20 should print as 'num' increments by 1 from 1
// var num = 1;
// while(num <= 20) {
//   if(num % 4 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// dude, dont run this; it's an infinite loop trap!
// var num = 100;
// while(num < 150) {
//   console.log(num + 1);
//   num--;
// }

// console log all numbers betwen -10 and 19
// var num = -11;
// while (num <= 19) {
//   console.log(num += 1);
// }

// print into the console all even numbers between 10 and 40
// var num = 10;
// console.log("start");
// while (num <= 40) {
//   console.log(num +=2);
// }

// console.log("print all odd numbers between 300 and 333");
// var num = 300;
// while (num <= 333){
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
//   num++;
// }

console.log("print all numbers divisible by 5 AND 3 between 5 and 50");
var num = 5;
while (num <= 50) {
  if ((num % 5 === 0) && (num % 3 === 0)) {
    console.log(num);
  }
  num++;
}
