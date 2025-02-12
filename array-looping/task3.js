/* 
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:
'TomTimTinTik'
*/

const numbers = ["Tom", "Tim", "Tin", "Tik"];
let value = "";

for (const number of numbers) {
    value =  value + number;
}
console.log(value);

