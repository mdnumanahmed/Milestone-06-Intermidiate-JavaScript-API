/* প্যারামিটার ও আর্গুমেন্ট শব্দ দুটো প্রায়ই একে অপরের স্থলে (Interchangeably) ব্যবহার করা হয়। তবে ব্যবহারের ক্ষেত্র বা প্রসঙ্গ (Context) থেকে এদেরকে আলাদা করা যায়। সাধারণত মেথড ডেফিনেশন লেখার সময় যে ভ্যারিয়েবলগুলো ব্যবহার হয় সেগুলোকে প্যারামিটার বলে। আর যখন সেই মেথডটিকে ব্যবহার করার সময় যে ভ্যালু বা মান পাস (Pass) করা হয় তাকে আর্গুমেন্ট বলা হয়। */

// default parameter 
/* 
যদি ফাংশন কল করার সময় আর্গুমেন্টে ভ্যালু পাস না করে, তখন ভ্যালু না পাওয়ার কারণে undefined  রিটার্ন করে, যা (undefined) যোগ করলে NaN (Not a Number) পাওয়া যায়। 
এ সমস্যা সমাধানের জন্য es6 আসার আগে বিভিন্ন কন্ডিশন দিয়ে default ভ্যালু দেয়া হতো, যাতে ‍argument এ ভ্যালু না পাঠালেও undefined না আসে, এবং NaN (Not a Number) রিটার্ন না করে।
তবে es6 এ default মান সরাসরি ফাংশনের প্যারামিটার এ parameterName = ০ দিয়ে default মান সেট করা যায়। ফাংশন কল করার সময় যদি ডাটা না দেয়া হয়, তাহলে default মান সেট হয়ে ভ্যালু রিটার্ন করে দিবে।
প্যারামিটারের ভ্যালু string, number, boolean ইত্যাদি যে কোন কিছু হতে পারে।
ফাংশন কল করার সময় যে ডাটা পাঠানো হবে, তা প্যারামিটার এর মধ্যে ডিক্লেয়ার করা ভ্যারিয়েবল এর সিরিয়াল অনুযায়ী সেট হবে। এখানে কল করার সময় ১মটি বাদ দিয়ে ২য়টি দেয়া যাবে না। 
*/
function sum(first, second){

    // default parameter 
    // if(second === undefined){
    //     second = 0
    // }

    // shortcut for default value
    // second = second || 0;

    const total = first + second;
    return total;
}

const result = sum(10)
console.log(result);

// use case of default value
function fullName(firstName, lastName = 'chowdhury'){
    const name = firstName + " " + lastName
    return name
}
const name = fullName('aslam')
console.log(name);

