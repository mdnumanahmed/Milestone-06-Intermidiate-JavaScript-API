/* 

reduce() method
==========================
1. take an array
2. it has a callback function (accomulatorFunction) with 2 parameters (previous, current) and an initial value.
3. get all elements and do operation based on callback function
4. return a unified value

*/

const numbers = [2, 4, 6, 76, 5, 8, 62, 41, 32]
// const total = numbers.reduce((previous, current) => previous + current ,0)
const total = numbers.reduce((previous, current) => {
    return previous + current
},0)
console.log(total);