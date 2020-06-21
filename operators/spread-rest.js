//array mapping to function parameters
function continentsA(a, b, c, d, e, f, g) {
    console.log (`The seven continents are ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`)
}
continentsA(...['Noth America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia', 'Antarctica']);

//arguments to array
function continentsB(...arr) {
    console.log (`The seven continents are ${arr}`)
}
continentsB('Noth America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia', 'Antarctica')

//for arrays
let top5 = [1, 2, 3, 4, 5];
let topTen = [...[1, 2, 3, 4, 5], 6, 7, 8, 9, 10]
//let topTen = [...top5, 6, 7, 8, 9, 10]
console.log(topTen);


