//reference: https://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals

//instanceof, returns boolean
//when objects are created using constructor function (using new keyword), an object is created with a 
//prototype chain. The created object can be tested if it is derived from one of the constructor types in the 
//prototype chain using instanceof

let arr = new Array(10);
console.log(arr instanceof Array) //returns true
console.log(arr instanceof Object) //return true, as Object exists in the prototype chain

//typeof, return string
str = 'hello'
console.log(typeof arr) //typeof returns 'string'

//str is a primitive, so instance of will return false 
console.log(str instanceof String)
console.log(typeof str === 'string') //true