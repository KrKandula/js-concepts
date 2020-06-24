// Deep Copy: A deep copy will duplicate every object it encounters.
// The copy and the original object will not share anything, so it will be a copy of the original.

// 1. If the object doesn't have functions, Dates, undefined, Infinity etc...
// deep copy is possible using JSON.parse(JSON.stringify(obj))

// 2. Deep copy using javascript function

let microbe1 = {
    name: 'covid-2002',
    category: 'virus',
    symptoms: ['runny nose', 'fever'],
    impact: {
        china: 100
    }
}

console.log('microbe1 ....')
console.log(microbe1)


let microbe2 = JSON.parse(JSON.stringify(microbe1))
microbe2['name'] = 'covid-19'
microbe2['impact']['us'] = '100';

console.log('microbe2 deep copied from microbe1 and values modified')
console.log(microbe2)

console.log('microbe1.....values remain intact');
console.log(microbe1)


// using javascript function
// using this method prototype objects are also copied over
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

let microbe3 = deepCopy(microbe2)

console.log('microbe3 after modification of category and impact ...')
microbe3['category'] = 'bacteria'
microbe3['impact']['india'] = '10'
console.log(microbe3);

console.log('microbe2 reamins intact...')
console.log(microbe2);

let a = {x:20, y:30};
b=a;
a.x=100
console.log(b)



toyotaCar.prototype = {make: 'toyota'}
function toyotaCar (model) {
    this.model = model
}

//example 2: showing protype properties not being copied over
// let obj = new toyotaCar('LC')
// //deep copy 
// function deepCopy(obj) {
//     if(!(obj instanceof Object)) {
//         return obj;
//     }
//     let newObj = new obj.constructor();
//     for (let prop in obj) {
//         if(obj.hasOwnProperty(prop)) { // this avoids protype properties
//             newObj[prop] = deepCopy(obj[prop])
//         }
//     }
//     return newObj;
// }
// console.log(deepCopy(obj))  // {model: 'LC'}