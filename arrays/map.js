// map function returns the new array, whose values correspond to each input element 
// when through a mapping function.
// map won't mutate the input array

let powerof2 = [0, 1, 2, 3, 4].map(elem => Math.pow(2, elem))
console.log (powerof2) // [1, 2, 4, 8, 16]
