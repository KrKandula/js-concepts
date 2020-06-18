//input: array
//output: returns first found element in the array, matching the search condition

let cricketers = [
    {name:'virat kohli', 'country': 'india'}, 
    {name: 'jos butler', 'country': 'england'},
    {name: 'ben stokes', 'country': 'england'},
    {name: 'mohammad amir', 'country': 'pakistan'},
    {name:'jasprit bumrah', 'country': 'india'}
]

//find indian player
let player = cricketers.find(elem=>elem.country=='india')
console.log (player)