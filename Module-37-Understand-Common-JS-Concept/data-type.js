/* 
primitive type ভ্যারিয়েবল এর মান অন্য কোন ভ্যারিয়েবলে সেট করে যদি ঐ দুই ভ্যারিয়েবলের কোন একটির মান পরিবর্তন করা হয়, তাহলে অপরটিতে কোন পরিবর্তন আনে না।

not-primitive type ভ্যারিয়েবল এর মান অন্য কোন ভ্যারিয়েবলে সেট করে যদি ঐ দুই ভ্যারিয়েবলের কোন একটির মান পরিবর্তন করা হয়, তাহলে অপরটিতেও পরিবর্তন আনে।


*/
// primitive type
// string 
const name = 'Abul'
// number 
let age = 22
let age1 = age
age1 = 34
console.log(age, age1);
// boolean 
const isFinished = true


// non-primitive 
// object
let student = {
    name: 'Hakim',
    job: 'study'
}
let student1 = student
// student1.job = 'lawyer'
student1 = {job: 'Cooker'}
console.log(student);
console.log(student1);

// array
const numbers = [3, 4, 55, 33, 23]

