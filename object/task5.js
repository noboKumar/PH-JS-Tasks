/* 
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys = Object.keys(myObject);
const values = Object.values(myObject);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = typeof values[i];
  const output = `key:${key} | type: ${value}`;
  console.log(output);
}
