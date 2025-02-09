# PH-JS-Tasks

// #############Task-2###############
/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

// *********Task-2 solution**************
let weight = 72;
let height = 1.79832;
let BMI = weight / (height * height);
console.log(BMI);

if (BMI < 18.5) {
  console.log("you are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are overweight");
} else {
  console.log("you are obese");
}

// #######Task 3##########
/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
// *********solution**********

let mark = 80;
if (mark >= 90) {
  console.log("A");
} else if (mark >= 89) {
  console.log("B");
} else if (mark >= 79) {
  console.log("C");
} else if (mark >= 69) {
  console.log("D");
} else {
  console.log("F");
}

// ########Task-4##########
/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore = 80;
let friendScore = 60;

if (myScore >= 80) {
  if (friendScore > 80) {
    console.log("go for a lunch");
  } else if (friendScore >= 60 && friendScore <= 80) {
    console.log("good luck next time");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("friend's message unseen");
  } else {
    console.log("block your friend");
  }
} else {
  console.log("go to home and sleep");
}

// ###########Task-5#############
/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 50;
let num2 = 20;
let result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);

// ###########Task-6#############
/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 10;
let ticketPrice = 800;
let isStudent = true;

if (age < 10) {
  ticketPrice = "free";
} else if (age >= 60) {
  let discount = (ticketPrice * 15) / 100;
  ticketPrice -= discount;
} else if (isStudent) {
  let discount = (ticketPrice * 50) / 100;
  ticketPrice -= discount;
}
console.log(ticketPrice);
