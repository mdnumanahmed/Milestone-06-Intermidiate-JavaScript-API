console.log(this);

/* 
window হচ্ছে জাভাস্ক্রিপ্টের মূল execution context. 
জাভাস্ক্রিপ্টের যতকিছু আছে সব ঐ window এর মধ্যে আছে। যেমন document , alert, console.log() ইত্যাদি।

this এর ভ্যালু কি কি হতে পারে?
==============================
১। global execution context এ যদি this ব্যবহার হয়, তাহলে এটি window object কে refer করে।
২। কোন object এর method (regular function) এ যদি this ব্যবহার হয়, তাহলে এটি ঐ object কে refer করে।
৩। কোন method কল করা হলে, ডটের . আগে যে অবজেক্ট থাকবে this তাকেই refer করে।
( . ডট দিয়ে যে method কল করা হবে, ডটের . আগে যে অবজেক্ট থাকবে সেই হবে তার execution context আর যদি . ডটের আগে কিছই না থাকে, তাহলে সেটি হবে window object (global execution context))
৪। কোন object এর method হিসেবে arrow function ব্যবহার করলে তার মধ্যে যদি this ব্যবহার করা হয়, তাহলে সেটি window object কে refer করে।
৫। DOM এর কোন ইলিমেন্টের onclick এ যদি ফাংশন যোগ করে ঐ ফাংশনের ভিতরে this ব্যবহার করা হয়, তাহলে সেটি window object কে refer করে।
৬। DOM এর কোন Element কে id দ্বারা ধরে যদি addEventListener() যোগ করে এর কলব্যাক ফাংশনের ভিতরে this ব্যবহার করা হয়, তাহলে সেটি ঐ HTML Element কে refer করে। 

global execution context এর মধ্যে regular function এর মধ্যে this কিওয়ার্ড ব্যবহার করলে window object কে refer করে।
তবে যদি new কিওয়ার্ড দিয়ে regular function কে কল করা হয, তখন ভিন্ন রিজাল্ট আসবে।

যদি this এর ভ্যালু ফোর্সফুলি আমি ঠিক করে দিতে চাই, যে this এর ভ্যালু কি হবে? তখন আমাকে call(), apply(), bind() ইত্যাদি ফাংশনের ১ম প্যারামিটার হিসেবে this এর ভ্যালু  বলে (সেট) করে দিতে হবে।

*/

const abul = {
    name: 'Abul',
    money: 5000,
    partyDay: function(){
        console.log(`${this.name} have to bill ${this.money}`); 
    }
}

const babul = {
    name: 'Babul',
    money: 7000
}

abul.partyDay()

// set abul's method to the babul
babul.partyDay = abul.partyDay

// there is meaning of this babul
babul.partyDay()


// refer window object
function referWindow(){
    console.log(this);
}

// refer clicked HTML Element
document.getElementById('referHTMLElement').addEventListener('click', function(){
    console.log(this);
})




