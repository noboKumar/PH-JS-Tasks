/* 
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5, 6, 11, 12, 98, 5]

find: 5

output: 2

*/

function countRepeat(numArr, findNum) {
  let count = 0;

  for (const num of numArr) {
    if (num === findNum) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
console.log(countRepeat(numbers, 5));