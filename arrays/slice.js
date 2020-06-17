//reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// Notes:
// 1. slice does not mutate the array
// 2. slice returns the subset of the array marked by start index up to end index (not including end index)
// 3. start index and end index if negative can be interpreted as arr.length -1
// 4. for the slice to return a non empty array, end index if provided needs to be greater than start index.
// 5. if end index is not provided or greater than array size, array will be sliced from start to the end of the array.

let arr = [10, 20, 30, 40];
let subarr = arr.slice(0, 2);
console.log(subarr) // [10, 20]
console.log(arr) // remains the same

subarr = arr.slice(-1, -2); 
console.log(subarr); //returns empty array
subarr = arr.slice(-2, -1); 
console.log(subarr); //returns [30]

subarr = arr.slice(-2);
console.log(subarr) // return [30, 40]
subarr = arr.slice(1); 
console.log(subarr); //returns rest of the array elements starting from index 1
subarr = arr.slice(1, 100);
console.log(subarr); //returns rest of the array elements since end index larger than array size
