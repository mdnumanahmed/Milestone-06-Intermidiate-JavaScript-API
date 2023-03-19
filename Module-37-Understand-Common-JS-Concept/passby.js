/* 
primitive types are pass by value
primitive means string, number, boolean, symbol, undefined
যদি ফাংশনের ভিতরে (local scope) বাইরের (global scope) কোন primitive types ভ্যারিয়েবলের মান আপডেট বা পরিবর্তন করা হয়, তাহলে তা বাইরের ভ্যারিয়েবলের মান পরিবর্তন করে না। 


non-primitive types are pass by reference
non-primitive means object and array
যদি ফাংশনের ভিতরে (local scope) বাইরের (global scope) কোন non-primitive types ভ্যারিয়েবলের (object and array) এর কোন প্রপার্টির মান আপডেট বা পরিবর্তন করা হয়, তাহলে তা বাইরের ভ্যারিয়েবলের মান পরিবর্তন করে ফেলে।  

*/
const number1 = 10
const number2 = 20
function multiply(a, b){
    a = 20
    console.log('inside function ', a);
    const total = a * b
    return total
}
console.log(number1);
multiply(number1, number2)
console.log(number1);

const st1 = {name: 'Abul', age: 44}
const st2 = {name: 'Babul', age: 22}
function studyGroup(a, b){
    a.name = 'Kodom'
    return a
}
console.log(st1.name);
studyGroup(st1, st2)
console.log(st1.name);