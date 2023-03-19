const user = {id: 1, name:'Samiul'}
/* 

JSON stands for JavaScript Object Notation

JSON.stringify : Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

JSON.parse : Converts a JavaScript Object Notation (JSON) string into an object.

*/
const userJSON = JSON.stringify(user)

const userObj = JSON.parse(userJSON)