/* 
Task-4
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}; 
Output:
4
*/
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}; 
let keys = Object.keys(student);
let count = keys.length;
console.log(count);