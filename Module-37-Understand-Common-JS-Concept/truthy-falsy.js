/* 

Truthy:
1. true
2. any number (+ve, -ve) will be truthy without 0;
3. any string has value even white space without empty string
4. '0' , 'false'
5. {}
6. []

Falsy:
1. false
2. 0 zero number
3. '' empty string
4. undefined
5. null

falsy check করতে !x
truthy check করতে !!x 
*/

let x = [];
if(x){
    console.log('value of x is truthy');
}else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = ''
if(!y){
    console.log('check y is falsy');
}
// check truthy
const z = []
if(!!z){
    console.log('check z is truthy');
}
