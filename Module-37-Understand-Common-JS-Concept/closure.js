/* 

একটি ফাংশনের ভিতরে আরেকটি ফাংশন কল বা রিটার্ন করলে closure তৈরি করে।
ভিতরের ফাংশনকে বলে inner function 
আর বাইরের ফাংশনকে বলে outer function ।
inner function থেকে outer function এর সকল internal ভ্যারিয়েবলের একসেস পেয়ে থাকে। যাকে closure বলে। 
outer function কে যতবার কল করে যতটি ভ্যারিয়েবল ডিক্লেয়ার করা হবে, সবগুলো আলাদাভাবে তাদের ভ্যালু ধরে রাখবে। মানে প্রতিটি ভ্যারিয়েবল আলাদা আলাদা instance তৈরি করবে। 
প্রতিটি ভ্যারিয়েবল গোপন থাকে, একটি অপরটির মান জানতে পারে না। 


*/

function stopWatch(){
    let counter = 0
    return function(){
        counter++
        return counter;
    }
}
const watch1 = stopWatch()
// call the outer function 
watch1()
watch1()
watch1()
watch1()
const watch2 = stopWatch()
// call the outer function 
watch2()
watch2()
watch2()
watch2()
const watch3 = stopWatch()
// call the outer function 
watch3()
watch3()
watch3()
watch3()