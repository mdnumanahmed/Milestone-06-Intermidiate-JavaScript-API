/* 

ফাংশনের প্যারামিটার হিসেবে string, number, boolean, array, object ইত্যাদি পাঠাতে পারি। এমনকি চাইলে ফাংশনের প্যারামিটার হিসেবে function পাঠাতে পারি।

প্যারামিটার হিসেবে যে function পাঠানো হয়, সেটি অন্য কোথাও ডিক্লেয়ার করা থাকবে। প্যারামিটার হিসেবে ফাংশন কল না করে শুধু function এর নাম পাঠাতে হয় (অথবা function declare ও করা যায়) এবং ফাংশনের ভিতরে কল করে দিতে হয়।

প্যারামিটার হিসেবে পাঠানো function এর যদি কোন প্যারামিটার থাকে, তাহলে মেইন ফাংশন কল করার সময় প্যারামিটার হিসেবে পাঠানো function এর নাম এবং কমা দিয়ে তার  প্যারামিটারও পাঠাতে হয়। 

*/

function notice(congrats, name){
    congrats(name)
}

function congrats(name){
    console.log(`Hi ${name} Congratulations! on your brilliant success`);
}

notice(congrats, 'Numan')