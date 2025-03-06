// array destructring
const arr = ["orange", "apple", "banana", "pinapple"];
const [one, two, three, four] = arr;
// console.log(one);
// console.log(...arr);

// object
const obj = {
    userName : "john",
    age : 12,
    country: "bidesh"
}
const { age: boyos, country, userName} = obj;
console.log(boyos);

console.log(obj);