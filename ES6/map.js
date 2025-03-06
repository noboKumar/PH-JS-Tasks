const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names = users.map((user) => user.name);
// console.log(names);

// array square:
const arr = [1, 3, 5, 6, 78, 8, 754];
const newArr = arr.map((num) => num * num);
console.log(newArr);
