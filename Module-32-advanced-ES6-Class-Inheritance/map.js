/* 
Purpose of doubleIt() function:
1. get an array
2. do something for every elements of the array
3. store the result in an array
4. return the result array
*/

/* 

what does map() method:
======================
map method শুধুমাত্র এ্যারের উপর চালানো যায়।
map method এ্যারের প্রত্যেক ইলিমেন্টকে নিয়ে নেয়।
map method কলব্যাক ফাংশন রিসিভ করে। কলব্যক ফাংশনে যা করতে বলা হবে, map method প্রত্যেকটি ইলিমেন্টের সাথে সেই কাজ করে।
কাজ শেষে রিজাল্টকে array তে স্টোর করে নতুন একটি array রিটার্ন করে দেয়।
map method অরিজিনাল এ্যারেতে কোন পরিবর্তন আনে না। 


=========================
map stands for
M = Morph
A = Array
P = Piece by piece

1. map method take an array
2. get all elements and do some operation
3. store result in an array and return this array

======================
forEach() method 
as like as map() method.
Difference is just not return any array like map. 
*/

const numbers = [2, 4, 5, 6, 7]
const double = num => num * 2;
function doubleIt(numbers){
    let output = []
    for(const number of numbers){
        // const doubled = number * 2;

        // using double() function
        const doubled = double(number);
        output.push(doubled)
    }
    return output;
}

const result = doubleIt(numbers)



const makeDuble = numbers.map(double)
const makeDouble = numbers.map(num => num * 2)
// console.log(makeDuble);
// console.log(makeDouble);
// console.log(numbers);

{
    // return the first letter
    const friends = ['Robin', 'Jamil', 'Mahbub', 'Kabir']
    const firstLetter = friends.map(friend => friend[0])
    console.log(firstLetter);
}

{
    const products = [
        {id: 1, name: 'laptop', price: 450000},
        {id: 2, name: 'Mobile', price: 50000},
        {id: 3, name: 'watch', price: 30000},
        {id: 4, name: 'tablet', price: 50000},
        {id: 5, name: 'Bike', price: 120000},
        {id: 6, name: 'Camera', price: 20000},
    ]
    const itemsName = products.map(product => product.name)
    const itemsPrice = products.map(p => p.price)
    console.log(itemsName);
    console.log(itemsPrice);
}