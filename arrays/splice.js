//reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Notes:
// 1. first argument is for start index, negative value to be treated as array.size-n
// 2. second argument is the count of elements that need to be deleted. 0 indicates none to be deleted, 
// larger than size of array or a omission, denotes everything from the start index be deleted
// 3. Third and so on argument(s) indicates elements that need to be inserted
// 4. splice returns the deleted array and manipulates the original array.

let faang_companies = ['amazon', 'facebook', 'google'];

//starting at zero position, zero elements to be deleted, and insert 'apple', 'netflix' at the provided position
var removed = faang_companies.splice(0, 0, 'apple', 'netflix');
console.log(faang_companies);
console.log(removed);

//to add to the end of the array
var removed = faang_companies.splice(5, 0, 'cisco');
console.log(faang_companies);
console.log(removed);

//remove last element
var removed = faang_companies.splice(-1, 1);
//above same as var removed = faang_companies.splice(-1); since if count is not provided(or greater than arr size) 
//it will proceed to revome till the end of the array
console.log(faang_companies);
console.log(removed);