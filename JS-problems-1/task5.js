/* 
Task-5:
Generate a random number between 10 to 20.
*/
function randomNum() {
  return Math.floor(Math.random() * (20 - 10 + 1) + 10);
}
console.log(randomNum());
