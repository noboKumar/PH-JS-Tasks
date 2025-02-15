/* 
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/
function longestStr(str) {
    let longest = "";
    const letter = str.split(" ");
    for(const word of letter ){
        if (longest.length < word.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestStr("I am learning Programming to become a programmer"));