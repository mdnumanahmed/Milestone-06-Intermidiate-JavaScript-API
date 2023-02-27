const teacher = {
    name: 'Abdullah',
    subject : 'Arabic',
    isGood: true,
    salary: 30000
}

// 1. for of loop using Object.keys()
const keys = Object.keys(teacher)
for(const key of keys){
    // console.log(key + ': ' + teacher[key]);
}

// 2. for in loop 
for(const key in teacher){
    // console.log(key + ": " + teacher[key]);
}

// 3. for of loop on object (Advanced)
for(const [key, value] of Object.entries(teacher)){
    console.log(key + ": " + value);
}
