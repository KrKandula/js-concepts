// Object.assign({}, obj) will return a shallow copy of obj
// The Object.assign(target, source) method copies all enumerable own properties from one or more source objects to a target object
// target - to which the properties must be applied to, this will be returned after it is modified
// sources - objects containing the properties you want to apply   

toyotaCar.prototype = {make: 'toyota'}
function toyotaCar (model) {
    this.model = model
}

let obj = new toyotaCar('LC')
console.log(obj.make) // toyota

let newObj = Object.assign({madein: 'japan'}, obj)

console.log(newObj.model) // LC
console.log(newObj.make) // undefined ,only enumerable (see enumerable.js) own properties(see hasOwnProperty.js) are copied, not the ones in prototype chain
console.log(newObj.madein)// japan


function deepCopy(obj) {
    if(!(obj instanceof Object)) {
        return obj;
    }
    let newObj = new obj.constructor();
    for (let prop in obj) {
        newObj[prop] = deepCopy(obj[prop])
    }
    return newObj;
}

console.log(deepCopy(obj))