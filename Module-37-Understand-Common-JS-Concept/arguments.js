/* 
function declaration এর সময় () parenthesis এর মধ্যে যা বিশেষ ভ্যারিয়েবল দেয়া হয় এগুলোকে বলে parameter ।

function invoke বা কল এর সময় () parenthesis এর মধ্যে যে ভ্যালু পাস করা হয়  এগুলোকে বলে ‍argument ।

‍arguments একটি স্পেশাল রিজার্ভ কিওয়ার্ড। যা শুধুমাত্র function এর ভিতরে পাওয়া যায়। ‍arguments কিওয়ার্ডটি ফাংশনের আর্গুমেন্টে পাঠানো ভ্যালুকে array like object হিসেবে রিটার্ন করে।  [{”0": 20, "1": 30}]

‍arguments এর টাইপ হচ্ছে object । তবে ‍arguments এর রিটার্ন করা ভ্যালুর মধ্যে for loop চালিয়ে সবগুলো ভ্যালুকে ট্র্যাভার্স করা যায়। length প্রপার্টিও ব্যবহার করা যায়।
তবে array সকল মেথড এপ্লাই করা যাবে না। যেমন- push, pop, map, filter, find ইত্যাদি।

‍arguments এর রিটার্ন ভ্যালুকে spread operator ব্যবহার করে array তে কনভার্ট করে array এর অন্যান্য মেথড ব্যবহার করা যায়।

কোন function body এর ভিতরে function এর নামের সাথে . ডট দিয়ে length লিখলে function এর কয়টি প্যারামিটার আছে সেটি জানা যায়।  


*/

function sum(a, b, c){
    const args = [...arguments]
    console.log(args);
    console.log(sum.length);
    console.log(sum.prototype);
    const total = a + b + c
    return total
}

const result = sum(20, 30, 50, 40, 67, 65)

console.log(result);