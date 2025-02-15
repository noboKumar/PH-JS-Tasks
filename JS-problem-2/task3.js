/*
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. 
 */

function calculateElectronicsBudget(numberOfLaptop, numberOfTablet, numberOfMobile) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const laptopPrice = laptop * numberOfLaptop;
    const tabletPrice = tablet * numberOfTablet;
    const mobilePrice = mobile * numberOfMobile;

    const totalPrice = laptopPrice + tabletPrice + mobilePrice;
    return totalPrice;
}
const electronicPrice = calculateElectronicsBudget(2, 3, 5);
console.log(electronicPrice);