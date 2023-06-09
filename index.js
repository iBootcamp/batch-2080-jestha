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
