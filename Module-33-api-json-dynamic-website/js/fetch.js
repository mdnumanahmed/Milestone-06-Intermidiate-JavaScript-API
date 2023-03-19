/* 
fetch() হলো একটি Browser API
fetch() এর প্যারামিটার এ কোন url দিলে, সে ঐ লিংকে গিয়ে বলে, তোমার কাছে এই ডাটা আছে কি না? 
যদি ডাটা পেয়ে client এর কাছে নিয়ে আসে, তখন তাকে বলে response. 
পরে then() ফাংশন এর প্যারামিটারে কলব্যাক ফাংশন দিতে হয়।
ঐ কলব্যাক ফাংশনের প্যারামিটার হিসেবে response থাকে এবং ঐ response কে json() এ কনভাট করবে এমন একটি Promise রিটার্ন করে। 
আবার then() ফাংশন এর প্যারামিটারে কলব্যাক ফাংশন দিতে হয়।
ঐ কলব্যাক ফাংশনের প্যারামিটার হিসেবে converted data থাকে এবং ঐ ফাংশন থেকে converted data কে রিটার্ন করে দেয়।

===========
fetch() কে কল করলে ঐ লিংকে কোন ডাটা থাকলে সেই ডাটা (response) পাবো
পরে সেই (response) ডাটাকে json() কনভার্ট করবো
পরে converted data পাবে।


*/

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
    .then(response => response.json()) 
    .then(data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const userList = document.getElementById('user-list')
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = user.name
        userList.appendChild(li)
    }
}

