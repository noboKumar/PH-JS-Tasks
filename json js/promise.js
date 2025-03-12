const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
loadData();

// making promises:
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const result = true;
    if (result) {
      const jsonData = {
        json: () => Promise.resolve({ name: "john", age: 12 }),
      };
      resolve(jsonData);
    } else {
      reject("Error");
    }
  });
};
fetchData()
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// promise all:
const apis = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/posts",
];
Promise.all(
  apis.map((api) => {
    return fetch(api)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error"));
  })
);

//async-sync:
const loadData2 = async () => {
  console.log("first data");
  console.log("second data");

  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log("third data", data);

  console.log("fourth data");
};
loadData2();
