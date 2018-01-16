// output?
// var num = [1, 3, 4, 5, 2, 8];
// console.log(num[num.length]);  // num[6] is undefined bc index 6 doesnt exist



// output of this nested array?
// var categories = [
//  ["books", "magazines", "newspaper"],
//  ["dvds", "blurays", 'cloud'],
//  ["stone tablets", "cave walls", "tree trunks"]
// ];
// console.log(categories[2][0]);  // 'stone tablets'



// simple to-do list with prompts and console log
var task = [];
var input = prompt("Enter 'new', 'list' or 'quit' task");

while(input !== "quit"){
  if(input === "new"){
    var newTask = prompt("Add task");
    task.push(newTask);
  } else if(input === "list"){
    console.log(task);
  }
  input = prompt("Enter 'new', 'list' or 'quit' task");
}



// 'forEach' loop thru an array
var nums = [1,3,4,6];
var colors = ['red', 'orange', 'yellow', 'green'];  // this has no connection 'color' in below forEach

nums.forEach(function(color){  // 'color' isnt related to 'colors'; 'color' can be any other name
  if(color % 3 === 0) {
    console.log(color);  // output: 3, 6
  }
})

// 'for' loop thru above array
var nums = [1,3,4,6];

for(var i = 1; i <= 6; i++) {
  if(i % 3 === 0) {
    console.log(i);  // output: 3, 6
  }
}



// print the array in reverse
var array = [1, 2, 3, 4];
function arrReverse (arr) {
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}
arrReverse(array);  // output: [4,3,2,1]



// write a function that takes array as an argument and returns true if all elements in array are identical
var array = [1,1,1,1];
var array2 = [1,1,1,"b"];
function arrUniform (arr) {
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){  // i starts at index 1 bc starting at index 0 will true always, which is not necessary to check
    if(arr[i] !== first){  //
      return console.log(arr + " array is " + false + ": not all values are identical");
    }
  }
  return ("[" + arr + "]" + " array is " + true + ": all values are identical");
}
arrUniform(array)  // output: [1,1,1,1] array is true: all values are identical
arrUniform(array2)  // output: 1,1,1,b array is false: not all values are identical

// above functon again, but 'var i = 2' example
var array3 = [2,"abc",2,2,2];
function arrUniform(arr) {
  var first = arr[0];
  for(var i = 2; i <= arr.length - 1; i++){
    if(arr[i] !== first){  // 'arr[i]' starts at index 2 bc 'var i = 2'
      return false;
    }
  }
  return true;
}
arrUniform(array3)  // output will be true bc i starts at index 2, and index 1 ("abc") is not checked against "var first = arr[0]"



// write a function that takes array of numbers and returns sum of all numbers in array
function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}
sumArray([1,2,3]);  // output: 6
sumArray([-5,20]);  // output: 15



// write a function that takes array of numbers and returns highest number value in the array
function highestNum(arr) {
  var highest = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > highest){
      highest = arr[i];
    }
  }
  return highest;
}
highestNum([1,4,2]);  // output: 4
highestNum([-3,10]);  // output: 10
