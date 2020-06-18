// string, number, boolean, null, undefined, symbol are primitives, all others are 
// objects including arrays, functions

console.log(typeof 'hello')

console.log(typeof 10)

console.log(typeof true)

console.log(typeof null) //a bug in javascript, it returns object instead of null.

//a variable without a value has the value undefined, type is also undefined
console.log(typeof donno)
var value=undefined;
console.log(value) //undefined
console.log(typeof value) //undefined
console.log(typeof undefined);//undefined

console.log(undefined == null); //true
console.log(undefined === null); //false


let obj = {company: 'apple', domain: 'technology'}
obj = null; //you can empty a object by setting it to null or undefined