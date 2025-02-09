
//Task-6
/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// solution:
let age = 10;
let ticketPrice = 800;
let isStudent = true;

if (age < 10) {
  ticketPrice = "free";
} else if (age >= 60) {
  let discount = (ticketPrice * 15) / 100;
  ticketPrice -= discount;
} else if (isStudent) {
  let discount = (ticketPrice * 50) / 100;
  ticketPrice -= discount;
}
console.log(ticketPrice);
