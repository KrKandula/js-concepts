//A n object is said to be shallow copied when the source top-level properties are copied
// without any reference and there exists a source property whose value is an object and is copied as a reference. 

// deep copy on the other hand will clone data into the new data structure. 

//Shallow copy example using ...spread operator (primitives are cloned, whereas Objects are copied by reference)
//Shallow copy example using ...assign operator (exactly same behaviour as ...spread)
//In Shallow copy the prototype properties are not copied over

//obj
let eng = {
    transmission: 'automatic',
    drivetrain: 'awd'
}
console.log('Engine (eng)...');
console.log(eng);
let merc_1 = { 
    make: 'mercedes', 
    model: 'c300', 
    engine: eng,
    tires: ['bridgestone', 'bridgestone', 'goodyear', 'goodyear']
}
console.log('merc_1...')
console.log(merc_1);

console.log('Transmission on merc1 is changed to 2wd in eng object')
merc_1['engine']['drivetrain'] = '2wd'

console.log('Engine: ');
console.log(eng);
console.log('merc_1: ')
console.log(merc_1);

console.log('copying merc_1 to merc_2 using ...spread operator');
let merc_2 ={
                ...merc_1
            }

console.log('merc_2...')
console.log(merc_2);

console.log('Transmission is changed to awd on merc2..')
merc_2['engine']['drivetrain'] = 'awd' //objects are copied by reference, this change has effect on orig object
merc_2['tires'][0] = 'michellin' //arrays are objects, copied by reference
merc_2['make'] = 'honda' //primitives are cloned, so this change has no effect on the orig object 

console.log('merc2..');
console.log(merc_2);

console.log('merc1..');
console.log(merc_1);


// console.log('===================== Assign, same shallow copy behaviour as spread operator')
// console.log('copying merc_1 to merc_2 using assign operator');
// merc_2 = Object.assign({}, merc_1)

// console.log('merc_2...')
// console.log(merc_2);

// console.log('drivetrain is changed to 2wd on merc2..')
// merc_2['engine']['drivetrain'] = 'electric' //objects are copied by reference, this change has effect on orig object
// merc_2['tires'][0] = 'MRF' //arrays are objects, copied by reference
// merc_2['make'] = 'tesla' //primitives are cloned, so this change has no effect on the orig object 

// console.log('merc2..');
// console.log(merc_2);

// console.log('merc1..');
// console.log(merc_1);