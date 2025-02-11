/**
 * Task-3:
 * Check whether a string contains all the vowels a, e, i, o, u
 */

// this took me 5h+ to solve. 

const sentence = "The quick brown fox jumps over the lazy dog";
const vowel = ["a", "e", "i", "o", "u"];
let found = false;

for (const letter of sentence) {
  if (vowel.includes(letter)) {
    found = true;
  }
}
if (found) {
  console.log("yes");
}