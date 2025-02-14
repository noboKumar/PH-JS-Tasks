/* 
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/
// formula - °F = (9/5 × °C) + 32

function toFarenheitTemp(celsius) {
    let temp = (9/5 * celsius) + 32;
    return temp;
}
console.log(toFarenheitTemp(32));
