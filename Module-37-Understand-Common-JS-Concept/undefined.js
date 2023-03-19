/* 
8 way to get undefined
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will give undefined
4. if return has nothing on right side will give undefined
5. property that does not exist on an object will give undefined
6. accessing array elements outside the index range
7. deleting element inside array
8. directly set undefined
*/

// 1. variable that is not initialized will give undefined
let first;
// console.log(first);

// 2. function with no return 
function second(a, b){
    const total = a + b
}
const result = second()
// console.log(result);

// 3. parameter that is not passed will give undefined 
function third(a, b, c){
    const total = a + b + c
    console.log(a, b, c);
}
// console.log(third(2, 4));

// 4. if return has nothing on right side will give undefined
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }else{
        return a + b
    }
}
const res = noNegative(2, -5)
// console.log(res);

// 5. property that does not exist on an object will give undefined
const fifth = {
    id: 2,
    name: 'Abul',
    age: 20
}
// console.log(fifth.age, fifth.salary);

// 6. accessing array elements outside the index range
const sixth = [33, 44, 55]

// 7. deleting element inside array
// should not use it, instead use splice to remove specific element
delete sixth[1]  
console.log(sixth[1], sixth[10]);

// 8. directly set undefined
// should not do it 
const eighth = undefined;

// if needed use null instead of undefined
const ninth = null;
const tenth = {result : [], updated: null}
