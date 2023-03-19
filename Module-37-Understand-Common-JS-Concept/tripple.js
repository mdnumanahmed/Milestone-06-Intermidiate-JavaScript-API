/* 
== শুধুমাত্র value চেক করে
=== value and type দুইটাই চেক করে।

== যদি উভয় ভ্যালু সেইম টাইপের হয়, তাহলে সরাসরি ভ্যালু চেক করে।
আর যদি উভয় ভ্যালু ভিন্ন টাইপের হয়, তাহলে type coercion করার পর চেক করে।
=== কখনো type coercion করে না।

== ও === primitive data এর ক্ষেত্রে value চেক করে। 
কিন্তু non-primitive data এর ক্ষেত্রে reference চেক করে।
দুইটা অবজেক্ট/এ্যারের ভ্যালু একই থাকলেও উভয়টি সমান হবে না। কারণ, উভয়টি ভিন্ন মেমরি এড্রেসে থাকায় তাদের reference ভিন্ন হয়।

দুটি অবজেক্ট/এ্যারের মধ্যে তুলনা করতে হলে loop চালিয়ে উভয়টির ভ্যালু get করে তুলনা করতে হবে।

*/

const first = 1
const second = true

if(first == second){
    console.log('values are equal');
}else{
    console.log('values are not equal');
}
