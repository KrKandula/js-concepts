// replace() method on a string, takes a regex or string (that will be internally converted) and will 
// replace the matching content with the specified string.
// returns string with replaced content if a match occurs, or else, returns old string

let newStr = 'a quick brown Dragon opened its mouth and a lazy dog ran for its life'.replace('Dragon')
console.log (newStr) //a quick brown undefined opened its mouth and a lazy dog ran for its life

newStr = 'a quick brown Dragon opened its mouth and a lazy dog ran for its life. Dragon is scary.'
.replace('Dragon', 'Night Fury')
console.log (newStr) // a quick brown Night Fury opened its mouth and a lazy dog ran for its life

newStr = 'a quick brown dragon opened its mouth and a lazy dog ran for its life. Dragon is scary.'
.replace(/dragon/ig, 'Night Fury')
//notice how all occurences are replaced and case is ignored
// outputs: a quick brown Night Fury opened its mouth and a lazy dog ran for its life. Night Fury is scary.
console.log (newStr) 