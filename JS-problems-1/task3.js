/* 
Task-3:
Write a function to count the number of vowels in a string.
*/

function countVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for(const letter of str){
        if (vowels.includes(letter.toLowerCase())) {
            count++
        }
    }
    return count;
}
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(countVowel(sentence));