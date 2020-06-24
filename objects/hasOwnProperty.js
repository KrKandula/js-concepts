// The hasOwnProperty() method returns a boolean indicating whether the object has the 
// specified property as its own property 

toyotaCar.prototype = {make: 'toyota'}
function toyotaCar (model) {
    this.model = model
}

let obj = new toyotaCar('LC')
console.log(obj.hasOwnProperty('make')) // false 
console.log(obj.hasOwnProperty('model')) // true



