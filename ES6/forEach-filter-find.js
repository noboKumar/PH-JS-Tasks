const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => console.log(num * 2));

const users = ["Alice", "Bob", "Charlie"];

users.forEach((user) => {
  //   console.log(`Sending email to ${user}`);
});

// const products = [
//     { name: "Laptop", price: 800, inStock: true },
//     { name: "Phone", price: 500, inStock: false },
//     { name: "Tablet", price: 300, inStock: true },
//     { name: "Headphones", price: 100, inStock: true }
// ];

// // Use forEach to log product details::::
// products.forEach(product => {
//     console.log(`Product: ${product.name}`);
//     console.log(`Price: $${product.price}`);
//     console.log(`Status: ${product.inStock ? "Available" : "Out of Stock"}`);
//     console.log("------------------------");
// });

// // // Use forEach to update stock status:::::
// // products.forEach(product => {
// //     if (!product.inStock) {
// //         product.inStock = true;  // Restocking all out-of-stock items
// //     }
// // });

// console.log("Updated Product List:", products);

const products = [
  { name: "Laptop", available: true, price: 1300 },
  { name: "Phone", available: false, price: 1000 },
  { name: "Tablet", available: true, price: 800 },
];

// products.forEach((element) =>
//   element.available ? console.log("available") : console.log("not available")
// );

// const newProducts = products.filter(product => product.price <= 800);
// console.log(newProducts);

// const availableProduct = products.find(product => product.available);
// console.log(availableProduct);