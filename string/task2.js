/*
Task-2:
Count how many times a string has the letter a or A
*/

const sentence = "Count how many times a string has the letter a or A";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];
  if (letter === "a" || letter === "A") {
    count++;
  }
}
console.log(count);