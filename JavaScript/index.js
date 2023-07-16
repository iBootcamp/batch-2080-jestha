const p = document.getElementById("text");
const button = document.getElementById("button");
p.textContent = p.textContent.toUpperCase();

button.onclick = function () {
  if (button.textContent == "Click me") {
    p.textContent = "CSS";
    button.textContent = "Another";
  } else if (button.textContent == "Another") {
    p.textContent = "html";
    button.textContent = "Back";
    p.textContent = p.textContent.toUpperCase();
  } else {
    button.textContent = "Click me";
    p.textContent = "javascript";
    p.textContent = p.textContent.toUpperCase();
  }
};
// 1e3;

// const audio = document.getElementById("audio");
// const play = document.getElementById("play");

// play.onclick = function () {
//   if (play.textContent == "play") {
    
  // }
// };

const age = 12;
if (age > 12) {
  // console.log("you can play the video game.");
} else if (age < 23) {
  console.log("you can play the pubg game.");
} else if (age < 50) {
  console.log("you can play cards.");
}

function name(fullName, surName) {
  console.log(`${fullName} ${surName}`);
}

// name("manish", "shrestha");

// break line

//console.log("iam \n manish \n shrestha");

// Array

const vehicleName = ["cars", "zeena", "truck", "motorbike", "bus"];
// vehicleName.push("bicycle"); // add the new item in last position.
// vehicleName.unshift("bicycle"); // add the new item in first position.
// vehicleName.indexOf("cars");
// vehicleName.splice(1, 2); //print cars ,motorbike
// vehicleName.pop(); // remove the last item.
// vehicleName.shift(); // remove the first item.
// vehicleName.filter("bus");
// vehicleName.join("-");

// const concat = vehicleName.concat(["gen", "gek"]); // add the another array item.
// console.log(concat);
// const sort = vehicleName.sort(); //arranging the alpha alphabetical order
// vehicleName.reverse(); // reverse the array item.
console.log(vehicleName);

a = 12;
b = 33;
c = 13;
if (a < b) {
  console.log("this number is valid.");
} else if (b > c) {
  console.log("b is less then c");
}

const person = {
  firstName: "manish",
  lastName: "shrestha",
  age: 25,
  eyacolor: "black",
};

function name() {
  // console.log(this.firstName + " " + this.lastName);
}
name();

const myObj1 = {
  car: "lambo",
};
const myObj2 = {
  name: "manish",
  age: 13,
  favLanguage: "nepali",
};

Object.assign(myObj1, myObj2);

// console.log(myObj1);

const colors = new Set();
colors.add("red");
colors.add("black");
colors.add("yellow");
colors.delete("red");
// console.log(colors.size); // print 2

//  practise  of june 17 Day saturday

// switch statement

//if-else
if (age >= 14 && age < 19) {
  status = "Eligible";
} else {
  status = "not eligible";
}

// console.log(status);

switch (new Date().getDay()) {
  case 6:
    text = "saturday";
    break;
  case 0:
    text = "sunday";
    break;
  default:
    text = "whatever";
}
// console.log(text);

//primtives data types

var age1 = 21; // typeOf number
var name1 = "misss"; // typeOf string
var name1 = {
  first: "hello",
  last: "world",
}; // typeOf object
var truth = false; // typeof boolen
var sheets = ["HTML", "CSS", "JS"]; // typeOf array
var a; // typeOF undefined
var a = null; // typeOf null

// loops
for (i = 0; i > 5; i++) {
  console.log(i);
}

// line break and n't
var esc = " I don't know. \n what about javascript?";
//console.log(esc);

const nepaliLanguage = "nepali";
const smallLetter = nepaliLanguage.toLowerCase();
const capitalLetter = nepaliLanguage.toUpperCase();

// console.log(capitalLetter);

const hello = {
  error: "false",
  debug: "debugger",
  defect: ["seee", "swew", "wedee"],
};

// delete hello.defect;
// console.log(hello);
