// reduce function accumulates a value for each iteration through the array
// accumulator is passed into each iteration
// accumulator could be set to an initial value by providing the second argument to the reduce function


let faang_companies = ['amazon', 'facebook', 'apple', 'netflix', 'google']
                                .reduce((acc, elem)=>acc+' '+elem, 'List of faang companies: ');
console.log (faang_companies)//outputs "List of faang companies: amazon, facebook, apple, netfllix, google"