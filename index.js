const age = 12;

if (age > 12) {
  console.log("you can play the video game.");
} else if (age < 23) {
  console.log("you can play the pubg game.");
} else if (age < 50) {
  console.log("you can play cards.");
}

function name(fullName, surName) {
  console.log(`${fullName} ${surName}`);
}

name("manish", "shrestha");

// break line

console.log("iam \n manish \n shrestha");

// Array

const vehicleName = ["cars", "truck", "bus", "motorbike"];
vehicleName.push("bicycle");
vehicleName.indexOf("cars"); // print 0
vehicleName.splice(2, 3); //print cars ,truck
vehicleName.pop();

// console.log(vehicleName);
// alert(vehicleName);
a = 12;
b = 3;
c = 13;
if (a < b) {
  console.log("this number is valid.");
} else if (b < c) {
  console.log("b is less then c");
}

const person = {
  firstName: "manish",
  lastName: "shrestha",
  age: 25,
  eyacolor: "black",
};
function name() {
  console.log(this.firstName + " " + this.lastName);
}
name();


const myObj1 ={
  car:"lambo"
}
const myObj2 ={
  name:"manish",
  age :13,
  favLanguage :"nepali"
}

Object.assign(myObj1,myObj2)

console.log(myObj1)
const colors = new Set();

colors.add("red");
colors.add("black");
colors.add("yellow");
colors.delete("red");
console.log(colors.size); // print 2

