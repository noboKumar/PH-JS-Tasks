/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// solution:
let i = 1;
let sum = 0;

while (i <= 100) {
    sum = i**2;
    i++;
    if (sum >= 100) {
        break
    }
    console.log(sum);
}