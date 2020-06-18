//every function returns true if every elem in the array passes the test
let isEven = [2, 4, 6, 8, 10].every(elem => elem%2==0)
console.log(isEven); //true

isEven = [1, 4, 6, 8, 10].every(elem => elem%2==0)
console.log(isEven)