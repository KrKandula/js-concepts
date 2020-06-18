// input: array
// returns: boolean true or false
// Array.prototype.some function returns true if atleast one of the elements in the array pass the test condition,
// false otherwise

let arr = [2, 4, 5, 6, 8, 10];
let hasOdds = arr.some(elem=>elem%2==0);
console.log(hasOdds);//returns true since there is 1 or more occurances of the odd element.