
/* 
Object তৈরি করার পদ্ধতি
==================================
১। Object literal syntax
   const student = {}
২। Object constructor
   const player = new Object()
   const player2 = Object()
৩। Object.create method
    const inheritStudent = Object.create(student)
    
    এ পদ্ধতিতে কোন object তৈরি করলে যে object () এর ভিতরে দেয়া হবে, তার সকল property/Method এ একসেস নেয়া যায় prototypical inheritance এর মাধ্যমে । 
    শুধু Object এর নাম দিয়ে কনসোল করলে খালি অবজেক্ট {} রিটার্ন করবে। 
    আর যদি তৈরিকৃত Object এর সাথে ইনহেরিট করা অবজেক্টের কোন property এর নাম দেয়া হয়, তাহলে ভ্যালু রিটার্ন করবে। 

৪। Function Constructor
function Car(model, price){
    this.model = model;
    this.price = price;
}

5. es6 class
class Teacher{
    name;
    age;
    job = 'Teaching';
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const teacher1 = new Teacher('Abul', 56)

Object এর মধ্যে দুটি বিষয় থাকে। 
===================================
১। property -> Object এর যে সব বৈশিষ্ট্য থাকে, সেগুলোকে property বলে।
২। Method -> Object যে সব কাজ করতে পারে, মানে ফাংশন থাকে, সেগুলোকে Method বলে।

প্রত্যেক property এর পরে অবশ্যই , কমা ব্যবহার করতে হবে।
method কল করার জন্য Object এর নামের পর . ডট দিয়ে মেথডের নাম লিখে () সহ কল করতে হবে।

একসেস করার পদ্ধতি
===================================
Object এর বাইরে থেকে : 
Object এর কোন property/method এ একসেস করার জন্য Object এর নামের পর . দিয়ে property/method এর নাম লিখতে হয়।
Object এর ভিতরে কোন method এর মধ্যে  : 
Object এর অন্য কোন method / property এর একসেস পেতে হলে this . ডট দিয়ে  method / property এর নাম লিখতে হয়। যেমন this.propertyName /this.methodName লিখতে হয়।


*/
// 1. Object literal syntax
const student = {}

// property -> Object এর যে সব বৈশিষ্ট্য থাকে, সেগুলোকে property বলে।
student.name = 'Asif'
student.age = 33
// console.log(student);
// Method -> Object যে সব কাজ করতে পারে, মানে ফাংশন থাকে, সেগুলোকে Method বলে।
student.study = function(){
    console.log(student.name ,  ' is a student');
}
// method call -> method কল করার জন্য Object এর নামের পর . দিয়ে মেথডের নাম দিয়ে () সহ কল করতে হবে।
// student.study()

// সরাসরি property এবং method দিয়ে Object ডিক্লেয়ার করা যায়
const teacher = {
    name: 'Abdullah',
    subject : 'Arabic',
    teach: function(){
        console.log(this.name, ' is a good teacher of ', this.subject);
    }
}
// teacher.teach()

// 2. Object constructor
const player = new Object()
const player2 = Object()
// console.log(player2);

// 3. Object.create method
 const inheritStudent = Object.create(student)
//  console.log(inheritStudent);
//  console.log(inheritStudent.name);


// 4. class
class Teacher{
    name;
    age;
    job = 'Teaching';
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const teacher1 = new Teacher('Abul', 56)
// console.log(teacher1);

// 5. Function Constructor
function Car(model, price){
    this.model = model;
    this.price = price;
}
const bmw = new Car('bmw', 33)
// console.log(bmw);

