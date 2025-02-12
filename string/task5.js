/**
 * Task-5:
 * Capitalize Every first Letter of each word in a String
 */

const str = "it is raining outside carry this umbrella with you";
const letter = str.split(" ")
let container = [];

for (let i = 0; i < letter.length; i++) {
   let upper = letter[i][0].toUpperCase() + letter[i].slice(1);
   container.push(upper);
}
console.log(container.join(" "));


