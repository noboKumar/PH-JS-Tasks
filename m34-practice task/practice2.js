/**
 * The function tellJoke() below logs a funny message every 2 seconds and
 * after 1O seconds, it stops. Comblete the code below and see the output
 */

function tellJoke() {
  console.log("What's the smartest insect? A spelling bee!");
}
const intervalJoke = setInterval(() => {
  tellJoke();
}, 2000);

setTimeout(() => {
  clearInterval(intervalJoke)
}, 10000);
