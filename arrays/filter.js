//input: array
//output: new array
// Array.prototype.filter function filters each element of an input array into new array, 
// upon passing the filter test, ie. if return value is true in the callback function 
// returns a new array with the filtered elements

let odds = [1, 2, 3, 4 , 5, 6, 7].filter(elem=>elem%2==1) //filters odd elements
console.log(odds); 