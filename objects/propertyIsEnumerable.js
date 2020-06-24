// Every object has a propertyIsEnumerable method. This method can determine whether the specified 
// property in an object can be enumerated by a for...in loop, with the exception of properties inherited
// through the prototype chain. If the object does not have the specified property, this method returns false.

toyotaCar.prototype = {make: 'toyota'}
function toyotaCar (model) {
    this.model = model
}

let obj = new toyotaCar('LC')
console.log(obj.propertyIsEnumerable('make')) // false 
console.log(obj.propertyIsEnumerable('model')) // true

//property in the prototype chain are enumerable through for...in
for(let prop in obj) {
    console.log(`prop: ${prop} value: ${obj[prop]}`)
}

const array1 = [42];
console.log(array1.propertyIsEnumerable(0));