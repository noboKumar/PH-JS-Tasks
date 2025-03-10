function outerFunction() {
    let count = 0; // A local variable inside outerFunction

    return function innerFunction() {
        count++; // Modifies the outer function's variable
        console.log(count);
    }

}

const counter = outerFunction(); // outerFunction executes and returns innerFunction

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
