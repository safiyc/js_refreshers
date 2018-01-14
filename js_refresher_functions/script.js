// expression
var test = function(x,y) {
  return y - x;
}

// declaration
function testMinus(x,y) {
  return y - x;
}
test(2,3);  // 1

function test(x) {
  return x*2;  // first return is returned; the below is ignored
  console.log(x);
  return x/2;
}
test(40);  // 80

// determine if argument is even (true) or odd (false)
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(4); // true

// refactor above 'isEven'
function isEvenRefactor(num) {
  return num % 2 === 0;
}

// return factorial of argument
function factorial(num) {
  var x = 1;
  for(var i = 1; i <= num; i++){
    x *= i;
  }
  return x;
}
factorial(4);  // 24

// replace '-' with '_'
function kebabToSnake(str) {
  var newStr = str.replace("-", "_");
  return newStr;
}
kebabToSnake("I-understand-this. Lets move on already!");


// scope and function example
var num = 8;  // step1: js declares num with value 8
function doMath() {
  num += 1;  // step4: num is now 10
  if(num % 5 == 0) {
    return true;
  } else {
    return false
  }
}
num += 1;  // step2: num is increased to 9
doMath();  // step3: function is called; step5: should return true

// scope and functions example
function hi(){
  var name = "Bob";
  console.log(name);  // console prints Bob
}
function bye(){
  console.log(name);  // console prints undefined bc 'name' is not accessible in 'bye'
}
