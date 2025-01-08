/*
*   Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === '1';
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or equals too
let greaterThanEq = 5 >= 5;

// Less than or equals too
let lessThanEq = 4 >= 9;

// Not Equals
let notEquals = 5 !== 2;

//
let storeA = 3.10;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
    let storeAisLower = storeA < storeB;
    if (storeAisLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their price is equal")
    }
}
compareStorePrices(10, 5);
compareStorePrices(7, 10);

// note; functions should try to do only one thing
function squareNum (number) {
    let squared = number * number;
    return squared;
}
let squaredNumber = squareNum(7);
console.log(squaredNumber);


// scope
let x = 10;
//note; n can't be seen outside of the function
function addNumbers (n, m, x) {
    console.log(x)
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}
addNumbers(1, 2, 10);

// arrays                0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrlen = ourArray.length;
for(let i = 0; i < arrlen; i++) {
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j < 10; j++) {
        console.log('j is equal to: ' + j);
    }


// while loop

//let x = 0;
//while (x < 10) {
//    console.log('Ran');
//    x = x + 1;
}



