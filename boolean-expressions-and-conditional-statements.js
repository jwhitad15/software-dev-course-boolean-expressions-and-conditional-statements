const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else if (choice === "village" && !hasMap) {
  console.log("You get lost and wander aimlessly.");
}

const hasSoap = false;
let hasMoney = false;

console.log("You're dirty and hungry.");
let newChoice = readline.question("Do you take a shower or do you eat dinner?");

if (newChoice === "shower" && hasSoap) {
  console.log("Congratulations. You may clean yourself.");
} else if (newChoice === "shower" && !hasSoap) {
  newChoice = readline.question("Do you have money?");
  if (newChoice === "yes" || newChoice === "yeah" || newChoice === "absolutely" || newChoice === "duhhh"){
    hasMoney = true;
    console.log("Congratulations. You may visit the town & country store to buy soap!")
  } else {
    console.log("I'm sorry. You'll just have to be dirty tonight.")
  }
}

if (newChoice === "dinner") {
  console.log("Marvelous! The local town & country folks have decided to treat you a special Western 5-course meal. You've been adopted as one of their citizens!")
}