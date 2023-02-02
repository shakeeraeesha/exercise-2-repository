//3-1
flattening(list); {

    let arrays = [[1, 2, 3], [4, 5], [6]];
    console.log(arrays.reduce((array1, array2) => array1.concat(array2)));

}; 

//3-2
function loop(value, test, update, body); {
    for (let now = value; test(now); now = update(now)){
        body(now)
    }
    loop(3, n => n > 0, n => n - 1, console.log);
    // → 3
    // → 2
    // → 1    
}; 

//3-3
function everyLoop(array, test) 
{
    let returnValue = true; 
    for (let item of array) {
        returnValue = returnValue && test(item)
    }
    returnValue
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));


//3-4
function everySome(array, test) 
{
    return !array.some(item => {
        if (!test(item)) {
            
        }
        return !test(item)
    })
} 

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));