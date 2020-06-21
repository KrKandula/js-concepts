//shallow copy or assignment of a variable to another will just point the former variable to the latter
//deep copy on the other hand will clone data into the new data structure. 

//Shallow Copy example

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
    engine: eng
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
merc_2['engine']['drivetrain'] = 'awd'

console.log('merc2..');
console.log(merc_2);

console.log('merc1..');
console.log(merc_1);



//Deep Copy Example