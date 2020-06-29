//reference: https://hackernoon.com/lets-get-this-this-once-and-for-all-f59d76438d34

//Note: Run below snipperts in browser console

// The value of this depends on the
// Execution context

//The value of this in Global Execution Context by default is window object.
//console.log (this === window) // true

//I. Calling a function in the global context would have its this value as window
function globalFunc(params) {
    console.log(this);
    console.log(this===window)//true
}
globalFunc(); 

//in the strictmode value of this is undefined, when invoked by a function invocation
function strict() {
    'use strict';
    console.log (`value of this in strict mode is ${this}`) 
}
console.log(strict()) // value of this in strict mode is undefined
console.log(window.strict()) // value of this in strict mode is [object Window]
 
//===============
obj = {
    a: 1,
    b: 2,
    add: function () {
        console.log(`a + b is ${this.a + this.b}`)
    }
}
//executing in obj context
obj.add() // a + b is 3

//executing in window context
let addFunc = obj.add;
// Below is equivalent to , window.addFunc()
addFunc() // a + b is NaN

//==============

// ... if a and b are defined at window scope
//Below is equivalent to window.a = 5, window.b = 5
let a = 5, b = 5
//Below is equivalent to window.addFunc()
console.log( addFunc() ) // a + b is 10


//** ==============
obj2 = {
    a: 1,
    b: 2,
    add: function () {
        return function () {
            console.log(`a + b is ${this.a + this.b}`)
        }
    }
}
//For 'this', where it is executing matter (execution context), obj2.add() returns function, which is then executed in the window context
obj2.add()() // a + b is NaN
//above, same as below; The retured method is being executed in the context of window method, func() same as window.func()
let func = obj2.add();
func(); // a+b is NaN

//The above is not to be confused with closures, for closures, execution context does not matter
obj2 = {
    a: 1,
    b: 2,
    add: function () {
        let a = this.a;
        let b = this.b;
        return function () {
            console.log(`a + b is ${a + b}`)
        }
    }
}
obj2.add()() // a + b is 3
