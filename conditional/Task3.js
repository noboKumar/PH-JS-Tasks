//Task 3:
/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
//solution

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
