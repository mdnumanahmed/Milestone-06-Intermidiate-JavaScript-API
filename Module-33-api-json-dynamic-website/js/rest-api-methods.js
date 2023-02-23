/* 
CRUD is acronym for 
C = Create means add new data by using POST Method
R = Read means get data from server by using GET Method
U = Update means modify existing data by using PATCH Method
    by using PUT Method if data exist update it and if data not exist create the new data.
D = Delete means remove the existing data by using DELETE Method

=======================================================
GET is used to request data from a specified resources
যখন কোন User (Client Side) Browser এর মাধ্যমে Server থেকে কোন ডাটা পাওয়ার জন্য রিকুয়েস্ট করে, তখন fetch(url) মেথড এর ২য় প্যারামিটারে explicitly (method: 'GET') বলতে হয় না।। 
কোন মেথড ব্যবহার না করলে by default GET মেথড হিসবে কাজ করে। এবং Server side এ রিকুয়েস্ট গেলে database থেকে ডাটা নিয়ে আসে processing করে response হিসেবে User এর কাছে ডাটা পাঠিয়ে দেয়। 

=======================================================
POST is used to send data to a server to crate a resource.
যখন কোন User (Client Side) Browser এর মাধ্যমে database এ কোন ডাটা স্টোর করার জন্য Server এর কাছে রিকুয়েস্ট করে, তখন fetch(url) মেথড এর ২য় প্যারামিটারে একটি Object পাঠাতে হয়। যার ৩টি property হবে।
১। method: 'POST' যা explicitly বলে দিহে হয়। 
২। body: JSON.stringify({
    title: 'Do something'
}) 
যে ডাটা পাঠানো হবে, fetch(url) মেথড এর ২য় প্যারামিটারে body হিসেবে তার JSON.stringify(data) পাঠাতে হবে।
৩। headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
   headers এর মধ্যে কোন ধরণের ডাটা পাঠানো হচ্ছে, তার টাইপ পাঠাতে হবে। এছাড়া headers এর মধ্যে আরো অনেক সিক্ট্রেট ডাটা পাঠানো হয়।
এবং Server side এ POST রিকুয়েস্ট গেলে Server এ ডাটা processing করে database এ ‍ডাটা স্টোর করে response হিসেবে User এর কাছে মেসেজ পাঠিয়ে দেয়। 

=======================================================
DELETE is used to remove the data from a specified resources
যখন কোন User (Client Side) Browser এর মাধ্যমে Server থেকে কোন ডাটা পাওয়ার জন্য রিকুয়েস্ট করে, তখন fetch(url) মেথড এর ২য় প্যারামিটারে method: 'DELETE' যা explicitly বলে দিহে হয়।। 


============================================================
PATCH is used to send data to a server to update a resources
যখন কোন User (Client Side) Browser এর মাধ্যমে database এ কোন ডাটা update করার জন্য Server এর কাছে রিকুয়েস্ট করে, তখন fetch(url) মেথড এর ২য় প্যারামিটারে একটি Object পাঠাতে হয়। যার ৩টি property হবে।
১। method: 'PATCH' যা explicitly বলে দিহে হয়। 
২। body: JSON.stringify({
    title: 'Do something'
}) 
যে ডাটা পাঠানো হবে, fetch(url) মেথড এর ২য় প্যারামিটারে body হিসেবে তার JSON.stringify(data) পাঠাতে হবে।
৩। headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
   headers এর মধ্যে কোন ধরণের ডাটা পাঠানো হচ্ছে, তার টাইপ পাঠাতে হবে। এছাড়া headers এর মধ্যে আরো অনেক সিক্ট্রেট ডাটা পাঠানো হয়।
এবং Server side এ PATCH রিকুয়েস্ট গেলে Server এ থাকা existing ডাটা processing করে database এ ‍ডাটা update করে response হিসেবে User এর কাছে updated data পাঠিয়ে দেয়। 
আর ডাটা না পেলে কোন পরিবর্তন না করে response হিসেবে User এর কাছে মেসেজ পাঠিয়ে দেয়। 
আর PUT Method ব্যবহার করলে, ডাটা পাওয়া গেলে আপডেট করবে, আর না পেলে নতুন ডাটা যোগ করে দিবে।

PUT = Create a new resource or replace existing resource
POST = Create a new resources
PATCH = Update only existing resource.

*/