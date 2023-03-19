/* 
global scope = ফাংশন বা ব্লকের বাইরে root এর মধ্যে হচ্ছে global scope । global scope এ যে সকল ভ্যারিয়েবল থাকে, সেগুলোর একসেস সব জায়গায় পাওয়া যায়।

local scope = ফাংশনের ভিতরে হচ্ছে local scope । ফাংশনের ভিতরে যে সকল ভ্যারিয়েবল থাকে, সেগুলোর একসেস শুধুমাত্র ফাংশনের মধ্যে সীমাবদ্ধ। ফাংশনের বাইরে একসেস করতে চাইলে ReferenceError: a is not defined দিবে। var, let, const যা দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করা হোক না কেন। সেইম এরর দেবে।

block scope = {} ব্লকের ভিতরে হচ্ছে block scope । 
var দিয়ে ব্লকের ভিতরে ভ্যারিয়েবল ডিক্লেয়ার করলে এটি hoisting হওয়ার কারণে undefined রিটার্ন করবে, কোন error দিবে না।
কিন্তু let, const দিয়ে ডিক্লেয়ার করলে ReferenceError: b is not defined দিবে। কেননা, let, const দিয়ে ডিক্লেয়ার করা ভ্যারিয়েবল hoisting হয় না।

hoisting মানে ডিক্লেয়ারেশন কে উপরে নিয়ে যাওয়া এবং ভ্যালু হিসেবে undefined সেট করা।

regular function ডিক্লেয়ার করলে পুরো ফাংশনকে hoisting করে, তাই regular function ডিক্লেয়ার করার আগেই এটি কল/ব্যবহার করা যায়। এতে কোন এরর দেয় না।
কিন্তু var দিয়ে function expression ডিক্লেয়ার করলে শুধুমাত্র ভ্যারিয়েবল hoisting হয়, তবে ফাংশন বডি hoisting হয় না।
আর let, const দিয়ে function expression ডিক্লেয়ার করলে hoisting হয় না, 
*/

function print(){
    var a = 5

}
{
    let b = 3
}

console.log(b);
