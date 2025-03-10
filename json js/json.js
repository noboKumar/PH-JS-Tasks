const person = {
    name: "John",
    age: 25,
    city: "New York"
};

const stringPerson = JSON.stringify(person);
console.log(stringPerson);

const objPerson = JSON.parse(stringPerson)
console.log(objPerson);