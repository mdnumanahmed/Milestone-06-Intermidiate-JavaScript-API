// function declaration 
function sum(num1, num2){
    const total = num1 + num2
    return total
}

// function expression
/* 
যে ফাংশনকে কোন ভ্যারিয়েবলে রাখা হয় তাকে function expression বলে।
আর যে ফাংশনকে কোন ভ্যারিয়েবলে না রেখে শুধু function ডিক্লেয়ার করা হয়, তাকে function declaration  বলে।
পার্থক্য: 
function declaration ডিক্লেয়ার করার আগে ব্যবহার করা যায়। 
function expression ডিক্লেয়ার করার আগে ব্যবহার করা যায় না। Hoisting related সমস্যা করে।
*/
const sum1 = function sum1(num1, num2){
    const total = num1 + num2
    return total
}

// function expression anonymous function
const sum2 = function (num1, num2){
    const total = num1 + num2
    return total
}

// single parameter arrow function
const doubleIt = (first) => first * 2

// single parameter arrow function
const tripleIt = first => first * 3



// arrow function two parameter
const sum3 = (first, second) => first + second

// arrow function three parameter
const sum4 = (first, second, third) => first + second + third

// multiline arrow function
const doMath = (first, second) => {
    const resultSum = first + second
    const resultSub = resultSum - second
    const multiply = first * resultSub
    return multiply;
}

const result = sum(10, 20)
console.log(result);