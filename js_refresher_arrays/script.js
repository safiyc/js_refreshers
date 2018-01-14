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

// 'for' loop of above array
var nums = [1,3,4,6];

for(var i = 1; i <= 6; i++) {
  if(i % 3 === 0) {
    console.log(i);  // output: 3, 6
  }
}
