// match() function matches the specified regex expression against the input and returns array or null
// return array if matches or null if no matches are found

// 1. if string is provided instead of regex, js internally converts it to new Regex() object
let match = 'A quick brown fox jumps over a brown lazy dog'.match('fox');
console.log (match) // ['fox'], along with additional properties set to Array Object
console.log (match.length) //1

// 2. if global flag g is used, all matching occurences (strings) are returned in the array
let regex = /[A-Z]/g
 match = 'A quick brown fox jumps over a brown lazy dog. It bit.'.match(regex);
console.log (match.length) // ['A', 'I']

// 3. if global flag g is not used and a multi match happens, aditional properties are returned
match = 'A quick brown fox jumps over a brown lazy dog. It bit.'.match(/[A-Z]/);
console.log (match) //no g, it is still an array, ['A'] , additional properties are available in array object like index, input

//groups
console.log ('This image has a resolution of 1440x900 pixels.'.match(/([0-9]+)x([0-9]+)/) )
//entire regex is matched first, the content matched in paranthesis will also get added to returned array