/* 

filter() method
==========================
1. take an array
2. get all elements and do operation on all based on callback function
3. which are match the condition, store those in an array
4. return tha a new array

it not chage on original array.


==============================
find() method like as filter()
find() method return only first element (not array) which are matchd the condition
it not chage on original array.

*/

const numbers = [2, 4, 6, 76, 5, 8, 62, 41, 32]
const divisibleByFour = numbers.filter(num => num % 4 === 0)
const largest = numbers.filter(number => number > 30)
const smallest = numbers.filter(number => number < 10)
console.log(largest);
console.log(smallest);

{
    const products = [
        {id: 1, name: 'laptop', price: 450000},
        {id: 2, name: 'Mobile', price: 50000},
        {id: 3, name: 'watch', price: 30000},
        {id: 4, name: 'tablet', price: 50000},
        {id: 5, name: 'Bike', price: 120000},
        {id: 6, name: 'Camera', price: 20000},
    ]
    const expensive = products.filter(product => product.price > 50000)
    const cheapest = products.filter(product => product.price < 50000)
    console.log(expensive);
    console.log(cheapest);
}

{
    // find() method
    const numbers = [2, 4, 6, 76, 5, 8, 62, 41, 32]
    const divisibleByFour = numbers.find(num => num % 4 === 0)
    console.log(divisibleByFour);
    const products = [
        {id: 1, name: 'laptop', price: 450000},
        {id: 2, name: 'Mobile', price: 50000},
        {id: 3, name: 'watch', price: 30000},
        {id: 4, name: 'tablet', price: 50000},
        {id: 5, name: 'Bike', price: 120000},
        {id: 6, name: 'Camera', price: 20000},
    ]
    const expensive = products.find(product => product.price > 50000)
    const cheapest = products.find(product => product.price < 50000)
    console.log(expensive);
    console.log(cheapest);
}