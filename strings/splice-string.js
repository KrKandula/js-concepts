//like in arrays, splice works on strings
//it returns the characters from starting index to end index (not including end index)

let str = 'bread'
let slice = str.slice(0, Math.floor(str.length/2));
console.log (slice) //returns string from 0 index till 2 index (won't include value at last index)