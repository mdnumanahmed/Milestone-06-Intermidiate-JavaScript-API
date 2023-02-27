/* 

object আর array হচ্ছে pass by reference । এগুলোর তুলনা করলে তারা তাদের ভ্যালু দিয়ে তুলনা করে না। বরং তাদের মেমরি এড্রেস দিয়ে তুলনা করে।
যদি দুইটি  object/array এর ভ্যালু একদম হুবহু থাকে, তবুও এগুলোর সমান হবে না। যেহেতু তাদের মেমরি এড্রেস ভিন্ন থাকে।
যদি object কে কোন variable এর মধ্যে = সাইন দিয়ে এসাইন করা হয়, তাহলে উভয়টি তুলনা করলে সমান হবে, কারণ তখন উভয়টির মেমরি এড্রেস সেইম থাকে। তাই একটি object এর কোন প্রপার্টির মান পরিবর্তন করলে অন্যটির মানও পরিবর্তন হয়ে যাবে। 
তাই object আর array হচ্ছে pass by reference 

কিন্তু primitive data এর ক্ষেত্রে এরকম এসাইন করলে দুটি ভিন্ন variable হিসেবে কাজ করবে। একটি variable এর মান পরিবর্তন করলে অন্যটির মান পরিবর্তন হবে না।
তাই primitive data হচ্ছে pass by value 


object কপি করার পদ্ধতি
=======================
১। একটা অবজেক্ট কে নতুন একটি ভ্যারিয়েবলের মান হিসেবে সেট করে অবজেক্টকে কপি করা যায়। তবে এটি একই মেমরি এড্রেসে রেফার করার কারণে একটি অবজেক্ট এর ডাটা পরিবর্তন করলে অপরটির ডাটাও পরিবর্তন হয়ে যাবে। যেহেতু অবজেক্ট হলো pass by reference টাইপ ডাটা। যাকে non primitive ও বলে।
২। একটা অবজেক্ট কে spread operator {...obj} ব্যবহার করার মাধ্যমে নতুন একটি ভ্যারিয়েবলের মান হিসেবে সেট করে অবজেক্টকে কপি করা যায়। যাকে Shallow Copy বলে। 
spread operator {...obj} ব্যবহার করলে নতুন ভ্যারিয়েবলকে ভিন্ন মেমরি এড্রেসে অবজেক্টকে রাখবে।
spread operator শুধুমাত্র এক লেভেলের ডাটাকে immutably copy করতে পারে। যদি nested object হয়, তাহলে ধাপে ধাপে সব লেভেলকে আলাদাভাবে কপি করতে হবে।

৩। JSON ব্যবহার করে কোন অবজেক্টকে deep copy করা যায়

*/

const teacher = {
    name: 'Abdullah',
    subject : 'Arabic'
}

// mutable copy same reference
const teacher1 = teacher

// shallow copy on level using spread operator (immutably)
const teacher2 = {...teacher}

// deep copy whole object using JSON (immutably)
const teacher3 = JSON.parse(JSON.stringify(teacher))

teacher3.name = 'samir'
teacher2.name = 'amir'
teacher1.name = 'jamir'
console.log(teacher3);
console.log(teacher2);
console.log(teacher1);
console.log(teacher);

if(teacher === teacher1){
    console.log('smae');
}else{
    console.log('not smae');
}