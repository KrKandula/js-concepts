// Object.create() method creates a new object, 
// using the existing object as a prototype of a newly created object
const star = {
    stage: 'gas and dust cloud',
    galaxy: 'milky way'
}

const newStar = Object.create(star);

newStar.stage = 'supernova'

console.log(newStar.stage); //supernova
console.log(newStar.galaxy); //milky way

