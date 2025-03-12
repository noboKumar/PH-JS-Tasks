//a) Write a function that displays a message after 5s.
//b) Write a function called delayedGreeting() that takes two parameters, name and
//delay time, and logs a greeting message after the given delay time.

const message = () => {
  setTimeout(() => {
    console.log("hello");
  }, 5000);
};
message();

// B:
function delayedGreeting(name, delayTime) {
  setTimeout(() => {
    console.log(`hello ${name} how are you?`);
  }, delayTime);
}
delayedGreeting("john", 5000);
