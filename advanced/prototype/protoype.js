//reference: https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

// Notes: When a constructor function is defined, js engine adds a prototype property to the function. 
// The value of this is Object. 
// This object will have a property called constructor, which in turn is the constructor function.
// All the instances created from this constructor function, will have access to the prototype object, through __proto__ property
// or dunder proto.
// From within the instances it is possible to change the values of the prototype if they are objects and not primitives.
// Also when a property is looked up on the instance, first js engine looks it up if it is present on the instance, 
// otherwise it checks in it's prototype object and then it's prototype object and so on.
// There is no way of accesing prototype object from an instance, using __proto__
// Best practice: see below

Car.prototype = {
    features: ['a/c', '4 doors'],
    country: 'some country',
    carName: () => {`${this.make} ${this.model}`}
}

function Car() {
    this.make='some company'
    this.model='some model'
}
const car1 = new Car();
const car2 = new Car();

car1.make='mercedes'; car1.model='c300'
car2.make='honda'; car2.model='accord'

console.log(car1.make); //mercedes
console.log(car1.country); //some country; looks this up in the prototype

console.log(car2.make); //honda
console.log(car2.country); //some country; looks this up in the prototype

// country is not present in the instance so it looks it up in the prototype. country is a primitive property 
// in prototype object, there is no way this can be modified, The assignment will create a country property on the instance object.
car1.country = 'germany' 
console.log(car1.country) //germany
console.log(car2.country) //some country

// features is not present in the instance object, features is a object in the prototype object and hence accessing 
// it will get it by reference, hence, changes on this will change the prototype object's features property
car1.features.push('turbo')
console.log(car1.features)//[a/c, 4door, turbo]
console.log(car2.features)//[a/c, 4door, turbo]

// assigning a property features, will also create a new property inside the instance object
car1.features = ['a/c', '4 doors', 'turbo', 'emergency brake', 'blindspot']
console.log(car1.features) //['a/c', '4 doors', 'turbo', 'emergency brake', 'blindspot']
console.log(car2.features) //[a/c, 4door, turbo]


// Best practice: As a general rule of thumb, have instance related properties like country, features in the constructor function
// and have common functionality like carName() in the prototype, like below

// Car.prototype = {
//     carName: () => {`${this.make} ${this.model}`}
// }

// function Car() {
//     this.make='some company'
//     this.model='some model'
//     this.features= ['a/c', '4 doors'],
//     this.country= 'some country',
// }