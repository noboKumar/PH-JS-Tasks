/* 
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:
'person working hard a am I'
*/
const statement = 'I am a hard working person';
const strSplit = statement.split(" ")
let reverseStr = [];

for (let i = 0; i < strSplit.length; i++) {
    const element = strSplit[i];
    reverseStr.unshift(element);
}
console.log(reverseStr.join(" "));

