var response = prompt(("Do you desire fame?").toLowerCase());

while (response === "yes" || response === "yep") {
  alert("So, you want the world to know you. Coolio, to each his own.");
  var response = prompt("So, do you desire fame?");
}

if (response === "no" || response === "nope") {
  var response = prompt("Now, we're talking. So, do you like coffee or tea?")
  var responseLowerCase = response.toLowerCase();
  if (responseLowerCase === "coffee") {
    alert("Coffee, it is!");
  } else if ( responseLowerCase === "tea") {
    alert("Tea, it is!");
  } else {
    alert("Hey, why are you not playing by the rules? All you had to do was type in 'coffee' or 'tea'.");
  }
} else {
  alert("All you had to do was to give me a 'yes' or a 'no'...");
}


var response2 = prompt("yes or no?").toLowerCase();
while (response2.indexOf("yes") === -1) {
  var response2 = prompt("yes or no?!");
}

alert("Yes!");
