/* 
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function average(numbers) {
  let count = 0;
  const length = numbers.length;
  for (let i = 0; i < numbers.length; i++) {
    count = count + numbers[i];
  }
  const avg = (count / length).toFixed(2);
  return Number(avg);
}
const result = average([2, 3, 5, 6, 7, 8]);
console.log(result);