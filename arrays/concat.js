//concat method
let arr1 = ['sa', 're', 'ga', 'ma', 'pa']
let arr2 = ['da', 'ni', 'sa']

let arr3 = arr1 + arr2;
console.log(arr3);//operator tries to convert the array to string and combines strings.

arr3 = arr1.concat(arr2);
console.log(arr3);//adds the elements of the array being concatenated to the end of the first array