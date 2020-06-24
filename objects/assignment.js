//primitives are assigned by value
let a = 10;
b = a
a = 100

console.log(b) // 10, since assingment by value for primitives

//objects are assigned by reference
a = {x:10, y:20}
b=a
a.x=100

console.log(b) // {x:100, y:20},  since assignment by reference for objects


//spread operator and assign operator will return shallow copy of the specified object

//JSON.parse(JSON.stringify(obj)) will return a deep copy
//custom function can be written for deep copy