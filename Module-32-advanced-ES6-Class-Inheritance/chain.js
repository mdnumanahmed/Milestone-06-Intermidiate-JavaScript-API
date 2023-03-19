/* 

যদি কোন ডাটা Array এর মধ্যে থাকে, তাহলে ‍ইলিমেন্টে এক্সেস করার জন্য Array এর নামের সাথে index ব্যবহার করতে হবে। যেমন students[0]। 
ইনডেক্স থেকে প্রাপ্ত ডাটা যদি Object হয়, তাহলে ডট নোটেশন ব্যবহার করে Object এর property তে এক্সেসে করতে হবে। যেমন students[0].name

optional chaining: 
কোন ডাটা মিসিং হলে যেন error না দেয়, তাই ডাটা এক্সেস করার সময় . ডটের আগে ? (optional chaining) ব্যবহার করা হয়। ? এর মানে হলো, যদি ডাটা পাও তাহলে দিয়ে দাও, না হলে ইগনোর করো, কোন error দিও না। 

*/
const students = [
    {id: 1, name: 'Sakib', job: 'Cricketer'},
    {id: 2, name: 'Aakib', job: 'Speaker'}
]

// console.log(students[0].name);

const data = {
    count: 50000,
    data: [
        {id: 1, name: 'Sakib', job: 'Cricketer'},
        {id: 2, name: 'Aakib', job: 'Speaker'}
    ]
}


console.log(data.data[0]?.name);
