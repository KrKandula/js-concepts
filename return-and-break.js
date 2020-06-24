//return statement will break the loop return value


function testReturn(params) {
    for(let i=0; i<5; i++) {
        for(let j=0; j<5; j++) {
            if(i==1 && j==1) {
                return; // return will come out of function
            }
            console.log(`i=${i} and j=${j}`)
        }
       
    }
}

function testReturn(params) {
    for(let i=0; i<5; i++) {
        for(let j=0; j<5; j++) {
            if(i==1 && j==1) {
                break; // break will break the loop in which the statement is present. won't break the outerloop
            }
            console.log(`i=${i} and j=${j}`)
        }
       
    }
}

console.log(testReturn());