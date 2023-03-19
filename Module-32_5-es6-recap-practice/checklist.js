/* 
১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

-> যদি কোন ভ্যারিয়েবলের মান পরিবর্তন করা লাগবে না। সব সময় একই ভ্যালু থাকবে, তখন const ব্যবহার করব।
আর ভ্যারিয়েবলের মান পরিবর্তন করা লাগবে এমন হলে let ব্যবহার করতে হবে।
*/


/* 
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
 */
{
    const firstName = 'Numan'
    const lastName = 'Ahmed'
    const fullName = `My name is ${firstName} ${lastName}`
    console.log(fullName);
}

/* 
৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
 */
{
    const dividedByFive = (number) => number / 5;
    console.log(dividedByFive(50));
}

/* 
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
 */
{
    const twoParams = (a, b) => (a + 2) * (b + 2)
    console.log(twoParams(3, 3));
    const twoParam = (a, b) => {
        const addTwo = a + 2
        const addT = b + 2
        const times = addT * addTwo
        return times
    }
    console.log(twoParam(3, 3));
}

/* 
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
*/

{
    const times3Params = (a, b, c) => {
        return a * b * c
    }
    console.log(times3Params(2,3,4));
}

/* 
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/
{
    const twoParams = (a, b) => (a + 2) * (b + 2)
    console.log(twoParams(3, 3));
    const twoParam = (a, b) => {
        const addTwo = a + 2
        const addT = b + 2
        const times = addT * addTwo
        return times
    }
    console.log(twoParam(3, 3));
}

/* 
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/
{
    const numbers = [6, 9, 10, 25, 35, 14, 46, 32, 26, 28, 27, 90]
    const mulitply5 = numbers.map(num => num * 5)
    console.log(mulitply5);
}

/* 
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
{
    const numbers = [6, 9, 10, 25, 35, 14, 46, 32, 26, 28, 27, 90]
    const oddNumbers = numbers.filter(num => num % 2 !== 0)
    console.log(oddNumbers);
}

/* 
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/
{
    // find() method
    const products = [
        {id: 1, name: 'laptop', price: 450000},
        {id: 2, name: 'Mobile', price: 50000},
        {id: 3, name: 'watch', price: 5000},
        {id: 4, name: 'tablet', price: 50000},
        {id: 5, name: 'Bike', price: 120000},
        {id: 6, name: 'Camera', price: 20000},
    ]
    const priceFive = products.find(p => p.price === 5000)
    console.log(priceFive);
    
}

/* 
৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

map = map() method is used on an array, and return current value, index and array.
map() method take a callback function in his parameter. this callback function travers all element and do the provided task on all elements.
finally return a new array without changing main array.


forEach = forEach() is like map() method. difference only is that forEach() method not return any value.

filter = filter() method like as map() method. Difference only is that it check the condition provided in callback function on all elements and retrun a new array of matched elements.

find = find() method like as filter() method. Difference only is that find() method return only first element (not array) which is satisfied the condition
*/


/* 
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
 */
{
    const products = [
        {id: 1, name: 'laptop', price: 450000},
        {id: 2, name: 'Mobile', price: 50000},
        {id: 3, name: 'watch', price: 5000},
        {id: 4, name: 'tablet', price: 50000},
        {id: 5, name: 'Bike', price: 120000},
        {id: 6, name: 'Camera', price: 20000},
    ]
    products.map(product => {
        if(product.price === 5000){
            const {name, price} = product
            console.log(name, price);
        }
    })
}

/* 
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
 */

{
    const numbers = [6, 9, 10, 25, 35, 14, 46, 32, 26, 28, 27, 90]
    const [, , three] = numbers
    console.log(three);
}

/* 
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
 */
{
    const addThreeValue = (a, b, c=7) => a + b + c
    console.log(addThreeValue(10,3));
}

/* 
[অপশনাল]

১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 

*/
{
    const student = {
        id: 101,
        name: 'Masud',
        address: {
            vaill: 'Rangpur',
            postOffice: 'Firozpur',
        },
        education: {
            class: 'Nine',
            institute: {
                instituteName: 'Ideal Acadamy',
                institueAddress: {
                    vill: 'Sylhet AKhalia',
                    postOffice: 'Head Office Sylhet'
                }
            },
            subjects: ['English', 'Chemistry', 'Biology']
        }
    }

    const {institueAddress} = student.education?.institute
    console.log(institueAddress);
    const institueAddresss = student.education.institute

}