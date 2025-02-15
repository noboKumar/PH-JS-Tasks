/* 
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    let small = heights[0];
    for (const name of names){
        if(name.length < small.length){
            small = name;
        }
    }
    return small;
}
const smallName = smallestName(heights);
console.log(smallName);
