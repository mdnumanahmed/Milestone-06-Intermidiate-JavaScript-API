/* 
Object.keys() = Returns the names of the enumerable string properties and methods of an object.
Object.values() = Returns an array of values of the enumerable properties of an object
Object.entries() = Returns an array of key/values of the enumerable properties of an object

delete the property of an object
delete object.propertyName

যে প্রপার্টি ডিলেট হবে, তাকে ডাইরেক্ট নাম দিয়ে নিয়ে বাকীগুলোকে ...rest এর মধ্যে রেখে নতুন অবজেক্ট হিসেবে রিটার্ন করে দিবে।

Object.seal(student) = Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
নতুন কোন properties যোগ করা যাবে না।
কোন properties ডিলেট করা যাবে না।
শুধুমাত্র existing properties এর ভ্যালু মডিফাই করা যাবে।


Object.freeze(student) = Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
নতুন কোন properties যোগ করা যাবে না।
কোন properties ডিলেট করা যাবে না।
এমনকি existing properties এর ভ্যালুও মডিফাই করা যাবে না।

*/

const student = {
    name: 'Sakib',
    age: 12,
    isGenius: true,
    subjects: ['Quran', 'Hadith', 'English', 'Arabic'],
    department: {name: 'Arabic', batch: 40},
    university: 'Islamic University',
    activity: function(){
        return `${this.name} study at ${this.university} in the department of ${this.department.name} . He is a ${this.isGenius ? 'Genius' : 'No'} student`
    }
}
const output = student.activity()

// get all keys from an object
const keys = Object.keys(student)
// console.log(keys);
// get all values from an object
const values = Object.values(student)
// console.log(values);
// get all keys and values from an object
const keysvalues = Object.entries(student)
// console.log(keysvalues);

// Object.seal(student)
// Object.freeze(student)
student.age = 20

// delete student.age
const {age, ...rest} = student;
student.height = 150
console.log(rest);