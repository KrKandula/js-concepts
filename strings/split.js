// split(pattern, limit) method splits the string into array of substrings split by the provided string or regex parameter
let str = 'bigbang';
let arr = str.split('');
console.log (arr) // ['b', 'i', 'g', 'b', 'a', 'n', 'g']

arr = str.split();
// If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
console.log(arr) // ['bigbang']

arr = str.split('b');
//If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
console.log(arr) //[ '', 'ig', 'ang' ]

str = 'bigbang'
arr = str.split('', 3)
console.log (arr) // [ 'b', 'i', 'g' ] returns only 3, as we pass 3 to the limit parameter