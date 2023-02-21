
/* 
class হচ্ছে অনেক অবজেক্ট বানানোর একটি ব্লুপ্রিন্ট। বা অবজেক্ট এর স্ট্রাকচার। 
অবজেক্টগুলোর ডাটা কি কি হবে, তা পূর্বে নির্ধারণ করে একটি ছক তৈরি করা হয়।

class তৈরি করার পদ্ধতি
=============================
class কিওয়ার্ড দিয়ে বড় হাতের অক্ষর দিয়ে class এর নাম তারপর কার্লি ব্র্যাকেট {}
কার্লি ব্র্যাকেট {} এর ভিতরে প্রপার্টি বা ফিল্ড এর নাম দিতে হবে। 
যে গুলো স্ট্যাটিক ডাটা, তা প্রপাটির নাম = ভ্যালু দিতে হবে।
যে গুলো ডাইনামিক ডাটা, তা শুধু প্রপার্টির নাম দিতে হবে এবং constructor() ফাংশনের প্যারামিটারে ডাইনামিক প্রপার্টির নাম দিয়ে ফাংশন বডির মধ্যে this.properyName = propertyName সেট করে দিতে হবে।

class থেকে অবজেক্ট তৈরি করার পদ্ধতি
================================
ভ্যারিয়েবল এর নাম দিয়ে = তারপর new কিওয়ার্ড দিয়ে class নাম দিয়ে ফাংশনের মতো কল করতে হবে। এবং () প্রথম বন্ধনীর ভিতরে ডাইনামিক ভ্যালু সেট করে দিতে হবে।

class এর ভিতরে যে ফাংশন তৈরি করা হয় তাকে method বলা হয়।
method তৈরি করার পদ্ধতি হলো=  function কিওয়ার্ড ছাড়া হুবহু regular function এর মতো।
method এ একসেস করার জন্য class থেকে তৈরিকৃত অবজেক্ট এর পর . ডট নোটেশন দিয়ে মেথডকে কল করতে হবে।



class থেকে অবজেক্ট তৈরি করার জন্য 
*/
class Teacher{
    name;
    designation = 'Teacher'
    team = 'Teahcing'
    location;
    id;
    constructor(id, name, location){
        this.id = id
        this.name = name
        this.location = location
    }
    startClass(time){
        console.log(`Please start your class at ${time}`);
    }

}

const sakib = new Teacher( 1, 'Sakib', 'Sylhet')
console.log(sakib);
const start = sakib.startClass(10)
// console.log(start);

