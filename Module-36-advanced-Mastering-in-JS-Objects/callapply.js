/* 
এক object এর method অন্য object এর মধ্যে ব্যবহার করতে call, apply, bind ব্যবহৃত হয়।

call = method এর প্যারামিটারগুলো কমা দিয়ে লিখতে হয়।
apply = method এর প্যারামিটারগুলো array এর মধ্যে লিখতে হয়।
bind = এটি নতুন একটি ফাংশন তৈরি করে, পরে ঐ ফাংশনের মধ্যে প্যারামিটার পাস করা হয়।

ব্যবহারের পদ্ধতি
=====================
যে object এর method অন্য object এর মধ্যে ব্যবহার করবো
-> প্রথমে ঐ object.method লিখে তার সাথে . ডট দিয়ে call / apply / bind লিখতে হবে।
-> দ্বিতীয়ত call / apply / bind এর () প্যারেনথেসিস এর মধ্যে ২য় অবজেক্ট (যার মধ্যে ব্যবহার হবে) এর নাম লিখে , কমা দিতে হবে।
-> তৃতীয়ত 
    -> call হলে কমা দিয়ে দিয়ে প্রথম মেথডে দেয়া প্যারামিটারগুলো পাস করতে হবে।
    -> ‍apply হলে array এর মধ্যে প্রথম মেথডে দেয়া প্যারামিটারগুলো পাস করতে হবে।
    -> bind হলে, নতুন তৈরিকৃত ফাংশনের () প্যারেনথেসিস এর মধ্যে কমা দিয়ে দিয়ে প্রথম মেথডে দেয়া প্যারামিটারগুলো পাস করতে হবে।
*/

const abul = {
    name: 'Abul',
    money: 5000,
    partyDay: function(bill, tips){
        this.money = this.money - bill - tips
        return `${this.name} have to bill ${this.money}`
    }
}

const babul = {
    name: 'Babul',
    money: 7000
}

const babulSpend = abul.partyDay.call(babul, 900, 100)
console.log(babulSpend);
const babulSpend2 = abul.partyDay.apply(babul, [450, 50])
console.log(babulSpend2);
const babulSpend3 = abul.partyDay.bind(babul)
const babulBind = babulSpend3(450, 50)
console.log(babulBind);