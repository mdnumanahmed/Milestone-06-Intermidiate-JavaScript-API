/* 
Practice Problem map(), filter(), find()
=================================================================
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
=================================================================
*/
{
    {
        // using for loop
        const oddArray = [ 1, 3, 5, 7, 9 ]
        const makeEven = oddArray => {
            let output = []
            for(const number of oddArray){
                const evenNum = number + 1
                output.push(evenNum)
            }
            return output;
        }
        const result = makeEven(oddArray)
        console.log(result);
    }

    {
        // using map() method with callback function from outside
        const oddArray = [ 1, 3, 5, 7, 9 ]
        const addOne = num => num + 1;
        const convertToEven = oddArray => {
            const output = oddArray.map(addOne)
            console.log(output);
            return output
        }
        const output = convertToEven(oddArray)
        console.log(output);
    }

    {
        // using map() method with callback function from inside
        const oddArray = [ 1, 3, 5, 7, 9 ]
        const convertToEven = oddArray => {
            const output = oddArray.map(num => num + 1)
            console.log(output);
            return output
        }
        const output = convertToEven(oddArray)
        console.log(output);

    }
    {
        // using map() method with callback function from inside
        const oddArray = [ 1, 3, 5, 7, 9 ]
        const output = oddArray.map(num => num + 1)
            console.log(output);
    }
}

/* 
=================================================================
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
=================================================================
 */
{
    {
        // using for loop
        const numbers = [33, 50, 79, 78, 90, 101, 30 ]
        const divisibleWithFor = numbers => {
            let output = []
            for(let i = 0; i < numbers.length; i++){
                const element = numbers[i]
                if(element % 10 === 0){
                    output.push(element)
                    console.log(output);
                }
            }
            return output;
        }
        const result = divisibleWithFor(numbers)
        console.log(result);
    }

    {
        // using filter() method
        // it return filtered array matched by condition
        const numbers = [33, 50, 79, 78, 90, 101, 30 ]
        const divisible = numbers.filter(num => num % 10 === 0)
        console.log(divisible);
    }
}
/* 
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
{
    // using filter() method
    // it return filtered first element matched by condition
    const numbers = [33, 50, 79, 78, 90, 101, 30 ]
    const divisible = numbers.find(num => num % 10 === 0)
    console.log(divisible);
}

/* 
Practice Problem reduce()
===========================================
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
 */
{
    {
        // using for loop
        const numbers = [ 1, 9, 17, 22 ]
        const add = numbers => {
            let sum = 0
            for(const number of numbers){
                sum+= number
            }
            return sum
        }
        const output = add(numbers)
        console.log(output);
    }
    {
        // using reduce() method
        const numbers = [ 1, 9, 17, 22 ]
        const sum = numbers.reduce((acc, cur)=> acc + cur ,0)
        console.log(sum);
    }
}

/* 
Practice Problem reduce()
===========================================
1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/
{
    const peoples = [
        {name: 'Meena', age: 20},
        {name: 'Rina', age: 15},
        {name: 'Shuchorita', age: 22},
    ]
    // using for loop total of age
    let ageTotal = 0
    for(const people of peoples){
        ageTotal+= people.age
        console.log(ageTotal);
    }
    console.log(ageTotal);
    const total = peoples.reduce((acc, cur) => acc + cur.age ,0)
    console.log(total);
}

/* 
Practice Problem: Access Object Values
Challenging
● Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company name
*/
{
   const user = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }

    // ● Console the value of email
    console.log(user.email);
    // ● Console the value of address
    console.log(user.address);
    // ● Console the value of city
    console.log(user.address.city);
    // ● Console the value of lat
    console.log(user.address.geo.lat);
    // ● Console the value of company name
    console.log(user.company.name);
}
