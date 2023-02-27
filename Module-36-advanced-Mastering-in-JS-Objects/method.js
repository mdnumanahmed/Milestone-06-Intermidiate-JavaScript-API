/* 
object ডিক্লেয়ার করতে Object এর নামের পর = সমান চিহ্ন দিয়ে {} দিতে হয়।
class ডিক্লেয়ার করতে class এর নামের পর {} দিতে হয়। = সমান চিহ্ন দিতে হয় না।

object এর property : value নিয়মে লিখতে হয়।
class এর property = value নিয়মে লিখতে হয়।

object এর প্রত্যেক property এর পর , কমা দিতে হয়।
class এর প্রত্যেক property এর পর ; সেমিকোলন দেয়া ঐচ্ছিক।

object এর কোন property/method এ একসেস করার জন্য object এর নামের পর . দিয়ে property/method এর নাম লিখতে হয়। অথবা this.property/method লিখতে হয়।

object এর কোন একটি method এর ভিতরে একই object এর আরেকটি method এ একসেস করতে চাইলে this.method লিখতে হয়।
method এর মধ্যে template string ব্যবহার করে ডাইনামিকভাবে property এর ভ্যালু get/set করা যায়। এমনকি ভ্যালু return করা যায়। 
method এর মধ্যে এক/একাধিক পাস করা যায়।

*/

const student = {
    name: 'Abul',
    money: 5000,
    study: 'Match',
    exam : function(time){
        return (this.name + ' participated in exam at ' + time + 'pm');
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips
        return this.money
    }
}

const res = student.exam(2);
// console.log(res);
const remaining = student.treatDay(900, 100)
// console.log(remaining);