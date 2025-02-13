/* 
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function countZero(binary) {
    let zeros = '';
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "0") {
            zeros = binary[i] + zeros;
        }
    }
    const totalZeros = zeros.length;
    return totalZeros;
}

const result = countZero("010100011100000");
console.log(result);