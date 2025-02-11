/*
Task-1:
Count how many times a string has the letter a
*/

const sentence = "Count how many times a string has the letter a";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];
  if (letter === "a") {
    count++;
  }
}
console.log(count);